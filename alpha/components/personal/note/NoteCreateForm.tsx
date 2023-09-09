"use client";

import { useEffect, useState } from "react";
import {
  AiFillFolder,
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineFolder,
  AiOutlineFolderOpen,
  AiOutlineLike,
} from "react-icons/ai";
import NoteFolderCreateForm from "./NoteFolderCreateForm";
import { FaFolderPlus } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoFolderOpen } from "react-icons/io5";
import RelatedDropDown from "./RelatedDropDown";
import createNote from "@/utils/create/createNote";
import fetchNotes from "@/utils/fetch/fetchNotes";
import fetchNoteFolders from "@/utils/fetch/fetchNoteFolders";
import { NoteFolderType } from "@/models/personal/NoteFolder";
import { NoteType } from "@/models/personal/Note";
import { BsFolderCheck } from "react-icons/bs";
import Confirm from "@/components/error/Confirm";
import deleteNoteFolder from "@/utils/delete/deleteNoteFolders";
import { useSession } from "next-auth/react";

interface Props {
  handleBack: () => void;
}

const NoteCreateForm: React.FC<Props> = ({ handleBack }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [related, setRelated] = useState("default");

  const { data: session } = useSession();
  const userID = session?.user._id as string;

  const [currentFolder, setCurrentFolder] = useState<NoteFolderType | null>(
    null
  );
  const [showFolderForm, setShowFolderForm] = useState(false);
  const [deleteFolder, setDeleteFolder] = useState("");

  const [folders, setFolders] = useState<NoteFolderType[]>([]);
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [openedFolder, setOpenedFolder] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDatas = async () => {
      setIsLoading(true);
      const folderDatas = await fetchNoteFolders(userID);
      folderDatas && setFolders(folderDatas);
      folderDatas && setCurrentFolder(folderDatas[0]);
      const noteDatas = await fetchNotes(userID);
      noteDatas && setNotes(noteDatas);
      setIsLoading(false);
    };
    getDatas();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const newNote = await createNote({
      user: userID,
      title,
      content,
      folder: currentFolder ? currentFolder._id : "",
      related,
    });
    newNote && setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
    setRelated("default");
  };

  const handleFolderDelete = async (id: string) => {
    const deletedFolder = await deleteNoteFolder(id);
    setFolders(folders.filter((folder) => folder._id !== deletedFolder._id));
    setDeleteFolder("");
  };

  const displayNotes = (folder: NoteFolderType) => {
    const items = notes.filter((note) => note.folder === folder._id);
    return (
      <div className="text-[0.7rem] font-semibold text-gray-700">
        {items ? (
          items.map((item) => (
            <button key={item._id} className="flex mb-1 pl-3 items-center">
              <AiOutlineLike className="mb-1" />
              <span className="ml-2">{item.title}</span>
            </button>
          ))
        ) : (
          <div>...</div>
        )}
      </div>
    );
  };

  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur z-50 px-2">
      {showFolderForm && (
        <NoteFolderCreateForm
          handleBack={() => setShowFolderForm(false)}
          handleNewFolder={(newFolder) => {
            setFolders([newFolder, ...folders]);
            setCurrentFolder(newFolder);
          }}
        />
      )}
      {deleteFolder && (
        <Confirm
          handleBack={() => setDeleteFolder("")}
          handleConfirm={() => {
            handleFolderDelete(deleteFolder);
          }}
          text="hi"
        />
      )}
      <div className="mx-auto">
        <div className="bg-white shadow-md rounded-md py-4 w-full md:w-[600px] lg:w-[120vh] text-xs md:text-sm font-normal">
          <div className="h-[40px] px-8 flex border-b border-gray-100 justify-between items-top">
            <span className="font-semibold">Caputure Your Thoughts</span>
            <button onClick={handleBack}>
              <AiOutlineClose className="font-bold" />
            </button>
          </div>
          <section className="flex">
            <form
              onSubmit={handleSubmit}
              className="bg-white space-y-4 px-8 py-3 h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-3/4 flex flex-col">
              <div>
                <label className="block text-xs font-medium text-gray-700">
                  {currentFolder ? `` : ""}
                </label>

                <div className="flex justify-between items-center">
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
                  <div className="pt-1">
                    <RelatedDropDown
                      selectedOne={(name: string) => setRelated(name)}
                      related={related}
                    />
                  </div>
                </div>
              </div>

              <div className="flex-grow">
                <textarea
                  id="description"
                  name="description"
                  value={content}
                  required
                  onChange={(e) => setContent(e.target.value)}
                  rows={4}
                  className="mt-1 border focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-200 rounded-sm p-2 h-full" // Set the height to 100%
                  placeholder="Your Description"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-1 rounded-md bg-black text-white hover:bg-gray-900">
                  Done
                </button>
              </div>
            </form>

            <div className="py-3 bg-gray-50 w-1/4">
              <main className="w-full h-full bg-white">
                <div className=" px-3 flex justify-between items-center pb-3 ">
                  <h1 className="font-semibold text-sm">Folders</h1>
                  <button
                    onClick={() => setShowFolderForm(true)}
                    className="p-1 border rounded-sm text-xs">
                    <FaFolderPlus />
                  </button>
                </div>
                <div className="h-full px-4">
                  {!isLoading ? (
                    <section>
                      {currentFolder
                        ? folders.map((item) => (
                            <div key={item._id}>
                              <div className=" font-semibold text-gray-700 text-xs flex justify-between w-full py-1 items-center">
                                <button
                                  onClick={() => setCurrentFolder(item)}
                                  className="flex items-top">
                                  {currentFolder &&
                                  currentFolder._id === item._id ? (
                                    <AiFillFolder className="text-base mr-2" />
                                  ) : (
                                    <AiOutlineFolder className="text-base mr-2" />
                                  )}

                                  {item.name}
                                </button>
                                <div className="flex items-center">
                                  <button
                                    className="p-1 rounded-full hover:bg-gray-100  mr-2"
                                    onClick={() => {
                                      setDeleteFolder(item._id);
                                    }}>
                                    <AiOutlineDelete />
                                  </button>

                                  <button
                                    className={`p-1 rounded-full hover:bg-gray-100 ${
                                      openedFolder === item._id
                                        ? "bg-gray-200 hover:bg-gray-300"
                                        : ""
                                    }`}
                                    onClick={() => {
                                      openedFolder === item._id
                                        ? setOpenedFolder("")
                                        : setOpenedFolder(item._id);
                                    }}>
                                    <AiOutlineFolderOpen />
                                  </button>
                                </div>
                              </div>
                              {openedFolder === item._id && displayNotes(item)}
                            </div>
                          ))
                        : ""}
                    </section>
                  ) : (
                    <section>Loading...</section>
                  )}
                </div>
              </main>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default NoteCreateForm;
