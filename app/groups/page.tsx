import getCurrentUser from "../../actions/getCurrentUser";
import GroupFormContainer from "../components/group/GroupFormContainer";

const Home = async () => {
  const currentUser = await getCurrentUser();
  return (
    currentUser && (
      <>
        <GroupFormContainer />
      </>
    )
  );
};

export default Home;
