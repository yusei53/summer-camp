"use client";

import { Typography, Box } from "@mui/material";
import React from "react";

// 仮のデータ
const postList = [
  { id: 1, content: "株式会社〇〇" },
  { id: 2, content: "株式会社〇〇" },
  { id: 3, content: "株式会社〇〇" },
];

const CardComponent: React.FC = () => {
  return (
    <Box className="displayPosts">
      <h2>ES一覧</h2>
      {postList.map((post) => (
        <Box key={post.id} className="postContent" border={2} p={3} m={3}>
          <Typography>{post.content}</Typography>
          <button>削除</button>
        </Box>
      ))}
    </Box>
  );
};

export default CardComponent;
