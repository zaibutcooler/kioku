import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../state/store";

const HomePage = () => {
  const { username } = useSelector((state: RootState) => {
    state.user;
  });
  return <div>{username}</div>;
};

export default HomePage;
