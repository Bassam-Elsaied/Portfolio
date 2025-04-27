"use client";

import { useTranslations } from "next-intl";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { motion } from "framer-motion";

import Image from "next/image";
import { TechStack } from "@/components/TechStack";
import { fadeIn } from "@/lib/variants";
import Title from "@/components/Title";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <Container>
      {/* <span className="text-4xl">👋</span> */}
      <Title />
      <Heading className="font-black mb-2">{t("hello")}</Heading>
      <p className="text-sm lg:text-base font-normal text-secondary">
        {t("descriptionOne")}
        <span className="bg-neutral-100 px-1 py-0.5">{t("spanOne")}</span>
        {t("descriptionTwo")}
      </p>
      <motion.p
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="max-w-xl mt-4 mb-4 text-sm lg:text-base font-normal text-secondary"
      >
        {t("descriptionThree")}
        {/* <span className="bg-neutral-100 px-1 py-0.5">{t("spanTwo")}</span>
        {t("descriptionFour")} */}
      </motion.p>
      <motion.ul
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <li className="text-sm lg:text-base font-normal text-secondary mb-4">
          {t("itemOne")}
        </li>
        <li className="text-sm lg:text-base font-normal text-secondary mb-4">
          {t("itemTwo")}
        </li>
        <li className="text-sm lg:text-base font-normal text-secondary mb-4">
          {t("itemThree")}
        </li>
        <li className="text-sm lg:text-base font-normal text-secondary">
          {t("itemFour")}
        </li>
      </motion.ul>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        {t("title")}
      </Heading>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          staggerChildren: 0.1,
        }}
        className="grid grid-cols-1  gap-10"
      >
        <div className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4">
          <Image
            src="/images/ENS.webp"
            alt="thumbnail"
            height="200"
            width="200"
            className="rounded-md"
          />
          <div className="flex flex-col justify-between">
            <div>
              <Heading
                as="h4"
                className="font-black text-lg md:text-lg lg:text-lg "
              >
                ENS (part time){" "}
                <span className="bg-neutral-100 px-1 py-0.5 font-normal">
                  Mar 2024 – current
                </span>
              </Heading>
              <p className="font-normal text-secondary text-md   mt-2 max-w-xl ">
                {t("experience")}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <TechStack />

      {/* <Products /> */}
    </Container>
  );
}
