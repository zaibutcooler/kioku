import { TrackCreateType, TrackType } from "@/models/personal/Track";

const createTrack = async ({
  user,
  item,
  countType,
  count,
  note,
  effort,
}: TrackCreateType) => {
  const postBody = {
    user,
    item,
    countType,
    count,
    note,
    effort,
  };

  try {
    const response = await fetch("/api/track", {
      method: "POST",
      body: JSON.stringify(postBody),
    });
    if (response.ok) {
      console.log("success");
      const datas: TrackType = await response.json();
      return datas;
    }
    return false;
  } catch (err) {
    console.log("error", err);
  }
};

export default createTrack;
