"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ClosingCTASection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[var(--color-primary)]">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Ready to modernize your regulated operations?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-9 sm:mb-10">
            Partner with a team that delivers secure, compliant, and mission-critical technology solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-4 bg-white text-[var(--color-primary)] text-sm font-semibold hover:bg-blue-50 transition-colors"
          >
            Talk to an Expert
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
