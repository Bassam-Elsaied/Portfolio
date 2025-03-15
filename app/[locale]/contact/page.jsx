import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";

import { Paragraph } from "@/components/Paragraph";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Projects() {
  const t = useTranslations("Contact");
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">{t("title")}</Heading>
      <Paragraph className="mb-10 max-w-xl">{t("description")}</Paragraph>
      <Contact />
      <Heading className=" mb-2 mt-6">{t("titleTwo")}:</Heading>
      <div className="mb-10 flex justify-center items-center space-x-4">
        <Link
          href="https://github.com/Bassam-Elsaied"
          className="p-2 bg-gray-900 text-white rounded-full shadow hover:bg-gray-700 transition"
        >
          <IconBrandGithub size={20} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/bassam-elsayed-8227482b5/"
          className="p-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-500 transition"
        >
          <IconBrandLinkedin size={20} />
        </Link>
        <a
          href="mailto:Bassame993@gmail.com"
          className="p-2 bg-red-600 text-white rounded-full shadow hover:bg-red-500 transition"
        >
          <IconMail size={20} />
        </a>
      </div>
    </Container>
  );
}
