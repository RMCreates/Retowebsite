import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { GuardSection } from "@/components/GuardSection";
import { BrandStatement } from "@/components/BrandStatement";
import { ServicesPreview } from "@/components/ServicesPreview";
import { AboutTeaser } from "@/components/AboutTeaser";
import { RecruitTeaser } from "@/components/RecruitTeaser";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "RETO Beveiliging | Professionele Beveiliging Groningen & Drenthe",
  description:
    "RETO Beveiliging levert professionele beveiliging voor evenementen, objecten en publieke ruimtes in Groningen en Drenthe. Neem contact op via WhatsApp of e-mail.",
  keywords: [
    "beveiliging groningen",
    "beveiliging drenthe",
    "reto beveiliging",
    "evenementenbeveiliging groningen",
    "objectbeveiliging groningen",
    "beveiligingsbedrijf groningen",
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GuardSection />
        <BrandStatement />
        <ServicesPreview />
        <AboutTeaser />
        <RecruitTeaser />
      </main>
      <Footer />
    </>
  );
}
