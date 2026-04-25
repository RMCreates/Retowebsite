"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/providers";
import { t } from "@/lib/translations";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  const { lang } = useLanguage();
  const tx = t[lang].about;
  const brandStatement = t[lang].brandStatement;

  return (
    <div>
      {/* Page hero */}
      <section className="relative bg-reto-black py-24 lg:py-32 px-6 overflow-hidden">
        {/* Amber ambient glow — one color moment on an otherwise void hero */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 85% 40%, rgba(192,112,24,0.12) 0%, transparent 65%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-reto-black to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeUp>
            <p className="font-display text-xs tracking-[0.4em] text-reto-amber uppercase mb-6">
              {tx.label}
            </p>
          </FadeUp>
          <div className="overflow-hidden">
            <FadeUp delay={0.1}>
              <h1 className="font-display text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem] text-reto-cream tracking-[0.01em] leading-[0.9] uppercase">
                {tx.storyTitle}
              </h1>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="bg-reto-black py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <FadeUp>
            <div className="h-px w-8 bg-reto-amber mb-10" />
            <p className="font-body text-base lg:text-lg text-reto-muted leading-relaxed">
              {tx.body}
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="bg-reto-shadow border-l-2 border-reto-amber p-10 lg:p-14">
              <p className="font-serif text-2xl lg:text-3xl text-reto-cream font-normal italic leading-relaxed">
                &ldquo;{brandStatement.quote}&rdquo;
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Operating area */}
      <section className="bg-reto-shadow py-20 lg:py-28 px-6 border-t border-reto-rule">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-display text-xs tracking-[0.4em] text-reto-amber uppercase mb-6">
              {tx.areaLabel}
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl text-reto-cream tracking-[0.02em] leading-[0.95] mb-10 max-w-2xl uppercase">
              {tx.areaTitle}
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="font-body text-base text-reto-muted leading-relaxed max-w-2xl">
              {tx.areaBody}
            </p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
