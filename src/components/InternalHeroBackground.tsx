"use client";

export default function InternalHeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Base: cool blue-tinted off-white — not dead white */}
      <div className="absolute inset-0" style={{ background: "#F2FAFF" }} />

      {/* Strong blue gradient bloom — top right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 90% at 105% -10%, rgba(56,189,248,0.28) 0%, rgba(14,165,233,0.14) 50%, transparent 78%)",
        }}
      />

      {/* Secondary bloom — bottom left for balance */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at -5% 110%, rgba(56,189,248,0.10) 0%, transparent 60%)",
        }}
      />

      {/* Arc lines — large, bold, from top-right origin */}
      <svg
        className="absolute"
        style={{ top: "-120px", right: "-120px", width: "700px", height: "700px" }}
        viewBox="0 0 700 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="700" cy="0" r="200" stroke="rgba(14,165,233,0.18)" strokeWidth="1.5" fill="none" />
        <circle cx="700" cy="0" r="300" stroke="rgba(14,165,233,0.14)" strokeWidth="1.5" fill="none" />
        <circle cx="700" cy="0" r="420" stroke="rgba(14,165,233,0.11)" strokeWidth="1" fill="none" />
        <circle cx="700" cy="0" r="560" stroke="rgba(14,165,233,0.08)" strokeWidth="1" fill="none" />
        <circle cx="700" cy="0" r="680" stroke="rgba(14,165,233,0.06)" strokeWidth="1" fill="none" />
      </svg>

      {/* Dot grid — spans full top-right half, not just corner */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(14,165,233,0.24) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 65% 85% at 100% 0%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 58%, transparent 88%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 85% at 100% 0%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 58%, transparent 88%)",
        }}
      />

      {/* Bottom border fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(186,230,253,0.65))" }}
      />
    </div>
  );
}
