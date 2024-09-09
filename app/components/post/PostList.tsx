"use client";
import { Fragment, useState } from "react";
import { Modal, Box } from "@mui/material";
import ItemCard from "../card/ItemCard";
import ItemCardDescription from "../card/ItemCardDescription";

// propsの型定義
type Post = {
  id: string;
  title: string;
  descriptions: {
    category: {
      name: string;
    };
    id: number;
    content: string;
  }[];
};

type PostListProps = {
  posts: Post[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box position="relative">
      {posts.map((post) => (
        <Box key={post.id} onClick={() => handleOpenModal()}>
          <ItemCard postTitle={post.title} />
          {post.descriptions.map((description) => (
            <Fragment key={description.id}>
              <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                BackdropProps={{
                  onClick: handleCloseModal, // ここでバックドロップ（モーダル外側）をクリックしたときに閉じる
                }}
              >
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  p={4}
                  maxHeight={{ xs: "60%", md: "80%" }}
                  minWidth={300}
                  bgcolor="white"
                  borderRadius="5px"
                  sx={{
                    transform: "translate(-50%, -50%)",
                    overflowY: "scroll",
                  }}
                >
                  <ItemCardDescription
                    id={description.id}
                    postTitle={post.title}
                    descriptions={post.descriptions}
                  />
                </Box>
              </Modal>
            </Fragment>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default PostList;
