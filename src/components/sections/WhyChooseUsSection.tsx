"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const reasons = [
  {
    title: "Strong Engineering Discipline",
    collapsed:
      "We apply modern engineering practices with a focus on quality, reliability, and long-term maintainability.",
    expanded:
      "Every solution is built with clean architecture, scalable patterns, and disciplined delivery.",
  },
  {
    title: "Enterprise-Grade Security",
    collapsed:
      "Security is integrated into every stage of our work-from design and architecture to deployment and operations.",
    expanded:
      "We align with industry and regulatory standards to protect your most critical systems.",
  },
  {
    title: "Proven Delivery Model",
    collapsed:
      "Our structured delivery approach ensures predictable outcomes, transparency, and measurable ROI.",
    expanded:
      "We prioritize communication, accountability, and consistent progress throughout every engagement.",
  },
  {
    title: "Deep Industry Experience",
    collapsed:
      "We bring years of experience across regulated, high-complexity environments.",
    expanded:
      "Our team understands the unique challenges of enterprise organizations and delivers solutions that work in the real world.",
  },
] as const;

export default function WhyChooseUsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-page-bg)]">
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

        <div className="max-w-4xl border-t border-[rgba(11,75,187,0.18)]">
          {reasons.map((reason, index) => {
            const isOpen = openIndex === index;

            return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="border-b border-[rgba(11,75,187,0.18)]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`why-concepta-panel-${index}`}
                className="flex w-full items-start justify-between gap-6 px-0 py-6 text-left sm:py-7"
              >
                <div className="max-w-3xl">
                  <p className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">
                    {reason.title}
                  </p>
                  <p className="mt-3 text-base sm:text-lg leading-relaxed text-gray-700">
                    {reason.collapsed}
                  </p>
                </div>
                <span className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[rgba(11,75,187,0.2)] text-[var(--color-primary)]">
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    aria-hidden="true"
                  />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    id={`why-concepta-panel-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="max-w-3xl pb-6 pr-16 text-base sm:text-lg leading-relaxed text-gray-900 sm:pb-7">
                      {reason.expanded}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
