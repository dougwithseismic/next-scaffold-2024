"use client";
// Note.tsx
import { Note } from "@/types";
import React, { memo, useEffect } from "react";

import { useActivityFeed } from "@/context/activity-feed-context";
import { TrashIcon } from "@heroicons/react/24/outline";
import ProfileLink from "../common/profile-link";

interface NoteProps {
  note: Note;
  onDeleteNote: (noteId: string) => void;
}

const NoteComponent: React.FC<NoteProps> = ({ note, onDeleteNote }) => {
  const { contactUser, currentUser } = useActivityFeed();

  useEffect(() => {
    // Task requirement: When inputting or submitting a note, the other notes should not be re-rendered.
    console.table(note);
  }, [note]);

  return (
    <div className="flex gap-4 p-4 bg-foreground-300 items-center justify-between group">
      <div className="flex flex-col">
        <div className="row">
          <ProfileLink href={`/users/${currentUser.id}`} label="You" /> had a{" "}
          {note.type.toLowerCase()} with{" "}
          <ProfileLink
            href={`/users/${contactUser.id}`}
            label={contactUser.name}
          />
        </div>
        <p className="text-neutral-500 text-sm">{note.content}</p>
      </div>
      <button
        className="flex rounded-full bg-cyan-500 aspect-square w-8 h-8 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
        onClick={() => onDeleteNote(note.id)}
      >
        <TrashIcon color="white" width={"1rem"} height={"1rem"} />
      </button>
    </div>
  );
};

export default memo(
  NoteComponent,
  (prev, next) => prev.note.id === next.note.id
);
