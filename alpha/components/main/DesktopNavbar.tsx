"use client";

import { useState } from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";
import {
  AiOutlineCalendar,
  AiOutlineMenu,
  AiOutlineProfile,
  AiOutlineUser,
} from "react-icons/ai";
import Calendar from "../home/Calendar";
import { RiStickyNote2Line } from "react-icons/ri";
import NoteCreateForm from "../personal/note/NoteCreateForm";
import TasksBar from "../home/TasksBar";
import PersonalKit from "../personal/PersonalKit";

interface Props {}

const DesktopNavbar: React.FC<Props> = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showedTool, setShowedTool] = useState("");

  const displayGadgets = () => {
    switch (showedTool) {
      case "calendar":
        return <Calendar />;
      case "note":
        return <NoteCreateForm handleBack={handleBack} />;
      case "tasks":
        return <TasksBar handleBack={handleBack} />;
      case "personal":
        return <PersonalKit handleBack={handleBack} />;
      default:
        return null;
    }
  };

  const toggleBar = () => {};

  const handleBack = () => {
    setShowedTool("");
  };

  const toggleGadget = (input: string) => {
    if (showedTool === "") {
      setShowedTool(input);
    } else {
      setShowedTool("");
    }
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
              onClick={() => {
                setShowedTool("note");
              }}
              className="mx-2 px-1.5 py-1.5 items-center hover:bg-gray-100 rounded-sm border text-xl">
              <RiStickyNote2Line />
            </button>
            <button
              onClick={() => {
                toggleGadget("calendar");
              }}
              className={`mx-2 px-1.5 py-1.5 items-center hover:bg-gray-100  rounded-sm border text-xl ${
                showCalendar && "bg-gray-200"
              }`}>
              <AiOutlineCalendar />
            </button>
            <button
              onClick={() => {}}
              className="mx-2 px-1.5 py-1.5 items-center hover:bg-gray-100  rounded-sm border text-xl">
              <AiOutlineProfile />
            </button>
            <button
              onClick={() => {}}
              className="mx-2 px-1.5 py-1.5 items-center hover:bg-gray-100  rounded-sm border text-xl">
              <AiOutlineUser />
            </button>
          </div>
        </section>
      </div>
      {displayGadgets()}
    </main>
  );
};

export default DesktopNavbar;
