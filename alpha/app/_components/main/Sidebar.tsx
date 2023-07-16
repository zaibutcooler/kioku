"use client";
import { useState } from "react";

const Sidebar = () => {
  const [isFull, setIsFull] = useState(true);

  return (
    <main className="h-[100vh] border-r hidden md:block">
      {isFull ? (
        <section className="w-48 lg:w-52">Full</section>
      ) : (
        <section className="w-12">Not full</section>
      )}
    </main>
  );
};

export default Sidebar;
