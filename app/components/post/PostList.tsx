"use client";
import { Fragment, useState } from "react";
import { Modal, Box, Typography } from "@mui/material";
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
  const [openPostId, setOpenPostId] = useState<string | null>(null);

  const handleOpenModal = (postId: string) => {
    setOpenPostId(postId);
  };

  const handleCloseModal = () => {
    setOpenPostId(null);
  };

  return (
    <Box position="relative">
      {posts.length > 0 ? (
        posts.map((post) => (
          <Fragment key={post.id}>
            <Box onClick={() => handleOpenModal(post.id)}>
              <ItemCard postTitle={post.title} />
            </Box>
            {post.descriptions.map((description) => (
              <Modal
                key={description.id}
                open={openPostId === post.id}
                onClose={handleCloseModal}
                disableAutoFocus
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
            ))}
          </Fragment>
        ))
      ) : (
        <Typography
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize={20}
          fontWeight="bold"
          mt={20}
        >
          Postが作成されていません
        </Typography>
      )}
            </Fragment>
          ))}
        </Fragment>
      ))}
      <Box display={"flex"} justifyContent={"flex-end"} mb={3} mr={5}>
        <Button
          href="/"
          sx={{ mb: 6, color: "white", bgcolor: "primary.main" }}
        >
          一覧に戻る
        </Button>
      </Box>
    </Box>
  );
};

export default PostList;
