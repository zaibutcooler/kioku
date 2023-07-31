"use client";

import {
  NoteFolderCreateType,
  NoteFolderType,
} from "@/models/personal/NoteFolder";
import createNoteFolder from "@/utils/create/createNoteFolder";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  handleBack: () => void;
  handleNewFolder: (newFolder: NoteFolderType) => void;
}

const NoteFolderCreateForm: React.FC<Props> = ({
  handleBack,
  handleNewFolder,
}) => {
  const [name, setName] = useState("");

  const userID = "64c16d804043c533448db52e";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const newNote = await createNoteFolder({
      user: userID,
      name,
    });
    newNote && handleNewFolder(newNote);
    handleBack();
  };

  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur z-50 px-2">
      <div className="mx-auto">
        <div className="bg-white shadow-md rounded-md py-4 w-3/4 md:w-[260px] lg:w-[300px]  text-xs md:text-sm font-normal px-4">
          <label className="block text-sm font-semibold text-gray-700 py-1 mb-4">
            Create New Folder
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 border  block w-full text-xs border-gray-200 rounded-sm p-2"
            placeholder="Folder Name"
          />
          <div className="w-full mt-4 flex justify-between text-xs items-center">
            <button className="font-semibold px-1" onClick={handleBack}>
              Back
            </button>
            <button
              className="px-3 py-1.5 bg-black text-white rounded-sm"
              onClick={handleSubmit}>
              Create
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NoteFolderCreateForm;
