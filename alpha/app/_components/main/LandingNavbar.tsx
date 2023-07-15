"use client";

import { useState, useEffect } from "react";
import Login from "./../auth/Login";
import Register from "./../auth/Register";
import { LinkType } from "@/public/types";

interface Props {
  toggleDisplay: (input: string) => void;
  landingLinks: LinkType[];
}

const DesktopNavbar: React.FC<Props> = ({ toggleDisplay, landingLinks }) => {
  const handleClick = () => {
    toggleDisplay("login");
  };

  return (
    <main className="hidden md:block  text-superblack font-semibold container mx-auto">
      <div className="flex w-full justify-between bg-superwhite py-1.5 px-2 lg:px-4 items-center border-b border-gray-100 fixed top-0 left-0">
        <section className="flex items-center">
          <a className="ml-6 mr-4 font-bold text-lg" href="#root">
            Home
          </a>
          <div className="flex item-center font-semibold text-sm text-slate-600 ">
            {landingLinks.map((item) => (
              <a className="mx-4 hover:text-superblack " href={item.go}>
                {item.name}
              </a>
            ))}
          </div>
        </section>
        <section>
          <div>
            <button
              onClick={handleClick}
              className="mx-3 px-4 py-1.5 border border-superblack rounded-lg w-[80px] font-normal text-center text-sm bg-black text-superwhite">
              Login
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DesktopNavbar;
