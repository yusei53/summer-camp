import GroupList from "../components/group/GroupList";
import getCurrentUser from "../../actions/getCurrentUser";

const page = async () => {
  const currentUser = await getCurrentUser();
  return <GroupList currentUserId={currentUser?.id} />;
};

export default page;
