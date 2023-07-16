"use client";
import { useState, useEffect } from "react";
import { landingLinks, projectLinks, personalLinks } from "@/data/Links";

import MobileNavbar from "./main/MobileNavbar";
import DesktopNavbar from "./main/DesktopNavbar";
function MainHeader() {
  const isAuthenticated = true;

  const handleLogout = () => {};

  return (
    <div>
      <DesktopNavbar />

      <MobileNavbar
        personalLinks={personalLinks}
        projectLinks={projectLinks}
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
      />
    </div>
  );
}

export default MainHeader;
