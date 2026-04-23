import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Reto Beveiliging | Professionele Beveiliging Groningen & Drenthe",
  description:
    "Reto Beveiliging levert professionele beveiliging voor evenementen, objecten en publieke ruimtes in Groningen en Drenthe.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
