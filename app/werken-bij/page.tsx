import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { JoinUs } from "@/components/JoinUs";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vacatures Beveiliger Groningen | Werken Bij RETO Beveiliging",
  description:
    "Werken als beveiliger in Groningen of Drenthe? RETO Beveiliging groeit en zoekt nieuwe teamleden. Solliciteer direct via WhatsApp.",
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
