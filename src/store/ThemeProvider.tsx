"use client";

import React, { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { setTheme } from "./theme.slice";

type Props = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");

      if (storedTheme && !theme) {
        dispatch(setTheme(storedTheme));
      } else {
        localStorage.setItem("theme", theme);
      }

      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, dispatch]);

  return <>{children}</>;
};
