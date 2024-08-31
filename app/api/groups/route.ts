import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]/options";
import { Session } from "next-auth"; // 型定義のインポート

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
  try {
    const session: Session | null = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { error: "You must be logged in to create a group" },
        { status: 401 }
      );
    }

    const { groupName } = await req.json();
    const user = session.user;

    if (!user || !user.id) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const userId: string = user.id;

    if (!groupName) {
      return NextResponse.json(
        { error: "Group name is required" },
        { status: 400 }
      );
    }

    const group = await prisma.group.create({
      data: {
        groupName,
        userId,
      },
    });

    return NextResponse.json(group, { status: 201 });
  } catch (error) {
    console.error("Error creating group:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
