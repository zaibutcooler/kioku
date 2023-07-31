import { UserCreateType, UserType } from "@/models/User";

export const registerUser = async ({
  username,
  email,
  password,
}: UserCreateType) => {
  const postBody = {
    username,
    email,
    password,
  };

  try {
    const response = await fetch("/api/user/register", {
      method: "POST",
      body: JSON.stringify(postBody),
    });
    if (response.ok) {
      const datas: UserType = await response.json();
      console.log("success", datas);

      return datas;
    }
    return false;
  } catch (err) {
    console.log("error", err);
  }
};

export const loginUser = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const postBody = {
    username,
    password,
  };
  try {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify(postBody),
    });
    if (response.ok) {
      const datas: UserType = await response.json();
      console.log("success", datas);

      return datas;
    }
    return false;
  } catch (err) {
    console.log("error", err);
  }
};
