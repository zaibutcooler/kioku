"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {}

const TrackActionForm: React.FC<Props> = ({}) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState([""]);
  const [timeCount, setTimeCount] = useState(0);
  const [note, setNote] = useState("");
  const [positive, setPositive] = useState(false);

  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur z-50 px-2">
      <div className="bg-white shadow-md rounded-md py-4 w-[500px] md:w-[600px] lg:w-[750px] text-xs md:text-sm font-normal mx-3 md:mx-0">
        <div className="h-[40px] px-8 flex border-b border-gray-100 justify-between items-top">
          <span className="font-semibold">Track Your Actions</span>
          <button onClick={() => {}}>
            <AiOutlineClose className="font-bold" />
          </button>
        </div>
        <section className="flex">
          <div className="p-3 border bg-gray-50 w-1/4 hidden md:block">
            <main className="w-full h-full bg-white">All Habits</main>
          </div>
          <div className="bg-bg_white  h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-full md:w-3/4">
            <form className="h-2/3 px-8 py-3  space-y-4 ">Habits</form>

            <div className="bg-white border p-2 h-1/3">Past history</div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TrackActionForm;
