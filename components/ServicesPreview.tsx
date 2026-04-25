"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/app/providers";
import { t } from "@/lib/translations";

export function ServicesPreview() {
  const { lang } = useLanguage();
  const tx = t[lang].services;
  const linkLabel = lang === "nl" ? "Alle diensten bekijken" : "View all services";

  return (
    <section className="bg-reto-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px w-8 bg-reto-orange" />
          <span className="font-display text-xs tracking-[0.4em] text-reto-orange uppercase">
            {tx.label}
          </span>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-reto-rule">
          {tx.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="border-b border-r border-reto-rule p-8 lg:p-12 group hover:bg-reto-rule/40 transition-colors duration-300"
            >
              <p className="font-display text-5xl lg:text-6xl text-reto-amber/25 group-hover:text-reto-amber/60 transition-colors duration-300 mb-5 leading-none">
                {item.number}
              </p>
              <h3 className="font-display text-3xl lg:text-4xl text-reto-cream tracking-[0.02em] leading-tight mb-4 whitespace-pre-line uppercase">
                {item.name}
              </h3>
              <p className="font-body text-sm text-reto-muted leading-relaxed">
                {item.shortDesc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex justify-end"
        >
          <Link
            href="/diensten"
            className="font-display text-xs tracking-[0.35em] text-reto-orange/60 hover:text-reto-orange transition-colors duration-200 uppercase"
          >
            {linkLabel} →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
