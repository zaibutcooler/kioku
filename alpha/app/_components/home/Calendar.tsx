import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const Calendar = () => {
  const currentDate = new Date();
  const [displayedMonth, setDisplayedMonth] = useState(currentDate.getMonth());
  const [displayedYear, setDisplayedYear] = useState(currentDate.getFullYear());

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const daysInMonth = new Date(displayedYear, displayedMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(displayedYear, displayedMonth, 1).getDay();

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

  const prevMonth = () => {
    setDisplayedMonth((prevMonth) => {
      let newMonth = prevMonth - 1;
      let newYear = displayedYear;
      if (newMonth < 0) {
        newMonth = 11;
        newYear--;
      }
      setDisplayedYear(newYear);
      return newMonth;
    });
  };

  const nextMonth = () => {
    setDisplayedMonth((prevMonth) => {
      let newMonth = prevMonth + 1;
      let newYear = displayedYear;
      if (newMonth > 11) {
        newMonth = 0;
        newYear++;
      }
      setDisplayedYear(newYear);
      return newMonth;
    });
  };

  //Calendar on move over

  //

  return (
    <div className="container mx-auto text-[0.5rem]">
      <div className="max-w-xs mx-auto">
        <div className="bg-white shadow rounded-md overflow-hidden">
          <div className="w-full py-1 font-bold flex justify-between bg-gray-100 items-center">
            <span className="px-1" onClick={prevMonth}>
              <FaChevronLeft />
            </span>
            <span>
              {new Date(displayedYear, displayedMonth).toLocaleDateString(
                "en-US",
                {
                  month: "long",
                }
              )}
            </span>
            <span className="px-1" onClick={nextMonth}>
              <FaChevronRight />
            </span>
          </div>
          <table className="w-full">
            <thead className=" text-gray-800">
              <tr className=" ">
                <th className="py-1 px-1 border-b border-gray-200">Sun</th>
                <th className="py-1 px-1 border-b border-gray-200">Mon</th>
                <th className="py-1 px-1 border-b border-gray-200">Tue</th>
                <th className="py-1 px-1 border-b border-gray-200">Wed</th>
                <th className="py-1 px-1 border-b border-gray-200">Thu</th>
                <th className="py-1 px-1 border-b border-gray-200">Fri</th>
                <th className="py-1 px-1 border-b border-gray-200">Sat</th>
              </tr>
            </thead>
            <tbody>
              {calendarData.map((week, index) => (
                <tr key={index} className="text-gray-700">
                  {week.map((day, index) => (
                    <td
                      key={index}
                      onMouseOverCapture={() => {}}
                      onMouseOut={() => {}}
                      className={`py-1 text-center border hover:bg-gray-200 border-gray-100 ${
                        day ? "bg-white" : "bg-gray-50"
                      } ${
                        currentMonth === displayedMonth &&
                        Number(day) === currentDay
                          ? "text-sky-600"
                          : ""
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
