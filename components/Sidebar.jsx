"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";

import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";
import { navlinks } from "@/data/navlinks";
import { socials } from "@/data/socials";
import { Badge } from "./Badge";

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);
  const params = useParams();
  const locale = params.locale;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={locale === "en" ? { x: -200 } : { x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={locale === "en" ? { x: -200 } : { x: 200 }}
            className={`px-6  z-[100] py-10 bg-neutral-100  max-w-[14rem] lg:w-fit  fixed lg:relative  h-screen  flex flex-col justify-between ${
              locale === "en" ? "left-0" : "right-0"
            }`}
          >
            <div className="flex-1 overflow-auto">
              <SidebarHeader locale={locale} />
              <Navigation setOpen={setOpen} locale={locale} />
            </div>
            <div onClick={() => isMobile() && setOpen(false)}>
              <Badge
                href={`/${locale}/resume`}
                text={locale === "en" ? "Read Resume" : "اقرأ السيرة الذاتية"}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className={`fixed bg-black text-white pointer lg:hidden bottom-4  h-8 w-8 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50 ${
          locale === "en" ? "right-6" : "left-9"
        }`}
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-4 w-4 text-secondary" />
      </button>
    </>
  );
};

export const Navigation = ({ setOpen, locale }) => {
  const pathname = usePathname();
  const IsAr = locale === "ar";

  const isActive = (href) => {
    if (href === "/") {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    const fullPath = `/${locale}${href}`;
    return pathname === fullPath;
  };

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link) => (
        <Link
          key={link.href}
          href={`/${locale}${link.href}`}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-white shadow-lg text-primary"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{IsAr ? link.label_ar : link.label_en}</span>
        </Link>
      ))}

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
        {locale === "en" ? "Socials" : "وسائل التواصل"}
      </Heading>
      {socials.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={twMerge(
            "text-gray-500 hover:text-black transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = ({ locale }) => {
  const text = locale === "en" ? "Developer" : "مطور";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 1000);
    }
  }, [index, text]);

  return (
    <div className="flex space-x-2">
      <Image
        src="/images/header.jpg"
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-primary">
          {locale === "en" ? "Bassam Elsayed" : "بسام السيد"}
        </p>
        <p className="font-light text-secondary">{displayedText}</p>
      </div>
    </div>
  );
};
