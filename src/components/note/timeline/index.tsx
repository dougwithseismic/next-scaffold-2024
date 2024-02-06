"use client";
import { NoteTypeProps } from "@/types";
import React, { useMemo } from "react";
import NoteIcon from "../../note-icon";
import formatRelativeTimeDate from "@/utility/format-relative-date";

export const Timeline: React.FC<{
  noteKey: NoteTypeProps["key"];
  dateTime?: Date;
  isLast?: boolean;
  isFirst?: boolean;
}> = ({ noteKey, dateTime, isLast, isFirst }) => {
  const relativeDate = useMemo(
    () => dateTime && formatRelativeTimeDate(dateTime),
    [dateTime]
  );

  return (
    <div className="timeline text-xs flex h-full gap-4 mt-2 z-10">
      <div className="label w-2 mt-2">{dateTime ? relativeDate : ""}</div>
      <div className="icon relative h-full">
        <NoteIcon
          type={noteKey}
          className="bg-white ring-1 ring-foreground-600/50 z-10"
        />
        <VerticalRule isLast={isLast} isFirst={isFirst} />
      </div>
    </div>
  );
};

export const VerticalRule: React.FC<{
  isLast?: boolean;
  isFirst?: boolean;
}> = ({ isLast, isFirst }) => {
    // Not using isFirst right now, but it's here for future use.
    
  return (
    <span
      className={`absolute left-[50%] top-0 h-full -z-10 ${
        isLast ? "h-[10%] " : "h-full"
      } w-0.5 bg-gray-200`}
    />
  );
};
