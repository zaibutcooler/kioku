import Image from "next/image";
import hero from "@/public/images/hero.png";
import { AiOutlineProfile, AiOutlineStar } from "react-icons/ai";
import { personalAppDetail } from "@/data/LandingInfo";

export default function WelcomePage() {
  return (
    <main className="container mx-auto scrollbar scrollbar-black">
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
            <p className=" text-gray-500 leading-relaxed font-semibold mb-3">
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
      <section
        className="min-h-screen md:pt-12 lg:pt-14  flex justify-center"
        id="root">
        <div className="container w-[860px] px-2">
          <div className="mx-2 lg:px-[30px]">
            <h1 className="lg:text-4xl text-2xl font-black mb-2">
              Manage Your Time
            </h1>
            <p className=" text-gray-500 leading-relaxed font-semibold mb-5 ">
              Experience the power of my cutting-edge app. Maximize your time,
              conquer tasks, and stay focused. With intuitive features and smart
              reminders, you'll achieve your goals with ease.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 text-superwhite font-sans">
            {personalAppDetail.map((item) => (
              <div className="col-span-1 px-2 h-[185px] mb-4" key={item.title}>
                <div className="w-full h-full bg-black rounded-lg shadow-lg p-4">
                  <div className="text-2xl md:text-3xl lg:text-4xl lg:m-2 font-bold mb-2">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-base lg:text-[1.1rem] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[0.8rem] lg:text-[0.9rem]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="min-h-screen md:pt-12 lg:pt-14  flex justify-center"
        id="root">
        <div className="container w-[860px] px-2">
          <div className="mx-2 lg:px-[30px]">
            <h1 className="lg:text-4xl text-2xl font-black mb-2">
              Manage Your Time
            </h1>
            <p className=" text-gray-500 leading-relaxed font-semibold mb-5 ">
              Experience the power of my cutting-edge app. Maximize your time,
              conquer tasks, and stay focused. With intuitive features and smart
              reminders, you'll achieve your goals with ease.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 text-superwhite font-sans">
            {personalAppDetail.map((item) => (
              <div className="col-span-1 px-2 h-[185px] mb-4" key={item.title}>
                <div className="w-full h-full bg-black rounded-lg shadow-lg p-4">
                  <div className="text-2xl md:text-3xl lg:text-4xl lg:m-2 font-bold mb-2">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-base lg:text-[1.1rem] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[0.8rem] lg:text-[0.9rem]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen md:pt-12 lg:pt-14 " id="projectFeatures">
        <div>
          <h1>Title</h1>
          <p>Descriptions</p>
        </div>
        <div>Projects Features</div>
      </section>

      <section className="min-h-screen md:pt-12 lg:pt-14 " id="contact">
        <div>
          <h1>Title</h1>
          <p>Descriptions</p>
        </div>
        <div>Plans</div>
      </section>
      <section className="min-h-screen md:pt-12 lg:pt-14 " id="support">
        <div>
          <h1>Title</h1>
          <p>Descriptions</p>
        </div>
        <div>Plans</div>
      </section>
    </main>
  );
}
