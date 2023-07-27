"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {}

const StatusCreateForm: React.FC<Props> = ({}) => {
  const [title, setTitle] = useState("");
  const [why, setWhy] = useState([""]);
  const [whyCount, setWhyCount] = useState(1);
  const [lessons, setLessons] = useState([""]);
  const [lessonCount, setLessonCount] = useState(1);
  const [note, setNote] = useState("");
  const [positive, setPositive] = useState(false);

  const userID = "";
  const handleSubmit = async () => {
    const requestBody = {
      user: userID,
      positive,
      title,
      why,
      lessons,
      note,
    };

    try {
      const response = await fetch(`/api/mark?userID=${userID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Failed to submit the form.");
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
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
            className="bg-bg_white space-y-4 px-8 py-3 h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 w-full md:w-3/5">
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
                <input
                  type="text"
                  name={`lessons[${index}].item`}
                  required
                  className="focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-200 rounded-sm border p-2"
                  placeholder="What have you learnt"
                />
              ))}
              <button
                type="button"
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
