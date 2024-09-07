import { Box, Typography } from "@mui/material";

// Propsの型定義
interface ItemCardDescriptionProps {
  id: number;
  CardTitle: string;
  CardContent: string;
}

const ItemCardDescription: React.FC<ItemCardDescriptionProps> = ({
  CardTitle,
  CardContent,
}) => {
  return (
    <Box>
      <Typography variant="h6" component="h2">
        {CardTitle}
      </Typography>
      <Typography variant="body1">{CardContent}</Typography>
    </Box>
  );
};

export default ItemCardDescription;
