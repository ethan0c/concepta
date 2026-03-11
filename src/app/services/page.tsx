"use client";

import { motion } from "framer-motion";
import { Settings, Code, Database, Shield, Cloud, Users, Brain, Layers, Headphones } from "lucide-react";
import Header from "@/components/Header";
import HeroBackground from "@/components/HeroBackground";
import Image from "next/image";

export default function Services() {
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
                <span className="text-[#6ea6ff] text-xs sm:text-sm font-medium tracking-wider uppercase">
                  Modern IT services designed for secure, regulated environments
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 max-w-xl"
              >
                Concepta Innovation Services delivers AI-enabled, security-first, and mission-aligned IT services that help government agencies and commercial organizations modernize responsibly and operate with confidence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <button className="inline-flex items-center justify-center px-6 py-3.5 bg-[#0B4BBB] text-white text-sm font-medium hover:bg-[#0a3d9c] transition-colors">
                  Get Started Today
                </button>
                <button className="inline-flex items-center justify-center px-6 py-3.5 border border-gray-500 text-white text-sm font-medium hover:border-white hover:bg-white/5 transition-all">
                  Schedule Consultation
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#f4f4f4]">
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
                  <Brain className="w-6 h-6 text-[#0B4BBB]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Artificial Intelligence & AI Governance
                </h3>
                <p className="text-sm text-[#0B4BBB] font-medium mb-4">
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
                  <Shield className="w-6 h-6 text-[#0B4BBB]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Cybersecurity & Zero Trust Architecture
                </h3>
                <p className="text-sm text-[#0B4BBB] font-medium mb-4">
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
                  <Code className="w-6 h-6 text-[#0B4BBB]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Application & Platform Support
                </h3>
                <p className="text-sm text-[#0B4BBB] font-medium mb-4">
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
                  <Cloud className="w-6 h-6 text-[#0B4BBB]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Solution Architecture & Cloud Enablement
                </h3>
                <p className="text-sm text-[#0B4BBB] font-medium mb-4">
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
                  <Headphones className="w-6 h-6 text-[#0B4BBB]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Service Desk & IT Operations Support
                </h3>
                <p className="text-sm text-[#0B4BBB] font-medium mb-4">
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
                  <Database className="w-6 h-6 text-[#0B4BBB]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Data Management & Analytics
                </h3>
                <p className="text-sm text-[#0B4BBB] font-medium mb-4">
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

        {/* Technology Stack Section with Images */}
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

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Technology Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-[#f4f4f4] p-8 border border-gray-200">
                  <Image
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Technology Infrastructure"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute -top-4 -right-4 bg-[#0B4BBB] text-white p-4">
                    <div className="text-sm font-medium">Enterprise Grade</div>
                    <div className="text-xs text-blue-100">Security & Compliance</div>
                  </div>
                </div>
              </motion.div>

              {/* Technology List */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Cloud Platforms</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Microsoft Azure</li>
                      <li>• AWS</li>
                      <li>• Google Cloud</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Tools</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Microsoft Sentinel</li>
                      <li>• Azure Security Center</li>
                      <li>• Defender 365</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Development</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• .NET Core</li>
                      <li>• React & Next.js</li>
                      <li>• Python & AI/ML</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Databases</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• SQL Server</li>
                      <li>• Azure Cosmos DB</li>
                      <li>• PostgreSQL</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#0B4BBB]">
          <div className="page-container text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
              Ready to Transform Your Technology Infrastructure?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our comprehensive technology services can help your business achieve its goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#0B4BBB] text-sm font-medium hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-white text-white text-sm font-medium hover:bg-white/10 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}