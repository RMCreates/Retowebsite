"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/providers";
import { t } from "@/lib/translations";

function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const initial =
    direction === "up"
      ? { opacity: 0, y: 50 }
      : direction === "left"
        ? { opacity: 0, x: -60 }
        : { opacity: 0, x: 60 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  const { lang } = useLanguage();
  const tx = t[lang].about;

  return (
    <section id="about" className="section-padding bg-reto-dark relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(200,104,26,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: visual panel */}
          <FadeIn direction="left">
            <div className="relative aspect-[4/5] bg-reto-gray border border-reto-orange/20 overflow-hidden">
              {/* Security jacket visual — CSS-based placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  {/* Large SECURITY text like on the jackets */}
                  <p
                    className="font-display text-[10vw] lg:text-7xl tracking-[0.3em] text-reto-off-white/10 select-none"
                    aria-hidden
                  >
                    SECURITY
                  </p>
                  <p
                    className="font-display text-[10vw] lg:text-7xl tracking-[0.3em] text-reto-off-white/10 select-none"
                    aria-hidden
                  >
                    SECURITY
                  </p>
                  <p
                    className="font-display text-[10vw] lg:text-7xl tracking-[0.3em] text-reto-off-white/10 select-none"
                    aria-hidden
                  >
                    SECURITY
                  </p>
                </div>
              </div>

              {/* Orange corner accent */}
              <div className="absolute top-0 left-0 w-1 h-20 bg-reto-orange" />
              <div className="absolute top-0 left-0 w-20 h-1 bg-reto-orange" />
              <div className="absolute bottom-0 right-0 w-1 h-20 bg-reto-orange" />
              <div className="absolute bottom-0 right-0 w-20 h-1 bg-reto-orange" />

              {/* Replace with client photo note (hidden in UI) */}
              {/* <img src="/photos/about.jpg" alt="Reto Beveiliging team" className="w-full h-full object-cover" /> */}
            </div>
          </FadeIn>

          {/* Right: text */}
          <div className="flex flex-col gap-8">
            {/* Section label */}
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-reto-orange" />
                <span className="font-body text-xs tracking-[0.3em] uppercase text-reto-orange">
                  {tx.label}
                </span>
              </div>
            </FadeIn>

            {/* Title */}
            <FadeIn delay={0.2}>
              <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl leading-tight text-reto-off-white whitespace-pre-line">
                {tx.title}
              </h2>
            </FadeIn>

            {/* Body */}
            <FadeIn delay={0.3}>
              <p className="font-body text-base lg:text-lg leading-relaxed text-reto-muted max-w-lg">
                {tx.body}
              </p>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-3 gap-0 border border-reto-orange/20 mt-4">
                {tx.stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`p-5 lg:p-6 text-center ${i < tx.stats.length - 1 ? "border-r border-reto-orange/20" : ""}`}
                  >
                    <p className="font-display text-3xl lg:text-4xl text-reto-orange tracking-wider">
                      {stat.value}
                    </p>
                    <p className="font-body text-xs text-reto-muted tracking-widest uppercase mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
