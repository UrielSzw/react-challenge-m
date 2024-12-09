"use client";

import React from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/theme.slice";
import { MoonIcon } from "../assets/moon.icon";
import { SunIcon } from "../assets/sun.icon";

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      className="switchbutton"
      aria-label={
        theme === "light" ? "Activar modo oscuro" : "Activar modo claro"
      }
      onClick={handleToggleTheme}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};
