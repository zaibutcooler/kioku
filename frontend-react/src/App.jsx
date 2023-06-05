import Navbar from "./components/Navbar";
import MiniCalendar from "./mini-com/MiniCalendar";
import Home from "./pages/HomePage";
import GoalApp from "./pages/GoalPage";
import Todolist from "./pages/TodolistPage";
import Timetable from "./pages/TimetablePage";
import MemoryPage from "./pages/MemoryPage";
import HistoryPage from "./pages/HistoryPage";

import DigitalClock from "./mini-com/DigitalClock";

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
              <Route path="/memories" element={<MemoryPage />} />

              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<LogoutPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/history" element={<HistoryPage />} />
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
