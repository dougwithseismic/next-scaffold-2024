import { ReactNode } from "react";

export type TODO = any;

export type Icon = (props: {
  className?: string;
  [key: string]: any;
}) => any;

export type NavItem = {
  name: string;
  href: string;
  IconComponent?: Icon;
};
