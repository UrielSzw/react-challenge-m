import React, { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <button className="custombutton" {...rest}>
      {children}
    </button>
  );
};
