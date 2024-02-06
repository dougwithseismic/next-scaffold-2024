// Catch All Drafts
export type TODO = any;

export type FCProps = {
  children: React.ReactNode;
  [key: string]: any;
};

// Footer.tsx
export type Icon = (props: { className?: string; [key: string]: any }) => any;

export type NavItem = {
  name: string;
  href: string;
  IconComponent?: Icon;
};

// You may want to define the NoteType enum if it isn't already defined
export enum NoteType {
  Message = "Message",
  Phone = "Phone",
  Coffee = "Coffee",
  Beer = "Beer",
  Meeting = "Meeting",
}
export interface Note {
  id: string;
  timestamp: Date;
  user: string;
  type: NoteType;
  content: string;
}

export interface User {
  id: string;
  name: string;
}
