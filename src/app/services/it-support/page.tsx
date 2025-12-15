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

      {/* Main Content - pt-14 mobile, pt-24 desktop (header + contact bar) */}
      <main className="pt-14 sm:pt-24">
        {/* Hero Section */}
        <section className="pt-8 sm:pt-12 pb-12 sm:pb-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-4 sm:mb-6"
              >
                Concepta IT Support Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-12"
              >
                Your Trusted Partner for Comprehensive IT Solutions
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto"
              >
                At Concepta, we empower your business with a full suite of IT support services,
                designed to keep your operations running efficiently, securely, and without interruption.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4 sm:mb-6">
                Our Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive IT support offerings designed to keep your business running smoothly
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {/* Managed Desktop Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-blue-200"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Server className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
                    Managed Desktop Services
                  </h3>
                </div>
                <ul className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 sm:mr-3 mt-0.5 sm:mt-1">✓</span>
                    <div>
                      <span className="font-semibold">Proactive Monitoring:</span> 24/7 coverage to ensure your desktops are always performing at their best.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 sm:mr-3 mt-0.5 sm:mt-1">✓</span>
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
                className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-red-200"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
                    Cybersecurity Services
                  </h3>
                </div>
                <ul className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 sm:mr-3 mt-0.5 sm:mt-1">✓</span>
                    <div>
                      <span className="font-semibold">Security Assessments:</span> Identify vulnerabilities and strengthen your defenses.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 sm:mr-3 mt-0.5 sm:mt-1">✓</span>
                    <div>
                      <span className="font-semibold">24/7 Security Operations Center:</span> Continuous monitoring and rapid threat response.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 sm:mr-3 mt-0.5 sm:mt-1">✓</span>
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
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-green-200"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
                    Backup & Disaster Recovery
                  </h3>
                </div>
                <ul className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 sm:mr-3 mt-0.5 sm:mt-1">✓</span>
                    <div>
                      <span className="font-semibold">Cloud Backup:</span> Reliable backup solutions for Azure and Microsoft 365 environments.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 sm:mr-3 mt-0.5 sm:mt-1">✓</span>
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
                className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-cyan-200"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
                    Managed Network Services
                  </h3>
                </div>
                <ul className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2 sm:mr-3 mt-0.5 sm:mt-1">✓</span>
                    <div>
                      <span className="font-semibold">Proactive Monitoring:</span> 24/7 oversight utilizing SNMP or cloud-based tools.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2 sm:mr-3 mt-0.5 sm:mt-1">✓</span>
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
        <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
              Let Concepta Be the Backbone of Your IT Infrastructure
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100">
              Contact us today to learn how our managed services can help your business thrive in a digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact">
                <button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 rounded font-medium transition-colors">
                  Contact Our Team
                </button>
              </Link>
              <button className="w-full sm:w-auto text-white border-2 border-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 rounded font-medium transition-all">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
