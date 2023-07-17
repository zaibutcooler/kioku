"use client";

import { useState } from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";
import { AiOutlineCalendar, AiOutlineMenu } from "react-icons/ai";
import Calendar from "../home/Calendar";
import { store } from "@/store/store";
import { toggleSidebar } from "@/store/displaySlice";

interface Props {}

const DesktopNavbar: React.FC<Props> = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleBar = () => {
    store.dispatch(toggleSidebar());
  };

  return (
    <main className="hidden md:block bg-superwhite text-superblack font-semibold">
      <div className="flex w-full justify-between py-1.5 px-2 lg:px-4 items-center border-b border-gray-100">
        <section className="flex items-center">
          <button onClick={toggleBar}>
            <AiOutlineMenu />
          </button>
        </section>
        <section>
          <div>
            <button
              onClick={() => {}}
              className="mx-3 px-4 py-1.5 border font-bold border-black rounded-3xl w-[80px] text-center text-sm text-superblack">
              Login
            </button>
            <button
              onClick={() => {
                setShowCalendar(!showCalendar);
              }}
              className="mx-3 px-1 py-1 rounded-sm border text-lg">
              <AiOutlineCalendar />
            </button>
          </div>
        </section>
      </div>
      {showCalendar && (
        <div className="fixed right-0 mt-6 mr-4">
          <Calendar />
        </div>
      )}
    </main>
  );
};

export default DesktopNavbar;
