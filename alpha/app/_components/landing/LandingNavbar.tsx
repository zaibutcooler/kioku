"use client";

import { useState, useEffect } from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";
import { LinkType } from "@/public/types";
import { landingLinks } from "@/data/Links";

const LandingNavbar = () => {
  const [isDisplayed, setIsDisplayed] = useState("");

  const toggleDisplay = (input: string) => {
    setIsDisplayed(input);
  };

  useEffect(() => {
    if (isDisplayed === "login" || isDisplayed === "register") {
      document.body.classList.add("no-scrollbar");
    } else {
      document.body.classList.remove("no-scrollbar");
    }
  }, [isDisplayed]);

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
    <main className="hidden md:block  text-superblack font-semibold container mx-auto">
      <div className="flex w-full justify-between bg-superwhite py-1.5 px-2 lg:px-4 items-center border-b border-gray-100 fixed top-0 left-0">
        <section className="flex items-center">
          <a className="ml-6 mr-4 font-bold text-lg" href="#root">
            Home
          </a>
        </section>
        <section className="flex items-center">
          <div className="flex item-center font-semibold text-sm text-slate-600 ">
            {landingLinks.map((item) => (
              <a className="mx-4 hover:text-superblack " href={item.go}>
                {item.name}
              </a>
            ))}
          </div>
          <div>
            <button
              onClick={() => toggleDisplay("login")}
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

export default LandingNavbar;
