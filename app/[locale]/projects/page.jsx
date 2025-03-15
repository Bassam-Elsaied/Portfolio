import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Projects";
import { useTranslations, useLocale } from "next-intl";

export default function Page() {
  const t = useTranslations("Projects");
  const locale = useLocale();

  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">{t("title")}</Heading>
      <Products locale={locale} />
    </Container>
  );
}
