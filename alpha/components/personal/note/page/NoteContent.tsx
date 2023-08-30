"use client";

import { NoteCreateType, NoteType } from "@/models/personal/Note";
import createNote from "@/utils/create/createNote";
import { useState } from "react";

interface Props {
  view: string;
  handleChange: (form: string, value: string) => void;
  title: string;
  body: string;
  related: string;
  toggleView: (input: string) => void;
  handleNewNote: () => void;
  handleEditNote: () => void;
  hanldeDeleteNote: (input: NoteType) => void;
}

const NoteContent: React.FC<Props> = ({
  view,
  title,
  body,
  related,
  handleChange,
  toggleView,
  handleNewNote,
  handleEditNote,
  hanldeDeleteNote,
}) => {
  const handleDeleteClick = () => {};

  const handleEditClick = () => {};

  return (
    <div className="w-full h-full">
      {(view === "create" || view === "edit") && (
        <section className="w-full h-full flex flex-col p-3 border rounded-sm">
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
            <button
              onClick={() => {
                view === "edit"
                  ? handleEditNote()
                  : title.length > 0 && body.length > 0 && handleNewNote();
              }}
              className={`py-1 px-4 mb-1 text-xs bg-black text-white rounded-sm w-[80px] `}>
              {view === "edit" ? "Save" : "Create"}
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
            <button
              className="px-1 font-semibold text-xs text-black rounded-sm"
              onClick={() => toggleView("")}>
              Close
            </button>
          </div>
          <main className="p-2">
            <h1 className="font-semibold mb-4">{title}</h1>

            <div className="leading-loosen text-sm text-gray-600">{body}</div>
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
