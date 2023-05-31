import React, { useState } from "react";

const ToggleReflect = ({ selectedButton }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonData) => {
    setActiveButton(buttonData);
    selectedButton(buttonData);
  };

  return (
    <div className="flex my-4 justify-center">
      <button
        className={`px-10 py-2 w-48 rounded-l-full ${
          activeButton === 1 ? "bg-gray-300" : "bg-gray-200"
        } text-sm text-black font-semibold w-auto`}
        onClick={() => handleButtonClick(1)}>
        Goals
      </button>
      <button
        className={`px-10 py-2 w-48 ${
          activeButton === 2 ? "bg-gray-300" : "bg-gray-200"
        } text-sm text-black font-semibold w-auto`}
        onClick={() => handleButtonClick(2)}>
        Failures
      </button>
      <button
        className={`px-10 py-2 w-48 ${
          activeButton === 3 ? "bg-gray-300" : "bg-gray-200"
        } text-sm text-black font-semibold w-auto`}
        onClick={() => handleButtonClick(3)}>
        Accomplishments
      </button>
      <button
        className={`px-10 py-2 w-48 rounded-r-full ${
          activeButton === 4 ? "bg-gray-300" : "bg-gray-200"
        } text-sm text-black font-semibold w-auto`}
        onClick={() => handleButtonClick(4)}>
        Other
      </button>
    </div>
  );
};

export default ToggleReflect;
