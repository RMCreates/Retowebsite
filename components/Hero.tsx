"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/app/providers";
import { t } from "@/lib/translations";
import { WolfLogo } from "./WolfLogo";

const revealAnim = { opacity: 1, y: 0, skewX: 0 };
const revealHidden = { opacity: 0, y: 80, skewX: -6 };

export function Hero() {
  const { lang } = useLanguage();
  const tx = t[lang].hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-reto-black"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(200,104,26,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Angular accent lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-0 w-[1px] h-40 bg-reto-orange/20"
          style={{ transform: "rotate(30deg) translateX(80px)" }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-[1px] h-56 bg-reto-orange/15"
          style={{ transform: "rotate(-25deg) translateX(-60px)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-reto-orange/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Wolf logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-8 lg:mb-10"
        >
          <WolfLogo size={100} />
        </motion.div>

        {/* RETO BEVEILIGING */}
        <div className="overflow-hidden">
          <div className="overflow-hidden">
            <motion.h1
              initial={revealHidden}
              animate={revealAnim}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
              className="font-display text-[18vw] sm:text-[14vw] lg:text-[11vw] leading-none tracking-widest text-reto-off-white"
            >
              {tx.line1}
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={revealHidden}
              animate={revealAnim}
              transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
              className="font-display text-[8vw] sm:text-[6.5vw] lg:text-[5.5vw] leading-none tracking-[0.25em] text-reto-orange"
            >
              {tx.line2}
            </motion.p>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="mx-auto mt-8 mb-8 h-px w-24 bg-reto-orange origin-left"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="font-body text-reto-muted tracking-widest uppercase text-sm lg:text-base mb-12"
        >
          {tx.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-20"
        >
          <Link
            href="/diensten"
            className="font-display text-base lg:text-lg tracking-[0.2em] bg-reto-orange text-reto-black px-10 py-4 hover:bg-reto-orange-light transition-colors duration-200 w-full sm:w-auto text-center"
          >
            {tx.cta1}
          </Link>
          <Link
            href="/werken-bij"
            className="font-display text-base lg:text-lg tracking-[0.2em] border border-reto-orange/60 text-reto-off-white px-10 py-4 hover:border-reto-orange hover:text-reto-orange transition-colors duration-200 w-full sm:w-auto text-center"
          >
            {tx.cta2}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs tracking-widest uppercase text-reto-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-reto-orange/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
