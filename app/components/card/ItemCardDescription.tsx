import { Box, Typography } from "@mui/material";

// Propsの型定義
interface ItemCardDescriptionProps {
  id: number;
  cardtitle: string;
  cardcontent: string;
}

const ItemCardDescription: React.FC<ItemCardDescriptionProps> = ({
  cardtitle,
  cardcontent,
}) => {
  return (
    <Box>
      <Typography variant="h6" component="h2">
        {cardtitle}
      </Typography>
      <Typography variant="body1">{cardcontent}</Typography>
    </Box>
  );
};

export default ItemCardDescription;
