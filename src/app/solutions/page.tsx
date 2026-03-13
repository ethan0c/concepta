"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Cloud, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import HeroBackground from "@/components/HeroBackground";
import { Footer, BottomFooter } from "@/components/layout";

const solutions = [
  {
    icon: Brain,
    title: "Artificial Intelligence Solutions",
    tagline: "AI solutions that enhance operations while maintaining governance and trust.",
    description:
      "Concepta delivers AI-enabled solutions that support intelligent automation, decision support, and workflow optimization—while ensuring alignment with governance, ethics, and compliance requirements.",
    href: "/services",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Zero Trust Solutions",
    tagline: "Security solutions built to protect mission-critical systems and data.",
    description:
      "Our cybersecurity solutions apply Zero Trust principles to safeguard identities, endpoints, networks, applications, and data—helping organizations reduce risk and operate securely in regulated environments.",
    href: "/services/security-strategy",
  },
  {
    icon: Cloud,
    title: "Cloud & Enterprise Solutions",
    tagline: "Scalable cloud solutions designed for secure modernization.",
    description:
      "Concepta supports cloud adoption and enterprise modernization through secure architectures that integrate governance, resilience, and operational efficiency across hybrid and cloud environments.",
    href: "/services",
  },
  {
    icon: Layers,
    title: "Application & Platform Solutions",
    tagline: "Application solutions that support reliability, performance, and continuity.",
    description:
      "We deliver application and platform solutions that improve system availability, support modernization efforts, and enable organizations to adapt and scale with confidence.",
    href: "/services",
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Solutions" />

      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="relative bg-[#161616] py-12 sm:py-14 lg:py-16 overflow-hidden">
          <HeroBackground />
          <div className="page-container relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <span className="w-8 h-[2px] bg-[#0B4BBB]" />
                <span className="text-[#0B4BBB] text-xs sm:text-sm font-medium tracking-wider uppercase">
                  Technology Solutions for Regulated Environments
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B4BBB] leading-tight mb-6"
              >
                Solutions designed to support secure, governed, and scalable operations.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-black leading-relaxed max-w-xl"
              >
                Integrated technology solutions combining AI, cybersecurity, cloud, and enterprise technologies to support governance, risk management, and secure operations.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">Our Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Integrated solutions supporting governance, security, and modern operations across regulated environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 border border-gray-200 group"
                >
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6">
                    <solution.icon className="w-6 h-6 text-[#0B4BBB]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm font-medium text-[#0B4BBB] mb-3">
                    {solution.tagline}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <Link
                    href={solution.href}
                    className="inline-flex items-center text-sm text-[#0B4BBB] font-medium group-hover:underline"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#161616]">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
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

        <Footer />
        <BottomFooter />
      </main>
    </div>
  );
}
