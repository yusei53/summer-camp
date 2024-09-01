import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]/options";
import prisma from "@/app/lib/prisma";

// 型定義の拡張
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const userId = session?.user?.id;

  try {
    const { groupName } = await req.json();

    if (!groupName) {
      return NextResponse.json(
        { message: "Group name is required" },
        { status: 400 }
      );
    }

    const newGroup = await prisma.group.create({
      data: {
        groupName,
        userId,
      },
    });

    return NextResponse.json(newGroup, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error creating group" },
      { status: 500 }
    );
  }
}
