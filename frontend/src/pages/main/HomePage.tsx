import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../state/store";

const HomePage = () => {
  const user = useSelector((state: RootState) => {
    state.userState;
  });
  return <div>{user.username}</div>;
};

export default HomePage;
