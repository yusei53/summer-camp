import { Box, Typography } from "@mui/material";

type TProps = {
  postTitle: string;
  description: {
    category: {
      name: string;
    };
    id: number;
    content: string;
  };
};

const ItemCard: React.FC<TProps> = ({ postTitle, description }) => {
  const truncatedContent =
    description.content.length > 30
      ? description.content.slice(0, 30) + "..."
      : description.content;

  return (
    <Box
      border={"1.5px solid #c4c4c4"}
      py={2}
      px={3}
      my={4}
      mx={3}
      borderRadius={"4px"}
      boxShadow={"8px 8px 8px -12px"}
      sx={{
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      <Typography>{postTitle}</Typography>
      <Typography mt={0.5} color="gray" fontSize={{ xs: 10, md: 14 }}>
        {description.category.name}: {truncatedContent}
      </Typography>
    </Box>
  );
};

export default ItemCard;
