"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/app/providers";
import { t } from "@/lib/translations";

export function RecruitTeaser() {
  const { lang } = useLanguage();
  const tx = t[lang].recruitTeaser;

  return (
    <section className="bg-reto-green py-24 lg:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-xs tracking-[0.4em] text-reto-cream/50 uppercase mb-6">
            {tx.label}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-reto-cream font-normal italic leading-tight mb-8 max-w-3xl">
            {tx.headline}
          </h2>
          <p className="font-body text-base text-reto-cream/65 leading-relaxed mb-12 max-w-lg">
            {tx.body}
          </p>
          <Link
            href="/werken-bij"
            className="inline-block font-display text-xs tracking-[0.35em] border border-reto-cream/40 text-reto-cream px-9 py-3.5 rounded-sm hover:bg-reto-cream hover:text-reto-green transition-all duration-300 uppercase"
          >
            {tx.link}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
