"use client";

import { useState } from "react";
import Login from "./../auth/Login";
import Register from "./../auth/Register";

interface Props {}

const DesktopNavbar: React.FC<Props> = () => {
  const [isDisplayed, setIsDisplayed] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const toggleDisplay = (input: string) => {
    setIsDisplayed(input);
  };

  const displayAuth = () => {
    switch (isDisplayed) {
      case "login":
        return <Login toggleDisplay={toggleDisplay} />;
      case "register":
        return <Register toggleDisplay={toggleDisplay} />;
      default:
        return null;
    }
  };

  return (
    <main className="hidden md:block bg-superwhite text-superblack font-semibold container mx-auto">
      <div className="flex w-full justify-between py-1.5 px-2 lg:px-4 items-center border-b border-gray-100">
        <section className="flex items-center">
          <a className="ml-2 mr-4 font-bold text-lg" href="#root">
            Home
          </a>
          <div className="flex item-center font-semibold text-sm text-slate-600 hover:text-superblack">
            <a className="mx-4 " href="#about">
              About
            </a>
            <a className="mx-4 " href="#personalFeatures">
              Features
            </a>
            <a className="mx-4 " href="#projectFeatures">
              Collabrating
            </a>
            <a className="mx-4 " href="#contact">
              Contact
            </a>
          </div>
        </section>
        <section>
          <div>
            <button
              onClick={() => {
                window.alert("FUck");
                toggleDisplay("login");
              }}
              className="mx-3 px-4 py-1.5 border border-superblack rounded-lg w-[80px] font-normal text-center text-sm bg-black text-superwhite">
              Login
            </button>
          </div>
        </section>
      </div>
      {displayAuth()}
    </main>
  );
};

export default DesktopNavbar;
