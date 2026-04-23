import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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

export const metadata: Metadata = {
  title: "Reto Beveiliging | Professionele Beveiliging Groningen & Drenthe",
  description:
    "Reto Beveiliging levert professionele beveiliging voor evenementen, objecten en publieke ruimtes in Groningen en Drenthe.",
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
      className={`${bebasNeue.variable} ${dmSans.variable}`}
    >
      <body className="bg-reto-black text-reto-off-white min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
