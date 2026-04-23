export function WolfLogo({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Reto Beveiliging logo"
    >
      {/* Black circle background */}
      <circle cx="50" cy="50" r="50" fill="#0A0A0A" />
      {/* Left ear */}
      <polygon points="18,55 30,10 45,50" fill="#C8681A" />
      {/* Left ear inner */}
      <polygon points="22,52 30,20 40,49" fill="#7D3D0A" />
      {/* Right ear */}
      <polygon points="82,55 70,10 55,50" fill="#C8681A" />
      {/* Right ear inner */}
      <polygon points="78,52 70,20 60,49" fill="#7D3D0A" />
      {/* Head */}
      <path
        d="M18,55 C12,62 10,72 13,82 L22,93 L36,99 L50,101 L64,99 L78,93 L87,82 C90,72 88,62 82,55 Z"
        fill="#C8681A"
      />
      {/* Forehead / face center panel */}
      <path d="M36,55 L50,48 L64,55 L60,76 L50,80 L40,76 Z" fill="#A85515" />
      {/* Left eye */}
      <polygon points="24,61 36,57 37,67 25,71" fill="#120600" />
      {/* Left eye shine */}
      <polygon points="26,60 33,58 34,63 27,65" fill="#FF9940" opacity="0.35" />
      {/* Right eye */}
      <polygon points="76,61 64,57 63,67 75,71" fill="#120600" />
      {/* Right eye shine */}
      <polygon points="74,60 67,58 66,63 73,65" fill="#FF9940" opacity="0.35" />
      {/* Snout */}
      <path d="M39,76 L50,71 L61,76 L57,88 L50,91 L43,88 Z" fill="#8B4010" />
      {/* Nose */}
      <ellipse cx="50" cy="74" rx="6" ry="4" fill="#120600" />
    </svg>
  );
}
