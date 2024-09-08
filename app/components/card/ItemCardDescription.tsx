import { Typography } from "@mui/material";

// Propsの型定義
type ItemCardDescriptionProps = {
  id: number;
  cardTitle: string;
  posts: Posts[];
};

type Posts = {
  category: string;
  description: string;
};

const ItemCardDescription: React.FC<ItemCardDescriptionProps> = ({
  cardTitle,
  posts,
}) => {
  return (
    <>
      <Typography variant="h6" component="h2">
        {cardTitle}
      </Typography>
      {posts.map((post) => (
        <>
          <Typography variant="body1">{post.category}</Typography>
          <Typography variant="body1">{post.description}</Typography>
        </>
      ))}
    </>
  );
};

export default ItemCardDescription;
