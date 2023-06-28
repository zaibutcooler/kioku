import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (password1 === password2) {
        axios
          .post("http://localhost:5000/auth/register", {
            username,
            email,
            password: password1,
          })
          .then((res) => console.log(res.data))
          .then(() => navigate("/login"));
      }
    } catch {
      console.log("error");
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <div className="max-w-md w-full mx-auto rounded-lg shadow-lg bg-white p-8">
        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-gray-800 font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-800 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-800 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="block text-gray-800 font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-100 hover:text-black">
            Sign Up
          </button>
        </form>
        <p className="text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
