"use client";
import { registerUser } from "@/utils/user";
import { useState } from "react";

interface Props {
  toggleDisplay: (input: string) => void;
}

const Register: React.FC<Props> = ({ toggleDisplay }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      console.log("Password should be at least 8 characters long");
    }

    if (password !== confirmPassword) {
      console.log("Password and confirm password do not match");
    }

    const newUser = await registerUser({ username, email, password });
    newUser ? console.log("success") : console.log("failed");

    // Perform registration logic here
    // console.log("Register clicked");
    // console.log("Username:", username);
    // console.log("Email:", email);
    // console.log("Password:", password);
    // console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur first-line:z-50 px-2">
        <div className="bg-superwhite px-6 pb-6 pt-4 rounded-xl shadow-md w-[320px] md:w-[400px] min-h-[490px] text-secondary_bold">
          <div className="flex justify-end m-0 p-0">
            <button className="text-xs" onClick={() => toggleDisplay("")}>
              Back
            </button>
          </div>
          <h1 className="font-bold text-lg text-center">Register</h1>
          <form className="font-normal text-sm" onSubmit={handleRegister}>
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
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-xs font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
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
            <div className="mb-8">
              <label
                htmlFor="confirmPassword"
                className="block text-xs font-semibold leading-6 text-gray-900">
                Confirm Password
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <button className="w-full rounded-lg bg-black text-white px-4 py-2">
                Register
              </button>
            </div>
          </form>
          <p className="text-[0.6rem] font-normal text-center text-gray-400">
            Already have an account?{" "}
            <button
              onClick={() => toggleDisplay("login")}
              className="text-sky-500">
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
