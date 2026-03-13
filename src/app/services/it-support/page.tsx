"use client";

import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import HeroBackground from "@/components/HeroBackground";
import { Footer, BottomFooter } from "@/components/layout";

export default function ITSupport() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Services" />

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="relative bg-[#161616] py-16 sm:py-20 lg:py-24 overflow-hidden">
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
                  Responsive IT support that keeps organizations running
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B4BBB] leading-tight mb-6"
              >
                Service Desk & IT Operations Support
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-black leading-relaxed max-w-xl"
              >
                Concepta provides service desk and IT operations support designed for reliability and user experience. Our teams deliver responsive issue resolution, proactive monitoring, and operational continuity—supporting hybrid, onsite, and remote environments.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
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
                className="bg-white p-6 sm:p-8 border border-gray-200"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#0B4BBB] flex items-center justify-center mr-4 flex-shrink-0">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Managed Desktop Services
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-[#0B4BBB] mr-3 mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold">Proactive Monitoring:</span> 24/7 coverage to ensure your desktops are always performing at their best.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0B4BBB] mr-3 mt-0.5">✓</span>
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
                className="bg-white p-6 sm:p-8 border border-gray-200"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#0B4BBB] flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Cybersecurity Services
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-[#0B4BBB] mr-3 mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold">Security Assessments:</span> Identify vulnerabilities and strengthen your defenses.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0B4BBB] mr-3 mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold">24/7 Security Operations Center:</span> Continuous monitoring and rapid threat response.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0B4BBB] mr-3 mt-0.5">✓</span>
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
                className="bg-white p-6 sm:p-8 border border-gray-200"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#0B4BBB] flex items-center justify-center mr-4 flex-shrink-0">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Backup & Disaster Recovery
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-[#0B4BBB] mr-3 mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold">Cloud Backup:</span> Reliable backup solutions for Azure and Microsoft 365 environments.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0B4BBB] mr-3 mt-0.5">✓</span>
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
                className="bg-white p-6 sm:p-8 border border-gray-200"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#0B4BBB] flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Managed Network Services
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-[#0B4BBB] mr-3 mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold">Proactive Monitoring:</span> 24/7 oversight utilizing SNMP or cloud-based tools.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0B4BBB] mr-3 mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold">Network Support:</span> Immediate assistance for switches, routers, and access points.
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
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
