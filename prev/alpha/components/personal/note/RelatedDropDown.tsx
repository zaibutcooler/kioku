"use client";
import React from "react";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const RelatedDropDown = ({
  selectedOne,
  related,
}: {
  selectedOne: (name: string) => void;
  related: string;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [{ value: "book" }, { value: "work" }, { value: "idea" }];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        type="button"
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        {related === "default" ? (
          <span>Related</span>
        ) : (
          <span className="capitalize">{related}</span>
        )}
        <IoChevronDownOutline
          className="-mr-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </button>

      {isDropdownOpen && (
        <div
          onMouseLeave={() => setIsDropdownOpen(false)}
          className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  selectedOne(option.value);
                  setIsDropdownOpen(false);
                }}
                className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 w-full capitalize">
                {option.value}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RelatedDropDown;
