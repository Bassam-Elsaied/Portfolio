import { Container } from "@/components/Container";

import { Heading } from "@/components/Heading";
import { WorkHistory } from "@/components/WorkHistory";

import { Container } from "@/components/Container";

import { Heading } from "@/components/Heading";
import { WorkHistory } from "@/components/WorkHistory";

import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black mb-2 mt-2">{t("title")}</Heading>
      <p className="text-sm lg:text-base font-normal text-secondary">
        {t("descriptionOne")}
        <span className="bg-neutral-100 px-1 py-0.5">{t("spanOne")}</span>
        {t("descriptionTwo")}
      </p>

      <div className="flex justify-center items-center">
        <button className="mt-6  relative inline-block cursor-pointer no-underline group rounded-full bg-slate-900 p-2 text-xs font-semibold leading-6 text-white shadow-2xl ">
          <a href="/Bassam Elsayed - Front-end.pdf" download>
            {locale === "en" ? "Download cv" : "تحميل السيرة الذاتيه"}
          </a>
        </button>
      </div>

      <WorkHistory />
    </Container>
  );
}
