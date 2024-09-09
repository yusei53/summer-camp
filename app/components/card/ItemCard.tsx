import { Box, Typography } from "@mui/material";

type TProps = {
  postTitle: string;
};

const ItemCard: React.FC<TProps> = ({ postTitle }) => {
  return (
    <Box
      border={"1.5px solid #c4c4c4"}
      p={3}
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
    </Box>
  );
};

export default ItemCard;
