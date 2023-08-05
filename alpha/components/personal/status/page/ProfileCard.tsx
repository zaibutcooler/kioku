"use client";
import { MarkType } from "@/models/personal/Mark";
import TimeLine from "./TimeLine";

interface Props {
  marks: MarkType[];
}

const ProfileCard: React.FC<Props> = ({ marks }) => {
  return (
    <div className="w-full h-full border p-4">
      <h1>Profile Card</h1>
      <div>
        <section>
          {marks && marks.map((item) => <div>{item.title}</div>)}
        </section>
      </div>
    </div>
  );
};

export default ProfileCard;
