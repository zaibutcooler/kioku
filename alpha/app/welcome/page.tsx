import HeroSection from "../_components/landing/HeroSection";
import AboutSection from "../_components/landing/AboutSection";
import ManageTimeSection from "../_components/landing/ManageTimeSection";
import ManageJobSection from "../_components/landing/ManageJobSection";
import ContactSection from "../_components/landing/ContactSection";

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
