import React from "react";

export const CardSkeleton: React.FC = () => {
  return (
    <div className="skeleton">
      <div className="skeleton_circle" />
      <div className="skeleton_name" />
    </div>
  );
};
