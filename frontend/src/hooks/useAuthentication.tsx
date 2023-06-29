import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../state/userSlice";
import jwt_decode from "jwt-decode";

const isTokenValid = (token: string) => {
  try {
    const decoded = jwt_decode(token);

    // Check token expiration
    const currentTime = Math.floor(Date.now() / 1000);
    if (decoded.exp < currentTime) {
      console.log("Token has expired");
      return false;
    }

    // Token is valid
    return true;
  } catch (error) {
    console.error("Error decoding token:", error);
    return false;
  }
};

const useAuthentication = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");
  }, [dispatch]);

  return null;
};

export default useAuthentication;
