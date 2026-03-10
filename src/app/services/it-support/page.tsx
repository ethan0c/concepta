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

export default function ITSupport() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Services" />

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="bg-[#161616] py-16 sm:py-20 lg:py-24">
          <div className="page-container">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <span className="w-8 h-[2px] bg-[#0B4BBB]" />
                <span className="text-[#6ea6ff] text-xs sm:text-sm font-medium tracking-wider uppercase">
                  Responsive IT support that keeps organizations running
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6"
              >
                Service Desk & IT Operations Support
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl"
              >
                Concepta provides service desk and IT operations support designed for reliability and user experience. Our teams deliver responsive issue resolution, proactive monitoring, and operational continuity—supporting hybrid, onsite, and remote environments.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#f4f4f4]">
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
        <section className="py-16 sm:py-20 lg:py-24 bg-[#0B4BBB]">
          <div className="page-container text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
              Let Concepta Be the Backbone of Your IT Infrastructure
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today to learn how our managed services can help your business thrive in a digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#0B4BBB] text-sm font-medium hover:bg-gray-100 transition-colors">
                  Contact Our Team
                </button>
              </Link>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-white text-white text-sm font-medium hover:bg-white/10 transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
