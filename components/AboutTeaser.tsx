"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/app/providers";
import { t } from "@/lib/translations";

export function AboutTeaser() {
  const { lang } = useLanguage();
  const tx = t[lang].aboutTeaser;

  return (
    <section className="bg-reto-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
          {/* Photo panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[320px] lg:min-h-0 overflow-hidden bg-reto-shadow"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 50%, rgba(192,112,24,0.18) 0%, transparent 60%)",
              }}
            />
            <div className="absolute inset-0 bg-reto-black/30" />
            {/* Placeholder watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <p className="font-display text-[16vw] lg:text-[9vw] text-reto-off-white/[0.04] tracking-[0.3em]">
                SECURITY
              </p>
            </div>
          </motion.div>

          {/* Text panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center py-16 px-0 lg:px-16"
          >
            <div className="h-px w-8 bg-reto-amber mb-8" />
            <p className="font-display text-xs tracking-[0.4em] text-reto-amber uppercase mb-5">
              {tx.label}
            </p>
            <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl text-reto-cream tracking-[0.02em] leading-[0.95] mb-6 uppercase">
              {tx.headline}
            </h2>
            <p className="font-body text-base text-reto-muted leading-relaxed mb-10 max-w-sm">
              {tx.body}
            </p>
            <Link
              href="/over-ons"
              className="font-display text-xs tracking-[0.35em] text-reto-amber/70 hover:text-reto-amber transition-colors duration-200 uppercase"
            >
              {tx.link} →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
