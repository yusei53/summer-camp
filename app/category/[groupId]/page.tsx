import getCategories from "@/actions/getCategories";
import getPosts from "@/actions/getPosts";
import PostFormContainer from "@/app/components/post/PostFormContainer";
import PostList from "@/app/components/post/PostList";

const GroupPage = async ({ params }: { params: { groupId: string } }) => {
  const { groupId } = params;

  const categories = await getCategories(groupId);
  const posts = await getPosts(groupId);

  return (
    <>
      {categories && (
        <PostFormContainer categories={categories} groupId={groupId} />
      )}
      {posts ? <PostList posts={posts} /> : <div>投稿がありません</div>}
    </>
  );
};

export default GroupPage;
