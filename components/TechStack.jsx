import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Html",
      src: "/images/logos/icons8-html-5-48.png",

      className: "h-10 w-14",
    },
    {
      title: "Css",
      src: "/images/logos/icons8-css3-96.png",

      className: "h-10 w-14",
    },
    {
      title: "Javascript",
      src: "/images/logos/icons8-javascript-96.png",

      className: "h-10 w-14",
    },
    {
      title: "Reacr.js",
      src: "/images/logos/icons8-react-80.png",

      className: "h-10 w-14",
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",

      className: "h-10 w-8",
    },
    {
      title: "Framer Motion",
      src: "/images/logos/framer.webp",

      className: "h-10 w-10",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "Redux & Redux-toolkit",
      src: "/images/logos/icons8-redux-96.png",

      className: "h-10 w-10",
    },
    {
      title: "MUI",
      src: "/images/logos/icons8-material-ui-96.png",

      className: "h-10 w-10",
    },
    {
      title: "Shadcn",
      src: "/images/logos/shadcn-ui-seeklogo.png",

      className: "h-10 w-10",
    },
    {
      title: "Git & github",
      src: "/images/logos/icons8-github-logo-94.png",

      className: "h-10 w-10",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap items-center justify-center">
        {stack.map((item) => (
          <div
            key={item.src}
            className="relative w-16 h-16 mr-4 mb-4 text-center group"
          >
            <Image
              src={item.src}
              width={64}
              height={64}
              alt={item.title}
              className={twMerge("object-contain  mb-4", item.className)}
            />
            <p className="text-xs text-center font-bold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
