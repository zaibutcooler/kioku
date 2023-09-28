"use client";
import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const ProgressBar: React.FC = () => {
  return (
    <div className="w-full p-6 bg-white rounded-sm border">
      <CalendarHeatmap
        startDate={new Date("2016-01-01")}
        endDate={new Date("2016-12-30")}
        values={[
          { date: "2016-01-01", count: 12 },
          { date: "2016-01-22", count: 122 },
          { date: "2016-01-30", count: 38 },
          // ...and so on
        ]}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          } else if (value.count <= 30) {
            return "color-scale-30"; // Customize the class name and color for 0-30 commits
          } else if (value.count <= 90) {
            return "color-scale-90"; // Customize the class name and color for 31-90 commits
          } else {
            return "color-scale-120"; // Customize the class name and color for more than 90 commits
          }
        }}
      />
    </div>
  );
};

export default ProgressBar;
