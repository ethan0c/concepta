"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ClosingCTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#161616]">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="cisco-headline text-white mb-4">
            Ready to modernize securely?
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8">
            Talk to Concepta about AI, cybersecurity, and IT services designed for regulated environments.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-4 bg-[#0B4BBB] text-white text-sm font-medium hover:bg-[#0a3d9c] transition-colors"
          >
            Contact Us
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
