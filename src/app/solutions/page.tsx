"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Cloud, Lock, Zap, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import { Footer } from "@/components/layout";

const solutions = [
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Advanced threat detection, prevention, and response systems to protect your critical infrastructure.",
    features: ["24/7 Security Operations Center", "Threat Intelligence & Analysis", "Incident Response & Recovery", "Vulnerability Assessment"],
    href: "/services/security-strategy",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent automation and predictive analytics to drive business transformation and efficiency.",
    features: ["Predictive Analytics Platform", "Automated Decision Making", "Natural Language Processing", "Computer Vision Solutions"],
    href: "/solutions",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable, secure cloud solutions built on Microsoft Azure for enterprise-grade performance.",
    features: ["Azure Cloud Migration", "Hybrid Cloud Architecture", "Container Orchestration", "DevOps & CI/CD Pipelines"],
    href: "/solutions",
  },
  {
    icon: Lock,
    title: "Zero Trust Security",
    description: "Next-generation security framework that verifies every user and device before granting access.",
    features: ["Identity & Access Management", "Multi-Factor Authentication", "Network Segmentation", "Conditional Access Policies"],
    href: "/services/security-strategy",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Comprehensive modernization strategies to digitize operations and enhance productivity.",
    features: ["Business Process Automation", "Legacy System Modernization", "Data Analytics & Insights", "Employee Experience Platform"],
    href: "/solutions",
  },
  {
    icon: Users,
    title: "Managed Services",
    description: "End-to-end IT management and support services to optimize your technology infrastructure.",
    features: ["24/7 Infrastructure Monitoring", "Help Desk & User Support", "System Administration", "Performance Optimization"],
    href: "/services/it-support",
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Solutions" />

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
                  Enterprise Solutions
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6"
              >
                Technology solutions that protect and transform
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8"
              >
                Comprehensive cybersecurity and technology solutions designed to protect, 
                transform, and scale your enterprise operations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#0B4BBB] text-white text-sm font-medium hover:bg-[#0a3d9c] transition-colors"
                >
                  Get started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-gray-500 text-white text-sm font-medium hover:border-white hover:bg-white/5 transition-all"
                >
                  View case studies
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#f4f4f4]">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                What we offer
              </h2>
              <p className="text-gray-600 max-w-2xl">
                End-to-end solutions tailored for enterprise security and digital transformation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-300">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 sm:p-8 group"
                >
                  <div className="border-t-2 border-[#0B4BBB] pt-6">
                    <solution.icon className="w-6 h-6 text-[#0B4BBB] mb-4" />
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1 h-1 rounded-full bg-[#0B4BBB] mt-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={solution.href}
                      className="inline-flex items-center text-sm text-[#0B4BBB] font-medium group-hover:underline"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0B4BBB] py-16 sm:py-20">
          <div className="page-container">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                Ready to transform your enterprise?
              </h2>
              <p className="text-blue-100 mb-8">
                Let&apos;s discuss how our solutions can address your specific challenges and drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-[#0B4BBB] text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  Schedule consultation
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-white text-white text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  Download solutions guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
