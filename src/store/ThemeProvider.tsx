"use client";

import React, { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "./theme.slice";

type Props = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");

      if (storedTheme) {
        dispatch(setTheme(storedTheme));
      }
    }
  }, [dispatch]);

  return <>{children}</>;
};
