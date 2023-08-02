"use client";

import FolderArea from "@/components/personal/note/page/FolderArea";
import NoteContent from "@/components/personal/note/page/NoteContent";
import { NoteType } from "@/models/personal/Note";
import { NoteFolderType } from "@/models/personal/NoteFolder";
import fetchNoteFolders from "@/utils/fetch/fetchNoteFolders";
import fetchNotes from "@/utils/fetch/fetchNotes";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function NotesPage() {
  const [folders, setFolders] = useState<NoteFolderType[]>([]);
  const [notes, setNotes] = useState<NoteType[]>([]);
  const { data: session } = useSession();
  const [currentFolder, setCurrentFolder] = useState<NoteFolderType | null>(
    null
  );
  const [currentNote, setCurrentNote] = useState<NoteType | null>(null);

  //content
  const [view, setView] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [related, setRelated] = useState("");

  const toggleView = () => {};

  const handleChange = (form: string, value: string) => {
    if (form === "title") {
      setTitle(value);
    } else if (form === "body") {
      setBody(value);
    }
    //still left
  };

  //

  useEffect(() => {
    const fillDatas = async () => {
      const folderDatas =
        session?.user && (await fetchNoteFolders(session.user._id));
      folderDatas && setFolders(folderDatas);
      const noteDatas = session?.user && (await fetchNotes(session.user._id));
      noteDatas && setNotes(noteDatas);
      console.log("done fetching");
    };
    fillDatas();
  }, []);

  return (
    <main className="h-full flex w-full gap-4  py-4">
      <section className="h-full w-2/3 rounded-sm">
        <NoteContent
          title={title}
          body={body}
          handleChange={handleChange}
          view={view}
          related={related}
          toggleView={toggleView}
        />
      </section>
      <section className="h-full w-1/3 rounded-sm">
        <FolderArea folders={folders} notes={notes} />
      </section>
    </main>
  );
}
