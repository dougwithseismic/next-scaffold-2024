import { NoteType } from "@/constants";
import { Note, User } from "@/types";

export const currentUser: User = { id: "current-user", name: "Current User" };
export const contactUser: User = {
  id: "milton-romageura",
  name: "Milton Romaguera",
};
export const inna: User = { id: "1", name: "Inna Prysenko" };

export const dummyNotes: Note[] = [
  {
    id: "1",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
    user: currentUser.name,
    type: NoteType.message,
    content: "And a more formal meeting.",
  },
  {
    id: "2",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
    user: currentUser.name,
    type: NoteType.phone,
    content: "Then we had a follow-up phone call.",
  },
  {
    id: "3",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6), // 6 days ago
    user: currentUser.name,
    type: NoteType.coffee,
    content: "We had coffee!",
  },
  {
    id: "4",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14), // 14 days ago
    user: currentUser.name,
    type: NoteType.meeting,
    content: "A test note of message type!",
  },
];

export const innasNotes: Note[] = [
  {
    id: "5", // Choosing string because uuid is more likely
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 0.5), // 12 hours ago
    user: inna.name,
    type: NoteType.message,
    content: "Sent over offer and work contract 🚀",
  },
  {
    id: "6",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 0.5), // 12 hours ago
    user: inna.name,
    type: NoteType.message,
    content: "Sent test task",
  },
  {
    id: "7",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), // 7 days ago
    user: inna.name,
    type: NoteType.phone,
    content: "Initial call to discuss role",
  },
  {
    id: "8",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10), // 10 days ago
    user: inna.name,
    type: NoteType.phone,
    content: "Messaged Inna on LinkedIn re React role.",
  },
];

export default dummyNotes;
