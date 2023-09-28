import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { formatClassicDate } from "@/utils/formatDates";

interface Props {
  handleBack: () => void;
}

const Taskbar: React.FC<Props> = ({ handleBack }) => {
  const tasks = [
    {
      title: "Complete Project Proposal",
      date: new Date("2023-08-05"),
    },
    {
      title: "Conduct Market Research",
      date: new Date("2023-08-10"),
    },
    {
      title: "Prepare Presentation Slides",
      date: new Date("2023-08-15"),
    },
    {
      title: "Review Budget Plan",
      date: new Date("2023-08-20"),
    },
    {
      title: "Submit Monthly Report",
      date: new Date("2023-08-25"),
    },
    {
      title: "Organize Team Building Event",
      date: new Date("2023-08-30"),
    },
    {
      title: "Test New Software Release",
      date: new Date("2023-09-02"),
    },
    {
      title: "Finalize Product Packaging Design",
      date: new Date("2023-09-07"),
    },
    {
      title: "Conduct Staff Training Session",
      date: new Date("2023-09-10"),
    },
    {
      title: "Complete Website Content Updates",
      date: new Date("2023-09-15"),
    },
  ];

  return (
    <div className="fixed right-0 mt-4 mr-4">
      <div className="container mx-auto">
        <div className="max-w-xs mx-auto">
          <div className="bg-white border shadow rounded-sm overflow-y-auto w-[38vh] min-h-[40vh]  max-h-[80vh] p-[2vh] scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-50">
            <h1 className="text-base mb-[1vh]">Tasks</h1>
            <section>
              {tasks.map((task) => (
                <div
                  key={task.title}
                  className="mb-2 p-2 border border-gray-100">
                  <h1 className="text-[0.7rem] mb-2 text-gray-800">
                    {task.title}
                  </h1>
                  <p className="text-[0.5rem] text-gray-500 flex justify-end w-full">
                    {formatClassicDate(task.date)}
                  </p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
