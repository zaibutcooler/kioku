import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./main/HomePage";
import AboutPage from "./main/AboutPage";
// import ReflectPage from "./apps/ReflectPage";
// import MemoryPage from "./apps/MemoryPage";
import TodoPage from "./apps/TodoPage";
import TimeTablePage from "./apps/TimeTablePage";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import GoalPage from "./apps/GoalPage";
import AccomplishPage from "./apps/AccomplishPage";
import NotePage from "./apps/NotePage";
import DiaryPage from "./apps/DiaryPage";
import SummaryPage from "./apps/SummaryPage";

const IndexPage = () => {
  const isAuthenticated = true;

  return (
    <div className="lg:px-8 md:px-2 sm:px-1">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* <Route
          path="/apps/goals"
          element={isAuthenticated ? <ReflectPage /> : <Navigate to="/login" />}
        /> */}

        <Route
          path="/apps/mygoals"
          element={isAuthenticated ? <GoalPage /> : <Navigate to="/login" />}
        />

        <Route
          path="/apps/accomplishments"
          element={
            isAuthenticated ? <AccomplishPage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/apps/notes"
          element={isAuthenticated ? <NotePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/apps/diaries"
          element={isAuthenticated ? <DiaryPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/apps/summaries"
          element={isAuthenticated ? <SummaryPage /> : <Navigate to="/login" />}
        />
        {/* <Route
          path="/apps/memories"
          element={isAuthenticated ? <MemoryPage /> : <Navigate to="/login" />}
        /> */}
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
