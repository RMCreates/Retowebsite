"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/providers";
import { t } from "@/lib/translations";

export function JoinUs() {
  const { lang } = useLanguage();
  const tx = t[lang].join;

  const email = "beveiligingreto@gmail.com";
  const subject = lang === "nl" ? "Sollicitatie Reto Beveiliging" : "Job Application Reto Beveiliging";

  return (
    <section id="join" className="section-padding bg-reto-dark relative overflow-hidden">
      {/* Background diagonal stripe */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(200,104,26,0.06) 0%, transparent 50%, rgba(200,104,26,0.03) 100%)",
        }}
      />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-reto-orange/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-reto-orange" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-reto-orange">
              {tx.label}
            </span>
          </div>
          <h2 className="font-display text-5xl lg:text-7xl xl:text-8xl tracking-widest text-reto-off-white leading-tight whitespace-pre-line">
            {tx.title.toUpperCase()}
          </h2>
          <p className="font-body text-lg lg:text-xl text-reto-muted mt-6 max-w-2xl leading-relaxed">
            {tx.subtitle}
          </p>
        </motion.div>

        {/* Two-column requirements + offer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="border border-reto-orange/20 p-8 lg:p-10"
          >
            <h3 className="font-display text-xl lg:text-2xl tracking-widest text-reto-orange mb-6">
              {tx.requirementsTitle.toUpperCase()}
            </h3>
            <ul className="flex flex-col gap-4">
              {tx.requirements.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-reto-orange mt-0.5 shrink-0 font-display text-base">—</span>
                  <span className="font-body text-sm lg:text-base text-reto-off-white/80 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What we offer */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="border border-reto-orange/20 p-8 lg:p-10 bg-reto-orange/5"
          >
            <h3 className="font-display text-xl lg:text-2xl tracking-widest text-reto-orange mb-6">
              {tx.offerTitle.toUpperCase()}
            </h3>
            <ul className="flex flex-col gap-4">
              {tx.offer.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-reto-orange mt-0.5 shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-7" stroke="#C8681A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-body text-sm lg:text-base text-reto-off-white/80 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center text-center gap-4"
        >
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
            className="group inline-flex items-center gap-4 font-display text-xl lg:text-2xl tracking-[0.2em] bg-reto-orange text-reto-black px-12 py-5 hover:bg-reto-orange-light transition-colors duration-200"
          >
            {tx.cta.toUpperCase()}
            <span className="group-hover:translate-x-2 transition-transform duration-200">→</span>
          </a>
          <p className="font-body text-xs text-reto-muted tracking-widest uppercase">{tx.ctaSub}</p>
          <p className="font-body text-sm text-reto-orange/70">{email}</p>
        </motion.div>
      </div>
    </section>
  );
}
