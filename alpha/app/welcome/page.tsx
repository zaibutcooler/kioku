import HeroSection from "@/components/landing/sections/HeroSection";
import AboutSection from "@/components/landing/sections/AboutSection";
import ManageJobSection from "@/components/landing/sections/ManageJobSection";
import ManageTimeSection from "@/components/landing/sections/ManageTimeSection";
import ContactSection from "@/components/landing/sections/ContactSection";

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
