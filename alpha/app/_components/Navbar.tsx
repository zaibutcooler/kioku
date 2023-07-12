"use client";
import { useState } from "react";
import MobileNavbar from "./main/MobileNavbar";
import DesktopNavbar from "./main/DesktopNavbar";
import LandingNavbar from "./main/LandingNavbar";
import Login from "./auth/Login";
import Register from "./auth/Register";

function Navbar() {
  const isAuthenticated = true;

  const [isDisplayed, setIsDisplayed] = useState("");

  const toggleDisplay = (input: string) => {
    setIsDisplayed(input);
  };

  const displayAuth = () => {
    switch (isDisplayed) {
      case "login":
        return <Login toggleDisplay={toggleDisplay} />;
      case "register":
        return <Register toggleDisplay={toggleDisplay} />;
      default:
        return null;
    }
  };

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

  const handleLogout = () => {};

  return (
    <div>
      {isAuthenticated ? (
        <DesktopNavbar />
      ) : (
        <LandingNavbar openAuth={() => toggleDisplay("login")} />
      )}

      <MobileNavbar
        toggleDisplay={toggleDisplay}
        personalLinks={personalLinks}
        projectLinks={projectLinks}
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
      />
      {displayAuth()}
    </div>
  );
}

export default Navbar;
