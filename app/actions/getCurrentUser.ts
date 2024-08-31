import { getServerSession } from "next-auth/next";
import prisma from "@/app/lib/prisma";
import authOptions from "@/app/api/auth/[...nextauth]/options";

const getCurrentUser = async () => {
  try {
    //セッション情報取得
    const session = await getServerSession(authOptions);

    //ログインしていない場合
    if (!session?.user?.email) {
      return null;
    }

    //ログインユーザー取得
    const response = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!response) {
      return null;
    }

    return response;
  } catch (error) {
    return null;
  }
};

export default getCurrentUser;
