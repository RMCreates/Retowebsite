"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/providers";
import { t } from "@/lib/translations";

export function Services() {
  const { lang } = useLanguage();
  const tx = t[lang].services;
  const ctaLabel = lang === "nl" ? "Neem contact op" : "Get in touch";

  return (
    <div>
      {/* Page header */}
      <section className="bg-reto-black py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-xs tracking-[0.4em] text-reto-orange uppercase mb-6"
          >
            {tx.label}
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-reto-cream font-normal italic leading-none"
            >
              {tx.pageTitle}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Service panels — alternating black / green */}
      {tx.items.map((item, i) => {
        const isGreen = i % 2 !== 0;
        return (
          <motion.section
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className={`px-6 py-20 lg:py-28 border-t ${
              isGreen
                ? "bg-reto-green border-reto-green-light"
                : "bg-reto-black border-reto-rule"
            }`}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-10 lg:gap-20 items-start">
              {/* Number */}
              <p
                className={`font-display text-8xl lg:text-[9rem] leading-none ${
                  isGreen ? "text-reto-cream/15" : "text-reto-orange/20"
                }`}
              >
                {item.number}
              </p>

              {/* Content */}
              <div>
                <h2
                  className={`font-serif text-4xl lg:text-5xl xl:text-6xl font-normal italic leading-tight mb-8 whitespace-pre-line ${
                    isGreen ? "text-reto-cream" : "text-reto-cream"
                  }`}
                >
                  {item.name}
                </h2>
                <p
                  className={`font-body text-base leading-relaxed mb-10 max-w-xl ${
                    isGreen ? "text-reto-cream/65" : "text-reto-muted"
                  }`}
                >
                  {item.desc}
                </p>
                <a
                  href={`https://wa.me/31612345678?text=Hallo%2C%20ik%20heb%20interesse%20in%20${encodeURIComponent(item.name.replace("\n", " "))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block font-display text-xs tracking-[0.35em] px-8 py-3.5 transition-all duration-300 uppercase ${
                    isGreen
                      ? "border border-reto-cream/40 text-reto-cream hover:bg-reto-cream hover:text-reto-green"
                      : "border border-reto-orange/50 text-reto-orange hover:bg-reto-orange hover:text-reto-black"
                  }`}
                >
                  {ctaLabel}
                </a>
              </div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}
