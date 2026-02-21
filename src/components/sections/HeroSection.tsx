"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-[#161616] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#161616] via-[#161616]/90 to-[#161616]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-64px)] py-16 sm:py-20 lg:py-0 flex items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* Overline / Tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-8 h-[2px] bg-[#0B4BBB]" />
              <span className="text-[#6ea6ff] text-xs sm:text-sm font-medium tracking-wider uppercase">
                Microsoft Azure AI Partner
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-white leading-[1.1] tracking-tight mb-6">
              Secure your digital future with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4589ff] to-[#0B4BBB]">
                AI-powered
              </span>{" "}
              cybersecurity
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed"
            >
              Enterprise-grade security, cloud infrastructure, and AI solutions 
              that help organizations stay ahead in a rapidly evolving threat landscape.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#0B4BBB] text-white text-sm font-medium hover:bg-[#0a3d9c] transition-colors"
              >
                Schedule a Consultation
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-gray-500 text-white text-sm font-medium hover:border-white hover:bg-white/5 transition-all"
              >
                Explore Solutions
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom ticker/announcement bar */}
      <div className="relative z-10 border-t border-white/10 bg-[#161616]/80 backdrop-blur-sm">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <span className="text-[#4589ff] text-xs font-medium tracking-wider uppercase shrink-0">Latest</span>
            <p className="text-sm text-gray-400 line-clamp-1">
              Advanced AI-powered cybersecurity solutions now available for enterprise clients.{" "}
              <Link href="/resources" className="text-white hover:underline underline-offset-2">
                Learn more →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
