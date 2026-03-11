"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* SVG network / governance grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Primary 80px tile: grid lines + nodes at intersections */}
          <pattern
            id="governance-grid"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* Major grid lines */}
            <line x1="0" y1="0" x2="80" y2="0" stroke="rgba(11,75,187,0.35)" strokeWidth="0.6" />
            <line x1="0" y1="0" x2="0" y2="80" stroke="rgba(11,75,187,0.35)" strokeWidth="0.6" />
            {/* Sub-grid lines — finer, lower opacity */}
            <line x1="40" y1="0" x2="40" y2="80" stroke="rgba(11,75,187,0.15)" strokeWidth="0.4" />
            <line x1="0" y1="40" x2="80" y2="40" stroke="rgba(11,75,187,0.15)" strokeWidth="0.4" />
            {/* Corner nodes — intersection points */}
            <circle cx="0"  cy="0"  r="1.5" fill="rgba(110,166,255,0.55)" />
            <circle cx="80" cy="0"  r="1.5" fill="rgba(110,166,255,0.55)" />
            <circle cx="0"  cy="80" r="1.5" fill="rgba(110,166,255,0.55)" />
            <circle cx="80" cy="80" r="1.5" fill="rgba(110,166,255,0.55)" />
            {/* Mid-edge nodes */}
            <circle cx="40" cy="0"  r="1"   fill="rgba(110,166,255,0.25)" />
            <circle cx="0"  cy="40" r="1"   fill="rgba(110,166,255,0.25)" />
            <circle cx="80" cy="40" r="1"   fill="rgba(110,166,255,0.25)" />
            <circle cx="40" cy="80" r="1"   fill="rgba(110,166,255,0.25)" />
            {/* Center node */}
            <circle cx="40" cy="40" r="1"   fill="rgba(110,166,255,0.20)" />
            {/* Sparse diagonal network connector — gives "network" feel */}
            <line x1="0" y1="0" x2="40" y2="40" stroke="rgba(11,75,187,0.12)" strokeWidth="0.5" />
          </pattern>
        </defs>

        {/* Fill layer — the tiled pattern */}
        <rect width="100%" height="100%" fill="url(#governance-grid)" opacity="0.9" />

        {/* Soft focal glow — right-center, keeps text side clear */}
        <radialGradient id="glow-right" cx="72%" cy="48%" r="45%" gradientUnits="userSpaceOnUse"
          x1="0" y1="0" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="rgba(11,75,187,0.22)" />
          <stop offset="100%" stopColor="rgba(11,75,187,0)" />
        </radialGradient>
        <rect width="100%" height="100%" fill="url(#glow-right)" />

        {/* Secondary ambient glow — bottom-left, further depth */}
        <radialGradient id="glow-left" cx="20%" cy="75%" r="35%" gradientUnits="userSpaceOnUse"
          x1="0" y1="0" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="rgba(11,75,187,0.14)" />
          <stop offset="100%" stopColor="rgba(11,75,187,0)" />
        </radialGradient>
        <rect width="100%" height="100%" fill="url(#glow-left)" />
      </svg>

      {/* Edge vignettes — keep text area dark and readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#161616]/70 via-transparent to-[#161616]/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#161616]/50 via-transparent to-[#161616]/40" />
    </div>
  );
}
