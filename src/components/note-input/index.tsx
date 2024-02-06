"use client";
// NoteInput.tsx
import React, { useState } from "react";
import { Note, NoteTypeProps } from "@/types";
import { Button } from "../common/button";
import { useActivityFeed } from "@/context/activity-feed-context";
import { NoteType } from "../../constants";
import NoteIcon from "../note-icon";
import { Timeline } from "../note/timeline";

type NoteInputProps = any;

const NoteInput: React.FC<NoteInputProps> = () => {
  const [content, setContent] = useState("");
  const [selectedType, setSelectedType] = useState<NoteTypeProps["key"]>(
    NoteType.message.key
  );

  const { addNote: onAddNote, contactUser } = useActivityFeed();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newNote: Note = {
      id: Date.now().toString(), // unique id based on timestamp for now.
      timestamp: new Date(),
      user: "Current User",
      type: NoteType[selectedType],
      content,
    };
    onAddNote(newNote);
    setContent("");
  };

  return (
    <div className="w-full flex gap-4 relative">
      <Timeline noteKey={"message"} isLast={false} isFirst={true} />

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 bg-foreground-300 p-4 mb-4"
      >
        <input
          className="w-full p-2 bg-white border-2 border-foreground-500 ring-1 ring-foreground-500 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition duration-200 ease-in-out"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={`Add a note about ${contactUser.name}...`}
        />
        <div className="row flex items-center justify-between gap-4">
          <div className="col flex gap-2">
            {Object.values(NoteType).map((type) => (
              <NoteIcon
                key={type.label}
                type={type.key}
                isSelected={selectedType === type.key}
                onClick={setSelectedType}
              />
            ))}
          </div>
          <div className="col">
            <Button>Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NoteInput;
