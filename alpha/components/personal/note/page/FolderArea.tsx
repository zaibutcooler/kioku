"use client";

import Confirm from "@/components/error/Confirm";
import { NoteType } from "@/models/personal/Note";
import { NoteFolderType } from "@/models/personal/NoteFolder";
import deleteNoteFolder from "@/utils/delete/deleteNoteFolders";
import deleteNote from "@/utils/delete/deleteNotes";
import { useState } from "react";
import {
  AiFillFolderOpen,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineFolder,
  AiOutlineFolderOpen,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaFile, FaFolder, FaFolderPlus, FaStickyNote } from "react-icons/fa";

interface Props {
  folders: NoteFolderType[];
  notes: NoteType[];
  handleDeleteNote: (input: NoteType) => void;
  showNewFolderForm: () => void;
  handleNewNoteView: () => void;
  handleEditNoteView: (note: NoteType) => void;
  handleReadNoteView: (note: NoteType) => void;
  handleDeleteFolder: (input: NoteFolderType) => void;
  setCurrentFolder: (input: NoteFolderType) => void;
  loadingOne: boolean;
  loadingTwo: boolean;
}

const FolderArea: React.FC<Props> = ({
  folders,
  notes,
  showNewFolderForm,
  handleNewNoteView,
  handleEditNoteView,
  handleReadNoteView,
  handleDeleteFolder,
  handleDeleteNote,
  setCurrentFolder,
  loadingOne,
  loadingTwo,
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

  const [folderDeleteConfirm, setFolderDeleteConfirm] = useState("");
  const [noteDeleteConfirm, setNoteDeleteConfirm] = useState("");

  const renderNotes = (folderID: string) => {
    const items = notes.filter((note) => note.folder === folderID);
    return (
      <main className="text-xs pl-3 w-full">
        {items.map((item) => (
          <div
            className={`flex items-center justify-between py-1 my-1 w-full px-2 rounded-md ${
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
            <div className="text-sm">
              <button
                className="mx-2 p-1 rounded-full hover:bg-gray-200"
                onClick={() => {
                  setNoteDeleteConfirm(item._id);
                }}>
                <AiOutlineDelete />
              </button>
              <button
                className=" p-1 rounded-full hover:bg-gray-200"
                onClick={() => handleEditNoteView(item)}>
                <AiOutlineEdit />
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  };

  const handleFolderDeleteClick = async (id: string) => {
    const deletedFolder = await deleteNoteFolder(id);
    deletedFolder && handleDeleteFolder(deletedFolder);
    setFolderDeleteConfirm("");
  };

  const handleNoteDeleteClick = async (id: string) => {
    const deletedNote = await deleteNote(id);
    deletedNote && handleDeleteNote(deletedNote);
    setNoteDeleteConfirm("");
  };

  return (
    <div className="w-full h-full border rounded-sm py-5 px-3 font-semibold">
      {folderDeleteConfirm && (
        <Confirm
          handleBack={() => setFolderDeleteConfirm("")}
          handleConfirm={() => {
            handleFolderDeleteClick(folderDeleteConfirm);
          }}
          text="delete this folder"
        />
      )}
      {noteDeleteConfirm && (
        <Confirm
          handleBack={() => setNoteDeleteConfirm("")}
          handleConfirm={() => {
            handleNoteDeleteClick(noteDeleteConfirm);
          }}
          text="delete this note"
        />
      )}

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
        {!loadingOne ? (
          <>
            {folders ? (
              folders.map((folder) => (
                <main key={folder._id}>
                  <div
                    className={`flex items-center justify-between px-3 py-2 w-full hover:bg-gray-50 rounded-md ${
                      selectedFolder === folder._id ? "bg-gray-100" : ""
                    }`}>
                    <button
                      className={`flex items-center `}
                      onClick={() => {
                        selectFolder(folder);
                      }}>
                      {selectedFolder === folder._id ? (
                        <AiFillFolderOpen className="mr-2 text-lg" />
                      ) : (
                        <AiOutlineFolder className="mr-2 text-lg" />
                      )}

                      <span>{folder.name}</span>
                    </button>
                    <div className="flex items-center text-sm gap-2">
                      <button
                        className="p-1.5 rounded-full hover:bg-gray-200"
                        onClick={() => {
                          setFolderDeleteConfirm(folder._id);
                        }}>
                        <AiOutlineDelete />
                      </button>
                      <button
                        className={`p-1.5 rounded-full hover:bg-gray-200 ${
                          openedFolder === folder._id
                            ? "bg-gray-200 hover:font-bold"
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
              ))
            ) : (
              <div>None</div>
            )}
          </>
        ) : (
          <div>Loading</div>
        )}
      </section>
    </div>
  );
};

export default FolderArea;
