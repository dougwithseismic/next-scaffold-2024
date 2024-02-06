import { Note, NoteType, User } from "@/types";

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
    type: NoteType.Meeting,
    content: "And a more formal meeting.",
  },
  {
    id: "2",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
    user: currentUser.name,
    type: NoteType.Phone,
    content: "Then we had a follow-up phone call.",
  },
  {
    id: "3",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6), // 6 days ago
    user: currentUser.name,
    type: NoteType.Coffee,
    content: "We had coffee!",
  },
  {
    id: "4",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14), // 14 days ago
    user: currentUser.name,
    type: NoteType.Meeting,
    content: "A test note of message type!",
  },
  {
    id: "5",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14), // 14 days ago
    user: inna.name,
    type: NoteType.Meeting,
    content: "A test note of message type!",
  },
];

export const innasNotes: Note[] = [
  {
    id: "5",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    user: inna.name,
    type: NoteType.Message,
    content: "Email from Inna regarding project updates.",
  },
  {
    id: "6",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), // 7 days ago
    user: inna.name,
    type: NoteType.Meeting,
    content: "Meeting with Inna to discuss new ideas.",
  },
  {
    id: "7",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10), // 10 days ago
    user: inna.name,
    type: NoteType.Phone,
    content: "Phone call with Inna about project timelines.",
  },
];

export default dummyNotes;
