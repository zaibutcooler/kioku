"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const GetStartedButton = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user ? (
        <Link
          href="/home"
          className="px-6 py-2 text-xs bg-black text-superwhite rounded-lg mr-4 border border-black">
          Home
        </Link>
      ) : (
        <a
          href="#about"
          className="px-6 py-2 text-xs bg-black text-superwhite rounded-lg mr-4 border border-black">
          Get Started
        </a>
      )}
    </div>
  );
};

export default GetStartedButton;
