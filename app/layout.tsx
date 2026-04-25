import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RETO Beveiliging | Professionele Beveiliging Groningen & Drenthe",
  description:
    "RETO Beveiliging levert professionele beveiliging voor evenementen, objecten en publieke ruimtes in Groningen en Drenthe.",
  keywords: ["beveiliging", "Groningen", "Drenthe", "security", "evenementenbeveiliging", "objectbeveiliging"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${bebasNeue.variable} ${dmSans.variable} ${cormorantGaramond.variable}`}
    >
      <body className="bg-reto-black text-reto-off-white min-h-screen">
        <Providers>{children}</Providers>
        <WhatsAppButton />
      </body>
    </html>
  );
}
