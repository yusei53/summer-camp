import getCurrentUser from "@/actions/getCurrentUser";
import CategoryFormContainer from "@/app/components/category/CategoryFormContainer";

const GroupPage = async ({ params }: { params: { groupId: string } }) => {
  const { groupId } = params;

  const currentUser = await getCurrentUser();
  return (
    currentUser && (
      <>
        <CategoryFormContainer groupId={groupId} />
      </>
    )
  );
};

export default GroupPage;
