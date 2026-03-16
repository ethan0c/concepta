"use client";

import { motion } from "framer-motion";
import { Server24Regular, CloudArrowUp24Regular, ShieldCheckmark24Regular, Flash24Regular } from "@fluentui/react-icons";
import { PageShell } from "@/components/layout";
import { InternalHeroSection } from "@/components/sections";

export default function ITSupport() {
  return (
    <PageShell currentPage="Services" headerTheme="light">
        <InternalHeroSection
          label="Responsive IT support that keeps organizations running"
          title="Service Desk & IT Operations Support"
          description="Concepta provides service desk and IT operations support designed for reliability and user experience. Our teams deliver responsive issue resolution, proactive monitoring, and operational continuity-supporting hybrid, onsite, and remote environments."
        />

        {/* Our Services */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-surface-subtle)]">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold concepta-section-heading mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive IT support offerings designed to keep your business running smoothly
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* Managed Desktop Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="concepta-card concepta-card-compact"
              >
                <div className="flex items-center mb-6">
                  <Server24Regular className="concepta-card-icon mr-4 text-[var(--color-link)]" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Managed Desktop Services
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-[var(--color-primary)] mr-3 mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold">Proactive Monitoring:</span> 24/7 coverage to ensure your desktops are always performing at their best.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--color-primary)] mr-3 mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold">Reactive User Support:</span> Round-the-clock assistance for any technical issues your team encounters.
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Cybersecurity Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="concepta-card concepta-card-compact"
              >
                <div className="flex items-center mb-6">
                  <ShieldCheckmark24Regular className="concepta-card-icon mr-4 text-[var(--color-link)]" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Cybersecurity Services
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-[var(--color-primary)] mr-3 mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold">Security Assessments:</span> Identify vulnerabilities and strengthen your defenses.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--color-primary)] mr-3 mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold">24/7 Security Operations Center:</span> Continuous monitoring and rapid threat response.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--color-primary)] mr-3 mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold">Advanced Endpoint Detection (EDR):</span> Cutting-edge protection for every device.
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Backup and Disaster Recovery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="concepta-card concepta-card-compact"
              >
                <div className="flex items-center mb-6">
                  <CloudArrowUp24Regular className="concepta-card-icon mr-4 text-[var(--color-link)]" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Backup & Disaster Recovery
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-[var(--color-primary)] mr-3 mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold">Cloud Backup:</span> Reliable backup solutions for Azure and Microsoft 365 environments.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--color-primary)] mr-3 mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold">Disaster Recovery:</span> Rapid recovery plans to minimize downtime and data loss.
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Managed Network Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="concepta-card concepta-card-compact"
              >
                <div className="flex items-center mb-6">
                  <Flash24Regular className="concepta-card-icon mr-4 text-[var(--color-link)]" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Managed Network Services
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-[var(--color-primary)] mr-3 mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold">Proactive Monitoring:</span> 24/7 oversight utilizing SNMP or cloud-based tools.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--color-primary)] mr-3 mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold">Network Support:</span> Immediate assistance for switches, routers, and access points.
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

    </PageShell>
  );
}
