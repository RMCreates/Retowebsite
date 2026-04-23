"use client";

import { useLanguage } from "@/app/providers";
import { t } from "@/lib/translations";
import { WolfLogo } from "./WolfLogo";

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.14a8.16 8.16 0 004.77 1.52V7.21a4.85 4.85 0 01-1-.52z" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
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
    { icon: <TwitterIcon />, href: "https://x.com/retobeveiliging", label: "X / Twitter" },
  ];

  const navLinks = [
    { label: nav.about, href: "#about" },
    { label: nav.services, href: "#services" },
    { label: nav.join, href: "#join" },
    { label: nav.contact, href: "#contact" },
  ];

  return (
    <footer id="contact" className="bg-reto-black border-t border-reto-orange/20">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <WolfLogo size={44} />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg tracking-widest text-reto-off-white">RETO</span>
                <span className="font-display text-sm tracking-widest text-reto-orange">BEVEILIGING</span>
              </div>
            </div>
            <p className="font-body text-sm text-reto-muted leading-relaxed whitespace-pre-line">
              {tx.tagline}
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-base tracking-[0.3em] text-reto-orange/70 mb-2">MENU</h4>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-reto-muted hover:text-reto-off-white transition-colors duration-200 tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h4 className="font-display text-base tracking-[0.3em] text-reto-orange/70 mb-2">CONTACT</h4>

            <div>
              <p className="font-body text-xs text-reto-muted tracking-widest uppercase mb-1">{tx.emailLabel}</p>
              <a
                href="mailto:beveiligingreto@gmail.com"
                className="font-body text-sm text-reto-off-white hover:text-reto-orange transition-colors duration-200"
              >
                beveiligingreto@gmail.com
              </a>
            </div>

            <div>
              <p className="font-body text-xs text-reto-muted tracking-widest uppercase mb-1">{tx.locationLabel}</p>
              <p className="font-body text-sm text-reto-off-white">{tx.location}</p>
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
      <div className="border-t border-reto-orange/10 px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-7xl mx-auto">
        <p className="font-body text-xs text-reto-muted tracking-wider">{tx.copyright}</p>
        <button
          onClick={toggle}
          className="font-body text-xs tracking-widest border border-reto-orange/30 text-reto-orange/70 hover:text-reto-orange hover:border-reto-orange px-3 py-1.5 transition-colors duration-200"
        >
          {lang === "nl" ? "🇬🇧 English" : "🇳🇱 Nederlands"}
        </button>
      </div>
    </footer>
  );
}
