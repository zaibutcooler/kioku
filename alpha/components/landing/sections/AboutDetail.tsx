import { problemSolving } from "@/data/LandingInfo";
import { useState } from "react";
import { AiOutlineVerified } from "react-icons/ai";
import { FaCheckDouble } from "react-icons/fa";

interface Props {
  toggleDisplay: (input: string) => void;
}

const AboutDetail: React.FC<Props> = ({ toggleDisplay }) => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur first-line:z-50 px-2">
        <div className="bg-superwhite px-6 pb-6 pt-4 rounded-xl shadow-md  w-full  min-h-[400px] text-secondary_bold">
          <div className="flex justify-end m-0 p-0">
            <button
              className="text-[0.6rem] font-bold"
              onClick={() => toggleDisplay("")}>
              Back
            </button>
          </div>
          <h1 className="font-bold text-sm text-center mb-4">
            What problems am I solving
          </h1>
          <ul className="text-[0.6rem] font-semibold text-gray-700">
            {problemSolving.map((item) => (
              <li className="flex mb-1.5 items-center">
                <FaCheckDouble />
                <span className="ml-2">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
