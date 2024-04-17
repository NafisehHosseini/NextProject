"use client";

import { useState } from "react";
import { createContext, React } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "Light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}> 
      {children}
      </div>
    </ThemeContext.Provider>
  );
};
 