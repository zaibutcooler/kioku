import { TrackType } from "@/models/personal/Track";

const fetchTracks = async (userID: string, scaffoldID: string) => {
  try {
    const response = await fetch(
      `/api/track?userID=${userID}&scaffoldID=${scaffoldID}`
    );
    const datas = await response.json();
    if (response.ok) {
      const result: TrackType[] = datas.slice().reverse();
      return result;
    }
  } catch (err) {
    console.log("error", err);
  }
};

export default fetchTracks;
