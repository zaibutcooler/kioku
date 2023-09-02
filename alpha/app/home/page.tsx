"use client";
import ProfileCard from "@/components/personal/status/page/ProfileCard";
import { useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();
  return (
    <main className="flex w-full h-full py-4 gap-4">
      <section className="h-full w-3/5 overflow-y-auto">
        <div className="w-full flex gap-4 h-2/3 pb-4">
          <div className="w-1/2 h-full bg-black"></div>
          <div className="w-1/2 h-full bg-blue-500"></div>
        </div>
        <div className="w-full bg-green-500 h-1/3"></div>
      </section>

      <section className="h-full w-2/5 overflow-y-auto">
        <ProfileCard />
      </section>
    </main>
  );
}
