"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy24Regular, People24Regular, Target24Regular, Globe24Regular, ArrowRight24Regular } from "@fluentui/react-icons";
import { PageShell } from "@/components/layout";
import { InternalHeroSection } from "@/components/sections";

export default function AboutContent() {
  return (
    <PageShell currentPage="About" headerTheme="light">
        <InternalHeroSection
          label="About Concepta Innovation Services"
          title="Mission-Aligned IT for Government & Industry"
          description="We deliver intelligent automation, secure infrastructure, and responsive support for organizations operating in complex, regulated environments."
        />

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
                className="concepta-card"
              >
                <Trophy24Regular className="concepta-page-icon mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Certified Excellence
                </h3>
                <p className="text-gray-600">
                  Microsoft Azure AI Partner with ISO 27001 and SOC 2 Type II
                  certifications ensuring highest standards.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="concepta-card"
              >
                <People24Regular className="concepta-page-icon mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
                <p className="text-gray-600">
                  Seasoned professionals with deep expertise in cybersecurity,
                  AI, and enterprise technology solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="concepta-card"
              >
                <Target24Regular className="concepta-page-icon mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
                <p className="text-gray-600">
                  Track record of successful implementations with measurable
                  outcomes and customer satisfaction.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="concepta-card"
              >
                <Globe24Regular className="concepta-page-icon mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Reach</h3>
                <p className="text-gray-600">
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
