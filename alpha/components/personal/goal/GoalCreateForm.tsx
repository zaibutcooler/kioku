"use client";

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {}

const StatusCreateForm: React.FC<Props> = ({}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rank, setRank] = useState("");
  const [deadline, setDeadline] = useState("");
  const [why, setWhy] = useState([""]);

  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur z-50 px-2">
      <div className="bg-white shadow-md rounded-md py-4 w-[500px] md:h-[90vh] lg:h-[95vh] text-xs md:text-sm font-normal mx-3 md:mx-0">
        <div className="h-[40px] px-8 flex border-b border-gray-100 justify-between items-top">
          <span className="font-semibold">Create A Goal</span>
          <button onClick={() => {}}>
            <AiOutlineClose className="font-bold" />
          </button>
        </div>
        <section className="flex">
          <div className="p-3 border bg-gray-50 w-1/4 hidden md:block">
            <main className="w-full h-full bg-white"></main>
          </div>
          <form className="bg-bg_white space-y-4 px-8 py-3 h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-full md:w-3/4">
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
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-300 rounded-md p-2"
                placeholder="Your Description"
              />
            </div>

            <div>
              <label
                htmlFor="title"
                className="block text-xs font-medium text-gray-700">
                Rank
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-300 rounded-md p-2"
                placeholder="Should be drop down"
              />
            </div>
            <div>
              <label
                htmlFor="title"
                className="block text-xs font-medium text-gray-700">
                Deadline
              </label>
              <input
                type="date"
                id="formClose"
                name="formClose"
                required
                className="mt-1 mr-2 focus:ring-gray-400 focus:border-gray-400 block w-full border-gray-300 rounded-md p-2"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-1 rounded-lg border border-black ">
              Done
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default StatusCreateForm;
