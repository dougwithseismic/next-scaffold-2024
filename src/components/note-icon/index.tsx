"use client";

import { NoteType } from "@/constants";
import { NoteTypeProps } from "@/types";

const NoteIcon: React.FC<{
  type: NoteTypeProps["key"];
  className?: string;
  isSelected?: boolean;
  onClick?: (type: NoteTypeProps["key"]) => void;
}> = ({ type, className, isSelected, onClick }) => {
  return (
    <div
      className={`flex items-center justify-center w-7 md:h-7 p-1 aspect-square bg-foreground-500 rounded-full cursor-pointer select-none
        hover:bg-foreground-600 transition duration-200 ease-in-out
        ${
          isSelected
            ? "ring-1 ring-cyan-600/50 bg-gradient-to-tr from-cyan-500 to-cyan-300 text-white"
            : "bg-foreground-500 text-neutral-500"
        } ${className}`}
      onClick={() => onClick && onClick(type)}
    >
      {NoteType[type].icon}
    </div>
  );
};
export default NoteIcon;
