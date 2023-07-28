"use client";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  handleBack: () => void;
  chooseDays: (name: string[]) => void;
  days: string[];
}

const ChooseDays: React.FC<Props> = ({ handleBack, chooseDays, days }) => {
  const handleDone = async () => {};

  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur z-50 px-2">
      <div className="mx-auto">
        <div className="bg-white shadow-md rounded-md py-4 w-3/4 md:w-[260px] lg:w-[400px]  text-xs md:text-sm font-normal px-4">
          <label className="block text-sm font-semibold text-gray-700 py-1 mb-4">
            Choose Days
          </label>
          <div className="font-semibold text-gray-800 text-[0.7rem]">
            <div className="flex mb-3 ">
              <button className="px-3 py-[3px] mr-1" type="button">
                Weekends
              </button>
              <button className="px-3 py-[3px]" type="button">
                WeekDays
              </button>
            </div>
            <div className="flex">
              {days.map((day) => (
                <button
                  className="capitalize px-2 py-[3px] mr-1"
                  key={day}
                  type="button">
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full mt-4 flex justify-between text-xs items-center">
            <button className="font-semibold px-1" onClick={handleBack}>
              Back
            </button>
            <button
              className="px-3 py-1.5 bg-black text-white rounded-md"
              onClick={handleDone}>
              Done
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChooseDays;
