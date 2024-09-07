import { getServerSession } from "next-auth/next";
import prisma from "@/app/lib/prisma";
import authOptions from "@/app/api/auth/[...nextauth]/options";

const getCurrentUser = async () => {
  try {
    const session = await getServerSession(authOptions);

    //ログインしていない場合
    if (!session?.user?.email) return;

    const response = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!response) return;

    return response;
  } catch (error) {
    return;
  }
};

export default getCurrentUser;
