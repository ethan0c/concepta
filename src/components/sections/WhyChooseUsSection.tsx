"use client";

import { motion } from "framer-motion";
import {
  Flash24Regular,
  Handshake24Regular,
  Lightbulb24Regular,
  PuzzlePiece24Regular,
  RibbonStar24Regular,
  ShieldCheckmark24Regular,
} from "@fluentui/react-icons";

interface ValuePillar {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const valuePillars: ValuePillar[] = [
  {
    title: "Proven Expertise",
    description:
      "We bring a proven track record of successful enterprise outcomes across complex, regulated environments.",
    icon: RibbonStar24Regular,
  },
  {
    title: "Speed & Agility",
    description:
      "We move quickly from strategy to execution with delivery models designed for responsiveness and measurable progress.",
    icon: Flash24Regular,
  },
  {
    title: "Security & Compliance",
    description:
      "Security and governance are embedded into every engagement to protect mission-critical data and systems.",
    icon: ShieldCheckmark24Regular,
  },
  {
    title: "Collaborative Partnership",
    description:
      "We work as an extension of your team, aligning closely with stakeholders to drive long-term value.",
    icon: Handshake24Regular,
  },
  {
    title: "Tailored Solutions",
    description:
      "Every solution is adapted to your operating realities, constraints, and strategic priorities.",
    icon: PuzzlePiece24Regular,
  },
  {
    title: "Strategic Guidance",
    description:
      "Beyond implementation, we provide practical guidance that helps leaders make confident technology decisions.",
    icon: Lightbulb24Regular,
  },
] as const;

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-page-bg)]">
      <div className="page-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold concepta-section-heading mb-10 sm:mb-12"
        >
          Why Concepta
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 sm:mb-14"
        >
          We help organizations modernize with the right balance of technical depth, speed, and strategic partnership.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {valuePillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 * (index + 1) }}
              viewport={{ once: true }}
              className="concepta-card concepta-card-compact"
            >
              <pillar.icon className="why-icon" aria-hidden="true" />
              <h3 className="mt-4 text-xl sm:text-2xl font-semibold concepta-heading-h3 tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-2 text-base sm:text-lg leading-relaxed text-gray-700">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
