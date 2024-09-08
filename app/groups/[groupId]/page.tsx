import getCurrentUser from "@/app/actions/getCurrentUser";
import CategoryFormContainer from "@/app/components/category/CategoryFormContainer";

const GroupPage = async ({ params }: { params: { groupId: string } }) => {
  const { groupId } = params;

  const currentUser = await getCurrentUser();
  return (
    currentUser && (
      <>
        <div>ログイン中: ログインしてた時のUIは後で考える</div>
        <CategoryFormContainer groupId={groupId} />
      </>
    )
  );
};

export default GroupPage;
