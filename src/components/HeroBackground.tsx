"use client";

import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <Image
        src="/assets/hero-page.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-110"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(255,255,255,0.66) 0%, rgba(255,255,255,0.52) 24%, rgba(255,255,255,0.34) 48%, rgba(255,255,255,0.2) 66%, rgba(255,255,255,0.1) 100%)",
        }}
      />
    </div>
  );
}
