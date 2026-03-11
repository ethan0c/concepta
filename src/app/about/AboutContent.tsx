"use client";

import { motion } from "framer-motion";
import { Award, Users, Target, Globe } from "lucide-react";
import Header from "@/components/Header";

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="About" />

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">


        {/* Company Overview */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="page-container">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="cisco-h3 text-gray-900 mb-6">About Us</h2>
                <h3 className="cisco-h5 text-gray-800 mb-4 font-cisco-medium">
                  Empowering Innovation Across Federal and Commercial Sectors with AI, Cybersecurity, and Professional IT Support Services.
                </h3>
                <p className="cisco-h6 text-gray-600 mb-6 leading-relaxed">
                  At Concepta Innovation Services, we deliver intelligent automation, secure infrastructure, and mission-aligned IT support for government agencies and commercial enterprises. Our services are designed to help organizations modernize responsibly, operate securely, and perform at scale in complex, regulated environments.
                </p>
                <p className="cisco-h6 text-gray-600 mb-8 leading-relaxed">
                  Our professional capabilities span AI-driven workflows, AI governance, ethics, and compliance, application and platform support, solution architecture, Zero Trust cybersecurity frameworks, and responsive service desk operations. Together, these services enhance operational performance, strengthen compliance, and elevate the end-user experience across industries.
                </p>
                <div className="bg-[#f4f4f4] p-8 border border-gray-200">
                  <h3 className="cisco-h5 font-cisco-medium text-gray-900 mb-4">
                    Our Tagline
                  </h3>
                  <p className="cisco-h5 text-blue-700 font-cisco-medium mb-3">
                    Smarter Solutions. Secure Infrastructure. Seamless Support.
                  </p>
                  <p className="cisco-h6 text-gray-700">
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
              <h2 className="cisco-h3 text-gray-900 mb-4">
                What Sets Us Apart
              </h2>
              <p className="cisco-h6 text-gray-600 max-w-3xl mx-auto">
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
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-50 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-[#0B4BBB]" />
                </div>
                <h3 className="cisco-h6 text-gray-900 mb-4">
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
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-50 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-[#0B4BBB]" />
                </div>
                <h3 className="cisco-h6 text-gray-900 mb-4">Expert Team</h3>
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
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-50 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-[#0B4BBB]" />
                </div>
                <h3 className="cisco-h6 text-gray-900 mb-4">Proven Results</h3>
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
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-50 flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-[#0B4BBB]" />
                </div>
                <h3 className="cisco-h6 text-gray-900 mb-4">Global Reach</h3>
                <p className="text-gray-600">
                  Serving clients worldwide with 24/7 support and localized
                  expertise across multiple industries.
                </p>
              </motion.div>
            </div>
          </div>
        </section>



        {/* Call to Action */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#f4f4f4]">
          <div className="page-container text-center">
            <h2 className="cisco-h3 text-gray-900 mb-6">
              Ready to Work Together?
            </h2>
            <p className="cisco-h6 text-gray-600 mb-8">
              Let&apos;s discuss how our expertise can help secure and transform your
              organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="inline-flex items-center justify-center px-6 py-3 bg-[#0B4BBB] text-white text-sm font-medium hover:bg-[#0a3d9c] transition-colors">
                Contact Our Team
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-[#0B4BBB] text-[#0B4BBB] text-sm font-medium hover:bg-[#0B4BBB] hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
