"use client";
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineIdcard,
  AiOutlineProject,
  AiOutlineLogout,
  AiOutlineMan,
  AiOutlineAccountBook,
  AiOutlineGroup,
  AiOutlineAim,
  AiOutlineDashboard,
} from "react-icons/ai";
import { FiLogOut, FiUser, FiUsers } from "react-icons/fi";

const Sidebar = () => {
  const [isFull, setIsFull] = useState(false);

  return (
    <main className="h-screen border-r hidden md:block">
      <section className="flex">
        <button
          className={
            "w-12 h-12 hidden md:block absolute left-0 top-0 bg-transparent focus:outline-none"
          }
          onClick={() => setIsFull(!isFull)}></button>
        <div className="w-2/3">
          {isFull ? (
            <div className="w-48 lg:w-52">Full</div>
          ) : (
            <section className="w-14 px-1 flex flex-col items-center">
              <Link
                href="/home"
                className="flex flex-col items-center justify-center hover:bg-gray-300 w-full py-2 mt-3 rounded-lg">
                <AiOutlineHome />
                <span className="text-[0.6rem] font-bold mt-0.5">Home</span>
              </Link>
              <Link
                href="/home"
                className="flex flex-col items-center justify-center hover:bg-gray-300 w-full py-2 mt-3 rounded-lg">
                <FiUser />
                <span className="text-[0.6rem] font-bold mt-0.5">Personal</span>
              </Link>
              <Link
                href="/home"
                className="flex flex-col items-center justify-center hover:bg-gray-300 w-full py-2 mt-3 rounded-lg">
                <FiUsers />
                <span className="text-[0.6rem] font-bold mt-0.5">Connect</span>
              </Link>
              <button className="flex flex-col items-center justify-center hover:bg-gray-300 w-full py-2 mt-3 rounded-lg">
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
