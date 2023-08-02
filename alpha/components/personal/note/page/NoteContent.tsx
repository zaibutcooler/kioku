"use client";

import { useState } from "react";

const NoteContent = () => {
  const [toggleView, setToggleView] = useState(true);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="w-full h-full">
      {toggleView ? (
        <section className="w-full h-full">
          <div className="w-full mb-4 flex">
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 border mr-2 focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-200 rounded-sm p-2"
              placeholder="Your Title"
            />
            <button className="py-1 px-4 text-xs bg-black text-white rounded-sm">
              Create
            </button>
          </div>
          <div className="flex flex-grow">
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
        </section>
      ) : (
        <section className="w-full h-full border rounded-sm"></section>
      )}
    </div>
  );
};

export default NoteContent;
