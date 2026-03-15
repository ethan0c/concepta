"use client";

import { motion } from "framer-motion";
import { BrainCircuit24Regular, ShieldCheckmark24Regular, CloudArrowUp24Regular, Stack24Regular, ArrowRight24Regular } from "@fluentui/react-icons";
import Link from "next/link";
import { PageShell } from "@/components/layout";
import InternalHeroBackground from "@/components/InternalHeroBackground";

const solutions = [
  {
    icon: BrainCircuit24Regular,
    title: "Artificial Intelligence Solutions",
    tagline: "AI solutions that enhance operations while maintaining governance and trust.",
    description:
      "Concepta delivers AI-enabled capabilities that support intelligent automation, decision support, and workflow optimization—while ensuring alignment with governance, ethics, and regulatory requirements.",
    href: "/services",
  },
  {
    icon: ShieldCheckmark24Regular,
    title: "Cybersecurity & Zero Trust Solutions",
    tagline: "Security solutions built to protect mission-critical systems and data.",
    description:
      "Our cybersecurity solutions apply Zero Trust principles to safeguard identities, endpoints, networks, applications, and data—helping organizations reduce risk and operate securely in regulated environments.",
    href: "/services/security-strategy",
  },
  {
    icon: CloudArrowUp24Regular,
    title: "Cloud & Enterprise Solutions",
    tagline: "Scalable cloud solutions designed for secure modernization.",
    description:
      "Concepta supports cloud adoption and enterprise modernization through secure architectures that integrate governance, resilience, and operational efficiency across hybrid and cloud environments.",
    href: "/services",
  },
  {
    icon: Stack24Regular,
    title: "Application & Platform Solutions",
    tagline: "Application solutions that support reliability, performance, and continuity.",
    description:
      "We deliver application and platform solutions that improve system availability, support modernization efforts, and enable organizations to adapt and scale with confidence.",
    href: "/services",
  },
];

export default function Solutions() {
  return (
    <PageShell currentPage="Solutions" headerTheme="light">
        <section className="relative overflow-hidden pt-[140px] pb-16 sm:pb-20" style={{ background: "#EEF2F9" }}>
          <InternalHeroBackground />
          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-[680px]">
              <p className="hero-animate hero-label text-sm font-medium uppercase tracking-[0.24em] text-[var(--brand-cyan)]">
                Technology Solutions for Regulated Environments
              </p>
              <h1 className="hero-animate delay-1 mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[var(--brand-navy)]">
                Technology solutions built for secure, governed, and mission-critical environments
              </h1>
              <p className="hero-animate delay-3 mt-8 text-base sm:text-lg leading-relaxed text-[var(--color-hero-body-muted)]">
                Concepta delivers integrated AI, cybersecurity, cloud, and enterprise solutions that strengthen governance, reduce risk, and support secure, scalable operations across government and regulated industries.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-surface-subtle)]">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">Our Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Solutions designed to help regulated organizations modernize securely, operate with confidence, and maintain strong governance across mission-critical environments.
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
                  className="concepta-card concepta-card-compact concepta-card-interactive group flex flex-col"
                >
                  <solution.icon className="concepta-card-icon mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm font-medium text-[var(--color-primary)] mb-3">
                    {solution.tagline}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-7">
                    {solution.description}
                  </p>
                  <Link
                    href={solution.href}
                    className="concepta-inline-link mt-auto inline-flex items-center gap-2 font-medium group-hover:underline"
                  >
                    Learn more
                    <ArrowRight24Regular className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

    </PageShell>
  );
}
