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
    title: "Front-end Developer",
    date: "2024 - Present",
    description_en: "Building the future of e-commerce",
    description_ar: "بناء مستقبل التجارة الإلكترونية",
    descriptionTwo_en:
      "I built a large-scale e-commerce project featuring both a dashboard and a web app for managing operations. As a Frontend Developer, I contributed to building and optimizing user interfaces using Next.js, React, Tailwind CSS, and MUI. I also integrated Socket.io to provide dynamic updates, ensuring a seamless and high-performance user experience.",
    descriptionTwo_ar:
      "قمتُ ببناء مشروع تجارة إلكترونية واسع النطاق يضم لوحة تحكم وتطبيق ويب لإدارة العمليات. وبصفتي مطور واجهات أمامية، ساهمتُ في بناء وتحسين واجهات المستخدم باستخدام Next.js وReact وTailwind CSS وMUI. كما دمجتُ Socket.io لتوفير تحديثات ديناميكية، مما يضمن تجربة مستخدم سلسة وعالية الأداء.",
  },
  {
    company: "FreeLance",
    title: " Front-end Developer",
    date: "2025",
    description_en: "Building Quiz game ",
    description_ar: "قمت ببناء موقع فيه العديد من الاسئلة بطريقة مسليه",
    descriptionTwo_ar:
      "موقع 'Learning Game 'هو تجربة تفاعلية تهدف إلى دمج التعلم باللعب. يقدم مجموعة من الألعاب البسيطة المصممة لتقوية مهارات الفهم والتركيز،",
    descriptionTwo_en:
      "The Learning Game website is an interactive platform that integrates learning with play. It features a series of mini-games to help you develop and master your skills.",
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

            <Step>
              {locale === "en"
                ? item.descriptionTwo_en
                : item.descriptionTwo_ar}
            </Step>
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
