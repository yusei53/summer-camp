import { useState } from "react";
import { Box, Modal } from "@mui/material";
import ItemCardDescription from "./ItemCardDescription";
import { posts } from "@/app/data/data";

// Post型の定義
interface Post {
  id: number;
  cardtitle: string;
  cardcontent: string;
}

export default function CardDescription() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleOpenModal = (post: Post) => {
    setSelectedPost(post);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedPost(null);
  };

  return (
    <Box>
      {posts.map((post) => (
        <Box key={post.id} onClick={() => handleOpenModal(post)} sx={{ mr: 2 }}>
          <Box fontSize={20} fontWeight="bold" m={3}>
            {post.cardtitle}
          </Box>
        </Box>
      ))}

      <Modal open={modalIsOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            p: 4,
          }}
        >
          {selectedPost && (
            <ItemCardDescription
              id={selectedPost.id}
              cardtitle={selectedPost.cardtitle}
              cardcontent={selectedPost.cardcontent}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
}
