import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BackToTopButton from "@/components/ui/BackToTopButton";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Amabile Negocios Inmobiliarios",
    template: "%s | Amabile",
  },
  description:
    "Más de 40 años acompañando operaciones inmobiliarias en Buenos Aires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        <Header />

        {children}

        <Footer />

        <WhatsAppButton />
        <BackToTopButton />
      </body>
    </html>
  );
}