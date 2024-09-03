import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(req: NextRequest) {
  try {
    const { categories, groupId } = await req.json();

    const currentUser = await getCurrentUser();

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("認証されていません", { status: 401 });
    }

    const categoryData = categories.map((name: string) => ({
      name,
      groupId,
    }));

    const response = await prisma.category.createMany({
      data: categoryData,
    });

    return NextResponse.json({ count: response.count }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error creating categories" },
      { status: 500 }
    );
  }
}
