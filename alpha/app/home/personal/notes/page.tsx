"use client";

import NoteFolderCreateForm from "@/components/personal/note/NoteFolderCreateForm";
import FolderArea from "@/components/personal/note/page/FolderArea";
import NoteContent from "@/components/personal/note/page/NoteContent";
import { NoteType } from "@/models/personal/Note";
import { NoteFolderType } from "@/models/personal/NoteFolder";
import createNote from "@/utils/create/createNote";
import deleteNote from "@/utils/delete/deleteNotes";
import fetchNoteFolders from "@/utils/fetch/fetchNoteFolders";
import fetchNotes from "@/utils/fetch/fetchNotes";
import updateNote from "@/utils/update/updateNote";
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

  const [newFolderForm, setNewFolderForm] = useState(false);

  //views
  const handleNewNoteView = () => {
    setView("create");
    setTitle("");
    setBody("");
    setRelated("");
  };

  const handleEditNoteView = (note: NoteType) => {
    setView("edit");
    setID(note._id);
    setTitle(note.title);
    setBody(note.content);
    setRelated(note.related);
    setCreated(String(note.created));
    note.updated && setUpdated(String(note.updated));
  };

  const handleReadNoteView = (note: NoteType) => {
    setView("read");
    setTitle(note.title);
    setBody(note.content);
    setRelated(note.related);
    setCreated(String(note.created));
    note.updated && setUpdated(String(note.updated));
  };

  //

  const handleNewNote = async () => {
    if (session?.user && currentFolder?._id) {
      const newNote = await createNote({
        user: session.user._id,
        title,
        content: body,
        folder: currentFolder?._id,
        related,
      });
      newNote && setNotes([newNote, ...notes]);
    }
  };

  const handleEditNote = async () => {
    if (session?.user) {
      const updatedNote = await updateNote(id, {
        title,
        content: body,
        related,
      });
      if (updatedNote) {
        const noteArray = [...notes];
        const index = notes.findIndex((note) => note._id === updatedNote._id);
        noteArray[index] = updatedNote;
        setNotes(noteArray);
      }
      setView("read");
    }
  };

  const handleDeleteNote = async (input: NoteType) => {
    setNotes(notes.filter((note) => note._id !== input._id));
  };

  const handleDeleteFolder = (input: NoteFolderType) => {
    setFolders(folders.filter((folder) => folder._id !== input._id));
  };

  const handleNewFolder = (input: NoteFolderType) => {
    setFolders([input, ...folders]);
  };

  //content
  const [view, setView] = useState("");
  const [id, setID] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [related, setRelated] = useState("");
  const [created, setCreated] = useState("");
  const [updated, setUpdated] = useState("");

  const toggleView = (input: string) => {
    setView(input);
  };

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
          handleNewNote={handleNewNote}
          handleEditNote={handleEditNote}
          hanldeDeleteNote={handleDeleteNote}
        />
      </section>
      <section className="h-full w-1/3 rounded-sm">
        <FolderArea
          folders={folders}
          notes={notes}
          handleDeleteNote={handleDeleteNote}
          showNewFolderForm={() => setNewFolderForm(true)}
          handleNewNoteView={handleNewNoteView}
          handleEditNoteView={handleEditNoteView}
          handleReadNoteView={handleReadNoteView}
          handleDeleteFolder={handleDeleteFolder}
          setCurrentFolder={(input: NoteFolderType) => setCurrentFolder(input)}
        />
      </section>
      {newFolderForm && (
        <NoteFolderCreateForm
          handleNewFolder={handleNewFolder}
          handleBack={() => setNewFolderForm(false)}
        />
      )}
    </main>
  );
}
