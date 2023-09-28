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
    <div className="container mx-auto mt-4 lg:px-2 2xl:px-6 3xl-px-12">
      <div className="max-w-xs mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-300 text-gray-800">
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
                      className={`py-1 text-center text-xs border ${
                        day ? "bg-white" : "bg-gray-200"
                      }`}>
                      <a href="/history">{day}</a>
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
