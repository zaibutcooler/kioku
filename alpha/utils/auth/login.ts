import { useDispatch } from "react-redux";
import axios from "axios";

export const useUsernameLogin = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${process.env.BACKEND}/login/username`, {
      username,
      password,
    });
    console.log(response);

    //store the state
  } catch (err) {
    console.log("Error ->", err);
  }
};
