"use client";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  handleBack: () => void;
  chooseDays: (input: string[]) => void;
  days: string[];
}

const ChooseDays: React.FC<Props> = ({ handleBack, chooseDays, days }) => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const handleSelectEveryday = () => {
    selectedDays.length === days.length
      ? setSelectedDays([])
      : setSelectedDays([...days]);
  };

  const handleSelectWeekends = () => {
    if (
      selectedDays.includes("sunday" && "saturday") &&
      selectedDays.length !== 7
    ) {
      setSelectedDays(
        selectedDays.filter((day) => day !== "saturday" && day !== "sunday")
      );
    } else {
      setSelectedDays(
        days.filter((day) => day === "saturday" || day === "sunday")
      );
    }
  };

  const handleSelectWeekdays = () => {
    if (
      !selectedDays.includes("sunday" && "saturday") &&
      selectedDays.length === 5
    ) {
      setSelectedDays(
        selectedDays.filter((day) => day === "saturday" || day === "sunday")
      );
    } else {
      setSelectedDays(
        days.filter((day) => day !== "saturday" && day !== "sunday")
      );
    }
  };

  const handleSelectDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day)
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleDone = () => {
    chooseDays(selectedDays);
    handleBack();
  };

  return (
    <main className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur z-50 px-2">
      <div className="mx-auto">
        <div className="bg-white shadow-md rounded-md p-4 w-3/4 md:w-[260px] lg:w-[400px]  text-xs md:text-sm font-normal ">
          <label className="block text-sm font-semibold text-gray-700 py-1 mb-4">
            Choose Days
          </label>
          <div className="font-semibold text-gray-800 text-[0.7rem]">
            <div className="flex mb-4 ">
              <button
                onClick={handleSelectEveryday}
                className={`px-2 py-[3px] mr-1 rounded-lg border ${
                  selectedDays.length === 7 ? "bg-gray-100" : ""
                }`}
                type="button">
                Everyday
              </button>
              <button
                className={`px-2 py-[3px] mr-1 rounded-lg border ${
                  selectedDays.includes("sunday" && "saturday") &&
                  selectedDays.length === 2
                    ? "bg-gray-100"
                    : ""
                }`}
                onClick={handleSelectWeekends}
                type="button">
                Weekends
              </button>
              <button
                className={`px-2 py-[3px] rounded-lg border  ${
                  !selectedDays.includes("sunday" && "saturday") &&
                  selectedDays.length === 5
                    ? "bg-gray-100"
                    : ""
                }`}
                type="button"
                onClick={handleSelectWeekdays}>
                WeekDays
              </button>
            </div>
            <div className="flex flex-wrap">
              {days.map((day) => (
                <button
                  className={`capitalize px-2 py-[3px] mr-1 mb-2 rounded-full border ${
                    selectedDays.includes(day) ? "bg-gray-300" : ""
                  }`}
                  key={day}
                  type="button"
                  onClick={() => handleSelectDay(day)}>
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
              type="button"
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
