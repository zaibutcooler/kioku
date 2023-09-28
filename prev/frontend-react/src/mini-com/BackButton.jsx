import React from "react";

const BackButton = ({ onClick }) => {
  return (
    <button
      className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300 focus:outline-none"
      onClick={onClick}>
      <svg
        className="w-4 h-4 mr-2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 19L5 12L15 5V19Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back
    </button>
  );
};

export default BackButton;
