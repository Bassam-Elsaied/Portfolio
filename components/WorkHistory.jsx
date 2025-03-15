"use client";

import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";
import { Products } from "./Projects";
import { TechStack } from "./TechStack";

const timeline = [
  {
    company: "ENS",
    title: "Junior Front-end Developer",
    date: "2024 - Present",
    description_en: "Building the future of e-commerce",
    description_ar: "بناء مستقبل التجارة الإلكترونية",
  },
];

export const WorkHistory = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <div>
      {timeline.map((item, index) => (
        <div
          className="flex md:flex-row flex-col space-y-10 md:space-y-0 space-x-10 my-20 relative"
          key={`timeline-${index}`}
        >
          <Paragraph className="w-40">{item.date}</Paragraph>
          <div>
            <Heading
              as="h5"
              className="text-lg md:text-lg lg:text-lg text-emerald-500"
            >
              {item.company}
            </Heading>
            <Paragraph className="text-base mb-2 md:text-base lg:text-base font-semibold">
              {item.title}
            </Paragraph>
            <Paragraph className="text-sm md:text-sm lg:text-sm mb-4">
              {locale === "en" ? item.description_en : item.description_ar}
            </Paragraph>

            <Step>{t("experience")}</Step>
          </div>
        </div>
      ))}

      <TechStack />

      <Paragraph className={"font-black mt-5 mb-2 "}>
        {locale === "en" ? "Courses" : "كورسات "}
      </Paragraph>
      <div>
        <Paragraph className={"mb-2 ml-4"}>
          The Ultimate React Course 2024: React, Next.js, Redux & More (Online)
        </Paragraph>
        <Paragraph className="mb-2 ml-4">
          The complete web development bootcamp (online).
        </Paragraph>
        <Paragraph className="mb-10 ml-4">
          JavaScript Algorithms and Data Structure at freeCodeCamp (online)
        </Paragraph>
      </div>

      <Paragraph className={"font-black mt-5"}>
        {locale === "en" ? "My Projects" : "مشاريع قمت بها"}
      </Paragraph>

      <Products locale={locale} />
    </div>
  );
};

const Step = ({ children }) => {
  return (
    <div className="flex space-x-1 items-start my-2">
      <IconCircleCheckFilled className="h-3 w-4 mt-1 text-neutral-300" />
      <Paragraph className="text-sm md:text-sm lg:text-sm">
        {children}
      </Paragraph>
    </div>
  );
};
