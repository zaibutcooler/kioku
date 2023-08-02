import ProgressBar from "@/components/personal/track/page/ProgressBar";

export default function TrackPage() {
  return (
    <main>
      <section className="h-[500px] gap-4 w-full flex my-4">
        <div className="w-1/3 h-full rounded-sm border"></div>
        <div className="w-2/3 h-full rounded-sm border"></div>
      </section>
      <section className="mb-4">
        <ProgressBar />
      </section>
    </main>
  );
}
