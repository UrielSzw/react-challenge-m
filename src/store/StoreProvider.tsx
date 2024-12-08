"use client";

import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

type Props = {
  children: ReactNode;
};

export const StoreProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
