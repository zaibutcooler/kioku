"use client";
import { useState, useEffect } from "react";
import {
  AiOutlineFlag,
  AiOutlineUnorderedList,
  AiOutlineFileText,
  AiOutlineBook,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineTeam,
  AiOutlineFile,
  AiOutlineCalendar,
  AiOutlineCheckCircle,
  AiOutlineTrophy,
  AiOutlineInfoCircle,
  AiOutlineStar,
  AiOutlineMail,
  AiOutlineQuestionCircle,
} from "react-icons/ai";

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

  useEffect(() => {
    if (isDisplayed === "login" || isDisplayed === "register") {
      document.body.classList.add("no-scrollbar");
    } else {
      document.body.classList.remove("no-scrollbar");
    }
  }, [isDisplayed]);

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

  const landingLinks = [
    { name: "About", go: "#about", icon: <AiOutlineInfoCircle /> },
    { name: "Features", go: "#personalFeatures", icon: <AiOutlineStar /> },
    { name: "Collaborating", go: "#projectFeatures", icon: <AiOutlineTeam /> },
    { name: "Contact", go: "#contact", icon: <AiOutlineMail /> },
    { name: "Support", go: "#support", icon: <AiOutlineQuestionCircle /> },
  ];

  const personalLinks = [
    { name: "Home", go: "/home/", icon: <AiOutlineHome /> },
    { name: "My Goals", go: "/home/personal/goals", icon: <AiOutlineFlag /> },
    {
      name: "My tasks",
      go: "/home/personal/tasks",
      icon: <AiOutlineUnorderedList />,
    },
    {
      name: "My Notes",
      go: "/home/personal/notes",
      icon: <AiOutlineFileText />,
    },
    { name: "Diary", go: "/home/personal/diary", icon: <AiOutlineBook /> },
    {
      name: "Achievements",
      go: "/home/personal/accomplishments",
      icon: <AiOutlineTrophy />,
    },
  ];

  const projectLinks = [
    { name: "Project Overview", go: "/", icon: <AiOutlineProject /> },
    { name: "Tasks", go: "/", icon: <AiOutlineUnorderedList /> },
    { name: "Team Members", go: "/", icon: <AiOutlineTeam /> },
    { name: "Documents", go: "/", icon: <AiOutlineFile /> },
    { name: "Calendar", go: "/", icon: <AiOutlineCalendar /> },
    { name: "Progress", go: "/", icon: <AiOutlineCheckCircle /> },
  ];

  const handleLogout = () => {};

  return (
    <div>
      {isAuthenticated ? (
        <DesktopNavbar />
      ) : (
        <LandingNavbar
          toggleDisplay={toggleDisplay}
          landingLinks={landingLinks}
        />
      )}

      <MobileNavbar
        toggleDisplay={toggleDisplay}
        personalLinks={personalLinks}
        projectLinks={projectLinks}
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
        landingLinks={landingLinks}
      />
      {displayAuth()}
    </div>
  );
}

export default Navbar;
