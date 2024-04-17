"use client";
import React, { useContext } from "react";
import styled from "./DarkMode.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
export default function DarkModeToLight() {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styled.container} onClick={toggle}>
      <div className={styled.moon}>🌙</div>
      <div className={styled.moon}>⭐</div>
      <div
        className={styled.circle}
        style={mode === "dark" ? { right: "0px" } : { left: "0px" }}
      />
    </div>
  );
}
