"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dynamic import keeps three.js out of the SSR bundle and out of the initial JS chunk.
const GuardScene = dynamic(() => import("./GuardScene"), { ssr: false });

type CTA = {
  index: string;
  compass: string;
  label: string;
  blurb: string;
  href: string;
};

const CTAS: CTA[] = [
  {
    index: "01",
    compass: "N · 0°",
    label: "OVER ONS",
    blurb: "Wie wij zijn — twintig jaar discreet aanwezig in Groningen en Drenthe.",
    href: "/over-ons",
  },
  {
    index: "02",
    compass: "E · 90°",
    label: "DIENSTEN",
    blurb: "Wat wij beveiligen.",
    href: "/diensten",
  },
  {
    index: "03",
    compass: "S · 180°",
    label: "WERKEN BIJ",
    blurb: "Word collega.",
    href: "/werken-bij",
  },
  {
    index: "04",
    compass: "W · 270°",
    label: "CONTACT",
    blurb: "Neem contact op.",
    href: "/werken-bij#contact",
  },
];

const TWO_PI = Math.PI * 2;

export function GuardSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [rotationY, setRotationY] = useState(0);

  const { quadrant, normalized, knobPercent, degrees } = useMemo(() => {
    // Wrap rotation into 0..2π
    const norm = ((rotationY % TWO_PI) + TWO_PI) % TWO_PI;
    // Quadrants centered at 0/π/2/π/3π/2 with ±π/4 ranges
    const q = Math.floor(((norm + Math.PI / 4) % TWO_PI) / (Math.PI / 2)) % 4;
    return {
      quadrant: q,
      normalized: norm,
      knobPercent: (norm / TWO_PI) * 100,
      degrees: Math.round((norm * 180) / Math.PI) % 360,
    };
  }, [rotationY]);

  const activeCTA = CTAS[quadrant];

  return (
    <section className="relative bg-reto-void border-t border-b border-reto-rule overflow-hidden min-h-screen px-6 lg:px-14 pt-8 pb-24">
      {/* Radial spotlight + vignette */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 62% 38%, rgba(212,128,30,0.22) 0%, rgba(192,112,24,0.06) 35%, transparent 65%), radial-gradient(ellipse 55% 80% at 22% 90%, rgba(192,112,24,0.08) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Corner crosshairs (desktop only) */}
      <Crosshair pos="tl" />
      <Crosshair pos="tr" />
      <Crosshair pos="bl" />
      <Crosshair pos="br" />

      {/* Header strip */}
      <div className="relative z-10 flex items-center justify-between border-b border-reto-rule pb-3.5">
        <div className="font-display text-[11px] tracking-[0.4em] text-reto-amber">
          .01 / NAVIGATIE
        </div>
        <div className="font-display text-[10px] tracking-[0.45em] text-reto-ash">
          INTERACTIVE — AUTO-ROTATE
          <span className="text-reto-bone ml-3.5">04 STATES</span>
        </div>
      </div>

      {/* Stage */}
      <div className="relative z-10 grid place-items-center pt-20 lg:pt-24 pb-16 min-h-[calc(100vh-12rem)]">
        {/* Compass labels (desktop) */}
        <CompassLabel pos="n" active={quadrant === 0} num="N · 0°" label="OVER ONS" />
        <CompassLabel pos="e" active={quadrant === 1} num="E · 90°" label="DIENSTEN" />
        <CompassLabel pos="s" active={quadrant === 2} num="S · 180°" label="WERKEN BIJ" />
        <CompassLabel pos="w" active={quadrant === 3} num="W · 270°" label="CONTACT" />

        {/* Model card */}
        <div
          className="relative"
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
        >
          <div
            className="relative w-[300px] h-[480px] sm:w-[340px] sm:h-[540px] border border-reto-rule overflow-hidden"
            style={{
              background:
                "linear-gradient(155deg, rgba(212,128,30,0.14) 0%, rgba(192,112,24,0.04) 28%, rgba(0,0,0,0) 60%), linear-gradient(180deg, #131313 0%, #0A0A0A 100%)",
              boxShadow:
                "0 60px 120px rgba(0,0,0,0.65), 0 -2px 0 rgba(212,128,30,0.15) inset, 0 0 0 1px rgba(212,128,30,0.06) inset",
            }}
          >
            {/* Corner brackets */}
            <Corner pos="tl" />
            <Corner pos="tr" />
            <Corner pos="bl" />
            <Corner pos="br" />

            {/* Meta-top */}
            <div className="absolute top-5 left-5 right-5 flex justify-between items-start font-display text-[10px] tracking-[0.4em] text-reto-ash z-10">
              <span>RETO · 01</span>
              <span className="text-reto-amber flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-reto-amber animate-pulse" />
                {isPaused ? "PAUSED" : "LIVE"}
              </span>
            </div>

            {/* Canvas */}
            <div className="absolute inset-0">
              <GuardScene isPaused={isPaused} onRotationChange={setRotationY} />
            </div>

            {/* Scan-lines */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 3px)",
              }}
            />

            {/* Meta-bottom */}
            <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end font-display text-[10px] tracking-[0.4em] text-reto-ash z-10">
              <span>.GLB · 14MB</span>
              <span className="text-reto-bone">
                ROT · <span className="text-reto-amber">{degrees}°</span>
              </span>
            </div>
          </div>

          {/* Rotation track */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-11 w-[300px] sm:w-[340px]">
            <div className="relative h-px bg-reto-rule">
              <div
                className="absolute -top-[3px] w-[7px] h-[7px] bg-reto-amber"
                style={{
                  left: `calc(${knobPercent}% - 3.5px)`,
                  boxShadow: "0 0 12px rgba(212,128,30,0.7)",
                }}
              />
            </div>
            <div className="flex justify-between mt-2 font-display text-[9px] tracking-[0.4em]">
              {(["N", "E", "S", "W", "N"] as const).map((tick, i) => {
                const tickQuadrant = i % 4;
                const isActive = quadrant === tickQuadrant && i < 4;
                return (
                  <span key={i} className={isActive ? "text-reto-amber" : "text-reto-ash"}>
                    {tick}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active CTA */}
        <div className="mt-28 w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCTA.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[640px]"
            >
              <Link
                href={activeCTA.href}
                className="group relative grid grid-cols-[1fr_auto] items-center gap-8 sm:gap-12 px-8 sm:px-10 py-7 border border-reto-amber overflow-hidden"
              >
                {/* Left amber accent bar */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-reto-amber"
                />
                {/* Sweep fill on hover */}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-reto-amber origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[550ms]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                />
                <div className="relative z-10 flex flex-col gap-2.5">
                  <span className="font-display text-[10px] tracking-[0.5em] text-reto-amber group-hover:text-reto-void transition-colors duration-300">
                    {activeCTA.index} / 04 — {activeCTA.compass}
                  </span>
                  <span className="font-display text-[42px] sm:text-[54px] leading-[0.95] tracking-[0.04em] text-reto-bone group-hover:text-reto-void transition-colors duration-300">
                    {activeCTA.label}
                  </span>
                  <span className="font-body text-[13px] tracking-[0.02em] text-reto-ash group-hover:text-reto-void transition-colors duration-300">
                    {activeCTA.blurb}
                  </span>
                </div>
                <span className="relative z-10 font-display text-[28px] sm:text-[34px] text-reto-amber group-hover:text-reto-void group-hover:translate-x-2 transition-all duration-300">
                  ⟶
                </span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer corners */}
      <div className="absolute left-6 lg:left-14 bottom-6 z-10 font-display text-[10px] tracking-[0.4em] text-reto-ash">
        SESSIE — <span className="text-reto-bone">RETO/01</span>
      </div>
      <div className="absolute right-6 lg:right-14 bottom-6 z-10 font-display text-[10px] tracking-[0.45em] text-reto-ash hidden sm:flex items-center gap-3.5">
        <span className="w-[5px] h-[5px] bg-reto-amber" />
        HOLD TO PAUSE · DRAG TO SPIN
      </div>
    </section>
  );
}

function CompassLabel({
  pos,
  active,
  num,
  label,
}: {
  pos: "n" | "e" | "s" | "w";
  active: boolean;
  num: string;
  label: string;
}) {
  const posClass = {
    n: "top-[6%] left-1/2 -translate-x-1/2 text-center",
    e: "top-1/2 right-[4%] -translate-y-1/2 text-right",
    s: "bottom-[28%] left-1/2 -translate-x-1/2 text-center",
    w: "top-1/2 left-[4%] -translate-y-1/2 text-left",
  }[pos];

  const tickPos = {
    n: "block w-px h-[18px] mx-auto mt-1.5",
    e: "block w-[18px] h-px ml-auto mt-1.5",
    s: "block w-px h-[18px] mx-auto mb-1.5",
    w: "block w-[18px] h-px mr-auto mt-1.5",
  }[pos];

  const tickEl = <span className={`${tickPos} ${active ? "bg-reto-amber" : "bg-reto-rule"}`} />;

  return (
    <div
      className={`absolute hidden lg:block font-display text-[11px] tracking-[0.45em] uppercase transition-colors duration-300 ${posClass} ${
        active ? "text-reto-amber" : "text-reto-ash"
      }`}
    >
      {pos === "s" && tickEl}
      <span
        className={`block text-[9px] mb-1 ${active ? "opacity-100" : "opacity-55"}`}
      >
        {num}
      </span>
      {label}
      {pos !== "s" && tickEl}
    </div>
  );
}

function Crosshair({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const posClass = {
    tl: "top-10 left-10",
    tr: "top-10 right-10",
    bl: "bottom-10 left-10",
    br: "bottom-10 right-10",
  }[pos];
  return (
    <span
      aria-hidden
      className={`absolute w-3.5 h-3.5 z-20 pointer-events-none hidden lg:block ${posClass}`}
    >
      <span className="absolute inset-x-0 top-1/2 h-px -mt-px bg-reto-amber" />
      <span className="absolute inset-y-0 left-1/2 w-px -ml-px bg-reto-amber" />
    </span>
  );
}

function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const posClass = {
    tl: "top-2.5 left-2.5 border-r-0 border-b-0",
    tr: "top-2.5 right-2.5 border-l-0 border-b-0",
    bl: "bottom-2.5 left-2.5 border-r-0 border-t-0",
    br: "bottom-2.5 right-2.5 border-l-0 border-t-0",
  }[pos];
  return (
    <span
      aria-hidden
      className={`absolute w-[18px] h-[18px] border border-reto-amber z-10 pointer-events-none ${posClass}`}
    />
  );
}
