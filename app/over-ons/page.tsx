import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Over Ons | Reto Beveiliging",
  description:
    "Leer meer over Reto Beveiliging — een groeiend beveiligingsbedrijf gevestigd in Groningen en Drenthe. Betrouwbaar, sterk en professioneel.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </>
  );
}
