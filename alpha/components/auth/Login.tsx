"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { AiOutlineApple, AiOutlineGoogle } from "react-icons/ai";

interface Props {
  toggleDisplay: (input: string) => void;
}

const Login: React.FC<Props> = ({ toggleDisplay }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    signIn("credentials", {
      username,
      password,
      redirect: true,
      callbackUrl: "/home",
    });

    // Password validation
    // if (password.length < 8) {
    //   console.log("Password should be at least 8 characters long");
    // }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur first-line:z-50 px-2">
        <div className="bg-superwhite px-6 pb-6 pt-4 rounded-xl shadow-md  md:w-[400px] w-[320px]  min-h-[490px] text-secondary_bold">
          <div className="flex justify-end m-0 p-0">
            <button className="text-xs" onClick={() => toggleDisplay("")}>
              Back
            </button>
          </div>
          <h1 className="font-bold text-lg text-center mb-4">Login</h1>
          <form className="font-normal text-sm" onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-xs font-semibold leading-6 text-gray-900">
                Username
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-8">
              <label
                htmlFor="password"
                className="block text-xs font-semibold leading-6 text-gray-900">
                Password
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full rounded-lg bg-black text-white px-4 py-2 gap-2">
                Login
              </button>
            </div>
          </form>
          <p className="text-[0.6rem] font-medium text-center text-gray-400 mb-6 ">
            Don't have an Account?{" "}
            <button
              onClick={() => toggleDisplay("register")}
              className="text-sky-500">
              Register
            </button>
          </p>
          <div className="mb-5 text-sm font-medium">
            <button
              onClick={() => signIn("google")}
              className="w-full rounded-lg bg-[#4285F4] text-white px-4 py-2 flex justify-center items-center gap-2">
              <span className="text-xl">
                <AiOutlineGoogle />
              </span>{" "}
              Continue With Google
            </button>
          </div>
          <div className="mb-5 text-sm font-medium">
            <button
              onClick={() => signIn("apple")}
              className="w-full rounded-lg bg-[#888888] text-white px-4 py-2 flex justify-center items-center gap-2">
              <span className="text-xl">
                <AiOutlineApple />
              </span>{" "}
              Continue With Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
