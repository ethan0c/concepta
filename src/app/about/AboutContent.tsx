"use client";

import { motion } from "framer-motion";
import { Award, Users, Target, Globe } from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="About" />

      {/* Main Content - pt-14 mobile, pt-24 desktop (header + contact bar) */}
      <main className="pt-14 sm:pt-24">
        {/* Hero Section */}
        <section className="pt-8 sm:pt-12 pb-12 sm:pb-16 relative overflow-hidden" style={{
          background: 'radial-gradient(circle at top left, #0B4BBB, #082E84 70%)'
        }}>
          <div className="page-container">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="cisco-h1 text-white leading-tight mb-6"
              >
                About Concepta Innovation Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="cisco-h6 text-blue-100 leading-relaxed max-w-3xl mx-auto mb-8"
              >
                Providing innovative technical solutions that promote business value, while ensuring security of business and customer data from growing cybersecurity threats.
              </motion.p>
              <div className="relative max-w-4xl mx-auto">
                <Image 
                  src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1600&auto=format&fit=crop"
                  alt="About our team"
                  width={1200}
                  height={600}
                  className="w-full h-64 md:h-80 object-cover rounded-lg border border-blue-600/30 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="page-container">
            <div className="text-center mb-16">
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
                <p className="cisco-h6 text-gray-600 mb-8 leading-relaxed">
                  At Concepta Innovation Services, LLC, we deliver intelligent automation, secure infrastructure, and mission-aligned IT support for government agencies and commercial enterprises. Our professional services span AI-driven workflows, zero-trust cybersecurity frameworks, and responsive service desk operations—enhancing performance, ensuring compliance, and elevating user experience across industries.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200">
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
                
                {/* SBA Certified Badge */}
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center p-4 bg-white rounded-lg border border-blue-200 shadow-sm">
                    <Image
                      src="/assets/sba.jpg"
                      alt="SBA Certified Partner"
                      width={48}
                      height={48}
                      className="w-12 h-12 mr-4"
                    />
                    <div>
                      <p className="cisco-h6 font-cisco-medium text-gray-900">SBA Certified Partner</p>
                      <p className="cisco-body-midsize text-gray-600">Small Business Administration</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Differentiators */}
        <section className="py-20 bg-gray-50">
          <div className="page-container">
            <div className="text-center mb-16">
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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-blue-600" />
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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-blue-600" />
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

        {/* Leadership Team */}
        <section className="py-20 bg-white">
          <div className="page-container">
            <div className="text-center mb-16">
              <h2 className="cisco-h3 text-gray-900 mb-4">Leadership Team</h2>
              <p className="cisco-h6 text-gray-600 max-w-3xl mx-auto">
                Experienced leaders driving innovation and excellence in
                cybersecurity and technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "John Smith",
                  role: "Chief Executive Officer",
                  bio: "20+ years in cybersecurity leadership with expertise in enterprise security architecture and digital transformation.",
                  education: "M.S. Computer Science, Stanford University",
                },
                {
                  name: "Sarah Johnson",
                  role: "Chief Technology Officer",
                  bio: "Former Microsoft Principal Engineer with deep expertise in AI, cloud security, and enterprise software development.",
                  education: "Ph.D. Computer Science, MIT",
                },
                {
                  name: "Michael Chen",
                  role: "Chief Security Officer",
                  bio: "Former NSA cybersecurity specialist with 15+ years in threat intelligence and incident response leadership.",
                  education: "M.S. Cybersecurity, Carnegie Mellon",
                },
              ].map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>

                  <h3 className="cisco-h6 text-gray-900 text-center mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 text-center mb-4">
                    {leader.role}
                  </p>
                  <p className="text-gray-600 cisco-body-midsize mb-3">{leader.bio}</p>
                  <p className="text-gray-500 cisco-body-small text-center">
                    {leader.education}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="cisco-h3 text-gray-900 mb-6">
              Ready to Work Together?
            </h2>
            <p className="cisco-h6 text-gray-600 mb-8">
              Let&apos;s discuss how our expertise can help secure and transform your
              organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded cisco-body-large font-cisco-medium transition-colors">
                Contact Our Team
              </button>
              <button className="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded cisco-body-large font-cisco-medium transition-all">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
