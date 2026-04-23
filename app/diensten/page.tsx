import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Diensten | Reto Beveiliging",
  description:
    "Reto Beveiliging biedt evenementenbeveiliging, objectbeveiliging, gastheer/gastvrouw diensten en crowd management in Groningen en Drenthe.",
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
