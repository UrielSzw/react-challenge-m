import React from "react";
import { MAX_ITEMS } from "../global/const";
import { CardSkeleton } from "./CardSkeleton.component";

export const ListSkeleton = () => {
  return (
    <section className="container">
      <div className="separator" />

      <div className="container_list custom-scrollbar">
        {new Array(MAX_ITEMS).fill(0).map((_item, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};
