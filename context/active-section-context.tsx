import React, { useState } from "react";

// export default function ActiveSectionContextProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
type ActiveSectionContextProviderProps = { children: React.ReactNode };

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState("Home");
  return children;
}
