import React from "react";
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

export type NoteTypeProps = {
  key: "message" | "phone" | "coffee" | "beer" | "meeting" | "list";
  label: string;
  icon: React.ReactNode;
};

export interface Note {
  id: string;
  timestamp: Date;
  user: string;
  type: NoteTypeProps;
  content: string;
}

export interface User {
  id: string;
  name: string;
}
