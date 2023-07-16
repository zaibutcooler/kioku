"use client";

import Link from "next/link";

const Calendar = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  const calendarData = [];
  let dayCounter = 1;

  for (let i = 0; i < 5; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDayOfWeek) || dayCounter > daysInMonth) {
        week.push("");
      } else {
        week.push(dayCounter);
        dayCounter++;
      }
    }
    calendarData.push(week);
  }

  return (
    <div className="container mx-auto">
      <div className="max-w-xs mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 text-gray-800 ">
                <th className="py-1 text-[0.5rem] px-1 border-b border-gray-200">
                  Sun
                </th>
                <th className="py-1 text-[0.5rem] px-1 border-b border-gray-200">
                  Mon
                </th>
                <th className="py-1 text-[0.5rem] px-1 border-b border-gray-200">
                  Tue
                </th>
                <th className="py-1 text-[0.5rem] px-1 border-b border-gray-200">
                  Wed
                </th>
                <th className="py-1 text-[0.5rem] px-1 border-b border-gray-200">
                  Thu
                </th>
                <th className="py-1 text-[0.5rem] px-1 border-b border-gray-200">
                  Fri
                </th>
                <th className="py-1 text-[0.5rem] px-1 border-b border-gray-200">
                  Sat
                </th>
              </tr>
            </thead>
            <tbody>
              {calendarData.map((week, index) => (
                <tr key={index} className="text-gray-800">
                  {week.map((day, index) => (
                    <td
                      key={index}
                      className={`py-1 text-center text-[0.5rem] border border-gray-100 ${
                        day ? "bg-white" : "bg-gray-100"
                      }`}>
                      <Link href="/">{day}</Link>
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

export default Calendar;
