import getGroups from "@/app/actions/getGroups";
import { Box } from "@mui/material";
import { User } from "@prisma/client";
import React from "react";

type TProps = {
  currentUserId: User["id"] | undefined;
};

const GroupList: React.FC<TProps> = async ({ currentUserId }) => {
  if (!currentUserId) return;
  const groups = await getGroups(currentUserId);
  return groups ? (
    groups.map((group) => <div key={group.id}>{group.groupName}</div>)
  ) : (
    <Box>グループがありません</Box>
  );
};

export default GroupList;
