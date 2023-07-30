import { TrackCreateType } from "@/models/personal/Track";

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
    }
  } catch (err) {
    console.log("error", err);
  }
};

export default createTrack;
