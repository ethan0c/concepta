"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BrainCircuit24Regular,
  CloudArrowUp24Regular,
  Code24Regular,
  DataBarVertical24Regular,
  SettingsCogMultiple24Regular,
  ShieldCheckmark24Regular,
} from "@fluentui/react-icons";
import { ArrowRight24Regular } from "@fluentui/react-icons";

interface Pillar {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const pillars: Pillar[] = [
  {
    title: "AI & Automation",
    description:
      "We deploy intelligent automation that reduces manual effort, improves decision velocity, and scales cognitive workflows across teams.",
    href: "/solutions",
    icon: BrainCircuit24Regular,
  },
  {
    title: "Cloud Modernization",
    description:
      "We modernize platforms through secure cloud migration, architecture optimization, and resilient operating models for long-term agility.",
    href: "/solutions",
    icon: CloudArrowUp24Regular,
  },
  {
    title: "Cybersecurity",
    description:
      "We protect critical systems with enterprise security controls, proactive monitoring, and compliance-first governance practices.",
    href: "/solutions",
    icon: ShieldCheckmark24Regular,
  },
  {
    title: "Data & Analytics",
    description:
      "We build trusted data foundations and analytics pipelines that improve visibility, forecasting, and strategic execution.",
    href: "/solutions",
    icon: DataBarVertical24Regular,
  },
  {
    title: "Application Development",
    description:
      "We engineer modern, secure applications tailored to complex workflows, integration needs, and long-term maintainability.",
    href: "/solutions",
    icon: Code24Regular,
  },
  {
    title: "Infrastructure & DevOps",
    description:
      "We strengthen infrastructure reliability and delivery velocity through automation, observability, and mature DevOps practices.",
    href: "/solutions",
    icon: SettingsCogMultiple24Regular,
  },
];

export default function CoreServicesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-page-bg)]">
      <div className="page-container">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4"
        >
          What We Do
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 sm:mb-16"
        >
          We help organizations modernize, secure, and scale their digital operations through a focused set of capabilities designed for enterprise impact.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="concepta-card concepta-card-compact flex flex-col"
            >
              <pillar.icon className="capability-icon mb-4" />

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                {pillar.title}
              </h3>

              <p className="text-base text-gray-600 leading-relaxed mb-7">
                {pillar.description}
              </p>

              <Link
                href={pillar.href}
                className="concepta-inline-link mt-auto font-medium inline-flex items-center gap-2 group"
              >
                Learn more
                <ArrowRight24Regular className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
