import { TrackScaffoldType } from "@/models/personal/TrackScaffold";

const fetchTrackScaffold = async (userID: string) => {
  try {
    const response = await fetch(`/api/track/scaffold?userID=${userID}`);
    const datas = await response.json();
    if (response.ok) {
      const result: TrackScaffoldType[] = datas.slice().reverse();
      return result;
    }
  } catch (err) {
    console.log("error", err);
  }
};

export default fetchTrackScaffold;
