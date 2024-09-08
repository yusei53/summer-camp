import prisma from "@/app/lib/prisma";

const getCategories = async (groupId: string) => {
  try {
    const categories = await prisma.category.findMany({
      where: { groupId },
      orderBy: {
        id: "asc",
      },
      select: {
        id: true,
        name: true,
      },
    });

    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export default getCategories;
