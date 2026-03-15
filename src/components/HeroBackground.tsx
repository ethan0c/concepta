"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Base layer: very light parallax — moves up 10% of scroll offset
  const baseY = useTransform(scrollY, [0, 800], [0, -80]);
  // Wave layer: slightly stronger parallax — moves up 25% of scroll offset
  const waveY = useTransform(scrollY, [0, 800], [0, -200]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Layer 1 — deep dark-blue gradient base */}
      <motion.div
        className="hero-bg hero-bg-base absolute inset-0 will-change-transform"
        style={{ y: baseY }}
      >
        <Image
          src="/assets/hero-page.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-110"
          aria-hidden="true"
        />
      </motion.div>

      {/* Layer 2 — subtle wave highlight, screen blend */}
      <motion.div
        className="hero-bg hero-bg-wave absolute inset-0 will-change-transform"
        style={{ y: waveY, mixBlendMode: "screen" }}
      >
        <Image
          src="/assets/hero-wave.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center scale-110 opacity-[0.65]"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}
