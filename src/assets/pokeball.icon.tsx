import React, { SVGProps } from "react";

export const PokeballIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="#30345A"
        d="M14.857 12a2.857 2.857 0 1 1-5.714 0 2.857 2.857 0 0 1 5.714 0Z"
      />
      <path
        fill="#30345A"
        fillRule="evenodd"
        d="M12 24c6.045 0 11.046-4.47 11.878-10.286H16.85a5.145 5.145 0 0 1-9.7 0H.12C.953 19.53 5.954 24 12 24ZM7.15 10.286H.12C.953 4.47 5.954 0 12 0c6.045 0 11.046 4.47 11.878 10.286H16.85a5.145 5.145 0 0 0-9.7 0ZM14.856 12a2.857 2.857 0 1 1-5.714 0 2.857 2.857 0 0 1 5.714 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
