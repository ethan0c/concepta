'use client'

import { motion } from 'framer-motion'
import { Shield, Brain, Cloud, Lock, Zap, Users } from 'lucide-react'
import Image from 'next/image'
import Header from '@/components/Header'

export default function Solutions() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Header currentPage="Solutions" />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden" style={{
          background: 'radial-gradient(circle at top left, #0B4BBB, #082E84 70%)'
        }}>
          {/* subtle overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="solutions-hero" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="1" fill="white" opacity="0.3" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.2" opacity="0.1" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.2" opacity="0.1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#solutions-hero)" />
            </svg>
          </div>

          <div className="page-container relative z-10">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl text-white leading-tight mb-6"
              >
                Enterprise Solutions
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-12"
              >
                Comprehensive cybersecurity and technology solutions designed to protect, transform, and scale your enterprise operations.
              </motion.p>
              <div className="relative max-w-4xl mx-auto">
                <Image 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
                  alt="Enterprise Solutions Visual"
                  width={1200}
                  height={600}
                  className="w-full h-64 md:h-80 object-cover rounded-lg border border-blue-600/30 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-white">
          <div className="page-container">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* Cybersecurity Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">Cybersecurity Solutions</h3>
                <p className="text-gray-600 mb-6">Advanced threat detection, prevention, and response systems to protect your critical infrastructure.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 24/7 Security Operations Center (SOC)</li>
                  <li>• Threat Intelligence & Analysis</li>
                  <li>• Incident Response & Recovery</li>
                  <li>• Vulnerability Assessment</li>
                </ul>
              </motion.div>

              {/* AI & Machine Learning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">AI & Machine Learning</h3>
                <p className="text-gray-600 mb-6">Intelligent automation and predictive analytics to drive business transformation and efficiency.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Predictive Analytics Platform</li>
                  <li>• Automated Decision Making</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision Solutions</li>
                </ul>
              </motion.div>

              {/* Cloud Infrastructure */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Cloud className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600 mb-6">Scalable, secure cloud solutions built on Microsoft Azure for enterprise-grade performance.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Azure Cloud Migration</li>
                  <li>• Hybrid Cloud Architecture</li>
                  <li>• Container Orchestration</li>
                  <li>• DevOps & CI/CD Pipelines</li>
                </ul>
              </motion.div>

              {/* Zero Trust Security */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">Zero Trust Security</h3>
                <p className="text-gray-600 mb-6">Next-generation security framework that verifies every user and device before granting access.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Identity & Access Management</li>
                  <li>• Multi-Factor Authentication</li>
                  <li>• Network Segmentation</li>
                  <li>• Conditional Access Policies</li>
                </ul>
              </motion.div>

              {/* Digital Transformation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">Digital Transformation</h3>
                <p className="text-gray-600 mb-6">Comprehensive modernization strategies to digitize operations and enhance productivity.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Business Process Automation</li>
                  <li>• Legacy System Modernization</li>
                  <li>• Data Analytics & Insights</li>
                  <li>• Employee Experience Platform</li>
                </ul>
              </motion.div>

              {/* Managed Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">Managed Services</h3>
                <p className="text-gray-600 mb-6">End-to-end IT management and support services to optimize your technology infrastructure.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 24/7 Infrastructure Monitoring</li>
                  <li>• Help Desk & User Support</li>
                  <li>• System Administration</li>
                  <li>• Performance Optimization</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-3xl text-gray-900 mb-6">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let&apos;s discuss how our solutions can address your specific challenges and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded transition-colors">
                Schedule Consultation
              </button>
              <button className="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded transition-all">
                Download Solutions Guide
              </button>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  )
}
