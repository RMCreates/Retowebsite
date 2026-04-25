"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/app/providers";
import { t } from "@/lib/translations";
import { WolfLogo } from "./WolfLogo";

export function Hero() {
  const { lang } = useLanguage();
  const tx = t[lang].hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-reto-black"
    >
      {/* Warm amber ambient glow from left — the one color moment on an otherwise void hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 22% 50%, rgba(192,112,24,0.18) 0%, transparent 65%)",
        }}
      />
      {/* Secondary ambient from right for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 60%, rgba(192,112,24,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-reto-black to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full flex flex-col items-center">

        {/* Logo with warm glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 relative"
        >
          {/* Ambient orange halo — ties the logo to the image's warmth */}
          <div
            className="absolute inset-0 blur-3xl scale-[2] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(200,104,26,0.22) 0%, transparent 70%)" }}
          />
          <WolfLogo size={88} className="relative z-10" />
        </motion.div>

        {/* Location label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-xs tracking-[0.45em] text-reto-muted uppercase mb-7"
        >
          {tx.locationLabel}
        </motion.p>

        {/* RETO — Bebas Neue display, uppercase authority */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[24vw] sm:text-[18vw] lg:text-[14vw] leading-[0.85] tracking-[0.02em] text-reto-cream"
          >
            {tx.line1}
          </motion.h1>
        </div>

        {/* BEVEILIGING */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[7vw] sm:text-[5.5vw] lg:text-[4.5vw] leading-none tracking-[0.35em] text-reto-amber"
          >
            {tx.line2}
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="w-14 h-px bg-reto-amber origin-center mt-8 mb-7"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-body text-sm lg:text-base text-reto-muted tracking-widest mb-12 max-w-md"
        >
          {tx.tagline}
        </motion.p>

        {/* CTAs — refined: WhatsApp pill + text link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 pb-24"
        >
          <a
            href="https://wa.me/31612345678?text=Hallo%2C%20ik%20heb%20een%20vraag%20over%20uw%20diensten"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-display text-sm tracking-[0.2em] px-9 py-3.5 rounded-none text-white w-full sm:w-auto justify-center transition-opacity duration-200 hover:opacity-90"
            style={{ backgroundColor: "#25D366" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {tx.ctaWhatsApp}
          </a>
          <Link
            href="/diensten"
            className="font-display text-sm tracking-[0.3em] text-reto-cream/70 hover:text-reto-amber transition-colors duration-200 uppercase"
          >
            {tx.cta1} →
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-widest uppercase text-reto-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-reto-amber/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
