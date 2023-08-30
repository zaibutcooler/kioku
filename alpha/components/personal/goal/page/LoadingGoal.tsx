import React from "react";
import LoadingMiniGoal from "./LoadingMiniGoal";

const LoadingGoal = () => {
  const arr = ["", "", "", "", "", ""];

  return (
    <main>
      {arr.map((item, index) => (
        <div key={index}>
          {" "}
          <div className="p-4 border rounded-lg mb-3 animate-pulse">
            <div className="w-3/4 h-5 bg-gray-100 rounded mb-2"></div>
            <LoadingMiniGoal />
            <div className="mt-2 h-4 bg-gray-100 rounded"></div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default LoadingGoal;
