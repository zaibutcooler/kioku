import React, { useState } from "react";
import { FiCheck, FiChevronUp, FiChevronDown } from "react-icons/fi";
import {
  IoSchoolOutline,
  IoBriefcaseOutline,
  IoBulbOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { BsCalendar } from "react-icons/bs";

const categories = [
  {
    id: 1,
    name: "School",
    icon: <IoSchoolOutline className="h-5 w-5" />,
  },
  {
    id: 2,
    name: "Job",
    icon: <IoBriefcaseOutline className="h-5 w-5" />,
  },
  {
    id: 3,
    name: "Idea",
    icon: <IoBulbOutline className="h-5 w-5" />,
  },
  {
    id: 4,
    name: "Mindfulness",
    icon: <IoHeartOutline className="h-5 w-5" />,
  },
  {
    id: 5,
    name: "Calendar",
    icon: <BsCalendar className="h-5 w-5" />,
  },
];

export default function IconDropDown({
  selectedOne,
}: {
  selectedOne: (name: string) => void;
}) {
  const [selected, setSelected] = useState(categories[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (category: any) => {
    setSelected(category);
    setIsOpen(false);
  };

  return (
    <div className="relative text-xs font-semibold">
      <div
        className="flex border  items-center w-[160px] bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        {selected.icon}
        <span className="ml-3 block truncate">{selected.name}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
          {isOpen ? (
            <FiChevronUp className="h-5 w-5 text-gray-400" />
          ) : (
            <FiChevronDown className="h-5 w-5 text-gray-400" />
          )}
        </span>
      </div>

      {/* Render the options when the select box is open */}
      {isOpen && (
        <div
          className="absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg "
          onMouseLeave={() => setIsOpen(false)}>
          {categories.map((category) => (
            <div
              key={category.id}
              className={`flex items-center hover:bg-gray-200 cursor-pointer py-2 pl-3 pr-9 ${
                category.id === selected.id
                  ? "bg-gray-600 text-white font-semibold hover:bg-gray-700"
                  : "text-gray-900"
              }`}
              onClick={() => {
                handleOptionSelect(category);
                selectedOne(category.name);
              }}>
              <span className="text-xs">{category.icon}</span>
              <span className="ml-3 block truncate">{category.name}</span>
              {category.id === selected.id && (
                <FiCheck className="h-5 w-5 ml-auto" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
