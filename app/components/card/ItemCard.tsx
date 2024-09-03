import { Box, Typography } from "@mui/material";

type TProps = {
  content: string;
};

const ItemCard: React.FC<TProps> = ({ content }) => {
  return (
    <Box border={2} p={3} m={3}>
      <Typography>{content}</Typography>
    </Box>
  );
};

export default ItemCard;
