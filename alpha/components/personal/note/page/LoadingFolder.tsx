import React from "react";

const LoadingFolder = () => {
  const arr = ["", "", "", "", "", ""];

  return (
    <main>
      {arr.map((item, index) => (
        <div key={index}>
          {" "}
          <div className="px-3 py-2 rounded-lg animate-pulse flex gap-4 items-center">
            <div className="w-[30px] h-6 bg-gray-100 rounded"></div>

            <div className="w-3/4 h-6 bg-gray-100 rounded"></div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default LoadingFolder;
