import prisma from "@/lib/prisma";

const getGroups = async (userId: string) => {
  try {
    const groups = await prisma.group.findMany({
      where: { userId },
      select: {
        id: true,
        groupName: true,
      },
    });
    return groups;
  } catch (error) {
    console.error("Error fetching groups:", error);
  }
};

export default getGroups;
