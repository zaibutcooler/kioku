"use client";

import createGoal from "@/utils/create/createGoal";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  handleBack: () => void;
}

const GoalCreateForm: React.FC<Props> = ({ handleBack }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rank, setRank] = useState("");
  const [deadline, setDeadline] = useState<Date | null>(null);
  const [why, setWhy] = useState([""]);

  const { data: session } = useSession();

  const userID = session?.user._id as string;
  const handleSubmit = () => {
    createGoal({
      user: userID,
      title,
      description,
      rank,
      deadline,
      why,
    });
  };

  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur z-50 px-2">
      <div className="bg-white shadow-md rounded-md py-4 w-[500px] md:w-[600px] lg:w-[130vh] text-xs md:text-sm font-normal mx-3 md:mx-0">
        <div className="h-[40px] px-8 flex border-b border-gray-100 justify-between items-top">
          <span className="font-semibold">Create A Goal</span>
          <button onClick={() => {}}>
            <AiOutlineClose className="font-bold" />
          </button>
        </div>
        <section className="flex">
          <div className="p-3 w-2/6 hidden md:block">
            <main className="w-full h-full bg-white"></main>
          </div>
          <form className="bg-white space-y-4 px-8 py-3 h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-full md:w-4/6">
            <div>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-300 rounded-sm border p-2"
                placeholder="Your Title"
              />
            </div>

            <div>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-300 rounded-sm border p-2"
                placeholder="Your Description"
              />
            </div>
            <div>
              {why.map((why, index) => (
                <input
                  type="text"
                  name={`lessons[${index}].item`}
                  value={why[index]}
                  onChange={() => {}}
                  required
                  className="focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-200 rounded-sm border p-2"
                  placeholder="Why did this happened?"
                />
              ))}
              <button
                type="button"
                className="mt-2 inline-flex items-center px-3 py-2  border-transparent text-xs leading-4 font-medium rounded-sm border text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-700 border-gray-200 focus:ring-slate-500">
                + Add More
              </button>
            </div>

            <div>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-300 rounded-sm border p-2"
                placeholder="Should be drop down"
              />
            </div>
            <div>
              <input
                type="date"
                id="formClose"
                name="formClose"
                required
                className="mt-1 mr-2 focus:ring-gray-400 focus:border-gray-400 block w-full border-gray-300 rounded-sm border p-2"
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

export default GoalCreateForm;
