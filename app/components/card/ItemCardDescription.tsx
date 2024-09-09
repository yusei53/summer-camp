import { Typography } from "@mui/material";

type ItemCardDescriptionProps = {
  id: number;
  postTitle: string;
  descriptions: Descriptions[];
};

type Descriptions = {
  category: {
    name: string;
  };
  content: string;
};

const ItemCardDescription: React.FC<ItemCardDescriptionProps> = ({
  postTitle,
  descriptions,
}) => {
  return (
    <>
      <Typography variant="h6" component="h2">
        {postTitle}
      </Typography>
      {descriptions.map((description) => (
        <>
          <Typography mt={3} mb={1} fontWeight="bold" fontSize={20}>
            {description.category.name}
          </Typography>
          <Typography>{description.content}</Typography>
        </>
      ))}
    </>
  );
};

export default ItemCardDescription;
