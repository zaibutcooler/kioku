import Navbar from "./components/Navbar";
import MiniCalendar from "./components/MiniCalendar";
import Home from "./pages/Home";
import GoalApp from "./pages/GoalApp";
import Todolist from "./pages/Todolist";
import Timetable from "./pages/Timetable";
import Calendar from "./components/Calendar";
import DigitalClock from "./components/DigitalClock"; // Add this line

import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="flex">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/goals" element={<GoalApp />} />
              <Route path="/todolist" element={<Todolist />} />
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </div>
          <div className="flex-none">
            <DigitalClock />

            <MiniCalendar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
