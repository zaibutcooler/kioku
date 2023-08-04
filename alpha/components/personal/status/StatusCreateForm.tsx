"use client";
import createStatus from "@/utils/create/createStatus";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoRemove, IoRemoveOutline, IoRemoveSharp } from "react-icons/io5";

interface Props {
  handleBack: () => void;
}

const StatusCreateForm: React.FC<Props> = ({ handleBack }) => {
  const [title, setTitle] = useState("");
  const [why, setWhy] = useState([""]);
  const [lessons, setLessons] = useState([""]);
  const [note, setNote] = useState("");
  const [positive, setPositive] = useState(false);

  const userID = "";
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    createStatus({ user: userID, title, why, lessons, note, positive });
  };

  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur z-50 px-2">
      <div className="bg-white shadow-md rounded-md py-4 w-[500px]  md:w-[600px] lg:w-[120vh] text-xs md:text-sm font-normal mx-3 md:mx-0">
        <div className="h-[40px] px-8 flex border-b border-gray-100 justify-between items-top">
          <span className="font-semibold">Leave a mark!!</span>
          <button onClick={() => {}}>
            <AiOutlineClose className="font-bold" />
          </button>
        </div>
        <section className="flex">
          <form
            onSubmit={handleSubmit}
            className="bg-white space-y-4 px-8 py-3 h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 w-full md:w-3/5">
            <div>
              <label
                htmlFor="title"
                className="block text-xs  text-gray-700 font-semibold">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-200 rounded-sm border p-2"
                placeholder="Your Title"
              />
            </div>

            <div>
              <label
                htmlFor="note"
                className="block text-xs  text-gray-700 font-semibold">
                Note
              </label>
              <textarea
                id="note"
                name="note"
                required
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={4}
                className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-200 rounded-sm border p-2"
                placeholder="Leave a note"
              />
            </div>

            <div>
              <label
                htmlFor="links"
                className="block text-xs  text-gray-700 font-semibold">
                What have you learnt?
              </label>
              {lessons.map((item, index) => (
                <div key={index} className="w-full flex my-2">
                  <input
                    type="text"
                    name={`lessons[${index}].item`}
                    value={lessons[index]}
                    onChange={(e) => {
                      const updatedLessons = [...lessons];
                      updatedLessons[index] = e.target.value;
                      setLessons([...updatedLessons]);
                    }}
                    required
                    className=" focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-200 rounded-sm border p-2"
                    placeholder="What have you learnt"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const removedLessons = [...lessons];
                      removedLessons.splice(index, 1);
                      setLessons(removedLessons);
                    }}
                    className={`hover:bg-gray-100 py-1 px-2 ml-2 rounded-md ${
                      index === 0 && "hidden"
                    }`}>
                    <IoRemoveOutline />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => {
                  setLessons([...lessons, ""]);
                }}
                className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-xs leading-4 font-medium rounded-sm text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-700 border-gray-200 focus:ring-slate-500">
                + Add More
              </button>
            </div>

            <div>
              <label
                htmlFor="links"
                className="block text-xs  text-gray-700 font-semibold">
                Why?
              </label>
              {why.map((item, index) => (
                <div key={index} className="my-2 w-full flex">
                  <input
                    type="text"
                    name={`lessons[${index}].item`}
                    value={why[index]}
                    onChange={(e) => {
                      const updatedWhy = [...why];
                      updatedWhy[index] = e.target.value;
                      setWhy(updatedWhy);
                    }}
                    required
                    className=" focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-200 rounded-sm border p-2"
                    placeholder="Why did this happened?"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const removedWhy = [...why];
                      removedWhy.splice(index, 1);
                      setWhy(removedWhy);
                    }}
                    className={`hover:bg-gray-100 py-1 px-2 ml-2 rounded-md ${
                      index === 0 && "hidden"
                    }`}>
                    <IoRemoveSharp />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => {
                  setWhy([...why, ""]);
                }}
                className="mt-2 inline-flex items-center px-3 py-2  border-transparent text-xs leading-4 font-medium rounded-sm border text-slate-600 bg-white hover:bg-slate-50 focus:outline-none focus:border-slate-700 border-gray-200 focus:ring-slate-500">
                + Add More
              </button>
            </div>
            <div className="flex justify-between">
              <p>Positive?</p>

              <button
                type="submit"
                className="px-4 py-1 rounded-sm bg-black text-white hover:bg-gray-900">
                Done
              </button>
            </div>
          </form>
          <div className="p-3  w-2/5 hidden md:block">
            <main className="w-full h-full bg-white"></main>
          </div>
        </section>
      </div>
    </main>
  );
};

export default StatusCreateForm;
