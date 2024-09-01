import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(req: NextRequest) {
  try {
    const { groupName } = await req.json();

    const currentUser = await getCurrentUser();

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("認証されていません", { status: 401 });
    }

    const response = await prisma.group.create({
      data: {
        groupName,
        userId: currentUser.id,
      },
    });

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error creating group" },
      { status: 500 }
    );
  }
}
