"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { useLanguage } from "@/app/providers";
import { t } from "@/lib/translations";
import { WolfLogo } from "./WolfLogo";

export function Navbar() {
  const { lang, toggle } = useLanguage();
  const tx = t[lang].nav;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (y) => setScrolled(y > 40));
  }, [scrollY]);

  const links = [
    { label: tx.about, href: "#about" },
    { label: tx.services, href: "#services" },
    { label: tx.join, href: "#join" },
    { label: tx.contact, href: "#contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(200,104,26,0.15)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group" aria-label="Reto Beveiliging home">
          <WolfLogo size={36} />
          <span className="font-display text-xl lg:text-2xl tracking-widest text-reto-off-white leading-none">
            RETO<span className="text-reto-orange"> BEVEILIGING</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm tracking-widest uppercase text-reto-muted hover:text-reto-orange transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="text-xs tracking-widest border border-reto-orange/40 text-reto-orange px-3 py-1.5 hover:bg-reto-orange hover:text-reto-black transition-all duration-200 font-body"
            aria-label="Toggle language"
          >
            {lang === "nl" ? "EN" : "NL"}
          </button>
        </div>

        {/* Mobile: lang + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggle}
            className="text-xs tracking-widest border border-reto-orange/40 text-reto-orange px-2.5 py-1 font-body"
          >
            {lang === "nl" ? "EN" : "NL"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-6 bg-reto-off-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-px w-6 bg-reto-off-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-reto-off-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-reto-black/98 border-t border-reto-orange/20 px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl tracking-widest text-reto-off-white hover:text-reto-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
