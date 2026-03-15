"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroBackground from "@/components/HeroBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative bg-[var(--color-hero-bg)] overflow-hidden">
      <HeroBackground />

      {/* Foreground content — no parallax, fade-in only */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[56vh] sm:min-h-[60vh] lg:min-h-[64vh] pt-[72px] pb-[48px] sm:pt-[84px] sm:pb-[60px] lg:pt-[96px] lg:pb-[72px] flex items-center">
          <div className="max-w-4xl">

            {/* H1 */}
            <motion.h1
              className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-semibold leading-[1.1] tracking-tight mb-6 sm:mb-8"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
            >
              Secure, modern technology for complex, regulated environments.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="hero-body text-base sm:text-lg lg:text-xl max-w-2xl mb-10 sm:mb-12 leading-relaxed font-light"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
            >
              AI, cybersecurity, and modern IT services built for rigorous governance and compliance-driven operations.
            </motion.p>

            {/* CTAs — primary at 0.42 s, secondary staggered 120 ms later */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.42}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-4 bg-[#1E3A8A] text-white text-sm font-medium hover:bg-[#1e40af] transition-colors"
                >
                  Talk to an Expert
                  <svg className="w-4 h-4 ml-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.54}
              >
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center px-7 py-4 border border-white bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 hover:border-gray-100 transition-colors"
                >
                  Explore Our Capabilities
                </Link>
              </motion.div>
            </div>

            {/* Supporting microcopy */}
            <motion.p
              className="hero-body-muted mt-5 text-xs sm:text-sm leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.64}
            >
              Designed for organizations operating in secure, governed, and mission‑critical environments.
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  );
}
