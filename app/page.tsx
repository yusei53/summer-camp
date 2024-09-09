import getCurrentUser from "../actions/getCurrentUser";
import GoogleLoginForm from "./components/auth/GoogleLoginForm";
import LogoutButton from "./components/auth/LogoutButton";
import GroupFormContainer from "./components/group/GroupFormContainer";
import GroupList from "./components/group/GroupList";

const Home = async () => {
  const currentUser = await getCurrentUser();
  return currentUser ? (
    <>
      <GroupFormContainer />
      <GroupList currentUserId={currentUser?.id} />
      <LogoutButton />
    </>
  ) : (
    <GoogleLoginForm />
  );
};

export default Home;
