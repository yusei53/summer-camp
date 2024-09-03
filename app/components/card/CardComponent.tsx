"use client";

import { Box } from "@mui/material";
import ItemCard from "./ItemCard";
import { postList } from "@/app/data/data";

// const allPosts = postList.reduce((acc, post) => {
//   if (!acc[post.title]) {
//     acc[post.title] = [];
//   }
//   acc[post.title].push(post);
//   return acc;
// }, {} as { [key: string]: typeof postList });

const CardComponent: React.FC = () => {
  return (
    <Box>
      {postList.map((post) => (
        <Box key={post.title}>
          <Box fontSize={20} fontWeight="bold" m={3}>
            {post.title}一覧
          </Box>
          {post.content.map((post) => (
            <ItemCard key={post.id} content={post.content} />
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default CardComponent;
