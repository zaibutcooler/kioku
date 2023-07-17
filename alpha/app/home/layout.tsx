import type { Metadata } from "next";
import Sidebar from "../_components/main/Sidebar";
import MainHeader from "../_components/MainHeader";

export const metadata: Metadata = {
  title: "Kazeki",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <MainHeader />
      <section className="min-h-[100vh] flex">
        <nav>
          <Sidebar />
        </nav>
        <section className="px-2 md:px-4 lg:px-8">{children}</section>
      </section>
    </main>
  );
}
