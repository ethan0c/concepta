"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0a1628] overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B4BBB]/20 via-transparent to-[#0a1628]" />
      
      {/* Minimal geometric accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-[#0B4BBB]/10 to-transparent" />
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] text-white/[0.02]"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-white/5" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-white/5" />
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-white/5" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex flex-col justify-center py-20 sm:py-32">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Overline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#0B4BBB] text-sm sm:text-base font-semibold tracking-widest uppercase mb-6"
            >
              Cybersecurity & AI Solutions
            </motion.p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Transform how you{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4BBB] to-blue-400">
                protect
              </span>{" "}
              and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                grow
              </span>{" "}
              your business
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
            >
              We deliver enterprise-grade security, cloud infrastructure, and AI-powered 
              solutions that help organizations stay ahead in a rapidly evolving digital landscape.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0B4BBB] text-white font-semibold rounded hover:bg-[#0a3d9c] transition-colors duration-200"
              >
                Get Started
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-white font-medium rounded hover:border-gray-400 hover:bg-white/5 transition-all duration-200"
              >
                Explore Solutions
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
