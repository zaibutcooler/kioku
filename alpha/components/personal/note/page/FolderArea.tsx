"use client";

import { NoteType } from "@/models/personal/Note";
import { NoteFolderType } from "@/models/personal/NoteFolder";
import deleteNoteFolder from "@/utils/delete/deleteNoteFolders";
import { useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineFolder,
  AiOutlineFolderOpen,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaFile, FaFolder, FaFolderPlus, FaStickyNote } from "react-icons/fa";

interface Props {
  folders: NoteFolderType[];
  notes: NoteType[];
  showNewFolderForm: () => void;
  handleNewNoteView: () => void;
  handleEditNoteView: (note: NoteType) => void;
  handleReadNoteView: (note: NoteType) => void;
  handleDeleteFolder: (input: NoteFolderType) => void;
  setCurrentFolder: (input: NoteFolderType) => void;
}

const FolderArea: React.FC<Props> = ({
  folders,
  notes,
  showNewFolderForm,
  handleNewNoteView,
  handleEditNoteView,
  handleReadNoteView,
  handleDeleteFolder,
  setCurrentFolder,
}) => {
  const [openedFolder, setOpenedFolder] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("");
  const [selectedNote, setSelectedNote] = useState("");

  const selectFolder = (folder: NoteFolderType) => {
    setCurrentFolder(folder);
    setSelectedFolder(folder._id);
  };

  const selectNote = (note: NoteType) => {
    handleReadNoteView(note);
    setSelectedNote(note._id);
  };

  const renderNotes = (folderID: string) => {
    const items = notes.filter((note) => note.folder === folderID);
    return (
      <main className="text-xs pl-3 w-full">
        {items.map((item) => (
          <div
            className={`flex items-center justify-between py-1 my-1 w-full px-1 ${
              selectedNote === item._id ? "bg-gray-100" : ""
            }`}
            key={item._id}>
            <button
              className="flex items-center"
              onClick={() => selectNote(item)}>
              <div className="mr-2 ">
                <FaFile />
              </div>
              <span>{item.title}</span>
            </button>
          </div>
        ))}
      </main>
    );
  };

  const handleDeleteClick = async (folder: NoteFolderType) => {
    const deletedFolder = await deleteNoteFolder(folder._id);
    handleDeleteFolder(deletedFolder);
  };

  return (
    <div className="w-full h-full border rounded-sm py-5 px-3 font-semibold">
      <section className="w-full">
        <div className=" px-3 flex justify-between items-center pb-3 ">
          <h1 className="font-semibold text-base pl-2">Your Notes</h1>
          <div>
            <button
              onClick={handleNewNoteView}
              className="p-1 border rounded-sm text-sm hover:bg-gray-50 mr-2">
              <FaStickyNote />
            </button>

            <button
              onClick={showNewFolderForm}
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
              <div
                className={`flex items-center justify-between px-3 py-2 w-full hover:bg-gray-50 rounded-md ${
                  selectedFolder === folder._id ? "bg-gray-100" : ""
                }
                  `}>
                <button
                  className={`flex items-center `}
                  onClick={() => {
                    selectFolder(folder);
                  }}>
                  <AiOutlineFolder className="mr-2 text-lg" />
                  <span>{folder.name}</span>
                </button>
                <div className="flex items-center text-sm gap-2">
                  <button
                    className="p-1.5 rounded-full hover:bg-gray-100"
                    onClick={() => handleDeleteClick(folder)}>
                    <AiOutlineDelete />
                  </button>
                  <button
                    className={`p-1.5 rounded-full hover:bg-gray-100 ${
                      openedFolder === folder._id
                        ? "bg-gray-300 hover:bg-gray-400"
                        : ""
                    }`}
                    onClick={() =>
                      openedFolder === folder._id
                        ? setOpenedFolder("")
                        : setOpenedFolder(folder._id)
                    }>
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
