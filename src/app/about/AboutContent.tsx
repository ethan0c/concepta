"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Users, Target, Globe } from "lucide-react";
import Header from "@/components/Header";
import HeroBackground from "@/components/HeroBackground";
import { Footer, BottomFooter } from "@/components/layout";

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-[#f4fafd]">
      <Header currentPage="About" />

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="relative bg-[#161616] py-16 sm:py-20 lg:py-24 overflow-hidden">
          <HeroBackground />
          <div className="page-container relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <span className="w-8 h-[2px] bg-[#0B4BBB]" />
                <span className="text-gray-500 text-xs sm:text-sm font-medium tracking-wider uppercase">
                  About Concepta Innovation Services
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B4BBB] leading-tight mb-6"
              >
                Mission-Aligned IT for Government & Industry
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-black leading-relaxed max-w-xl"
              >
                We deliver intelligent automation, secure infrastructure, and responsive support for organizations operating in complex, regulated environments.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
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
                <div className="bg-[#f4f4f4] p-8 border border-gray-200">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Our Tagline
                  </h3>
                  <p className="text-xl text-[#0B4BBB] font-medium mb-3">
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
        <section className="py-16 sm:py-20 lg:py-24 bg-[#f4f4f4]">
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
                className="bg-white p-8 border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-[#0B4BBB]" />
                </div>
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
                className="bg-white p-8 border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-[#0B4BBB]" />
                </div>
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
                className="bg-white p-8 border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-[#0B4BBB]" />
                </div>
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
                className="bg-white p-8 border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-[#0B4BBB]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Reach</h3>
                <p className="text-gray-600">
                  Serving clients worldwide with 24/7 support and localized
                  expertise across multiple industries.
                </p>
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
