"use client";

import { NoteType } from "@/models/personal/Note";
import { NoteFolderType } from "@/models/personal/NoteFolder";
import { useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineFolder,
  AiOutlineFolderOpen,
} from "react-icons/ai";
import { FaFolderPlus } from "react-icons/fa";

interface Props {
  folders: NoteFolderType[];
  notes: NoteType[];
}

const FolderArea: React.FC<Props> = ({ folders, notes }) => {
  const [openedFolder, setOpenedFolder] = useState("");

  const renderNotes = (folderID: string) => {
    const items = notes.filter((note) => note.folder === folderID);
    return (
      <main>
        {items.map((item) => (
          <div>{item.title}</div>
        ))}
      </main>
    );
  };

  return (
    <div className="w-full h-full border rounded-sm p-5 font-semibold">
      <section className="w-full">
        <div className=" px-3 flex justify-between items-center pb-3 ">
          <h1 className="font-semibold text-base">Folders</h1>
          <button
            onClick={() => {}}
            className="p-1 border rounded-sm text-sm hover:bg-gray-50">
            <FaFolderPlus />
          </button>
        </div>

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
                      openedFolder === folder._id ? "bg-gray-300" : ""
                    }`}
                    onClick={() => setOpenedFolder(folder._id)}>
                    <AiOutlineFolderOpen />
                  </button>
                </div>
              </div>
              {openedFolder === folder._id && renderNotes(folder._id)}
            </main>
          ))}
      </section>
      <section></section>
    </div>
  );
};

export default FolderArea;
