import { useState } from "react";
import { Box, Modal } from "@mui/material";
import ItemCardDescription from "./ItemCardDescription";
import { posts } from "@/app/data/data";

const CardDescription = () => {
  const [IsModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box position="relative">
      {posts.map((post) => (
        <>
          <Box key={post.id} onClick={() => handleOpenModal()}>
            <Box fontSize={20} fontWeight="bold" m={3}>
              {post.CardTitle}
            </Box>
          </Box>

          <Modal open={IsModalOpen} onClose={handleCloseModal} disableAutoFocus>
            <Box
              position="absolute"
              top="50%"
              left="50%"
              p={4}
              maxHeight={{ xs: "60%", md: "80%" }}
              minWidth={300}
              bgcolor="white"
              borderRadius="5px"
              sx={{ transform: "translate(-50%, -50%)", overflowY: "scroll" }}
              // Todo:スクロールバーをかわいくする（余裕があったら！！）
            >
              <ItemCardDescription
                id={post.id}
                cardTitle={post.CardTitle}
                posts={post.post}
              />
            </Box>
          </Modal>
        </>
      ))}
    </Box>
  );
};

export default CardDescription;
