import Link from "next/link";
import DiaryCreateForm from "@/components/personal/diary/DiaryCreateForm";
import DiaryProgressForm from "@/components/personal/diary/DiaryContent";
import DiaryContent from "@/components/personal/diary/DiaryContent";

export default function DiaryPage() {
  return (
    <main className="grid grid-cols-10 mt-4 gap-6">
      <section className="col-span-7">
        <DiaryContent />
      </section>
      <section className="col-span-3">
        <div className="min-h-[150px] border w-full p-4 rounded-lg">
          <h1 className="font-semibold mb-2">Write Diary</h1>
          <p className="text-gray-700 text-xs mb-2">
            Capture your memory by simply writing down. Live the life with full
            of wonderful memories
          </p>
          <div className="w-full flex justify-end">
            <button className="py-2 rounded-md px-4 bg-black text-white text-xs">
              Write Diary
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
