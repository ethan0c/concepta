'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Brain, Cloud, Lock, FileText, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import HeroBackground from '@/components/HeroBackground'
import { Footer, BottomFooter } from '@/components/layout'

const topics = [
  {
    icon: Shield,
    category: "Cybersecurity",
    title: "Zero Trust Architecture & Implementation",
    description: "Concepta implements end-to-end Zero Trust frameworks across identity services, endpoints, devices, data, network, and infrastructure. We help organizations verify explicitly, enforce least-privilege access, and assume breach to reduce their attack surface.",
    points: ["Identity & access management", "Endpoint protection & compliance", "Network segmentation & monitoring", "NIST 800-207 alignment"],
  },
  {
    icon: Brain,
    category: "Artificial Intelligence",
    title: "AI-Powered Solutions & Governance",
    description: "Our AI solutions integrate Microsoft Azure AI and Copilot for Microsoft 365 to enhance productivity, automate workflows, and support decision-making—while maintaining governance, ethics, and regulatory compliance.",
    points: ["Microsoft Copilot deployment & readiness", "Intelligent automation & workflow optimization", "AI governance & ethical frameworks", "Azure OpenAI integration"],
  },
  {
    icon: Cloud,
    category: "Cloud & Infrastructure",
    title: "Cloud Migration & Modernization",
    description: "Concepta provides comprehensive cloud architecture solutions to help organizations migrate applications, modernize infrastructure, and build resilient hybrid environments aligned with security and compliance requirements.",
    points: ["Azure cloud architecture & migration", "Hybrid cloud & multi-cloud strategy", "Disaster recovery & backup solutions", "Secure configuration management"],
  },
  {
    icon: Lock,
    category: "Compliance & Risk",
    title: "Enterprise Risk Management & Compliance",
    description: "We help organizations meet compliance obligations including HIPAA, FISMA, NIST RMF, NIST 800-171, and CMMC through comprehensive security assessments, authority to operate documentation, and continuous monitoring.",
    points: ["HIPAA assessment & compliance programs", "FISMA & FedRAMP alignment", "NIST RMF & 800-171 compliance", "Supply chain risk management (SCRM)"],
  },
]

const caseStudies = [
  {
    category: "Ransomware Recovery",
    title: "G&J Pepsi: Overcoming a Ransomware Attack",
    description: "G&J Pepsi-Cola Bottlers avoided both loss of data and ransom payment when a ransomware attack threatened the company. Microsoft Azure and Microsoft Security were credited for the successful outcome.",
    result: "Zero data loss, no ransom paid, complete system recovery",
  },
  {
    category: "Cloud Transformation",
    title: "Georgia Banking Company: Cloud Adoption with Microsoft Security",
    description: "A growing bank completed its cloud transformation within 13 months and gained scalable security by replacing disconnected products with integrated Microsoft Security solutions.",
    result: "13-month cloud transformation with scalable, integrated security",
  },
  {
    category: "Enterprise Security",
    title: "US LBM: Centralizing IT with Microsoft Security",
    description: "Building supplier US LBM centralized IT across multiple acquisitions by adopting Microsoft Sentinel and Microsoft 365 Defender for a complete SIEM and extended detection and response solution.",
    result: "Better than benchmark security score with unified XDR and SIEM",
  },
]

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Resources" />

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
                <span className="text-gray-500 text-xs sm:text-sm font-medium tracking-wider uppercase">
                  Knowledge Center
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B4BBB] leading-tight mb-6"
              >
                Resources & Insights
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-black leading-relaxed max-w-xl"
              >
                Insights, strategies, and real-world outcomes across cybersecurity, AI, cloud, and compliance—drawn from our work with government and enterprise clients.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Topic Areas */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">Areas of Expertise</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Deep domain knowledge across the capabilities that matter most to regulated organizations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {topics.map((topic, index) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center">
                      <topic.icon className="w-6 h-6 text-[#0B4BBB]" />
                    </div>
                    <span className="text-xs text-[#0B4BBB] font-medium uppercase tracking-wider">{topic.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{topic.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{topic.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {topic.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm text-[#0B4BBB] font-medium hover:underline"
                  >
                    Discuss with our team
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">Client Outcomes</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real results from organizations that partnered with Concepta and Microsoft to strengthen security and modernize operations.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#f4f4f4] p-8 border border-gray-200"
                >
                  <span className="text-xs text-[#0B4BBB] bg-blue-50 px-2 py-1 font-medium uppercase">{study.category}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-3">{study.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{study.description}</p>
                  <div className="bg-white p-4 border border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">Result</p>
                    <p className="text-sm text-gray-900 font-medium">{study.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Frameworks & Standards */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#f4f4f4]">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">Frameworks & Standards</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our solutions align with leading industry frameworks and regulatory requirements.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "NIST RMF", desc: "Risk Management Framework" },
                { name: "NIST 800-171", desc: "Protecting Controlled Unclassified Information" },
                { name: "FISMA", desc: "Federal Information Security Modernization Act" },
                { name: "HIPAA", desc: "Health Insurance Portability & Accountability" },
                { name: "NIST CSF", desc: "Cybersecurity Framework" },
                { name: "Zero Trust", desc: "NIST 800-207 Architecture" },
                { name: "CMMC", desc: "Cybersecurity Maturity Model Certification" },
                { name: "FedRAMP", desc: "Federal Risk & Authorization Management" },
              ].map((framework, index) => (
                <motion.div
                  key={framework.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 border border-gray-200"
                >
                  <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mb-3">
                    <FileText className="w-5 h-5 text-[#0B4BBB]" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{framework.name}</h3>
                  <p className="text-xs text-gray-500">{framework.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
  )
}
