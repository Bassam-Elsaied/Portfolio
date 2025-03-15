import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";

import { Paragraph } from "@/components/Paragraph";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Contact");
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">{t("title")}</Heading>
      <Paragraph className="mb-10 max-w-xl">{t("description")}</Paragraph>
      <Contact />
    </Container>
  );
}
