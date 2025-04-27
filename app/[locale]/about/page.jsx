"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { useTranslations } from "next-intl";
import Card from "@/components/Card";

export default function About() {
  const t = useTranslations("About");

  const images = [
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546146830-2cca9512c68e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1616400619175-5beda3a17896?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{
                opacity: 0,
                y: -50,
                rotate: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: index % 2 === 0 ? 3 : -3,
              }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <Image
                src={image}
                width={400}
                height={600}
                alt="about"
                quality={100}
                unoptimized={false}
                className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            staggerChildren: 0.1,
          }}
          className="max-w-4xl text-gray-500"
        >
          <Paragraph className=" mt-4">{t("paragraphOne")}</Paragraph>
          <Paragraph className=" mt-4">{t("paragraphTwo")}</Paragraph>

          <Paragraph className=" mt-4">{t("paragraphThree")}</Paragraph>
          <Paragraph className=" mt-4">{t("paragraphFour")}</Paragraph>
        </motion.div>

        <Card />
      </div>
    </Container>
  );
}
