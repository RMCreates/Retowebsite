"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/providers";
import { t } from "@/lib/translations";

export function Services() {
  const { lang } = useLanguage();
  const tx = t[lang].services;

  return (
    <section id="services" className="bg-reto-black relative overflow-hidden">
      {/* Section header */}
      <div className="section-padding pb-12 lg:pb-16 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-px w-8 bg-reto-orange" />
          <span className="font-body text-xs tracking-[0.3em] uppercase text-reto-orange">
            {tx.label}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl lg:text-7xl tracking-widest text-reto-off-white"
        >
          {tx.title.toUpperCase()}
        </motion.h2>
      </div>

      {/* Service panels — full width stack */}
      <div className="border-t border-reto-orange/15">
        {tx.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group relative border-b border-reto-orange/15 overflow-hidden"
          >
            {/* Hover fill effect */}
            <div className="absolute inset-0 bg-reto-orange/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-16 items-center">
              {/* Number */}
              <span className="font-display text-5xl lg:text-7xl text-reto-orange/30 tracking-widest group-hover:text-reto-orange/60 transition-colors duration-300 leading-none">
                {item.number}
              </span>

              {/* Name + desc */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-16">
                <h3 className="font-display text-3xl lg:text-5xl xl:text-6xl tracking-widest text-reto-off-white leading-tight whitespace-pre-line group-hover:text-reto-orange transition-colors duration-300 min-w-[280px]">
                  {item.name}
                </h3>
                <p className="font-body text-sm lg:text-base text-reto-muted leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-end">
                <span className="text-reto-orange/0 group-hover:text-reto-orange/60 transition-all duration-300 font-display text-2xl tracking-widest translate-x-4 group-hover:translate-x-0">
                  →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
