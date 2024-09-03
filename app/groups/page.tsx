import getCurrentUser from "../actions/getCurrentUser";
import GroupFormContainer from "../components/group/GroupFormContainer";

const Home = async () => {
  const currentUser = await getCurrentUser();
  return (
    currentUser && (
      <>
        <div>ログイン中: ログインしてた時のUIは後で考える</div>
        <GroupFormContainer />
      </>
    )
  );
};

export default Home;
