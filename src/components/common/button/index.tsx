"use client";
import React from "react";
import { FCProps } from "@/types";

export const Button: React.FC<FCProps> = ({ children }) => {
  return (
    <button className="bg-teal-500 text-white text-sm px-4 py-2 rounded-sm">
      {children}
    </button>
  );
};
