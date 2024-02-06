import { ActivityFeedProvider } from "@/context/activity-feed-context";
import { Note, User } from "@/types";
import React from "react";
import NoteInput from "../note-input";
import NotesList from "../notes-list";

interface ActivityFeedProps {
  currentUser: User;
  contactUser: User;
  initialNotes: Note[];
}
const ActivityFeed: React.FC<ActivityFeedProps> = ({
  currentUser,
  contactUser,
  initialNotes,
}) => {
  return (
    <ActivityFeedProvider
      currentUser={currentUser}
      contactUser={contactUser}
      initialNotes={initialNotes}
    >
      <div className="flex flex-col gap-4 w-full min-w-full">
        <NoteInput />
        <NotesList />
      </div>
    </ActivityFeedProvider>
  );
};

export default ActivityFeed;
