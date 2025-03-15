"use client";

import { useLocale } from "next-intl";
import { IconLanguage } from "@tabler/icons-react";
import { Link } from "@/i18n/routing";
import { usePathname, useRouter } from "next/navigation";

export default function LangButton() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const newLocale = locale === "en" ? "ar" : "en";

  const switchLocale = () => {
    router.push(`/${newLocale}${pathname.substring(3)}`);
  };

  return (
    <div
      className={`fixed top-4  z-50 ${locale === "en" ? "right-6" : "left-9"}`}
    >
      <button
        onClick={switchLocale}
        className="flex items-center gap-2 p-2 rounded-full bg-white  border border-neutral-200  hover:bg-neutral-100  transition-colors"
      >
        <IconLanguage className="h-5 w-5" />
      </button>
    </div>
  );
}
