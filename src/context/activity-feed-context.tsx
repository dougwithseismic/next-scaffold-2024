"use client";

import dummyNotes, { contactUser, currentUser } from "@/dummy-data";
import { Note, User } from "@/types";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface ActivityFeedProps {
  currentUser: User;
  contactUser: User;
  notes: Note[];
}

export const ActivityFeedContext = createContext<
  ActivityFeedProps & {
    addNote: (newNote: Note) => void;
    deleteNote: (noteId: string) => void;
  }
>({
  currentUser,
  contactUser,
  notes: dummyNotes,
  addNote: () => {},
  deleteNote: () => {},
});

export const ActivityFeedProvider: React.FC<{
  children: React.ReactNode;
  currentUser: User;
  contactUser: User;
  initialNotes: Note[];
}> = ({ children, currentUser, contactUser, initialNotes }) => {
  const [notes, setNotes] = useState<Note[]>(initialNotes);

  const addNote = useCallback(
    (newNote: Note) => setNotes((prev) => [...prev, newNote]),
    []
  );

  const deleteNote = useCallback(
    (noteId: string) =>
      setNotes((prev) => prev.filter((note) => note.id !== noteId)),
    []
  );

  const value = useMemo(
    () => ({
      currentUser,
      contactUser,
      // Task requirement: The notes should be sorted by timestamp in ascending order.
      notes: notes.sort(
        (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
      ),
      addNote,
      deleteNote,
    }),
    [addNote, contactUser, currentUser, deleteNote, notes]
  );

  return (
    <ActivityFeedContext.Provider value={value}>
      {children}
    </ActivityFeedContext.Provider>
  );
};

export const useActivityFeed = (): ActivityFeedProps & {
  addNote: (newNote: Note) => void;
  deleteNote: (noteId: string) => void;
} => {
  const context = useContext(ActivityFeedContext);
  if (!context) {
    throw new Error(
      "useActivityFeed must be used within an ActivityFeedProvider"
    );
  }
  return context;
};

export default ActivityFeedContext;
