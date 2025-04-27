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
      title: "React.js",
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
    {
      title: "Sanity",
      src: "/images/logos/sanity.png",

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
      <div className="flex flex-wrap items-center justify-between">
        {stack.map((item) => (
          <div key={item.src} className="group relative ">
            <button>
              <Image
                src={item.src}
                width={64}
                height={64}
                alt={item.title}
                className={twMerge("object-contain mb-4", item.className)}
              />
            </button>
            <span
              className="absolute -top-14 left-[50%] -translate-x-[50%] 
              z-20 origin-left scale-0 px-3 rounded-lg border 
              border-gray-300 bg-white py-2 text-sm font-bold
              shadow-md transition-all duration-300 ease-in-out 
              group-hover:scale-100"
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
