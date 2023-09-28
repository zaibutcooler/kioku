"use client";

import { useState } from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";
import {
  AiOutlineCalendar,
  AiOutlineCheckSquare,
  AiOutlineCodepen,
  AiOutlineFlag,
  AiOutlineForm,
  AiOutlineMenu,
  AiOutlineProfile,
  AiOutlineProject,
  AiOutlineTool,
  AiOutlineTrademark,
  AiOutlineUser,
  AiOutlineVerified,
} from "react-icons/ai";
import Calendar from "../home/Calendar";
import { RiStickyNote2Line } from "react-icons/ri";
import NoteCreateForm from "../personal/note/NoteCreateForm";
import TasksBar from "../home/TasksBar";
import PersonalKit from "../personal/PersonalKit";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";
import DiaryCreateForm from "../personal/diary/DiaryCreateForm";
import TrackActionScaffoldForm from "../personal/track/TrackActionScaffoldForm";
import TrackActionForm from "../personal/track/TrackActionForm";
import TaskCreateForm from "../personal/task/TaskCreateForm";
import GoalCreateForm from "../personal/goal/GoalCreateForm";
import StatusCreateForm from "../personal/status/StatusCreateForm";
import Gadgets from "./Gadgets";
import { useDispatch, useSelector } from "react-redux";
import { clearGadget, setGadget } from "@/data/store/gadgetSlice";
import { RootState } from "@/data/store";
import { BsPencil } from "react-icons/bs";

interface Props {}

const DesktopNavbar: React.FC<Props> = () => {
  const showedGadget = useSelector(
    (state: RootState) => state.gadget.showedGadget
  );
  const dispatch = useDispatch();

  const [pencilDropDown, setPencilDropDown] = useState(false);
  const [goalDropDown, setGoalDropDown] = useState(false);

  const pencilArray = [
    {
      name: "Write Note",
      function: () => {
        dispatch(setGadget("note"));
      },
    },
    {
      name: "Write Diary",
      function: () => {
        dispatch(setGadget("diary"));
      },
    },
    // {
    //   name: "Add Tasks",
    //   function: () => {
    //     dispatch(setGadget("task"));
    //   },
    // },
  ];

  const goalArray = [
    {
      name: "Finish Actions",
      function: () => {
        dispatch(setGadget("track"));
      },
    },
    {
      name: "Add More Actions",
      function: () => {
        dispatch(setGadget("scaffold"));
      },
    },
    {
      name: "Add Goals",
      function: () => {
        dispatch(setGadget("goal"));
      },
    },
    {
      name: "Add Status",
      function: () => {
        dispatch(setGadget("status"));
      },
    },
  ];

  const toggleBar = () => {};


  return (
    <main className="hidden md:block bg-superwhite text-superblack font-semibold">
      <div className="flex w-full justify-between py-1.5 px-2 lg:px-4 items-center border-b border-gray-100">
        <section className="flex items-center">
          <button onClick={toggleBar}>
            <AiOutlineMenu />
          </button>
        </section>
        <section>
          <div className="flex">
            <button
              onClick={() => {
                showedGadget === "calendar"
                  ? dispatch(clearGadget())
                  : dispatch(setGadget("calendar"));
              }}
              className={`mx-2 px-1.5 py-1.5 items-center hover:bg-gray-100  rounded-sm border text-xl ${
                showedGadget === "calendar" && "bg-gray-200"
              }`}>
              <AiOutlineCalendar />
            </button>
            <button
              onClick={() => {
                showedGadget === "taskbar"
                  ? dispatch(clearGadget())
                  : dispatch(setGadget("taskbar"));
              }}
              className={`mx-2 px-1.5 py-1.5 items-center hover:bg-gray-100  rounded-sm border text-xl ${
                showedGadget === "taskbar" && "bg-gray-200"
              }`}>
              <AiOutlineProfile />
            </button>
            <div>
              <button
                onClick={() => {
                  setPencilDropDown(pencilDropDown ? false : true);
                  setGoalDropDown(false);
                }}
                className="mx-2 px-1.5 py-1.5 items-center hover:bg-gray-100  rounded-sm border text-xl">
                <AiOutlineForm />
              </button>
              {pencilDropDown && (
                <div
                  className="absolute top-12 right-16 py-3 bg-white border border-gray-200 w-[150px] rounded-md shadow-md "
                  onMouseLeave={() => {
                    setPencilDropDown(false);
                  }}>
                  <div
                    className="px-1 w-full"
                    onClick={() => setPencilDropDown(false)}>
                    {pencilArray.map((item) => (
                      <button
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 w-full rounded-md  text-left"
                        onClick={item.function}>
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => {
                  setGoalDropDown(goalDropDown ? false : true);
                  setPencilDropDown(false);
                }}
                className="mx-2 px-1.5 py-1.5 items-center hover:bg-gray-100  rounded-sm border text-xl">
                <AiOutlineCheckSquare />
              </button>
              {goalDropDown && (
                <div
                  className="absolute top-12 right-4 lg:right-6 py-3 bg-white border border-gray-200 w-[150px] rounded-md shadow-md "
                  onMouseLeave={() => {
                    setGoalDropDown(false);
                  }}>
                  <div
                    className="px-1 w-full"
                    onClick={() => setGoalDropDown(false)}>
                    {goalArray.map((item) => (
                      <button
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 w-full rounded-md  text-left"
                        onClick={item.function}>
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      <Gadgets />
    </main>
  );
};

export default DesktopNavbar;
