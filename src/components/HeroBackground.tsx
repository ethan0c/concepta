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

      <Image
        src="/assets/hero-wave.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center scale-110 opacity-[0.55]"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(255,255,255,0.84) 0%, rgba(255,255,255,0.7) 18%, rgba(255,255,255,0.42) 38%, rgba(255,255,255,0.16) 54%, rgba(255,255,255,0) 68%)",
        }}
      />
    </div>
  );
}
