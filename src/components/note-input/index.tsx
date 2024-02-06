"use client";
// NoteInput.tsx
import React, { useState } from "react";
import { Note, NoteType } from "@/types";
import { Button } from "../common/button";
import { useActivityFeed } from "@/context/activity-feed-context";

type NoteInputProps = any;

const NoteInput: React.FC<NoteInputProps> = () => {
  const [content, setContent] = useState("");
  const [selectedType, setSelectedType] = useState<NoteType>(NoteType.Message);

  const { addNote: onAddNote, contactUser } = useActivityFeed();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newNote: Note = {
      id: Date.now().toString(), // unique id based on timestamp for now.
      timestamp: new Date(),
      user: "Current User",
      type: selectedType,
      content,
    };
    onAddNote(newNote);
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-4 bg-foreground-300 p-4"
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
              key={type}
              type={type}
              isSelected={selectedType === type}
              setSelected={setSelectedType}
            />
          ))}
        </div>
        <div className="col">
          <Button>Submit</Button>
        </div>
      </div>
    </form>
  );
};

const NoteIcon: React.FC<{
  type: NoteType;
  isSelected: boolean;
  setSelected: (item: NoteType) => void;
}> = ({ type, isSelected, setSelected }) => {
  return (
    <div
      className={`flex items-center justify-center w-6 md:h-6 aspect-square bg-foreground-500 rounded-full cursor-pointer select-none
      hover:bg-foreground-600/50 transition duration-200 ease-in-out
      ${
        isSelected
          ? "ring-1 ring-cyan-600/50 bg-gradient-to-tr from-cyan-500 to-cyan-300 text-white"
          : "bg-foreground-500"
      }`}
      onClick={() => setSelected(type)}
    >
      {NoteType[type][0]}
    </div>
  );
};

export default NoteInput;
