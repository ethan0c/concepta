"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Headphones,
  Server,
  Cloud,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ITSupport() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen bg-white transition-all duration-300 ${
        isMobileMenuOpen ? "brightness-75" : ""
      }`}
    >
      {/* Header */}
      <header className="fixed w-full z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="w-full px-6">
          <div className="flex justify-between items-center h-16">
            {/* Mobile Menu Button - Left Side */}
            <button
              className="lg:hidden text-gray-700 hover:text-gray-900 p-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo - Left side on all screen sizes */}
            <div className="flex items-center">
              <Link
                href="/"
                className="hover:opacity-80 transition-opacity flex items-center"
              >
                <Image
                  src="/assets/logo.png?v=2"
                  alt="Concepta Innovation Systems"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="ml-3 text-2xl font-semibold text-gray-900">
                  Concepta Innovation
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              {[
                { name: "Home", isActive: false, href: "/" },
                { name: "Solutions", isActive: false, href: "/solutions" },
                { name: "Services", isActive: true, href: "/services" },
                { name: "Resources", isActive: false, href: "/resources" },
                { name: "About", isActive: false, href: "/about" },
                { name: "Contact", isActive: false, href: "/contact" },
              ].map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className={`text-sm transition-colors py-2 ${
                      item.isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button className="hidden lg:block text-gray-700 hover:text-gray-900 p-2 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <button className="hidden lg:block text-gray-700 hover:text-gray-900 p-2 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </button>

              <button className="hidden lg:block text-gray-700 hover:text-gray-900 p-2 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>

              {/* Get Quote Button - Mobile */}
              <button className="lg:hidden bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                Quote
              </button>

              {/* Get Quote Button - Desktop */}
              <button className="hidden lg:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium text-sm transition-colors">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Notification Bar */}
      <div
        className="fixed top-16 w-full text-white z-40"
        style={{
          background:
            "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
        }}
      >
        <div className="w-full px-6 py-3">
          <p className="text-sm text-center text-gray-700">
            🚀 New: Advanced AI-powered cybersecurity solutions now available
            for enterprise clients.
          </p>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 top-24 h-[calc(100vh-6rem)] w-80 bg-white/95 backdrop-blur-md shadow-xl z-50 lg:hidden"
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200/60">
            <div className="flex items-center">
              <Image
                src="/assets/logo.png?v=2"
                alt="Concepta Innovation Systems"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="ml-3 text-lg text-gray-900">
                Concepta Innovation
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-500 hover:text-gray-700 p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 py-6">
            <nav className="space-y-2 px-6">
              {[
                { name: "Home", isActive: false, href: "/" },
                { name: "Solutions", isActive: false, href: "/solutions" },
                { name: "Services", isActive: true, href: "/services" },
                { name: "Resources", isActive: false, href: "/resources" },
                { name: "About", isActive: false, href: "/about" },
                { name: "Contact", isActive: false, href: "/contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-200 ${
                    item.isActive
                      ? "text-blue-600 bg-white/80 shadow-sm backdrop-blur-sm"
                      : "text-gray-700 hover:text-blue-600 hover:bg-white/40"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Divider */}
            <div className="border-t border-gray-200/60 mx-6 my-6"></div>

            {/* Additional Links */}
            <div className="space-y-2 px-6">
              <button className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-white/40 rounded-lg transition-all duration-200">
                Sign In
              </button>
              <button className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-white/40 rounded-lg transition-all duration-200">
                Support
              </button>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-200/60">
            <div className="text-sm text-gray-500 mb-4">
              <p>(123) 455-7880</p>
              <p>info@conceptainnovation.com</p>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-medium transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <main
        className="transition-all duration-300"
        onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}
      >
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="w-full px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl text-gray-900 leading-tight mb-6"
              >
                IT Support Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12"
              >
                Comprehensive IT support and AI solutions to drive your business
                forward with intelligent automation and secure infrastructure.
              </motion.p>
            </div>
          </div>
        </section>

        {/* G&J Pepsi Case Study */}
        <section className="py-20 bg-white">
          <div className="w-full px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-gray-900 mb-6">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world examples of how we help organizations overcome
                cybersecurity challenges
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
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
                      When G&J Pepsi faced a devastating ransomware attack that
                      threatened to cripple their operations, our team worked
                      around the clock to restore their systems and implement
                      comprehensive security measures.
                    </p>
                    <p className="mb-4 text-lg">
                      Through our incident response expertise and zero-trust
                      security implementation, we not only recovered their
                      systems but also strengthened their overall cybersecurity
                      posture, preventing future attacks.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <p className="text-base text-blue-800 font-medium mb-2">
                      Key Outcomes:
                    </p>
                    <ul className="text-base text-blue-700 space-y-1">
                      <li>• 100% data recovery within 48 hours</li>
                      <li>• Zero-trust security framework implementation</li>
                      <li>• 99.9% uptime guarantee maintained</li>
                      <li>• Comprehensive security training for staff</li>
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
                    G&J Pepsi-Cola Bottlers avoided both loss of data and ransom
                    payment when a ransomware attack threatened the company in
                    2021. It credits Microsoft Azure and Microsoft Security for
                    saving the day.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium transition-colors">
                    Read Full Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Artificial Intelligence Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="w-full px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-gray-900 mb-6">
                Artificial Intelligence Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage the power of AI to transform your business operations
                and enhance productivity
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Copilot Insights */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Insights from Copilot Early Users
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Copilot sets a new baseline – one where every employee gains
                  the skills to write, design, code, analyze data, and more. If
                  you want to see how Copilot is driving measurable business
                  value for organizations that have fully adopted the
                  technology, check out the latest research.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  As a Microsoft Partner, we can help you realize these
                  productivity gains by readying your processes and people for
                  the AI-powered future of work.
                </p>

                <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
                  Read More
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
                </button>
              </div>

              {/* Copilot for M365 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Copilot for M365 | Day in the Life of an Executive
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  As a busy executive, it's hard to get ahead at work. But
                  imagine what you could accomplish with an AI-powered assistant
                  at your disposal. You may have a tight schedule, but Copilot
                  for Microsoft 365 can help you achieve more between meetings.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Watch the video to see how executives use Copilot to stay
                  focused throughout their workday. As a Microsoft Partner, we
                  can help you achieve these results and more.
                </p>

                <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
                  Watch Video
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
                </button>
              </div>
            </div>

            {/* AI Agents & Workflow Automation */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-semibold mb-4">
                  AI Agents & Workflow Automation
                </h3>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  Empowering Intelligent Operations with Concepta Innovation
                  Services
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Intelligent Automation
                  </h4>
                  <p className="text-blue-100">
                    Streamline operations with AI-powered workflows
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Enhanced Security
                  </h4>
                  <p className="text-blue-100">
                    AI-driven threat detection and response
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Productivity Boost
                  </h4>
                  <p className="text-blue-100">
                    Empower teams with intelligent assistance
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg mb-6">
                  In today's fast-evolving digital landscape, AI agents are
                  transforming how businesses operate—automating tasks,
                  enhancing decision-making, and improving productivity.
                </p>
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded font-medium transition-colors">
                  Ready to Transform with AI Agents?
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Transition Applications to Cloud */}
        <section className="py-20 bg-white">
          <div className="w-full px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-gray-900 mb-6">
                Transition Applications to Cloud
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modernize your infrastructure with cloud migration and Microsoft
                Security solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Bank Case Study */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Bank Boosts Growth with Cloud Adoption
                  </h3>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  When a bank aspires to faster growth, security can be a highly
                  effective accelerator. Georgia Banking Company exemplifies the
                  success that's possible with a tightly connected security tool
                  set.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  It completed its cloud transformation within 13 months and
                  gained scalable security and efficiency by replacing a
                  collection of disconnected products with Microsoft Security
                  solutions.
                </p>

                <div className="bg-white rounded-lg p-4 border border-green-200">
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
              </div>

              {/* Multicloud Security */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Data Protection Across Multicloud Estate
                  </h3>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  How many clouds does your business use? Is your data protected
                  across them all? Find out how the right technology solutions
                  can help you extend security across the clouds and cloud
                  services your business relies on.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  As a Microsoft partner, we can help your security operations
                  team achieve similar results, with deeply integrated security
                  solutions that span your entire digital estate.
                </p>

                <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
                  Learn More
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
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SBA Certified Badge */}
        <section className="py-20 bg-gray-50">
          <div className="w-full px-8">
            <div className="flex justify-center">
              <div className="flex items-center p-8 bg-white rounded-2xl border border-blue-200 shadow-lg">
                <Image
                  src="/assets/sba.jpg"
                  alt="SBA Certified Partner"
                  width={80}
                  height={80}
                  className="w-20 h-20 mr-8"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    SBA Certified Partner
                  </h3>
                  <p className="text-lg text-gray-600 mb-2">
                    Small Business Administration
                  </p>
                  <p className="text-base text-gray-500">
                    Trusted government contractor with proven track record
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-white">
          <div className="w-full px-8 text-center">
            <h2 className="text-3xl text-gray-900 mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our AI solutions and cloud expertise can help
              secure and modernize your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded transition-colors">
                Contact Our Team
              </button>
              <button className="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
