"use client";
import { MarkType } from "@/models/personal/Mark";
import TimeLine from "./TimeLine";
import { useEffect, useState } from "react";
import StatusLoadingCard from "./StatusLoadingCard";

interface Props {}

const ProfileCard: React.FC<Props> = () => {
  const [marks, setMarks] = useState<MarkType[]>([]);
  const [loading, setLoading] = useState(true);

  const dummyMarks = [
    {
      user: "user1",
      positive: true,
      title: "Positive Mark 1",
      why: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor semper quam, ac dapibus justo.",
        "Nulla facilisi. Sed gravida tortor ut purus tincidunt tincidunt.",
        "Vestibulum vitae risus eu lectus suscipit lacinia a sit amet libero.",
      ],
      lessons: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor semper quam, ac dapibus justo.",
        "In et cursus justo. Vestibulum consectetur neque vel orci luctus, ac posuere nunc semper.",
        "Nulla facilisi. Sed gravida tortor ut purus tincidunt tincidunt.",
      ],
      note: "This is a positive mark with a note.",
      created: new Date(),
    },
    {
      user: "user2",
      positive: false,
      title: "Negative Mark 1",
      why: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor semper quam, ac dapibus justo.",
        "Nulla facilisi. Sed gravida tortor ut purus tincidunt tincidunt.",
        "Fusce id nulla non felis rhoncus euismod non vel enim.",
      ],
      lessons: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor semper quam, ac dapibus justo.",
        "In et cursus justo. Vestibulum consectetur neque vel orci luctus, ac posuere nunc semper.",
        "Nulla facilisi. Sed gravida tortor ut purus tincidunt tincidunt.",
      ],
      note: "This is a negative mark with a note.",
      created: new Date(),
    },
    {
      user: "user3",
      positive: true,
      title: "Positive Mark 2",
      why: [
        "Vivamus tempus est sit amet enim vestibulum, a auctor nunc consequat.",
        "Proin id mi in ex fermentum sodales. Nullam venenatis, libero vel laoreet sagittis.",
        "Cras consequat urna vitae erat bibendum, vel malesuada erat fringilla.",
      ],
      lessons: [
        "Vivamus tempus est sit amet enim vestibulum, a auctor nunc consequat.",
        "Proin id mi in ex fermentum sodales. Nullam venenatis, libero vel laoreet sagittis.",
        "Cras consequat urna vitae erat bibendum, vel malesuada erat fringilla.",
      ],
      note: "This is another positive mark with a note.",
      created: new Date(),
    },
    {
      user: "user4",
      positive: false,
      title: "Negative Mark 2",
      why: [
        "Fusce nec elit auctor, pharetra urna ut, accumsan elit. Sed et placerat urna.",
        "Aliquam erat volutpat. Donec ultricies bibendum arcu, id rhoncus nulla ultrices non.",
        "Suspendisse potenti. Praesent sit amet neque vitae turpis cursus tincidunt.",
      ],
      lessons: [
        "Fusce nec elit auctor, pharetra urna ut, accumsan elit. Sed et placerat urna.",
        "Aliquam erat volutpat. Donec ultricies bibendum arcu, id rhoncus nulla ultrices non.",
        "Suspendisse potenti. Praesent sit amet neque vitae turpis cursus tincidunt.",
      ],
      note: "This is another negative mark with a note.",
      created: new Date(),
    },
  ];

  useEffect(() => {
    setLoading(true);
    //perform tasks

    setLoading(false);
  }, []);

  return (
    <div className="w-full h-full border p-4 text-xs font-medium overflow-y-auto">
      <div>
        <div className="font-medium text-green-500">Starting Point</div>
        {!loading ? (
          <div>
            {dummyMarks.map((item) => (
              <div key={item.title} className="flex gap-3 ">
                <section className="pr-2 w-[110px]">
                  <div className="py-2">2022/9/12</div>
                  <div></div>
                </section>
                <section className="border-l-2 py-2 pl-3 w-full border-gray-300">
                  <div
                    className="p-2 border rounded-md w-full cursor-pointer"
                    onClick={() => {}}>
                    <h1 className="font-medium mb-2">{item.title}</h1>
                    <p className="text-[0.7rem] text-gray-500">{item.note}</p>
                  </div>
                </section>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <StatusLoadingCard />
          </div>
        )}
        <div className="font-medium text-green-500">Ending Point</div>
      </div>
    </div>
  );
};

export default ProfileCard;
