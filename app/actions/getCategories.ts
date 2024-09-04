import prisma from "@/app/lib/prisma";

// カテゴリ一覧取得
const getCategories = async (groupId: string) => {
  try {
    const categories = await prisma.category.findMany({
      where: { groupId }, // 特定のグループに属するカテゴリを取得
      orderBy: {
        id: "asc", // IDでソート
      },
      select: {
        id: true,
        name: true,
      },
    });

    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export default getCategories;
