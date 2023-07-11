import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";

interface Props {
  isAuthenticated: boolean;
  handleLogout: () => void;
  projectLinks: any[];
  personalLinks: any[];
}

const DesktopNavbar: React.FC<Props> = ({
  isAuthenticated,
  handleLogout,
  projectLinks,
  personalLinks,
}) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isSecondDropDown, setIsSecondDropDown] = useState(false);

  return (
    <div>
      <nav className="hidden md:block bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex-shrink-0 xs:w-1/6 ">
              <NavLink to="/" className="text-blue-950 text-md font-semibold">
                Home
              </NavLink>
            </div>
            {/* Menu */}
            <div className="hidden sm:block">
              <div className="flex items-center space-x-4">
                {isAuthenticated && (
                  <>
                    <button
                      onClick={() => setIsSecondDropDown(!isSecondDropDown)}
                      className="text-blue-950 hover:text-gray-800 pl-4 pr-0 py-2 rounded-md text-sm font-medium">
                      Sub-Memory
                    </button>
                    <div
                      className="relative inline-block pr-4 pl-0"
                      onClick={() => setIsSecondDropDown(!isSecondDropDown)}>
                      <>
                        <BiChevronDown />
                      </>
                      {isSecondDropDown && (
                        <div
                          className="absolute right-0 mt-2 py-2 bg-white border border-gray-200 lg:w-32 md:w-24 rounded-md shadow-md "
                          onMouseLeave={() => setIsSecondDropDown(false)}>
                          <NavLink
                            to="/apps/notes"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            My Notes
                          </NavLink>
                          <NavLink
                            to="/apps/diaries"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            My Diary
                          </NavLink>
                          <NavLink
                            to="/apps/summaries"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            My Summaries
                          </NavLink>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => setIsDropDown(!isDropDown)}
                      className="text-blue-950 hover:text-gray-800 pl-4 pr-0 py-2 rounded-md text-sm font-medium">
                      Reflect
                    </button>
                    <div
                      className="relative inline-block pr-4 pl-0"
                      onClick={() => setIsDropDown(!isDropDown)}>
                      <>
                        <BiChevronDown />
                      </>
                      {isDropDown && (
                        <div
                          className="absolute right-0 mt-2 py-2 bg-white border border-gray-200 lg:w-32 md:w-24 rounded-md shadow-md "
                          onMouseLeave={() => setIsDropDown(false)}>
                          <NavLink
                            to="/apps/mygoals"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            My Goals
                          </NavLink>
                          <NavLink
                            to="/apps/accomplishments"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            My past
                          </NavLink>
                          <NavLink
                            to="/courses/events"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Events
                          </NavLink>
                        </div>
                      )}
                    </div>
                    <NavLink
                      to="/apps/todoapp"
                      className="text-blue-950 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                      TodoList
                    </NavLink>

                    <NavLink
                      to="/apps/timetable"
                      className="hidden md:block text-blue-950 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                      Time Table
                    </NavLink>
                  </>
                )}
                <div className="flex items-center space-x-">
                  {isAuthenticated ? (
                    <>
                      <NavLink
                        to="/"
                        onClick={handleLogout}
                        className="flex items-center justify-center w-24 bg-black text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                        Logout
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <div className="block xs:w-5/6">
                        <NavLink
                          to="/login"
                          className="flex items-center justify-center mx-4 w-24 border border-black bg-black text-white hover:bg-gray-800 text-sm hover:text-white px-3 py-2 rounded-md font-medium">
                          Login
                        </NavLink>
                      </div>
                      <div className="block">
                        <NavLink
                          to="/register"
                          className="flex items-center justify-center w-24 border border-black bg-white text-black hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          Register
                        </NavLink>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DesktopNavbar;
