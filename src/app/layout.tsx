import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";

import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import clsx from "clsx";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

import { AppBar } from "@/components/AppBar";

const noto = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "応援ロケット",
  description: "マラソンランナーを応援するサービスです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${noto.className} antialiased`}>
        <Analytics />

        <SpeedInsights />

        <ToastContainer />

        <AppBar />

        <main className={clsx("w-full", "h-[calc(100dvh_-_56px)]")}>
          {children}
        </main>
      </body>

      {!!process.env.GOOGLE_ANALYTICS_ID && (
        <GoogleTagManager gtmId={process.env.GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}
