import LandingMobileNavbar from "../_components/landing/LandingMobileNavbar";
import LandingNavbar from "../_components/landing/LandingNavbar";
import LandingFooter from "../_components/landing/LandingFooter";

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
