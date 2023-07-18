import HeroSection from "../_components/landing/sections/HeroSection";
import AboutSection from "../_components/landing/sections/AboutSection";
import ManageTimeSection from "../_components/landing/sections/ManageTimeSection";
import ManageJobSection from "../_components/landing/sections/ManageJobSection";
import ContactSection from "../_components/landing/sections/ContactSection";

export default function WelcomePage() {
  return (
    <main className="container mx-auto scrollbar scrollbar-black">
      <HeroSection />
      <AboutSection />
      <ManageTimeSection />
      <ManageJobSection />
      <ContactSection />
    </main>
  );
}
