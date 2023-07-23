import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  handleBack: () => void;
}

const NoteCreateForm: React.FC<Props> = ({ handleBack }) => {
  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur z-50 px-2">
      <div className="mx-auto">
        <div className="bg-white shadow-md rounded-md py-4 w-full md:w-[600px] lg:w-[750px] text-xs md:text-sm font-normal">
          <div className="h-[40px] px-8 flex border-b border-gray-100 justify-between items-top">
            <span className="font-semibold">Caputure Your Thoughts</span>
            <button onClick={handleBack}>
              <AiOutlineClose className="font-bold" />
            </button>
          </div>
          <section className="flex">
            <form className="bg-bg_white space-y-4 px-8 py-3 h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-3/4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-xs font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-300 rounded-md p-2"
                  placeholder="Your Title"
                />
              </div>

              <div>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  className="mt-1 focus:ring-gray-400 focus:border-gray-400 block w-full text-xs border-gray-300 rounded-md p-2"
                  placeholder="Your Description"
                />
              </div>

              <button
                type="submit"
                className="px-4 py-1 rounded-lg border border-black ">
                Done
              </button>
            </form>
            <div className="p-3 border bg-gray-50 w-1/4">
              <main className="w-full h-full bg-white"></main>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default NoteCreateForm;
