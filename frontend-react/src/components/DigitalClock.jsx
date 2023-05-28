import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      const time = `<${seconds} | ${minutes}:${hours} | ${getTimezoneString(
        date
      )}>`;

      setCurrentTime(time);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getTimezoneString = (date) => {
    const timezone = date.toString().match(/\(([A-Za-z\s].*)\)/)[1];
    return timezone;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="text-3xl text-gray-800 bg-white p-2 rounded-lg shadow animate-sand-clock">
        {currentTime}
      </div>
    </div>
  );
};

export default DigitalClock;
