"use client";

import { motion } from "framer-motion";
import { Trophy24Regular, People24Regular, Target24Regular, Globe24Regular } from "@fluentui/react-icons";
import { PageShell } from "@/components/layout";
import HeroBackground from "@/components/HeroBackground";

export default function AboutContent() {
  return (
    <PageShell currentPage="About" headerTheme="light">
      <section className="relative overflow-hidden bg-[var(--brand-navy)] pt-[160px] pb-[140px]">
        <HeroBackground />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[5] bg-[linear-gradient(to_bottom,rgba(10,26,47,0.0)_0%,rgba(10,26,47,0.65)_100%)]"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[680px]">
            <p className="hero-animate hero-label text-sm font-medium uppercase tracking-[0.24em]">
              About Concepta Innovation Services
            </p>
            <h1 className="hero-animate delay-1 hero-title mt-5 text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
              Mission-Aligned IT for Government &amp; Industry
            </h1>
            <p className="hero-animate delay-3 mt-8 text-base sm:text-lg leading-relaxed text-[rgba(255,255,255,0.9)]">
              We deliver intelligent automation, secure infrastructure, and responsive support for organizations operating in complex, regulated environments.
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
                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">About Us</h2>
                <h3 className="text-xl sm:text-2xl text-gray-800 mb-4 font-medium">
                  Empowering Innovation Across Federal and Commercial Sectors with AI, Cybersecurity, and Professional IT Support Services.
                </h3>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  At Concepta Innovation Services, we deliver intelligent automation, secure infrastructure, and mission-aligned IT support for government agencies and commercial enterprises. Our services are designed to help organizations modernize responsibly, operate securely, and perform at scale in complex, regulated environments.
                </p>
                <p className="text-base text-gray-600 mb-8 leading-relaxed">
                  Our professional capabilities span AI-driven workflows, AI governance, ethics, and compliance, application and platform support, solution architecture, Zero Trust cybersecurity frameworks, and responsive service desk operations. Together, these services enhance operational performance, strengthen compliance, and elevate the end-user experience across industries.
                </p>
                <div className="concepta-card concepta-card-subtle">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Our Tagline
                  </h3>
                  <p className="text-xl text-[var(--color-primary)] font-medium mb-3">
                    Smarter Solutions. Secure Infrastructure. Seamless Support.
                  </p>
                  <p className="text-base text-gray-700">
                    AI, Cybersecurity, and Professional IT Services for Government and Industry.
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
                Our unique combination of expertise, partnerships, and proven
                methodologies delivers exceptional value.
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
                  Microsoft Azure AI Partner with ISO 27001 and SOC 2 Type II
                  certifications ensuring highest standards.
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
                  Seasoned professionals with deep expertise in cybersecurity,
                  AI, and enterprise technology solutions.
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
                  Track record of successful implementations with measurable
                  outcomes and customer satisfaction.
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Reach</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Serving clients worldwide with 24/7 support and localized
                  expertise across multiple industries.
                </p>
              </motion.div>
            </div>
          </div>
        </section>


    </PageShell>
  );
}
