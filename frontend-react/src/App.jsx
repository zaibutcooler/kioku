import Navbar from "./components/Navbar";
import MiniCalendar from "./components/MiniCalendar";
import Home from "./pages/Home";
import GoalApp from "./pages/GoalApp";
import Todolist from "./pages/Todolist";
import Timetable from "./pages/Timetable";

import Calendar from "./components/Calendar";
import DigitalClock from "./components/DigitalClock";

import { Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import RegisterPage from "./pages/RegisterPage";

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
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<LogoutPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </div>
          <div className="flex-none">
            <div className="pt-4">
              <DigitalClock />
            </div>

            <MiniCalendar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
