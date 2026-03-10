"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye } from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";

export default function SecurityStrategy() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Services" />

      {/* Main Content - pt-14 mobile, pt-24 desktop (header + contact bar) */}
      <main className="pt-14 sm:pt-24">
        {/* Hero Section */}
        <section className="pt-8 sm:pt-12 pb-12 sm:pb-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-blue-600 text-sm md:text-base font-medium uppercase tracking-wider mb-4"
              >
                Security strategies that protect mission-critical systems and data.
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-4 sm:mb-6"
              >
                Cybersecurity & Zero Trust Architecture
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12"
              >
                Concepta delivers modern cybersecurity services grounded in Zero Trust principles, helping organizations reduce risk and strengthen resilience across identity, endpoints, networks, applications, and data. Our approach emphasizes continuous monitoring, compliance alignment, and secure operations tailored for regulated environments.
              </motion.p>
            </div>
          </div>
        </section>

        {/* G&J Pepsi Case Study - Featured */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                FEATURED CASE STUDY
              </div>
              <h2 className="text-4xl text-gray-900 mb-6">
                Featured Success Story
              </h2>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 mb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-medium text-gray-900 mb-4">
                    G&J Pepsi Reflect on Overcoming a Ransomware Attack
                  </h3>
                  <p className="text-blue-600 font-medium text-lg mb-6">
                    Cybersecurity Resilience Case Study
                  </p>

                  <div className="prose prose-lg text-gray-700 mb-6">
                    <p className="mb-4 text-lg">
                      G&J Pepsi-Cola Bottlers avoided both loss of data and ransom payment when a ransomware attack threatened the company in 2021. It credits Microsoft Azure and Microsoft Security for saving the day.
                    </p>
                    <p className="mb-4 text-lg">
                      Read the story and join our mailing list to stay in touch. Reach out if you&apos;d like to discuss how we can help you protect against cyber-attacks.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <p className="text-base text-blue-800 font-medium mb-2">
                      Key Outcomes:
                    </p>
                    <ul className="text-base text-blue-700 space-y-1">
                      <li>• Zero data loss - no ransom paid</li>
                      <li>• Microsoft Azure and Security deployment</li>
                      <li>• Complete system recovery</li>
                      <li>• Enhanced security posture</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Microsoft Azure & Security Partnership
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Leveraging Microsoft&apos;s comprehensive security solutions to protect against ransomware and cyber threats.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium transition-colors">
                    Read Full Story
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl text-gray-900 mb-6">
                Cybersecurity Insights & Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert guidance and proven strategies to strengthen your security posture
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Microsoft Digital Defense Report */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="text-sm text-blue-600 font-medium mb-3 flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  MICROSOFT PARTNER
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Microsoft Digital Defense Report
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Do you know what your current cybersecurity landscape looks
                  like? Can you gauge how at-risk your business is? Read the
                  Microsoft Digital Defense Report 2022 to get answers to these
                  questions—and more. You&apos;ll learn about the scope and scale of
                  today&apos;s threats, how Microsoft is helping to dismantle
                  cybercrime, and what we can do, as a Microsoft partner to help
                  address your business&apos; vulnerabilities.
                </p>
                <a
                  href="/resources"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </motion.div>

              {/* Zero Trust Defense */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="text-sm text-blue-600 font-medium mb-3 flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  ZERO TRUST
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  How to Use Zero Trust to Defend Against Cyberattacks
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A changing economy can lead to IT cutbacks and can put
                  pressure on security programs. But did you know that you can
                  use the right technologies to gain unexpected wins even in
                  challenging times? Find out how your business can use Zero
                  Trust to push security transformation while reducing business
                  costs.
                </p>
                <a
                  href="/resources"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </motion.div>

              {/* US LBM Case Study */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="text-sm text-blue-600 font-medium mb-3 flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  CASE STUDY
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  US LBM Remodels its Cybersecurity by Centralizing IT with
                  Microsoft Security
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Building supplier US LMB had acquired many different
                  businesses, all of which had independently managed IT
                  organizations and disparate security solutions. Even worse,
                  many of those security solutions didn&apos;t work together. The
                  company adopted Microsoft Sentinel and Microsoft 365 Defender
                  for a complete SIEM and extended detection and response
                  solution and achieved a better than benchmark security score.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 mb-6 border border-green-200">
                  <p className="text-sm text-green-800">
                    <strong>Result:</strong> Better than benchmark security
                    score achieved through integrated XDR and SIEM solution.
                  </p>
                </div>
                <a
                  href="/resources"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-medium mb-4">
                  Ready to Transform Your Security Posture?
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Sign up for our mailing list for details—and reach out to
                  learn more about how we can help your company benefit from an
                  integrated XDR and SIEM solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-600 px-8 py-3 rounded font-medium hover:bg-blue-50 transition-colors">
                    Sign Up for Mailing List
                  </button>
                  <button className="border border-white text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-blue-600 transition-all">
                    Contact Us Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Artificial Intelligence Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-gray-900 mb-6">
                Artificial Intelligence Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage the power of AI to transform your business operations and enhance productivity
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              {/* Copilot Insights */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="text-sm text-blue-600 font-medium mb-3 flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  GENERATIVE AI AT WORK
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Insights from Copilot Early Users
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Copilot sets a new baseline – one where every employee gains the skills to write, design, code, analyze data, and more. If you want to see how Copilot is driving measurable business value for organizations that have fully adopted the technology, check out the latest research.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  As a Microsoft Partner, we can help you realize these productivity gains by readying your processes and people for the AI-powered future of work. Reach out to learn more today.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
                  Read more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Copilot for M365 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="text-sm text-blue-600 font-medium mb-3 flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  COPILOT FOR M365
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Day in the Life of an Executive
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  As a busy executive, it&apos;s hard to get ahead at work. But imagine what you could accomplish with an AI-powered assistant at your disposal. You may have a tight schedule, but Copilot for Microsoft 365 can help you achieve more between meetings.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Watch the video to see how executives use Copilot to stay focused throughout their workday. As a Microsoft Partner, we can help you achieve these results and more. Unleash productivity today.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
                  Read more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Copilot Onboarding */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="text-sm text-blue-600 font-medium mb-3 flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  ONBOARDING GUIDE
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  How to Onboard Copilot, Your Everyday Work Companion
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  There&apos;s art and science to using Copilot for Microsoft 365. It&apos;s not enough to merely turn Copilot on – your people need guidance on how to build new skills that help them get the most out of generative AI. Learn how you can navigate your AI journey with confidence by working with a Microsoft Partner to ready your organization for the new AI-powered era of work. Read the eBook for more insights.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
                  Read more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* AI Agents & Workflow Automation */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <div className="text-sm text-blue-100 font-medium mb-3 flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  AI AUTOMATION
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  AI Agents & Workflow Automation
                </h3>
                <p className="text-lg text-blue-100 mb-4">
                  Empowering Intelligent Operations with Concepta Innovation Services
                </p>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  In today&apos;s fast-evolving digital landscape, AI agents are transforming how businesses operate—automating tasks, enhancing decision-making, and improving productivity. At Concepta Innovation Services, we specialize in deploying AI-powered solutions that align with your mission, scale with your growth, and deliver measurable impact.
                </p>
                <div className="bg-white/10 rounded-lg p-4 mb-6 border border-white/20">
                  <p className="text-white font-medium">
                    Ready to Transform with AI Agents?
                  </p>
                  <p className="text-blue-100 text-sm mt-2">
                    Let Concepta Innovation Services help you design, deploy, and optimize AI-powered workflows that drive results.
                  </p>
                </div>
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded font-medium transition-colors">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Transition Applications to Cloud */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-gray-900 mb-6">
                Transition Applications to Cloud
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modernize your infrastructure with cloud migration and Microsoft Security solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Bank Case Study */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                <div className="text-sm text-green-600 font-medium mb-3 flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  CLOUD TRANSFORMATION
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Bank Boosts Growth with Cloud Adoption and Microsoft Security
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  When a bank aspires to faster growth, security can be a highly effective accelerator. Georgia Banking Company exemplifies the success that&apos;s possible with a tightly connected security tool set.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  It completed its cloud transformation within 13 months and gained scalable security and efficiency by replacing a collection of disconnected products with Microsoft Security solutions.
                </p>
                <div className="bg-white rounded-lg p-4 border border-green-200 mb-6">
                  <p className="text-green-800 font-medium mb-2">
                    Key Results:
                  </p>
                  <ul className="text-green-700 space-y-1">
                    <li>• 13-month cloud transformation</li>
                    <li>• Scalable security implementation</li>
                    <li>• Enhanced operational efficiency</li>
                    <li>• Integrated Microsoft Security suite</li>
                  </ul>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  As a Microsoft partner, we can help your security operations team achieve similar results, with deeply integrated security solutions that span your entire digital estate. Read the story.
                </p>
                <button className="text-green-600 hover:text-green-700 font-medium inline-flex items-center group">
                  Read more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Multicloud Security */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                <div className="text-sm text-blue-600 font-medium mb-3 flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  MULTICLOUD SECURITY
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Data Protection Across Your Multicloud Estate
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  How many clouds does your business use? Is your data protected across them all? Find out how the right technology solutions can help you extend security across the clouds and cloud services your business relies on—and what we can do to help you get there.
                </p>
                <div className="bg-white rounded-lg p-4 border border-blue-200 mb-6">
                  <p className="text-blue-800 font-medium mb-2">
                    Multicloud Security Benefits:
                  </p>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Unified security across all cloud platforms</li>
                    <li>• Centralized monitoring and management</li>
                    <li>• Consistent policy enforcement</li>
                    <li>• Comprehensive data protection</li>
                  </ul>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
                  Read more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Security Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl text-gray-900 mb-4">
                Our Security Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions tailored to your
                organization&apos;s needs
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">
                  Security Assessment
                </h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive security audits and vulnerability assessments to
                  identify and address security gaps in your infrastructure.
                </p>
                <a
                  href="/resources"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More →
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">
                  Zero Trust Implementation
                </h3>
                <p className="text-gray-600 mb-6">
                  Design and implement zero-trust security architectures to
                  protect your organization from modern cyber threats.
                </p>
                <a
                  href="/resources"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More →
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">24/7 Monitoring</h3>
                <p className="text-gray-600 mb-6">
                  Continuous security monitoring and threat detection with rapid
                  response capabilities to protect your business.
                </p>
                <a
                  href="/resources"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More →
                </a>
              </motion.div>
            </div>

            {/* SBA Certified Badge */}
            <div className="mt-16 flex justify-center">
              <div className="flex items-center p-6 bg-white rounded-lg border border-blue-200 shadow-sm">
                <Image
                  src="/assets/sba.jpg"
                  alt="SBA Certified Partner"
                  width={64}
                  height={64}
                  className="w-16 h-16 mr-6"
                />
                <div>
                  <p className="text-xl font-semibold text-gray-900">
                    SBA Certified Partner
                  </p>
                  <p className="text-base text-gray-600">
                    Small Business Administration
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Trusted government contractor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-3xl text-gray-900 mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let&apos;s discuss how our cybersecurity expertise can protect and
              transform your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded transition-colors">
                Schedule Security Assessment
              </button>
              <button className="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded transition-all">
                Contact Our Team
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
