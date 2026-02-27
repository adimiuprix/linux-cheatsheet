import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";

import { links } from "@/constants/links";

import "@/app/global.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Linux cheat sheets and guides",
    template: "%s | Role Reactor",
  },
  description:
    "Lembar contekan dan panduan untuk Linux, mencakup berbagai distribusi dan topik. Pelajari tentang perintah, konfigurasi, dan praktik terbaik untuk meningkatkan pengalaman Linux Anda.",
  keywords: [
    "Linux",
    "cheat sheets",
    "panduan Linux",
    "perintah Linux",
    "konfigurasi Linux",
    "distribusi Linux",
    "praktik terbaik Linux",
    "tutorial Linux",
    "Linux untuk pemula",
    "Linux lanjutan",
  ],
  authors: [{ name: "Adimiuprix" }],
  creator: "Adimiuprix",
  publisher: "Adimiuprix",
  category: "Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || links.home),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Role Reactor - Discord Bot for Role Management",
    description:
      "The most powerful Discord bot for automated role management. Set up reaction roles, manage permissions, and enhance your Discord server experience.",
    siteName: "Role Reactor",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Role Reactor - Discord Bot for Role Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Role Reactor - Discord Bot for Role Management",
    description:
      "The most powerful Discord bot for automated role management. Set up reaction roles, manage permissions, and enhance your Discord server experience.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
