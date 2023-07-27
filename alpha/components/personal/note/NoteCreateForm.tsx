"use client";

import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import NoteFolderCreateForm from "./NoteFolderCreateForm";
import { FaFolderPlus } from "react-icons/fa";

interface Props {
  handleBack: () => void;
}

const NoteCreateForm: React.FC<Props> = ({ handleBack }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [related, setRelated] = useState("");

  const userID = "64c16d804043c533448db52e";

  const [newFolderName, setNewFolderName] = useState("");
  const [currentFolder, setCurrentFolder] = useState("");
  const [showFolderForm, setShowFolderForm] = useState(false);

  const [folders, setFolders] = useState<any[]>([]);

  useEffect(() => {
    const fillDatas = async () => {
      const responseOne = await fetch(`/api/note/folder?userID=${userID}`);
      const folders: any[] = await responseOne.json();
      setFolders(folders);

      const responseTwo = await fetch(`/api/note?userID=${userID}`);
    };
    fillDatas();
  }, []);

  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur z-50 px-2">
      {showFolderForm && (
        <NoteFolderCreateForm handleBack={() => setShowFolderForm(false)} />
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
            <form className="bg-bg_white space-y-4 px-8 py-3 h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-3/4">
              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="mt-1 border focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-200 rounded-sm p-2"
                  placeholder="Your Title"
                />
              </div>

              <div>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={4}
                  className="mt-1 border focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-200 rounded-sm p-2"
                  placeholder="Your Description"
                />
              </div>

              <button
                type="submit"
                className="px-4 py-1 rounded-lg border border-black ">
                Done
              </button>
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
                <div className="h-full pl-4 pr-3">
                  {folders && folders.map((item) => <div>{item.name}</div>)}
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
