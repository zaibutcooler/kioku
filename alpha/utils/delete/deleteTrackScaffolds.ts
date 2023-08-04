import { TrackScaffoldType } from "@/models/personal/TrackScaffold";

export const deleteTrackScaffold = async (scaffoldID: string) => {
  try {
    console.log("started");
    const response = await fetch(`/api/track/scaffold?id=${scaffoldID}`, {
      method: "DELETE",
    });
    console.log("passed one");

    if (response.ok) {
      const result: TrackScaffoldType = await response.json();
      return result;
    }
  } catch (err) {
    console.log("error", err);
  }
};

export const hideTrackScaffold = async (id: string) => {
  try {
    const response = await fetch(`/api/track/scaffold?id=${id}`, {
      method: "PATCH",
      body: JSON.stringify({ hide: true }),
    });

    if (response.ok) {
      const result: TrackScaffoldType = await response.json();
      return result;
    }
  } catch (err) {
    console.log("error", err);
  }
};
