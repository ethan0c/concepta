"use client";

import { motion } from "framer-motion";

const reasons = [
  "Governance-first delivery model",
  "Security embedded into every engagement",
  "Experience supporting public-sector and regulated clients",
  "Flexible delivery across onsite, hybrid, and remote models",
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#f4fafd]">
      <div className="page-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-10 sm:mb-12"
        >
          Why Concepta
        </motion.h2>

        <div className="space-y-5 max-w-2xl">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="w-8 h-8 bg-[#0B4BBB] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-lg sm:text-xl text-gray-800 font-medium">
                {reason}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
