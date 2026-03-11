"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Cloud, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import { Footer } from "@/components/layout";

const solutions = [
  {
    icon: Brain,
    title: "Artificial Intelligence Solutions",
    tagline: "AI solutions that enhance operations while maintaining governance and trust.",
    description:
      "Concepta delivers AI-enabled solutions that support intelligent automation, decision support, and workflow optimization—while ensuring alignment with governance, ethics, and compliance requirements.",
    href: "/solutions",
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
    href: "/solutions",
  },
  {
    icon: Layers,
    title: "Application & Platform Solutions",
    tagline: "Application solutions that support reliability, performance, and continuity.",
    description:
      "We deliver application and platform solutions that improve system availability, support modernization efforts, and enable organizations to adapt and scale with confidence.",
    href: "/solutions",
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Solutions" />

      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="bg-[#161616] py-16 sm:py-20 lg:py-24">
          <div className="page-container">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6"
              >
                Solutions designed to support secure, governed, and scalable operations.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8"
              >
                Concepta Innovation Services delivers integrated technology solutions that help government agencies and commercial organizations address complex operational, security, and compliance challenges. Our solutions combine AI, cybersecurity, cloud, and enterprise technologies to support governance, risk management, and secure operations across regulated environments.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#0B4BBB] text-white text-sm font-medium hover:bg-[#0a3d9c] transition-colors"
                >
                  Get started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#f4f4f4]">
          <div className="page-container">
            <div className="grid md:grid-cols-2 gap-px bg-gray-300">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 sm:p-8 group"
                >
                  <div className="border-t-2 border-[#0B4BBB] pt-6">
                    <solution.icon className="w-6 h-6 text-[#0B4BBB] mb-4" />
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0B4BBB] py-16 sm:py-20">
          <div className="page-container">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                Ready to modernize securely?
              </h2>
              <p className="text-blue-100 mb-8">
                Talk to Concepta about AI, cybersecurity, and IT services designed for regulated environments.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-[#0B4BBB] text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
