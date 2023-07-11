import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state";
import { clearUser } from "../../state/userSlice";
import MobileNavbar from "./header/MobileNavbar";
import DesktopNavbar from "./header/DesktopNavbar";
import { closeNavbar } from "../../state/displaySlice";
import { useLocation } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const location = useLocation();

  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  const isClosed =
    location.pathname === "/login" || location.pathname === "/register";

  const personalLinks = [
    { name: "My Goals", go: "/", icon: "fas fa-flag" },
    { name: "My tasks", go: "/", icon: "fas fa-tasks" },
    { name: "My Notes", go: "/", icon: "fas fa-sticky-note" },
    { name: "Diary", go: "/", icon: "fas fa-book" },
    { name: "Time Table", go: "/", icon: "fas fa-clock" },
    { name: "Timer", go: "/", icon: "fas fa-hourglass" },
  ];
  const projectLinks = [
    { name: "Project Overview", go: "/", icon: "fas fa-project-diagram" },
    { name: "Tasks", go: "/", icon: "fas fa-clipboard-list" },
    { name: "Team Members", go: "/", icon: "fas fa-users" },
    { name: "Documents", go: "/", icon: "fas fa-file-alt" },
    { name: "Calendar", go: "/", icon: "fas fa-calendar-alt" },
    { name: "Progress", go: "/", icon: "fas fa-check-circle" },
  ];

  //bottom nav

  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.clear();
  };

  return (
    <div>
      {!isClosed && (
        <DesktopNavbar
          isAuthenticated={isAuthenticated}
          personalLinks={personalLinks}
          projectLinks={projectLinks}
          handleLogout={handleLogout}
        />
      )}

      <MobileNavbar
        personalLinks={personalLinks}
        projectLinks={projectLinks}
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
      />
    </div>
  );
}

export default Navbar;
