import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

type Props = LinkProps & {
  children: ReactNode;
};

export const LinkButton: React.FC<Props> = ({ href, children, ...rest }) => {
  return (
    <Link className="custombutton" href={href}>
      {children}
    </Link>
  );
};
