"use client";
import { useState } from "react";

const Sidebar = () => {
  const [isFull, setIsFull] = useState(false);

  return (
    <main className="h-screen border-r hidden md:block">
      <section className="flex">
        <button
          className={
            "w-12 h-12 hidden md:block fixed left-0 top-0 bg-transparent focus:outline-none "
          }
          onClick={() => setIsFull(!isFull)}></button>
        <div className="w-2/3">
          {isFull ? (
            <div className="w-48 lg:w-52">Full</div>
          ) : (
            <div>Not full</div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Sidebar;
