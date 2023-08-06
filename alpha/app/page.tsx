import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingMobileNavbar from "@/components/landing/LandingMobileNavbar";
import LandingFooter from "@/components/landing/LandingFooter";
import LandingContents from "@/components/landing/LandingContents";

export default function LandingPage() {
  return (
    <main>
      <LandingNavbar />
      <LandingMobileNavbar />
      <div>
        <section>
          <LandingContents />
        </section>
      </div>
      <LandingFooter />
    </main>
  );
}
