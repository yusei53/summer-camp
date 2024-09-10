"use client";
import { Fragment, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
  const [selectedDescriptionIndex, setSelectedDescriptionIndex] = useState(0); // 共通のインデックス
  const [accordionOpen, setAccordionOpen] = useState(false); // アコーディオンの開閉状態

  const handleOpenModal = (postId: string) => {
    setOpenPostId(postId);
  };

  const handleCloseModal = () => {
    setOpenPostId(null);
  };

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  const handleSelectDescription = (index: number) => {
    setSelectedDescriptionIndex(index);
  };

  return (
    <Box position="relative">
      <Box mx={3}>
        <Accordion
          expanded={accordionOpen}
          onChange={toggleAccordion}
          sx={{
            boxShadow: "none",
            maxWidth: "180px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            height: "fit-content",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="category-list-content"
            id="category-list-header"
            sx={{
              my: -0.5,
            }}
          >
            <Typography fontSize={13}>カテゴリーで絞る</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              mt: -1,
              padding: "1px 0",
              py: 0,
            }}
          >
            <List>
              {posts[0]?.descriptions.map((description, index) => (
                <ListItem
                  key={description.id}
                  onClick={() => handleSelectDescription(index)}
                  disablePadding
                  sx={{
                    "&:hover": {
                      bgcolor: "#f7f7f7",
                    },
                    bgcolor:
                      selectedDescriptionIndex === index ? "#f7f7f7" : "white",
                  }}
                >
                  <ListItemText
                    primary={description.category.name}
                    primaryTypographyProps={{ fontSize: 12, pl: 1, py: 0.2 }}
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
      {/* 各ポストの表示 */}
      {posts.map((post) => (
        <Fragment key={post.id}>
          <Box onClick={() => handleOpenModal(post.id)}>
            {/* description の選択されたインデックスを ItemCard に渡す */}
            <ItemCard
              postTitle={post.title}
              description={post.descriptions[selectedDescriptionIndex]} // 選択されたdescriptionを表示
            />
          </Box>

          <Modal
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
                id={post.descriptions[selectedDescriptionIndex].id} // 選択された description の ID
                postTitle={post.title}
                descriptions={post.descriptions}
              />
            </Box>
          </Modal>
        </Fragment>
      ))}
      {posts.length > 0 ? (
        posts.map((post) => (
          <Fragment key={post.id}>
            <Box onClick={() => handleOpenModal(post.id)}>
              <ItemCard
                postTitle={post.title}
                description={post.descriptions[selectedDescriptionIndex]}
              />
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
      <Box display={"flex"} justifyContent={"flex-end"} mr={3}>
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
