"use client";
import { useActivityFeed } from "@/context/activity-feed-context";
import NoteComponent from "../note";

const NotesList: React.FC = () => {
  const { notes, deleteNote } = useActivityFeed();

  return (
    <div className="flex flex-col gap-4">
      {notes?.map((note) => (
        <NoteComponent key={note.id} note={note} onDeleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NotesList;
