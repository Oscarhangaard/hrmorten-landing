import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hr Morten — Din personlige AI-assistent",
  description: "Hr Morten er din personlige AI-assistent på Telegram. Han kender din kalender, sender reminders og hjælper dig med din hverdag. 299 kr/måned.",
  openGraph: {
    title: "Hr Morten — Din personlige AI-assistent",
    description: "Din personlige AI-assistent på Telegram. 299 kr/måned.",
    url: "https://hrmorten.dk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col bg-[#0a0a0f] text-white`}>
        {children}
      </body>
    </html>
  );
}
