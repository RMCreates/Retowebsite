"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/app/providers";
import { t } from "@/lib/translations";

export function RecruitTeaser() {
  const { lang } = useLanguage();
  const tx = t[lang].recruitTeaser;

  return (
    <section className="bg-reto-shadow py-24 lg:py-32 px-6 border-t border-reto-rule">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-xs tracking-[0.4em] text-reto-amber uppercase mb-6">
            {tx.label}
          </p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-reto-cream tracking-[0.02em] leading-[0.9] mb-8 max-w-3xl uppercase">
            {tx.headline}
          </h2>
          <p className="font-body text-base text-reto-cream/65 leading-relaxed mb-12 max-w-lg">
            {tx.body}
          </p>
          <Link
            href="/werken-bij"
            className="inline-block font-display text-xs tracking-[0.35em] border border-reto-amber text-reto-amber px-9 py-3.5 rounded-none hover:bg-reto-amber hover:text-reto-black transition-all duration-300 uppercase"
          >
            {tx.link}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
