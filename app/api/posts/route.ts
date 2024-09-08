import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(req: NextRequest) {
  try {
    const { title, groupId, descriptions } = await req.json();

    const currentUser = await getCurrentUser();

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("認証されていません", { status: 401 });
    }

    const response = await prisma.post.create({
      data: {
        title,
        group: {
          connect: { id: groupId }, // 既存のGroupに関連付け
        },
        descriptions: {
          create: descriptions.map(
            (desc: { content: string; categoryId: number }) => ({
              content: desc.content,
              category: {
                connect: { id: desc.categoryId }, // Categoryに関連付け
              },
            })
          ),
        },
      },
    });

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { message: "Error creating post" },
      { status: 500 }
    );
  }
}
