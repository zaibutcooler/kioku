import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state";

const HomePage = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div>
      <div>Username :{user.isAuthenticated && user.username}</div>
      <div>Token :{user.isAuthenticated && user.token}</div>
    </div>
  );
};

export default HomePage;
