import {
  EnvelopeIcon,
  PhoneIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import { BeerIcon, CoffeeIcon, List } from "lucide-react";
import { NoteTypeProps } from "./types";

export const NoteType: {
  [key: string]: NoteTypeProps;
} = {
  list: {
    key: "list",
    label: "List",
    icon: <List />,
  },
  message: {
    key: "message",
    label: "Message",
    icon: <EnvelopeIcon />,
  },
  phone: {
    key: "phone",
    label: "Phone",
    icon: <PhoneIcon />,
  },
  coffee: {
    key: "coffee",
    label: "Coffee",
    icon: <CoffeeIcon />,
  },
  beer: {
    key: "beer",
    label: "Beer",
    icon: <BeerIcon />,
  },
  meeting: {
    key: "meeting",
    label: "Meeting",
    icon: <UserGroupIcon />,
  },
};
