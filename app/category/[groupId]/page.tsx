import getCategories from "@/actions/getCategories";
import PostFormContainer from "@/app/components/post/PostFormContainer";
import PostList from "@/app/components/post/PostList";

const GroupPage = async ({ params }: { params: { groupId: string } }) => {
  const { groupId } = params;

  const categories = await getCategories(groupId);
  return (
    <>
      {categories && (
        <PostFormContainer categories={categories} groupId={groupId} />
      )}
      <PostList groupId={groupId} />
    </>
  );
};

export default GroupPage;
