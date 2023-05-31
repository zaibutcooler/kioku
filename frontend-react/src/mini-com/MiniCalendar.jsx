import React from "react";

const MiniCalendar = () => {
  // Generate calendar data (dummy data for demonstration)
  const calendarData = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, "", "", "", ""],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-xs mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200 text-gray-800">
                <th className="py-1 text-xs px-1">Sun</th>
                <th className="py-1 text-xs px-1">Mon</th>
                <th className="py-1 text-xs px-1">Tue</th>
                <th className="py-1 text-xs px-1">Wed</th>
                <th className="py-1 text-xs px-1">Thu</th>
                <th className="py-1 text-xs px-1">Fri</th>
                <th className="py-1 text-xs px-1">Sat</th>
              </tr>
            </thead>
            <tbody>
              {calendarData.map((week, index) => (
                <tr key={index} className="text-gray-700">
                  {week.map((day, index) => (
                    <td
                      key={index}
                      className={`py-1 text-center text-xs ${
                        day ? "bg-white" : "bg-gray-200"
                      }`}>
                      {day}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MiniCalendar;
