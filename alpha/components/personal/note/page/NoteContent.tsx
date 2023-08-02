"use client";

import { useState } from "react";

interface Props {
  view: string;
  handleChange: (form: string, value: string) => void;
  title: string;
  body: string;
  related: string;
  toggleView: () => void;
}

const NoteContent: React.FC<Props> = ({
  view,
  title,
  body,
  related,
  handleChange,
  toggleView,
}) => {
  return (
    <div className="w-full h-full">
      {view === "create" && (
        <section className="w-full h-full flex flex-col">
          <div className="w-full mb-2 flex">
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              required
              onChange={(e) => handleChange("title", e.target.value)}
              className="mb-1 border mr-2 focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-200 rounded-sm p-2"
              placeholder="Your Title"
            />
            <button className="py-1 px-4 mb-1 text-xs bg-black text-white rounded-sm">
              Create
            </button>
          </div>
          <div className="flex-grow pb-1">
            <textarea
              id="description"
              name="description"
              value={body}
              required
              onChange={(e) => handleChange("body", e.target.value)}
              className="mt-1 border focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-200 p-2 h-full"
              placeholder="Start Writing Your Diary"
            />
          </div>
        </section>
      )}
      {view === "read" && (
        <section className="w-full h-full border rounded-sm p-4">
          <div className="w-full flex justify-end">
            <button className="px-1 font-semibold text-xs text-black rounded-sm">
              Close
            </button>
          </div>
          <main className="p-2">
            <h1 className="font-semibold">This is title of the note</h1>

            <div></div>
          </main>
        </section>
      )}
      {view === "" && (
        <section className="w-full h-full border rounded-sm p-4"></section>
      )}
    </div>
  );
};

export default NoteContent;
