import { TrackScaffoldCreateType } from "@/models/personal/TrackScaffold";

const createTrackScaffold = async ({
  user,
  name,
  countType,
  count,
  goal,
  everyday,
  repeat,
  type,
}: TrackScaffoldCreateType) => {
  const postBody = {
    user,
    name,
    countType,
    count,
    goal,
    everyday,
    repeat,
    type,
  };

  try {
    const response = await fetch("/api/track/scaffold", {
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

export default createTrackScaffold;
