import React from "react";

import { twMerge } from "tailwind-merge";

// Font files can be colocated inside of `app`

export const Heading = ({ className, children, as: Tag = "h1" }) => {
  return (
    <Tag
      className={twMerge(
        "text-base md:text-xl lg:text-4xl font-semibold bg-clip-text bg-gradient-to-r from-primary to-secondary",
        className
      )}
    >
      {children}
    </Tag>
  );
};
