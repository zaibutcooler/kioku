import ProgressBar from "@/components/personal/track/page/ProgressBar";
import TrackContent from "@/components/personal/track/page/TrackContent";

export default function TrackPage() {
  return (
    <main>
      <section className="my-4">
        <TrackContent />
      </section>
      <section className="mb-4">
        <ProgressBar />
      </section>
    </main>
  );
}
