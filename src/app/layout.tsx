import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jesusnaweb.aliano.com.br"),

  title: {
    default: "Jesus na Web",
    template: "%s | Jesus na Web",
  },

  description:
    "Estudos bíblicos, reflexões cristãs e conteúdos de evangelização, esperança, libertação e reconstrução de vidas pela Palavra de Deus.",

  authors: [
    {
      name: "Aliano Rafael da Silva",
    },
  ],

  creator: "Aliano Rafael da Silva",

  keywords: [
    "Jesus na Web",
    "estudos bíblicos",
    "reflexões cristãs",
    "Palavra de Deus",
    "evangelização",
    "Jesus Cristo",
  ],

  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Jesus na Web",
    title: "Jesus na Web",
    description:
      "Estudos bíblicos, reflexões cristãs e conteúdos de evangelização pela Palavra de Deus.",
    url: "https://jesusnaweb.aliano.com.br",
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col font-sans">
        <Header />

        <div className="flex-1">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}