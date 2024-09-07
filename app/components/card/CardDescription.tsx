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
    <Box>
      {posts.map((post) => (
        <Box key={post.id} onClick={() => handleOpenModal(post)} mr={2}>
          <Box fontSize={20} fontWeight="bold" m={3}>
            {post.CardTitle}
          </Box>
        </Box>
      ))}

      <Modal open={IsModalOpen} onClose={handleCloseModal}>
        <Box position="absolute" bgcolor="white" p={4} m={25}>
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
