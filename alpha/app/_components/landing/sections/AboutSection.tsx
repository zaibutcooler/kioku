"use client";
import Image from "next/image";
import about from "@/public/images/about.png";
import AboutDetail from "./../AboutDetail";
import { FaCheckCircle, FaCheckDouble, FaCheckSquare } from "react-icons/fa";
import { problemSolving } from "@/data/LandingInfo";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useState } from "react";

const AboutSection = () => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <section className="min-h-screen md:pt-12 lg:pt-14 pb-12 md:pb-0" id="root">
      <div className="w-full flex justify-center">
        <div className="container w-[800px] px-2">
          <h1 className="lg:text-4xl text-2xl font-black mb-2">
            What this app is all about
          </h1>
          <p className="text-gray-500 leading-relaxed font-semibold mb-5 text-sm md:text-base">
            My revolutionary productivity app redefines how you work and achieve
            your goals. And more importantly, to solve the problems that we all
            have in this modern day.
          </p>
        </div>
      </div>
      <div className="flex px-2 justify-between md:justify-center">
        <div className="w-[300px] ">
          <div>
            <Image src={about} height={250} width={250} alt="about" />
          </div>
        </div>
        <div className="w-full md:w-[400p] lg:w-[500px] border p-6 border-black rounded-lg hidden md:block">
          <h1 className="font-semibold text-base lg:text-[1.1rem] mb-3 text-center">
            What problems am I solving?
          </h1>
          <ul className="text-xs text-gray-500">
            {problemSolving.map((item, index) => (
              <li
                className="mb-1.5 font-semibold flex items-center px-0 lg:px-3"
                key={index}>
                <FaCheckDouble />
                <span className="ml-3">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden w-1/5 border border-r-0 border-black h-[300px] rounded-l-lg flex items-center">
          <button
            className="text-2xl font-light px-2 py-2 m-1 rounded-lg hover:bg-gray-300"
            onClick={() => setShowDetail(true)}>
            <FaAngleDoubleLeft />
          </button>
        </div>
      </div>
      {showDetail && <AboutDetail toggleDisplay={() => setShowDetail(false)} />}
    </section>
  );
};

export default AboutSection;
