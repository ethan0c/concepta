"use client";

import { motion } from "framer-motion";

interface Pillar {
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    title: "AI & Governance",
    description:
      "Responsible AI solutions supporting automation, ethics, compliance, and decision-making.",
  },
  {
    title: "Cybersecurity & Zero Trust",
    description:
      "Security-first services protecting identities, data, and mission-critical operations.",
  },
  {
    title: "Modern IT & Operations",
    description:
      "Application support, platforms, and IT operations designed for reliability and scale.",
  },
];

export default function CoreServicesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
      <div className="page-container">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-12 sm:mb-16"
        >
          What we do
        </motion.h2>

        {/* Three Pillars — text leads, no icons, no images, no bullet lists */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="border-t-2 border-[#0B4BBB] pt-6"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-base text-gray-500 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
