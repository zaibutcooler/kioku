"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import {
  FiInfo,
  FiLifeBuoy,
  FiLogOut,
  FiPhone,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import { landingLinks, desktopPersonalLinks, projectLinks } from "@/data/Links";

const Sidebar = () => {
  const [isFull, setIsFull] = useState(false);

  return (
    <main className="h-[calc(100vh-48px)] border-r hidden md:block md:overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-white ">
      <section className="flex">
        <button
          className={
            "w-12 h-12 hidden md:block absolute left-0 top-0 bg-transparent focus:outline-none"
          }
          onClick={() => setIsFull(!isFull)}></button>
        <div className="w-2/3">
          {isFull ? (
            <section className="w-[180px] lg:w-52 p-4 font-semibold mb-2 overflow-y-auto h-full ">
              <h1 className="px-4 mb-2">Links </h1>

              <Link
                href="/home"
                className="flex items-center hover:bg-gray-100 w-full py-2 rounded-lg px-4">
                <AiOutlineHome />
                <span className="ml-3 text-xs font-bold mt-0.5">Home</span>
              </Link>

              <Link
                href="/home/personal"
                className="flex items-center hover:bg-gray-100 w-full py-2 rounded-lg px-4">
                <FiUser />
                <span className="ml-3 text-xs font-bold mt-0.5">Personal</span>
              </Link>

              <Link
                href="/home"
                className="flex items-center hover:bg-gray-100 w-full py-2 rounded-lg px-4">
                <FiUsers />
                <span className="ml-3 text-xs font-bold mt-0.5">Connect</span>
              </Link>
              <div className="py-2">
                <hr />
              </div>
              {desktopPersonalLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.go}
                  className="flex items-center hover:bg-gray-100 w-full py-2 rounded-lg px-4">
                  {item.icon}
                  <span className="ml-3 text-xs font-bold mt-0.5">
                    {item.name}
                  </span>
                </Link>
              ))}
              <div className="py-2">
                <hr />
              </div>
              {projectLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.go}
                  className="flex items-center hover:bg-gray-100 w-full py-2 rounded-lg px-4">
                  {item.icon}
                  <span className="ml-3 text-xs font-bold mt-0.5">
                    {item.name}
                  </span>
                </Link>
              ))}
              <div className="py-2">
                <hr />
              </div>
              <Link
                href="/logout"
                className="flex items-center hover:bg-gray-100 w-full py-2 rounded-lg px-4">
                <FiLogOut />
                <span className="ml-3 text-xs font-bold mt-0.5">Logout</span>
              </Link>

              <Link
                href="/about"
                className="flex items-center hover:bg-gray-100 w-full py-2 rounded-lg px-4">
                <FiInfo />
                <span className="ml-3 text-xs font-bold mt-0.5">About</span>
              </Link>

              <Link
                href="/contact"
                className="flex items-center hover:bg-gray-100 w-full py-2 rounded-lg px-4">
                <FiPhone />
                <span className="ml-3 text-xs font-bold mt-0.5">Contact</span>
              </Link>

              <Link
                href="/support"
                className="flex items-center hover:bg-gray-100 w-full py-2 rounded-lg px-4">
                <FiLifeBuoy />
                <span className="ml-3 text-xs font-bold mt-0.5">Support</span>
              </Link>
              <div className="pb-[16vh]"></div>
            </section>
          ) : (
            <section className="w-14 px-1 flex flex-col items-center">
              <Link
                href="/home"
                className="flex flex-col items-center justify-center hover:bg-gray-300 w-full py-2 mt-3 rounded-lg">
                <AiOutlineHome />
                <span className="text-[0.6rem] font-bold mt-0.5">Home</span>
              </Link>
              <Link
                href="/home/personal"
                className="flex flex-col items-center justify-center hover:bg-gray-300 w-full py-2 mt-3 rounded-lg">
                <FiUser />
                <span className="text-[0.6rem] font-bold mt-0.5">Personal</span>
              </Link>
              <Link
                href="/home/collabrate"
                className="flex flex-col items-center justify-center hover:bg-gray-300 w-full py-2 mt-3 rounded-lg">
                <FiUsers />
                <span className="text-[0.6rem] font-bold mt-0.5">Connect</span>
              </Link>
              <button
                onClick={() => signOut()}
                className="flex flex-col items-center justify-center hover:bg-gray-300 w-full py-2 mt-3 rounded-lg">
                <FiLogOut />
                <span className="text-[0.6rem] font-bold mt-0.5">Logout</span>
              </button>
            </section>
          )}
        </div>
      </section>
    </main>
  );
};

export default Sidebar;
