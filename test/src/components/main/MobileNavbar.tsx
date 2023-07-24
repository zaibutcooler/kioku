import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { LinkType } from "@/public/types";
import { AiOutlineHome } from "react-icons/ai";

interface Props {
  personalLinks: LinkType[];
  projectLinks: LinkType[];
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

  useEffect(() => {
    if (showBottom) {
      document.body.classList.add("no-scrollbar");
    } else {
      document.body.classList.remove("no-scrollbar");
    }
  }, [showBottom]);

  const close = () => {
    afterClicked(false);
  };

  return (
    <div>
      <section className="block md:hidden text-xs">
        {showBottom ? (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-100 bg-opacity-50  backdrop-filter backdrop-blur first-line:z-50 px-2">
            <main className="container mx-auto">
              <nav className="fixed bottom-0 left-0 w-full shadow-sm border-t border-gray-200 pt-3 bg-white rounded-t-lg px-3 mx-1">
                <section>
                  <div>
                    <div className="flex justify-between">
                      <button
                        className=" pb-0 pt-1 pr-1 font-bold flex items-center"
                        onClick={close}>
                        Signout
                        <FiLogOut className="ml-1" />
                      </button>
                      <button
                        className=" pb-0 pt-1 pr-1 font-bold"
                        onClick={close}>
                        Back
                      </button>
                    </div>

                    {toggleLinks ? (
                      <div className="grid grid-cols-3 text-center  my-1">
                        {projectLinks.map((item) => (
                          <div key={item.name} className="col-span-1 my-3">
                            <div
                              className="flex flex-col items-center"
                              onClick={close}>
                              <Link
                                href={item.go}
                                className="text-center pb-2 text-sm">
                                {item.icon}
                              </Link>
                              <Link href="/">{item.name}</Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-3 text-center  my-1">
                        {personalLinks.map((item) => (
                          <div key={item.name} className="col-span-1 my-3">
                            <div
                              className="flex flex-col items-center"
                              onClick={close}>
                              <Link
                                href={item.go}
                                className="text-center pb-2 text-sm">
                                {item.icon}
                              </Link>
                              <Link href="/">{item.name}</Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-2 text-center border-t border-b border-gray-100 ">
                    <div className="col-span-1 border-r py-3 border-100">
                      <button
                        onClick={() => {
                          setToggleLinks(false);
                        }}>
                        Personal
                      </button>
                    </div>
                    <div className="col-span-1 py-3">
                      <button
                        onClick={() => {
                          setToggleLinks(true);
                        }}>
                        Project
                      </button>
                    </div>
                  </div>
                </section>
              </nav>
            </main>
          </div>
        ) : (
          <nav className="fixed bottom-0 left-0 w-full shadow-sm py-3 flex justify-end px-3">
            <button
              className="text-xl rounded-full p-2 bg-black text-superwhite  shadow-md flex items-center justify-center"
              onClick={() => {
                afterClicked(true);
              }}
              style={{ width: "40px", height: "40px" }}>
              <div style={{ fontSize: "20px" }}>
                <RiMenu4Line />
              </div>
            </button>
          </nav>
        )}
      </section>
    </div>
  );
};

export default MobileNavbar;
