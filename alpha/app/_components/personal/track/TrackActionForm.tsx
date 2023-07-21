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
            <main className="w-full h-full bg-white"></main>
          </div>
          <div className="bg-bg_white space-y-4  py-3 h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-full md:w-3/4">
            <form className="h-2/3 border-b px-8">
              <div>
                <label
                  htmlFor="title"
                  className="block text-xs font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-300 rounded-md p-2"
                  placeholder="Your Title"
                />
              </div>

              <div>
                <label
                  htmlFor="note"
                  className="block text-xs font-medium text-gray-700">
                  Note
                </label>
                <textarea
                  id="note"
                  name="note"
                  required
                  rows={4}
                  className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-300 rounded-md p-2"
                  placeholder="Leave a note"
                />
              </div>

              <div>
                <label
                  htmlFor="links"
                  className="block text-xs font-medium text-gray-700">
                  Why?
                </label>
                {time.map((time, index) => (
                  <input
                    type="text"
                    name={`lessons[${index}].item`}
                    required
                    className="focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-300 rounded-md p-2"
                    placeholder="Enter link URL"
                  />
                ))}
                <button
                  type="button"
                  className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-xs leading-4 font-medium rounded-md text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-300 focus:ring-slate-500">
                  + Add Link
                </button>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="px-4 py-1 rounded-lg border border-black ">
                  Done
                </button>
              </div>
            </form>

            <div className="bg-white border p-2 h-1/3"></div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TrackActionForm;
