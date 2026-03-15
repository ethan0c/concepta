"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheckmark24Regular, BrainCircuit24Regular, CloudArrowUp24Regular } from "@fluentui/react-icons";

const partners = [
  { src: "/assets/partners/acer-logo.png", alt: "Acer" },
  { src: "/assets/partners/cisco-logo.png", alt: "Cisco" },
  { src: "/assets/partners/dell.png", alt: "Dell Technologies" },
  { src: "/assets/partners/dh-logo.png", alt: "D&H" },
  { src: "/assets/partners/hp-logo.png", alt: "HP" },
  { src: "/assets/partners/ibm-logo.png", alt: "IBM" },
  { src: "/assets/partners/ingram-micro-logo.png", alt: "Ingram Micro" },
  { src: "/assets/partners/microsoft-logo.png", alt: "Microsoft" },
  { src: "/assets/partners/arrow-logo.svg", alt: "Arrow Electronics" },
];

const highlights = [
  {
    icon: ShieldCheckmark24Regular,
    category: "Cybersecurity",
    title: "Zero Trust & Threat Protection",
    description:
      "End-to-end Zero Trust implementation across identity, endpoints, network, and data—aligned with NIST 800-207 and Microsoft Security.",
    href: "/services/security-strategy",
  },
  {
    icon: BrainCircuit24Regular,
    category: "AI Solutions",
    title: "AI-Powered Enterprise Productivity",
    description:
      "Microsoft Copilot deployment, Azure OpenAI integration, and intelligent automation solutions built with governance and compliance in mind.",
    href: "/solutions",
  },
  {
    icon: CloudArrowUp24Regular,
    category: "Cloud & Compliance",
    title: "Secure Cloud for Regulated Industries",
    description:
      "Azure migration, hybrid infrastructure, and compliance programs for HIPAA, FISMA, NIST RMF, CMMC, and FedRAMP requirements.",
    href: "/services",
  },
];

export default function ResourcesInsightsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="page-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4"
          >
            What We Deliver
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-500 leading-relaxed"
          >
            Proven capabilities across cybersecurity, AI, and cloud—backed by strategic technology partnerships.
          </motion.p>
        </div>

        {/* Highlights Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={item.href}
                className="concepta-card concepta-card-subtle concepta-card-interactive group h-full"
              >
                <item.icon className="concepta-page-icon mb-5" />
                <span className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2 mb-3 group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="concepta-inline-link inline-flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Technology Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="border-t border-gray-200 pt-10 sm:pt-14">
            <div className="text-center mb-8">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">
                Technology Partners
              </h3>
              <p className="text-sm text-gray-500">
                We partner with leading technology companies to deliver innovative solutions.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-2"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={80}
                    height={40}
                    className="max-h-7 sm:max-h-9 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
