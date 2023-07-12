import React from "react";
import { useState } from "react";

interface Props {
  personalLinks: any[];
  projectLinks: any[];
  isAuthenticated: boolean;
  handleLogout: () => void;
  toggleDisplay: (input: string) => void;
}

const MobileNavbar: React.FC<Props> = ({
  personalLinks,
  projectLinks,
  isAuthenticated,
  handleLogout,
  toggleDisplay,
}) => {
  const [showBottom, afterClicked] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(false);
  const close = () => {
    afterClicked(false);
  };

  return (
    <div>
      <section className="block md:hidden text-xs">
        {showBottom ? (
          <nav className="fixed bottom-0 left-0 w-full shadow-sm border-t border-gray-200 pt-3 bg-white rounded-t-lg px-3">
            {isAuthenticated && (
              <section>
                <div>
                  {toggleLinks ? (
                    <div className="grid grid-cols-3 text-center  my-1">
                      {projectLinks.map((item) => (
                        <div key={item.name} className="col-span-1 my-3">
                          <a href="/" className="" onClick={close}>
                            <i className={item.icon}></i>
                            <div>{item.name}</div>
                          </a>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 text-center  my-1">
                      {personalLinks.map((item) => (
                        <div key={item.name} className="col-span-1 my-3">
                          <a href="/" className="" onClick={close}>
                            <i className={item.icon}></i>
                            <div>{item.name}</div>
                          </a>
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
                      close();
                    }}>
                    Personal
                  </button>
                </div>
                <div className="col-span-1 py-3">
                  <button
                    onClick={() => {
                      setToggleLinks(true);
                      close();
                    }}>
                    Project
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 text-center border-t border-b border-gray-100 ">
                <div className="col-span-1 border-r py-3 border-100">
                  <button
                    onClick={() => {
                      toggleDisplay("register");
                      close;
                    }}>
                    Sign up
                  </button>
                </div>
                <div className="col-span-1 py-3">
                  <button
                    onClick={() => {
                      toggleDisplay("login");
                      close;
                    }}>
                    Login
                  </button>
                </div>
              </div>
            )}

            <div className="flex justify-between py-2">
              <a href="/" className="flex" onClick={close}>
                <i className="fas fa-home text-lg pl-2"></i>
              </a>

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
              className="text-xl rounded-full p-2 bg-black text-superwhite  shadow-md flex items-center justify-center"
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
