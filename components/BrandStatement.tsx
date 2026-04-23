"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/providers";
import { t } from "@/lib/translations";

export function BrandStatement() {
  const { lang } = useLanguage();
  const tx = t[lang].brandStatement;

  return (
    <section className="bg-reto-green py-24 lg:py-36 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-reto-cream font-normal italic leading-tight"
        >
          {tx.quote}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-sm text-reto-cream/40 tracking-[0.2em] mt-8 uppercase"
        >
          {tx.sub}
        </motion.p>
      </div>
    </section>
  );
}
