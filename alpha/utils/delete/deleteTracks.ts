import { TrackType } from "@/models/personal/Track";

export const deleteTracks = async (userID: string, id: string) => {
  try {
    const response = await fetch(`/api/track?userID=${userID}&id=${id}`, {
      method: "DELETE",
    });
    const datas = await response.json();
    if (response.ok) {
      const result: TrackType[] = datas.slice().reverse();
      return result;
    }
  } catch (err) {
    console.log("error", err);
  }
};
