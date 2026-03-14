"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Cloud, Brain, Headphones, Code, Database } from "lucide-react";
import { PageShell } from "@/components/layout";
import { InternalHeroSection } from "@/components/sections";

export default function Services() {
  return (
    <PageShell currentPage="Services">
        <InternalHeroSection
          label="Modern IT services designed for secure, regulated environments"
          title="Professional IT Services"
          description="Concepta Innovation Services delivers AI-enabled, security-first, and mission-aligned IT services that help government agencies and commercial organizations modernize responsibly and operate with confidence."
          sectionClassName="py-12 sm:py-14 lg:py-16"
        />

        {/* Services Grid */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-surface-subtle)]">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">Our Core Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                AI-enabled, security-first solutions for government and enterprise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI & AI Governance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Artificial Intelligence & AI Governance
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-4">
                  Responsible AI solutions built for governance, compliance, and scale.
                </p>
                <p className="text-gray-600 mb-6">
                  Concepta provides AI-driven solutions that enhance operational efficiency while maintaining strong governance, ethics, and compliance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• AI-enabled workflows</li>
                  <li>• Intelligent automation</li>
                  <li>• Decision-support capabilities</li>
                  <li>• Regulatory compliance alignment</li>
                </ul>
              </motion.div>

              {/* Cybersecurity & Zero Trust */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Cybersecurity & Zero Trust Architecture
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-4">
                  Security strategies that protect mission-critical systems and data.
                </p>
                <p className="text-gray-600 mb-6">
                  Modern cybersecurity services grounded in Zero Trust principles, helping organizations reduce risk and strengthen resilience.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Zero Trust implementation</li>
                  <li>• Continuous monitoring</li>
                  <li>• Compliance alignment</li>
                  <li>• Identity & endpoint protection</li>
                </ul>
              </motion.div>

              {/* Application & Platform Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Application & Platform Support
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-4">
                  Reliable application and platform support for continuous operations.
                </p>
                <p className="text-gray-600 mb-6">
                  Application and platform support services ensuring system availability, performance, and security for enterprise and government systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• System maintenance</li>
                  <li>• Platform modernization</li>
                  <li>• Data integration</li>
                  <li>• Operational support</li>
                </ul>
              </motion.div>

              {/* Solution Architecture & Cloud */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6">
                  <Cloud className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Solution Architecture & Cloud Enablement
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-4">
                  Architecting secure, scalable solutions for modern environments.
                </p>
                <p className="text-gray-600 mb-6">
                  Concepta designs and supports solution architectures that integrate cloud, data, and security technologies to meet mission and business needs.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cloud architecture design</li>
                  <li>• Data & security integration</li>
                  <li>• Governance alignment</li>
                  <li>• Long-term sustainability</li>
                </ul>
              </motion.div>

              {/* Service Desk & IT Operations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6">
                  <Headphones className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Service Desk & IT Operations Support
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-4">
                  Responsive IT support that keeps organizations running.
                </p>
                <p className="text-gray-600 mb-6">
                  Service desk and IT operations support designed for reliability and user experience across hybrid, onsite, and remote environments.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 24/7 responsive support</li>
                  <li>• Proactive monitoring</li>
                  <li>• Issue resolution</li>
                  <li>• Operational continuity</li>
                </ul>
              </motion.div>

              {/* Data Management */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Data Management & Analytics
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-4">
                  Secure data solutions for informed decision-making.
                </p>
                <p className="text-gray-600 mb-6">
                  Comprehensive data management including secure storage, backup, analytics, and governance for regulated environments.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Data backup & recovery</li>
                  <li>• Analytics & reporting</li>
                  <li>• Data governance</li>
                  <li>• Compliance management</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
                Our Technology Stack
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Leveraging industry-leading technologies and platforms to deliver exceptional results
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--color-surface-muted)] p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cloud Platforms</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Microsoft Azure</li>
                  <li>• AWS</li>
                  <li>• Google Cloud</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[var(--color-surface-muted)] p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Tools</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Microsoft Sentinel</li>
                  <li>• Azure Security Center</li>
                  <li>• Defender 365</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-[var(--color-surface-muted)] p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Development</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• .NET Core</li>
                  <li>• React & Next.js</li>
                  <li>• Python & AI/ML</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-[var(--color-surface-muted)] p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Databases</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• SQL Server</li>
                  <li>• Azure Cosmos DB</li>
                  <li>• PostgreSQL</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-hero-bg)]">
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
                className="inline-flex items-center justify-center px-7 py-4 bg-[var(--color-primary)] text-white text-sm font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
              >
                Contact Us
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

    </PageShell>
  );
}