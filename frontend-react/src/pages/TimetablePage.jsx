import React from "react";

const Timetable = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = Array.from({ length: 16 }, (_, index) => ` ${index + 1}`);

  return (
    <div className="container mx-auto p-4" style={{ width: "75%" }}>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="table-auto w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-3 py-2"></th>
              {hours.map((hour, index) => (
                <th key={index} className="px-3 py-4">
                  {hour}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day, index) => (
              <tr key={index}>
                <td className="px-2 py-4 font-medium bg-gray-200">
                  <strong>{day}</strong>
                </td>
                {hours.map((_, index) => (
                  <td
                    key={index}
                    className="px-3 py-2 border-b border-gray-300">
                    {/* Add content for each cell */}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;
