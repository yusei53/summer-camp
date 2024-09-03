"use client";

import { Typography, Box } from "@mui/material";
import React from "react";

// 仮のデータ
const postList = [
  { id: 1, title: "ES", content: "株式会社〇〇" },
  { id: 2, title: "ES", content: "株式会社△△" },
  { id: 3, title: "遊び", content: "teamゆせで集まる" },
  { id: 4, title: "バイト", content: "パン屋さん" },
];

// titleごとにカテゴリー分けされるようにした
const allPosts = postList.reduce((acc, post) => {
  if (!acc[post.title]) {
    acc[post.title] = [];
  }
  acc[post.title].push(post);
  return acc;
}, {} as { [key: string]: typeof postList });

const CardComponent: React.FC = () => {
  return (
    <Box className="displayPosts">
      {Object.keys(allPosts).map((title) => (
        <Box key={title} className="postCategory">
          <Box fontSize={20} fontWeight="bold" m={3}>
            {title}一覧
          </Box>
          {allPosts[title].map((post) => (
            <Box key={post.id} className="postContent" border={2} p={3} m={3}>
              <Typography>{post.content}</Typography>
              <button>削除</button>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default CardComponent;
