"use client";
import * as React from "react";
import "./Note.css";

export const Note = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="note">
      <h4>Note</h4>
      {children}
    </div>
  );
};
