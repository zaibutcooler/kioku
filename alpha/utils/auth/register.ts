import axios from "axios";

const useRegister = ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  axios
    .post(`${process.env.BACKEND}/auth/register`, {
      username,
      email,
      password,
    })
    .then((res) => console.log(res.data));
};
