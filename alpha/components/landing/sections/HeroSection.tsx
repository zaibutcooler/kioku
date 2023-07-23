import Image from "next/image";
import hero from "@/public/images/hero.png";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen md:pt-12 lg:pt-14  flex justify-center"
      id="root">
      <div className="container w-[800px] px-2">
        <div className="my-4">
          <Image alt="hero" src={hero} width={250} height={250} />
        </div>
        <div>
          <h1 className="lg:text-4xl text-2xl font-black mb-2">
            Time Mastery for Your Productivity
          </h1>
          <p className="text-gray-500 leading-relaxed font-semibold mb-3 text-sm md:text-base">
            Experience the power of my cutting-edge app. Maximize your time,
            conquer tasks, and stay focused. With intuitive features and smart
            reminders, you'll achieve your goals with ease.
          </p>
          <div>
            <button className="px-6 py-2 text-xs bg-black text-superwhite rounded-lg mr-4 border border-black">
              Get Started
            </button>
            <button className="px-5 py-2 text-xs bg-superwhite font-semibold rounded-lg border border-black">
              Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
