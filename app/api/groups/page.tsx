import { getServerSession } from "next-auth/next";
import prisma from "../../lib/prisma";
import Link from "next/link";
import React from "react";

export default async function GroupList() {
  const session = await getServerSession(); // authOptionsを引数から削除

  if (!session || !session.user) {
    return <div>Please log in to view your groups.</div>;
  }

  // ユーザーIDの取得方法を変更
  const userId = session.user.id || "default-id";

  const groups = await prisma.group.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      groupName: true,
    },
  });

  return (
    <div>
      <h1>Your Groups</h1>
      <ul>
        {groups.map((group) => (
          <li key={group.id}>
            <Link href={`/groups/${group.id}/posts`}>{group.groupName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
