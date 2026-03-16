"use client";

import { motion } from "framer-motion";
import { Trophy24Regular, People24Regular, Target24Regular, Globe24Regular } from "@fluentui/react-icons";
import { PageShell } from "@/components/layout";
import InternalHeroBackground from "@/components/InternalHeroBackground";

export default function AboutContent() {
  return (
    <PageShell currentPage="About" headerTheme="light">
      <section className="relative overflow-hidden pt-[140px] pb-16 sm:pb-20" style={{ background: "#EEF2F9" }}>
        <InternalHeroBackground />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[680px]">
            <p className="hero-animate hero-label text-sm font-medium uppercase tracking-[0.24em] text-[var(--brand-cyan)]">
              About Concepta Innovation Services
            </p>
            <h1 className="hero-animate delay-1 mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[var(--brand-navy)]">
              Mission-aligned IT for secure, regulated, and mission-critical environments
            </h1>
            <p className="hero-animate delay-3 mt-8 text-base sm:text-lg leading-relaxed text-[var(--color-hero-body-muted)]">
              We deliver AI-enabled automation, secure infrastructure, and responsive IT support for organizations operating in complex, regulated environments. Our mission is to help government agencies and enterprise organizations modernize responsibly, operate securely, and perform at scale.
            </p>
          </div>
        </div>
      </section>

        {/* Company Overview */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-surface-subtle)]">
          <div className="page-container">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--color-primary)] mb-6">Who We Are</h2>
                <h3 className="text-xl sm:text-2xl text-[var(--color-primary)] mb-4 font-medium">
                  Empowering government and industry with secure, intelligent, and mission-ready technology solutions
                </h3>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  Concepta Innovation Services provides AI, cybersecurity, cloud, and professional IT services designed for organizations that require strong governance, compliance, and operational resilience. We combine deep technical expertise with a mission-aligned approach to help clients modernize confidently and maintain continuity across hybrid and regulated environments.
                </p>
                <p className="text-base text-gray-600 mb-8 leading-relaxed">
                  Our capabilities span AI-driven workflows, AI governance and ethics, Zero Trust cybersecurity frameworks, application and platform support, solution architecture, and responsive service desk operations. Together, these services strengthen security, enhance operational performance, and elevate the end-user experience.
                </p>
                <div className="concepta-card concepta-card-subtle">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Our Identity
                  </h3>
                  <p className="text-xl text-[var(--color-primary)] font-medium mb-3">
                    Smarter solutions. Secure infrastructure. Seamless support.
                  </p>
                  <p className="text-base text-gray-700">
                    We believe modern IT must be intelligent, secure, and mission-aligned. Our approach integrates responsible AI, Zero Trust security, and enterprise-grade support to help organizations achieve measurable outcomes with confidence.
                  </p>
                </div>
                

              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Differentiators */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-surface-muted)]">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our unique combination of certifications, expertise, proven outcomes, and mission-aligned delivery enables organizations to modernize with confidence.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="concepta-card concepta-card-compact"
              >
                <Trophy24Regular className="concepta-card-icon mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Certified Excellence
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We maintain industry-recognized certifications including Microsoft Azure AI Partner status, ISO 27001, and CMMC to ensure our solutions meet the highest standards of security, governance, and operational integrity.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="concepta-card concepta-card-compact"
              >
                <People24Regular className="concepta-card-icon mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our team includes seasoned professionals with deep expertise in cybersecurity, AI, cloud architecture, and enterprise technology. We bring decades of experience supporting government agencies and regulated industries.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="concepta-card concepta-card-compact"
              >
                <Target24Regular className="concepta-card-icon mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We deliver measurable outcomes through secure modernization, AI-enabled automation, and Zero Trust security implementations. Our track record includes successful transformations across federal, state, and commercial sectors.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="concepta-card concepta-card-compact"
              >
                <Globe24Regular className="concepta-card-icon mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mission-Aligned Delivery</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We understand the operational, compliance, and security requirements of regulated environments. Our methodologies ensure alignment with mission needs, governance frameworks, and regulatory standards.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

    </PageShell>
  );
}
