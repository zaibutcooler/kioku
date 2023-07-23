import LandingMobileNavbar from "@/components/landing/LandingMobileNavbar";
import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingFooter from "@/components/landing/LandingFooter";

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <LandingNavbar />
      <LandingMobileNavbar />
      <div className="">
        <section>{children}</section>
      </div>
      <LandingFooter />
    </main>
  );
}
