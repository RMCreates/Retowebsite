import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { JoinUs } from "@/components/JoinUs";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Werken Bij | Reto Beveiliging",
  description:
    "Op zoek naar een uitdagende job in de beveiligingsbranche? Kom ons team versterken bij Reto Beveiliging in Groningen en Drenthe.",
};

export default function JoinPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <JoinUs />
      </main>
      <Footer />
    </>
  );
}
