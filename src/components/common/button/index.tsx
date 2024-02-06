"use client";
import React from "react";
import { FCProps } from "@/types";

export const Button: React.FC<FCProps> = ({ children }) => {
  return (
    <button className="bg-teal-500 text-white p-1 md:px-4 text-xs md:text-sm md:py-2 rounded-sm">
      {children}
    </button>
  );
};
