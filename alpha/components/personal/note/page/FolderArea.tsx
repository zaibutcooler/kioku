"use client";

import { NoteType } from "@/models/personal/Note";
import { NoteFolderType } from "@/models/personal/NoteFolder";
import { useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineFolder,
  AiOutlineFolderOpen,
} from "react-icons/ai";
import { FaFile, FaFolder, FaFolderPlus, FaStickyNote } from "react-icons/fa";

interface Props {
  folders: NoteFolderType[];
  notes: NoteType[];
}

const FolderArea: React.FC<Props> = ({ folders, notes }) => {
  const [openedFolder, setOpenedFolder] = useState("");

  const renderNotes = (folderID: string) => {
    const items = notes.filter((note) => note.folder === folderID);
    return (
      <main className="text-xs">
        {items.map((item) => (
          <div className="flex">
            <span>{item.title}</span>
          </div>
        ))}
      </main>
    );
  };

  return (
    <div className="w-full h-full border rounded-sm py-5 px-3 font-semibold">
      <section className="w-full">
        <div className=" px-3 flex justify-between items-center pb-3 ">
          <h1 className="font-semibold text-base pl-2">Your Notes</h1>
          <div>
            <button
              onClick={() => {}}
              className="p-1 border rounded-sm text-sm hover:bg-gray-50 mr-2">
              <FaStickyNote />
            </button>

            <button
              onClick={() => {}}
              className="p-1 border rounded-sm text-sm hover:bg-gray-50">
              <FaFolder />
            </button>
          </div>
        </div>
      </section>
      <section className="px-2">
        {" "}
        {folders &&
          folders.map((folder) => (
            <main key={folder._id}>
              <div className="flex items-center justify-between px-3 py-2 w-full hover:bg-gray-50 rounded-md">
                <button className="flex items-center">
                  <AiOutlineFolder className="mr-2 text-lg" />
                  <span>{folder.name}</span>
                </button>
                <div className="flex items-center text-sm gap-2">
                  <button className="p-1.5 rounded-full hover:bg-gray-100">
                    <AiOutlineDelete />
                  </button>
                  <button
                    className={`p-1.5 rounded-full hover:bg-gray-100 ${
                      openedFolder === folder._id
                        ? "bg-gray-300 hover:bg-gray-400"
                        : ""
                    }`}
                    onClick={() => setOpenedFolder(folder._id)}>
                    <AiOutlineUnorderedList />
                  </button>
                </div>
              </div>
              {openedFolder === folder._id && renderNotes(folder._id)}
            </main>
          ))}
      </section>
    </div>
  );
};

export default FolderArea;
