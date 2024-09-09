import { Typography } from "@mui/material";
import { Fragment } from "react";

type ItemCardDescriptionProps = {
  id: number;
  postTitle: string;
  descriptions: Descriptions[];
};

type Descriptions = {
  category: {
    name: string;
  };
  id: number;
  content: string;
};

const ItemCardDescription: React.FC<ItemCardDescriptionProps> = ({
  id,
  postTitle,
  descriptions,
}) => {
  return (
    <Fragment key={id}>
      <Typography variant="h6" component="h2">
        {postTitle}
      </Typography>
      {descriptions.map((description) => (
        <Fragment key={description.id}>
          <Typography mt={3} mb={1} fontWeight="bold" fontSize={20}>
            {description.category.name}
          </Typography>
          <Typography>{description.content}</Typography>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default ItemCardDescription;
