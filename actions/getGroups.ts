import prisma from "@/lib/prisma";

const getGroups = async (userId: string) => {
  try {
    const groups = await prisma.group.findMany({
      where: { userId },
      select: {
        id: true,
        groupName: true,
        _count: {
          select: { posts: true }, // posts の数を取得
        },
      },
    });
    return groups;
  } catch (error) {
    console.error("Error fetching groups:", error);
    return null; // エラー時にnullを返す
  }
};

export default getGroups;
