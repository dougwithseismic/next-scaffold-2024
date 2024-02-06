import { ReactNode } from "react";

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
