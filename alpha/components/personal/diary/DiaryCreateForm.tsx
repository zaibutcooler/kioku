"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {}

const DiaryCreateForm: React.FC<Props> = ({}) => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  const userID = "64c16d804043c533448db52e";

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/diary", {
        method: "POST",
        body: JSON.stringify({
          user: userID,
          title,
          body,
        }),
      });
      if (response.ok) {
        window.alert("okay");
      }
    } catch (err) {
      console.log("error");
    }
  };

  const dummy = [
    { title: "Are You serious??", body: "none", date: "23 March 2023" },
    { title: "Testing one two three", body: "none", date: "4 March 2023" },
    { title: "Woww. That's suck", body: "none", date: "21 March 2023" },
  ];

  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur z-50 px-2 h-screen">
      <div className="bg-white shadow-md rounded-md w-[500px] md:w-[600px] lg:w-3/4 h-[80vh] md:h-[90vh] lg:h-[95vh] text-xs md:text-sm font-normal mx-3 md:mx-0 relative">
        <form onSubmit={handleSubmit} className="w-full h-full p-3 flex">
          <section className="w-1/5 px-1 pt-3 pb-2">
            <div className="w-full h-full border rounded-md px-2 text-xs font-semibold">
              {dummy.map((item) => (
                <div
                  className="w-full p-2 bg-gray-50 my-1 rounded-md"
                  key={item.title}>
                  {item.title}
                </div>
              ))}
            </div>
          </section>
          <section className="flex-grow py-2 px-3 w-4/5 flex flex-col">
            <div className="flex-grow">
              <textarea
                id="description"
                name="description"
                value={body}
                required
                onChange={(e) => setBody(e.target.value)}
                className="mt-1 border focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-200 p-2 h-full"
                placeholder="Start Writing Your Diary"
              />
            </div>
            <div className="mt-3 flex justify-between ">
              <div className="flex items-center">
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 border focus:ring-gray-400 focus:border-gray-400 block w-[300px] text-xs  border-gray-200 p-1.5 rounded-sm"
                  placeholder="Give a name to your memory"
                />
                <label className="ml-4 cursor-pointer text-gray-500 hover:text-gray-800 border py-1 px-3 mt-0.5 font-bold">
                  <input
                    type="file"
                    accept="image/*" // Only accept image files
                    onChange={() => {}}
                    className="hidden"
                  />
                  Add Image
                </label>
              </div>

              <button
                type="submit"
                className="px-4 py-1.5 rounded-sm bg-black text-white hover:bg-gray-900">
                Done
              </button>
            </div>
          </section>
        </form>
      </div>
    </main>
  );
};

export default DiaryCreateForm;
