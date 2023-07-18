import { FaAngleDoubleLeft } from "react-icons/fa";
import { personalAppDetail } from "@/data/LandingInfo";

const ManageTimeSection = () => {
  return (
    <section
      className="min-h-screen md:pt-12 lg:pt-14  flex justify-center pb-12 md:pb-0"
      id="root">
      <div className="container w-[860px] px-0 md:px-2">
        <div className="mx-2 lg:px-[30px]">
          <h1 className="lg:text-4xl text-2xl font-black mb-2">
            Manage Your Time
          </h1>
          <p className="text-gray-500 leading-relaxed font-semibold mb-5 text-sm md:text-base">
            Experience the power of my cutting-edge app. Maximize your time,
            conquer tasks, and stay focused. With intuitive features and smart
            reminders, you'll achieve your goals with ease.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 text-superwhite font-sans">
          {personalAppDetail.map((item) => (
            <div
              className="col-span-1 px-2 min-h-[160px] md:h-[185px] mb-4"
              key={item.title}>
              <div className="w-full h-full bg-black rounded-lg shadow-lg p-4">
                <div className="text-2xl md:text-3xl lg:text-4xl lg:m-2 font-bold mb-2">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-[0.9rem] md:text-[1.1rem] mb-2">
                  {item.title}
                </h4>
                <p className="text-[0.7rem] md:text-[0.9rem]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManageTimeSection;
