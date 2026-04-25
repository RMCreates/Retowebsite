"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/providers";
import { t } from "@/lib/translations";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function JoinUs() {
  const { lang } = useLanguage();
  const tx = t[lang].join;
  const email = "beveiligingreto@gmail.com";
  const subject = lang === "nl" ? "Sollicitatie RETO Beveiliging" : "Job Application RETO Beveiliging";

  return (
    <div>
      {/* Page hero — split layout: headline left, recruitment poster right */}
      <section className="relative bg-reto-void overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          {/* LEFT — headline panel on dark with amber radial glow */}
          <div className="relative flex items-center px-6 lg:px-16 py-20 lg:py-32 overflow-hidden">
            {/* Amber ambient glow */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 50%, rgba(192,112,24,0.20) 0%, transparent 65%)",
              }}
            />
            <div className="relative z-10 max-w-xl">
              <FadeUp>
                <p className="font-display text-xs tracking-[0.4em] text-reto-amber uppercase mb-6">
                  {tx.label}
                </p>
              </FadeUp>
              <div className="overflow-hidden">
                <FadeUp delay={0.1}>
                  <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-reto-cream tracking-[0.01em] leading-[0.9] uppercase">
                    {tx.pageTitle}
                  </h1>
                </FadeUp>
              </div>
              <FadeUp delay={0.25}>
                <p className="font-body text-base text-reto-muted leading-relaxed mt-8 max-w-md">
                  {tx.subtitle}
                </p>
              </FadeUp>
            </div>
          </div>

          {/* RIGHT — recruitment poster as feature image, no overlay */}
          <div className="relative min-h-[60vh] lg:min-h-0 lg:border-l lg:border-reto-amber/30 bg-reto-black">
            <img
              src="/photos/recruit.jpg"
              alt={tx.label}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Requirements + Offer — typography-led, no card boxes */}
      <section className="bg-reto-shadow py-20 lg:py-28 px-6 border-t border-reto-rule">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Requirements */}
          <FadeUp>
            <p className="font-display text-xs tracking-[0.4em] text-reto-amber uppercase mb-8">
              {tx.requirementsTitle}
            </p>
            <ul className="flex flex-col gap-5">
              {tx.requirements.map((item, i) => (
                <li key={i} className="flex items-start gap-5">
                  <span className="font-display text-reto-amber/70 text-sm mt-0.5 shrink-0 leading-none">—</span>
                  <span className="font-body text-base text-reto-cream/80 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* Offer */}
          <FadeUp delay={0.15}>
            <p className="font-display text-xs tracking-[0.4em] text-reto-amber uppercase mb-8">
              {tx.offerTitle}
            </p>
            <ul className="flex flex-col gap-5">
              {tx.offer.map((item, i) => (
                <li key={i} className="flex items-start gap-5">
                  <span className="font-display text-reto-amber/70 text-sm mt-0.5 shrink-0 leading-none">—</span>
                  <span className="font-body text-base text-reto-cream/80 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* Apply CTA — void with amber accent */}
      <section id="contact" className="bg-reto-black py-24 lg:py-32 px-6 border-t border-reto-rule">
        <div className="max-w-5xl mx-auto">
          <div className="h-px w-8 bg-reto-amber mb-10" />
          <FadeUp>
            <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl text-reto-cream tracking-[0.02em] leading-[0.95] mb-10 uppercase">
              {tx.applyTitle}
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href="https://wa.me/31612345678?text=Hallo%2C%20ik%20wil%20graag%20solliciteren%20bij%20RETO%20Beveiliging"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-display text-xs tracking-[0.3em] text-reto-black px-9 py-3.5 rounded-none transition-opacity duration-200 hover:opacity-90 uppercase"
                style={{ backgroundColor: "#C07018" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {tx.cta}
              </a>
              <a
                href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
                className="font-body text-sm text-reto-muted hover:text-reto-cream transition-colors duration-200 underline underline-offset-4"
              >
                {tx.ctaEmail}
              </a>
            </div>
            <p className="font-body text-xs text-reto-muted tracking-widest uppercase mt-6">
              {tx.ctaSub}
            </p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
