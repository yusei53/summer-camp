import getCurrentUser from "../actions/getCurrentUser";
import GoogleLoginForm from "./components/auth/GoogleLoginForm";
import LogoutButton from "./components/auth/LogoutButton";
import GroupFormContainer from "./components/group/GroupFormContainer";

const Home = async () => {
  const currentUser = await getCurrentUser();
  return currentUser ? (
    <>
      <LogoutButton />
      <GroupFormContainer />
    </>
  ) : (
    <GoogleLoginForm />
  );
};

export default Home;
