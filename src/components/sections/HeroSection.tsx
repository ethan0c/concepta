"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroBackground from "@/components/HeroBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

export default function HeroSection() {
  const { scrollY } = useScroll();
  // Scroll-responsive fade: fades to 0.45 opacity as user scrolls past 60 px (Snowflake depth effect)
  const sectionOpacity = useTransform(scrollY, [0, 60], [1, 0.45]);

  return (
    <motion.section
      className="relative bg-[var(--color-hero-bg)] overflow-hidden"
      style={{ opacity: sectionOpacity }}
    >
      <HeroBackground />

      {/* Gradient overlay — blends hero into next section (Snowflake look) */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.75) 100%)",
        }}
      />

      {/* Foreground content — staggered fade-in + slide-up */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[56vh] sm:min-h-[60vh] lg:min-h-[64vh] pt-[100px] pb-[80px] sm:pt-[120px] sm:pb-[100px] lg:pt-[140px] lg:pb-[120px] flex items-center">
          <div className="max-w-4xl">

            {/* H1 — delay-1 */}
            <motion.h1
              className="text-[36px] sm:text-[40px] lg:text-[56px] xl:text-[64px] font-bold text-black leading-[1.05] tracking-tight mb-6 max-w-[720px]"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
            >
              Secure, modern technology for complex, regulated environments.
            </motion.h1>

            {/* Subheadline — delay-2 */}
            <motion.p
              className="text-[18px] sm:text-[20px] lg:text-[22px] text-[var(--color-primary)] max-w-[600px] mb-8 leading-[1.4] font-light"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
            >
              AI, cybersecurity, and cloud solutions engineered for governed, mission‑critical operations.
            </motion.p>

            {/* CTAs — delay-3 */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.6}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-[28px] py-[14px] bg-[var(--color-primary)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--color-primary-hover)] transition-[background-color,transform] duration-[250ms] ease-in-out hover:scale-[1.02]"
              >
                Talk to an Expert
                <svg className="w-4 h-4 ml-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-[28px] py-[14px] border border-black/60 text-black text-sm font-semibold rounded-lg hover:border-black hover:bg-black/10 transition-[background-color,transform] duration-[250ms] ease-in-out"
              >
                Explore Our Capabilities
              </Link>
            </motion.div>

            {/* Supporting microcopy */}
            <motion.p
              className="mt-5 text-xs sm:text-sm text-gray-600 leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.75}
            >
              Designed for organizations operating in secure, governed, and mission‑critical environments.
            </motion.p>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
