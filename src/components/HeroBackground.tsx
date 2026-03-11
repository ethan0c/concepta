"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Primary governance grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(11,75,187,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(11,75,187,0.6) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* Secondary finer grid for depth */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(11,75,187,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(11,75,187,0.5) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      {/* Soft radial glow — subtle dataflow feel */}
      <div
        className="absolute inset-0 opacity-[0.20]"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(11,75,187,0.5) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 30% 60%, rgba(11,75,187,0.3) 0%, transparent 60%)',
        }}
      />
      {/* Edge fades */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#161616]/60 via-transparent to-[#161616]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#161616]/40 via-transparent to-[#161616]/60" />
    </div>
  );
}
