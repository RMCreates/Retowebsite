import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Beveiliging Diensten | Evenementen & Object Beveiliging Groningen",
  description:
    "Evenementenbeveiliging, objectbeveiliging, gastheer/gastvrouw en crowd management in Groningen en Drenthe. Vraag een offerte aan via WhatsApp.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </>
  );
}
