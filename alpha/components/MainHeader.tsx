"use client";
import { useState, useEffect } from "react";
import { landingLinks, projectLinks, mobilePersonalLinks } from "@/data/Links";

import MobileNavbar from "./main/MobileNavbar";
import DesktopNavbar from "./main/DesktopNavbar";
function MainHeader() {
  const handleLogout = () => {};
  const isAuthenticated = true;

  return (
    <div>
      <DesktopNavbar />

      <MobileNavbar
        personalLinks={mobilePersonalLinks}
        projectLinks={projectLinks}
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
      />
    </div>
  );
}

export default MainHeader;
