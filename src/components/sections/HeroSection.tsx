"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroBackground from "@/components/HeroBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative bg-[#161616] overflow-hidden">
      <HeroBackground />

      {/* Foreground content — static, fade-in only */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[56vh] sm:min-h-[60vh] lg:min-h-[62vh] pt-[72px] pb-[40px] sm:pt-[84px] sm:pb-[52px] lg:pt-[88px] lg:pb-[56px] flex items-center">
          <div className="max-w-4xl">
            {/* H1 */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-semibold text-[#0B4BBB] leading-[1.1] tracking-tight mb-8 sm:mb-10"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
            >
              Technology for regulated environments. Done right.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-black max-w-2xl mb-12 leading-relaxed font-light"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
            >
              AI, cybersecurity, and modern IT services built for secure, governed operations.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.5}
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-4 bg-[#0B4BBB] text-white text-sm font-medium hover:bg-[#0a3d9c] transition-colors"
              >
                Explore Our Services
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
