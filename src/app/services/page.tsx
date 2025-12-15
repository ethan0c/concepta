"use client";

import { motion } from "framer-motion";
import { Settings, Code, Database, Shield, Cloud, Users } from "lucide-react";
import Header from "@/components/Header";
import Image from "next/image";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Services" />

      {/* Main Content - pt-14 mobile, pt-24 desktop (header + contact bar) */}
      <main className="pt-14 sm:pt-24">
        {/* Hero Section */}
        <section
          className="pt-12 md:pt-16 pb-12 md:pb-16 relative overflow-hidden"
          style={{
            background: "radial-gradient(circle at top left, #0B4BBB, #082E84 70%)",
          }}
        >
          {/* Subtle Tech Pattern Overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="services-mesh"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="50" cy="50" r="1" fill="white" opacity="0.3" />
                  <circle cx="25" cy="25" r="0.5" fill="white" opacity="0.2" />
                  <circle cx="75" cy="25" r="0.5" fill="white" opacity="0.2" />
                  <circle cx="25" cy="75" r="0.5" fill="white" opacity="0.2" />
                  <circle cx="75" cy="75" r="0.5" fill="white" opacity="0.2" />
                  <line
                    x1="50"
                    y1="0"
                    x2="50"
                    y2="100"
                    stroke="white"
                    strokeWidth="0.2"
                    opacity="0.1"
                  />
                  <line
                    x1="0"
                    y1="50"
                    x2="100"
                    y2="50"
                    stroke="white"
                    strokeWidth="0.2"
                    opacity="0.1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#services-mesh)" />
            </svg>
          </div>

          <div className="page-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 md:space-y-8"
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
                  Comprehensive Technology Services
                </h1>

                <p className="text-base md:text-lg text-blue-100 leading-relaxed max-w-xl">
                  Delivering secure, scalable, and innovative technology solutions that drive business transformation and protect your digital assets.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-sm md:text-base font-medium transition-colors">
                    Get Started Today
                  </button>
                  <button className="text-white border border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded text-sm md:text-base font-medium transition-all duration-200">
                    Schedule Consultation
                  </button>
                </div>
              </motion.div>

              {/* Right Column - Services Showcase */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                  {/* Microsoft Partner Badge */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-white rounded-xl px-6 py-4 flex items-center space-x-4 shadow-lg">
                      <Image
                        src="/assets/partners/microsoft-logo.png"
                        alt="Microsoft Partner"
                        width={120}
                        height={40}
                        className="h-8 w-auto"
                      />
                      <div className="border-l border-gray-300 pl-4">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Certified</p>
                        <p className="text-sm font-semibold text-gray-800">Azure AI Partner</p>
                      </div>
                    </div>
                  </div>

                  {/* Services Icons Grid */}
                  <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="bg-white/10 rounded-xl p-4 border border-white/10 flex flex-col items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Shield className="w-6 h-6 text-white mb-2" />
                      <span className="text-white text-xs font-medium">Security</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="bg-white/10 rounded-xl p-4 border border-white/10 flex flex-col items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Cloud className="w-6 h-6 text-white mb-2" />
                      <span className="text-white text-xs font-medium">Cloud</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="bg-white/10 rounded-xl p-4 border border-white/10 flex flex-col items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Code className="w-6 h-6 text-white mb-2" />
                      <span className="text-white text-xs font-medium">Dev</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="bg-white/10 rounded-xl p-4 border border-white/10 flex flex-col items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Database className="w-6 h-6 text-white mb-2" />
                      <span className="text-white text-xs font-medium">Data</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                      className="bg-white/10 rounded-xl p-4 border border-white/10 flex flex-col items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Settings className="w-6 h-6 text-white mb-2" />
                      <span className="text-white text-xs font-medium">IT Ops</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      className="bg-white/10 rounded-xl p-4 border border-white/10 flex flex-col items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Users className="w-6 h-6 text-white mb-2" />
                      <span className="text-white text-xs font-medium">Support</span>
                    </motion.div>
                  </div>

                  {/* Tagline */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="text-center pt-4 border-t border-white/10"
                  >
                    <p className="text-white font-medium">Secure. Scalable. Innovative.</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-4xl text-gray-900 mb-3">Our Core Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive cybersecurity and technology solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Cybersecurity Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cybersecurity Services
                </h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive security solutions including threat detection, incident response, and compliance management.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Security Risk Assessments</li>
                  <li>• Penetration Testing</li>
                  <li>• 24/7 Security Monitoring</li>
                  <li>• Compliance Management</li>
                </ul>
              </motion.div>

              {/* Cloud Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Cloud className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cloud Modernization
                </h3>
                <p className="text-gray-600 mb-6">
                  Migrate, optimize, and secure your cloud infrastructure with Microsoft Azure expertise.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cloud Migration Strategy</li>
                  <li>• Azure Infrastructure Setup</li>
                  <li>• Cloud Security Configuration</li>
                  <li>• Performance Optimization</li>
                </ul>
              </motion.div>

              {/* IT Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  IT Support Services
                </h3>
                <p className="text-gray-600 mb-6">
                  Reliable, responsive IT support to keep your business running smoothly.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 24/7 Help Desk Support</li>
                  <li>• Network Management</li>
                  <li>• System Maintenance</li>
                  <li>• Technology Consulting</li>
                </ul>
              </motion.div>

              {/* Data Management */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Data Management
                </h3>
                <p className="text-gray-600 mb-6">
                  Secure data storage, backup, and analytics solutions for informed decision-making.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Data Backup & Recovery</li>
                  <li>• Database Management</li>
                  <li>• Analytics & Reporting</li>
                  <li>• Data Governance</li>
                </ul>
              </motion.div>

              {/* Custom Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Custom Development
                </h3>
                <p className="text-gray-600 mb-6">
                  Tailored software solutions built to meet your specific business requirements.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Web Application Development</li>
                  <li>• API Integration</li>
                  <li>• Database Design</li>
                  <li>• System Integration</li>
                </ul>
              </motion.div>

              {/* Consulting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Technology Consulting
                </h3>
                <p className="text-gray-600 mb-6">
                  Strategic technology guidance to align IT investments with business objectives.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• IT Strategy Development</li>
                  <li>• Technology Assessment</li>
                  <li>• Digital Transformation</li>
                  <li>• Project Management</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section with Images */}
        <section 
          className="py-20 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
          }}
        >
          <div className="page-container">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-gray-900 mb-4">
                Our Technology Stack
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Leveraging industry-leading technologies and platforms to deliver exceptional results
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Technology Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Technology Infrastructure"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
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
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Cloud Platforms</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Microsoft Azure</li>
                      <li>• AWS</li>
                      <li>• Google Cloud</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Tools</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Microsoft Sentinel</li>
                      <li>• Azure Security Center</li>
                      <li>• Defender 365</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Development</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• .NET Core</li>
                      <li>• React & Next.js</li>
                      <li>• Python & AI/ML</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
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
        <section className="py-20 bg-blue-600">
          <div className="page-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Technology Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our comprehensive technology services can help your business achieve its goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded font-medium hover:bg-blue-50 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-blue-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}