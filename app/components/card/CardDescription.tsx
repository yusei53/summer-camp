import { useState } from "react";
import { Box, Modal } from "@mui/material";
import ItemCardDescription from "./ItemCardDescription";
import { posts } from "@/app/data/data";

// Post型の定義
interface Post {
  id: number;
  CardTitle: string;
  CardContent: string;
}

const CardDescription = () => {
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleOpenModal = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <Box position="relative">
      {posts.map((post) => (
        <Box key={post.id} onClick={() => handleOpenModal(post)}>
          <Box fontSize={20} fontWeight="bold" m={3}>
            {post.CardTitle}
          </Box>
        </Box>
      ))}

      <Modal open={IsModalOpen} onClose={handleCloseModal}>
        <Box
          position="absolute"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={4}
          m={10}
          bgcolor="white"
          border="solid 4px"
          borderRadius="5px"
        >
          {selectedPost && (
            <ItemCardDescription
              id={selectedPost.id}
              CardTitle={selectedPost.CardTitle}
              CardContent={selectedPost.CardContent}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default CardDescription;
