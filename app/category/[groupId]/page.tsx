import getCategories from "@/app/actions/getCategories";
import PostFormContainer from "@/app/components/post/PostFormContainer";

const GroupPage = async ({ params }: { params: { groupId: string } }) => {
  const { groupId } = params;

  const categories = await getCategories(groupId);
  return <PostFormContainer categories={categories} groupId={groupId} />;
};

export default GroupPage;
