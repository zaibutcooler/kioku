"use client";

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {}

const StatusCreateForm: React.FC<Props> = ({}) => {
  const [body, setBody] = useState("");

  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur z-50 px-2">
      <div className="bg-white shadow-md rounded-md w-[500px] md:w-[600px] lg:w-3/4 h-[80vh] md:h-[90vh] lg:h-[95vh] text-xs md:text-sm font-normal mx-3 md:mx-0 relative">
        {" "}
        {/* <-- Add relative positioning */}
        <div className="w-full h-full p-3 flex">
          <section className="w-1/5 border-r hidden md:block font-normal">
            <div>
              <h1 className="text-center text-lg font-bold pt-4">
                Write Diary
              </h1>
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
            </div>
          </section>
          <section className="w-full md:w-4/5 md:pl-3">
            <ReactQuill
              value={body}
              theme="snow"
              onChange={(newValue: string) => setBody(newValue)}
              placeholder="Start typing your diary here..."
              style={{ height: "80vh" }}
            />
          </section>
        </div>
      </div>
    </main>
  );
};

export default StatusCreateForm;
