import prisma from "@/lib/prisma";
const getPosts = async (groupId: string) => {
  try {
    const posts = await prisma.post.findMany({
      where: { groupId },
      orderBy: {
        id: "asc",
      },
      select: {
        id: true,
        title: true,
        descriptions: {
          orderBy: {
            id: "desc",
          },
          select: {
            id: true,
            content: true,
            category: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export default getPosts;
