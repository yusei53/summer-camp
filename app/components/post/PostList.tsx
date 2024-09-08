import getPosts from "@/app/actions/getPosts";

const PostList = async ({ groupId }: { groupId: string }) => {
  const posts = await getPosts(groupId);
  return posts ? (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <ul>
            {post.descriptions.map((description) => (
              <li key={description.id}>
                <p>{description.category.name}</p>
                <p>{description.content}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  ) : (
    <div>投稿がありません</div>
  );
};

export default PostList;
