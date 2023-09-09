"use client";
import { MarkType } from "@/models/personal/Mark";
import TimeLine from "./TimeLine";
import { useEffect, useState } from "react";
import StatusLoadingCard from "./StatusLoadingCard";
import { useSession } from "next-auth/react";
import fetchMarks from "@/utils/fetch/fetchMarks";

interface Props {}

const ProfileCard: React.FC<Props> = () => {
  const [marks, setMarks] = useState<MarkType[]>([]);
  const [loading, setLoading] = useState(true);

  const { data: session } = useSession();

  useEffect(() => {
    const fillDatas = async () => {
      setLoading(true);
      if (session?.user) {
        const statusDatas = await fetchMarks(session.user._id);
        statusDatas && setMarks(statusDatas);
      }
      setLoading(false);
    };
    fillDatas();
  }, []);

  return (
    <div className="w-full h-full border p-4 text-xs font-medium overflow-y-auto">
      <div>
        <div className="font-medium text-green-500">Starting Point</div>
        {!loading ? (
          <div>
            {marks.map((item) => (
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
