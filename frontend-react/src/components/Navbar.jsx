import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white  border-blue-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-blue-950 text-lg font-semibold">
              Home
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/goals"
                className="text-blue-950 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                Goals
              </Link>
              <Link
                to="/todolist"
                className="text-blue-950 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                Todo List
              </Link>
              <Link
                to="/timetable"
                className="text-blue-950 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </Link>
              <Link
                to="/calendar"
                className="text-blue-950 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                Calendar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
