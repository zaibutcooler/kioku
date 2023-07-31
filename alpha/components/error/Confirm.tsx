"use client";

import createNoteFolder from "@/utils/create/createNoteFolder";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  handleBack: () => void;
  handleConfirm: () => void;
  text: string;
}

const Confirm: React.FC<Props> = ({ handleBack, handleConfirm, text }) => {
  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur z-50 px-2">
      <div className="mx-auto">
        <div className="bg-white shadow-md rounded-md py-4 w-3/4 md:w-[260px] lg:w-[300px]  text-xs md:text-sm font-normal px-4">
          <label className="block text-sm text-center font-semibold text-gray-700 py-1 mb-4">
            Confirm
          </label>
          <div>Are you sure you want to delete? It will be lost forever.</div>
          <div className="w-full mt-4 flex justify-between text-xs items-center">
            <button className="font-semibold px-1" onClick={handleBack}>
              Back
            </button>
            <button
              className="px-3 py-1.5 bg-black text-white rounded-sm"
              onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Confirm;
