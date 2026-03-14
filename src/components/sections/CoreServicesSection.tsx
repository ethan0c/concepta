"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Cloud,
  Code2,
  Compass,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

interface Pillar {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const pillars: Pillar[] = [
  {
    title: "Digital Modernization",
    description:
      "We modernize legacy systems, streamline workflows, and build scalable digital platforms that support long-term growth.",
    href: "/solutions",
    icon: RefreshCw,
  },
  {
    title: "Cloud & Data Engineering",
    description:
      "We architect secure, high-performance cloud and data solutions that improve reliability, accelerate insights, and reduce operational complexity.",
    href: "/services",
    icon: Cloud,
  },
  {
    title: "AI-Driven Automation",
    description:
      "We deploy intelligent automation that eliminates manual work, enhances decision-making, and increases efficiency across the organization.",
    href: "/services",
    icon: Bot,
  },
  {
    title: "Cybersecurity & Compliance",
    description:
      "We protect critical systems with enterprise-grade security, continuous monitoring, and compliance frameworks aligned to industry and regulatory standards.",
    href: "/services/security-strategy",
    icon: ShieldCheck,
  },
  {
    title: "Custom Software Development",
    description:
      "We design and build tailored applications that solve complex business challenges and integrate seamlessly with your existing ecosystem.",
    href: "/solutions",
    icon: Code2,
  },
  {
    title: "Advisory & Strategy",
    description:
      "We help organizations align technology investments with business goals through expert guidance, road mapping, and strategic planning.",
    href: "/contact",
    icon: Compass,
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
              <div className="concepta-icon-tile concepta-icon-tile-sm mb-5">
                <pillar.icon className="w-5 h-5" />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                {pillar.title}
              </h3>

              <p className="text-base text-gray-600 leading-relaxed mb-6">
                {pillar.description}
              </p>

              <Link
                href={pillar.href}
                className="mt-auto text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-medium inline-flex items-center gap-2 group"
              >
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
