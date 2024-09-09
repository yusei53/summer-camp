import { Box, Typography } from "@mui/material";

type TProps = {
  postTitle: string;
};

const ItemCard: React.FC<TProps> = ({ postTitle }) => {
  return (
    <Box border={2} p={3} m={3}>
      <Typography>{postTitle}</Typography>
    </Box>
  );
};

export default ItemCard;
