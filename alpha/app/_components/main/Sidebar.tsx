"use client";
import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineIdcard,
  AiOutlineProject,
  AiOutlineLogout,
  AiOutlineMan,
  AiOutlineAccountBook,
} from "react-icons/ai";
const Sidebar = () => {
  const [isFull, setIsFull] = useState(false);

  return (
    <main className="h-screen border-r hidden md:block">
      <section className="flex">
        <button
          className={
            "w-12 h-12 hidden md:block absolute left-0 top-0 bg-transparent focus:outline-none "
          }
          onClick={() => setIsFull(!isFull)}></button>
        <div className="w-2/3">
          {isFull ? (
            <div className="w-48 lg:w-52">Full</div>
          ) : (
            <section className="  flex flex-col justify-center">
              <div className="w-12 text-center text-lg">
                <AiOutlineHome />
              </div>
              <div className="w-12">
                <AiOutlineAccountBook />
              </div>
              <div>
                <AiOutlineProject />
              </div>
              <div>
                <AiOutlineLogout />
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
};

export default Sidebar;
