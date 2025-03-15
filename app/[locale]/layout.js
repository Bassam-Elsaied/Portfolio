import { Inter } from "next/font/google";
import "../globals.css";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { twMerge } from "tailwind-merge";
import { Sidebar } from "@/components/Sidebar";
import LangButton from "@/components/LangButton";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Bassam Elsayed - Developer",
  description: "Bassam Elsayed is a developer.",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();
  const direction = routing.langDirection[locale];

  return (
    <html lang={locale} dir={direction}>
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100 "
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <LangButton />
          <Sidebar />
          <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
            <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
              {children}
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
