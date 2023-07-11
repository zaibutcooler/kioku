import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  personalLinks: any[];
  projectLinks: any[];
  isAuthenticated: boolean;
  handleLogout: () => void;
}

const MobileNavbar: React.FC<Props> = ({
  personalLinks,
  projectLinks,
  isAuthenticated,
  handleLogout,
}) => {
  const [showBottom, afterClicked] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(false);
  const handleClick = () => {
    afterClicked(false);
  };

  return (
    <div>
      <section className="block md:hidden text-sm">
        {showBottom ? (
          <nav className="fixed bottom-0 left-0 w-full shadow-sm pt-3 bg-white rounded-t-lg px-3">
            {isAuthenticated && (
              <section>
                <div>
                  {toggleLinks ? (
                    <div className="grid grid-cols-3 text-center  my-1">
                      {projectLinks.map((item) => (
                        <div key={item.name} className="col-span-1 my-3">
                          <NavLink to="/" className="" onClick={handleClick}>
                            <i className={item.icon}></i>
                            <div>{item.name}</div>
                          </NavLink>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 text-center  my-1">
                      {personalLinks.map((item) => (
                        <div key={item.name} className="col-span-1 my-3">
                          <NavLink to="/" className="" onClick={handleClick}>
                            <i className={item.icon}></i>
                            <div>{item.name}</div>
                          </NavLink>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )}
            {isAuthenticated ? (
              <div className="grid grid-cols-2 text-center border-t border-b border-gray-100 ">
                <div className="col-span-1 border-r py-3 border-100">
                  <button
                    onClick={() => {
                      setToggleLinks(false);
                      handleClick();
                    }}>
                    Personal
                  </button>
                </div>
                <div className="col-span-1 py-3">
                  <button
                    onClick={() => {
                      setToggleLinks(true);
                      handleClick();
                    }}>
                    Project
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 text-center border-t border-b border-gray-100 ">
                <div className="col-span-1 border-r py-3 border-100">
                  <NavLink to="/register" onClick={handleClick}>
                    Sign up
                  </NavLink>
                </div>
                <div className="col-span-1 py-3">
                  <NavLink to="/login" onClick={handleClick}>
                    Login
                  </NavLink>
                </div>
              </div>
            )}

            <div className="flex justify-between py-2">
              <NavLink to="/" className="flex" onClick={handleClick}>
                <i className="fas fa-home text-lg pl-2"></i>
              </NavLink>

              <button
                onClick={() => {
                  afterClicked(false);
                }}>
                <i className="fas fa-xmark"></i>
              </button>
            </div>
          </nav>
        ) : (
          <nav className="fixed bottom-0 left-0 w-full shadow-sm py-3 flex justify-end px-3">
            <button
              className="text-xl rounded-full p-2 bg-white  shadow-md flex items-center justify-center"
              onClick={() => {
                afterClicked(true);
              }}
              style={{ width: "40px", height: "40px" }}>
              <i className="fas fa-compass" style={{ fontSize: "20px" }} />
            </button>
          </nav>
        )}
      </section>
    </div>
  );
};

export default MobileNavbar;
