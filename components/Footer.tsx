"use client";

import Link from "next/link";
import { useLanguage } from "@/app/providers";
import { t } from "@/lib/translations";
import { WolfLogo } from "./WolfLogo";

function FacebookIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.14a8.16 8.16 0 004.77 1.52V7.21a4.85 4.85 0 01-1-.52z" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  const { lang, toggle } = useLanguage();
  const tx = t[lang].footer;
  const nav = t[lang].nav;

  const socials = [
    { icon: <FacebookIcon />, href: "https://www.facebook.com/retobeveiliging", label: "Facebook" },
    { icon: <InstagramIcon />, href: "https://www.instagram.com/retobeveiliging", label: "Instagram" },
    { icon: <TikTokIcon />, href: "https://www.tiktok.com/@retobeveiliging", label: "TikTok" },
    { icon: <TwitterIcon />, href: "https://x.com/retobeveiliging", label: "X" },
  ];

  const navLinks = [
    { label: nav.about, href: "/over-ons" },
    { label: nav.services, href: "/diensten" },
    { label: nav.join, href: "/werken-bij" },
    { label: nav.contact, href: "/werken-bij#contact" },
  ];

  return (
    <footer id="contact" className="bg-reto-shadow border-t border-reto-rule">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3" aria-label="RETO Beveiliging">
              <WolfLogo size={40} />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-xl tracking-widest text-reto-cream">RETO</span>
                <span className="font-display text-sm tracking-widest text-reto-amber">BEVEILIGING</span>
              </div>
            </Link>
            <p className="font-body text-sm text-reto-muted leading-relaxed whitespace-pre-line max-w-xs">
              {tx.tagline}
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-4">
            <p className="font-display text-xs tracking-[0.4em] text-reto-orange/60 uppercase mb-2">Menu</p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-reto-muted hover:text-reto-cream transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <p className="font-display text-xs tracking-[0.4em] text-reto-orange/60 uppercase mb-2">Contact</p>

            <div>
              <p className="font-body text-xs text-reto-muted tracking-widest uppercase mb-1.5">{tx.emailLabel}</p>
              <a
                href="mailto:beveiligingreto@gmail.com"
                className="font-body text-sm text-reto-cream hover:text-reto-orange transition-colors duration-200"
              >
                beveiligingreto@gmail.com
              </a>
            </div>

            <div>
              <p className="font-body text-xs text-reto-muted tracking-widest uppercase mb-1.5">{tx.whatsappLabel}</p>
              <a
                href="https://wa.me/31612345678?text=Hallo%2C%20ik%20heb%20een%20vraag%20over%20uw%20diensten"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-reto-cream hover:text-reto-orange transition-colors duration-200"
              >
                +31 6 12 34 56 78
              </a>
            </div>

            <div>
              <p className="font-body text-xs text-reto-muted tracking-widest uppercase mb-1.5">{tx.locationLabel}</p>
              <p className="font-body text-sm text-reto-cream">{tx.location}</p>
            </div>

            <div>
              <p className="font-body text-xs text-reto-muted tracking-widest uppercase mb-3">{tx.followLabel}</p>
              <div className="flex items-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-reto-muted hover:text-reto-orange transition-colors duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-reto-rule px-6 lg:px-12 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-reto-muted tracking-wide">{tx.copyright}</p>
          <button
            onClick={toggle}
            className="font-body text-xs tracking-widest border border-reto-rule text-reto-muted hover:text-reto-cream hover:border-reto-muted px-3 py-1.5 transition-colors duration-200"
          >
            {lang === "nl" ? "EN" : "NL"}
          </button>
        </div>
      </div>
    </footer>
  );
}
