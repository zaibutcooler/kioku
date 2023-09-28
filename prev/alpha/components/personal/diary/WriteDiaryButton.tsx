"use client";

import { setGadget } from "@/data/store/gadgetSlice";
import { useDispatch } from "react-redux";

const WriteDiaryButton = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="py-2 rounded-md px-4 bg-black text-white text-xs"
        onClick={() => {
          dispatch(setGadget("diary"));
        }}>
        Write Diary
      </button>
    </div>
  );
};

export default WriteDiaryButton;
