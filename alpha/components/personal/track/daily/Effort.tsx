"use client";
import React from "react";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const Effort = ({
  selectedOne,
  prime,
  options,
}: {
  selectedOne: (name: string) => void;
  prime: string;
  options: any[];
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative inline-block text-left ">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        type="button"
        className="inline-flex justify-between items-center gap-x-1.5 rounded-md w-[60px] bg-white px-3 py-1 text-[0.6rem] font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        {prime === "default" ? (
          <span>Effort</span>
        ) : (
          <span className="capitalize">{prime}</span>
        )}
        <IoChevronDownOutline
          className="-mr-1  w-2 text-gray-400"
          aria-hidden="true"
        />
      </button>

      {isDropdownOpen && (
        <div
          onMouseLeave={() => setIsDropdownOpen(false)}
          className="absolute right-0 z-10 mt-2 w-[80px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  selectedOne(option);
                  setIsDropdownOpen(false);
                }}
                className="block px-4 py-1 text-[0.6rem] text-gray-700 hover:bg-gray-100 w-full capitalize">
                {option} %
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Effort;
