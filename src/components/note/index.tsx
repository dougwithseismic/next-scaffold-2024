"use client";
// Note.tsx
import React, { memo } from "react";
import { Note, User } from "@/types";
import { useActivityFeed } from "@/context/activity-feed-context";
import { TrashIcon } from "@heroicons/react/24/outline";
import ProfileLink from "../common/profile-link";
import { Timeline } from "./timeline";

interface NoteProps {
  note: Note;
  isLast: boolean;
  isFirst?: boolean;
}

const NoteComponent: React.FC<NoteProps> = ({ note, isLast, isFirst }) => {
  const { contactUser, currentUser, deleteNote } = useActivityFeed();

  return (
    <div className="w-full flex gap-4 relative">
      <Timeline dateTime={note.timestamp} noteKey={note.type.key} isLast={isLast} />
      <NoteBlock
        note={note}
        currentUser={currentUser}
        contactUser={contactUser}
        onDeleteNote={deleteNote}
      />
    </div>
  );
};


const NoteBlock: React.FC<{
  note: Note;
  currentUser: User;
  contactUser: User;
  onDeleteNote: (noteId: string) => void;
}> = ({ note, currentUser, contactUser, onDeleteNote }) => {
  return (
    <div
      className={`bg-foreground-300 flex gap-4 p-4 items-center justify-between group text-sm w-full mb-4`}
    >
      <div className="flex flex-col">
        <div className="row">
          <ProfileLink href={`/users/${currentUser.id}`} label="You" /> had a{" "}
          {note.type.label} with{" "}
          <ProfileLink
            href={`/users/${contactUser.id}`}
            label={contactUser.name}
          />
        </div>
        <p className="text-neutral-500 text-sm">{note.content}</p>
      </div>
      <button
        className="flex absolute right-4 rounded-full bg-cyan-500 aspect-square w-8 h-8 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
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
