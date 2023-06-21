import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./main/HomePage";
import AboutPage from "./main/AboutPage";
import GoalPage from "./apps/GoalPage";
import MemoryPage from "./apps/MemoryPage";
import TodoPage from "./apps/TodoPage";
import TimeTablePage from "./apps/TimeTablePage";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";

const IndexPage = () => {
  const isAuthenticated = true;

  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/apps/goals"
          element={isAuthenticated ? <GoalPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/apps/memories"
          element={isAuthenticated ? <MemoryPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/apps/todoapp"
          element={isAuthenticated ? <TodoPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/apps/timetable"
          element={
            isAuthenticated ? <TimeTablePage /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </div>
  );
};

export default IndexPage;
