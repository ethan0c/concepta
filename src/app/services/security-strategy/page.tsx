"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Shield, Lock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SecurityStrategy() {
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
        <div className="max-w-7xl mx-auto px-6">
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
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/assets/logo.png?v=2"
                  alt="Concepta Innovation Systems"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
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
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 919-9"
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

              <button className="lg:hidden bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors">
                Quote
              </button>

              <button className="hidden lg:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm transition-colors">
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
        <div className="max-w-7xl mx-auto px-6 py-4">
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
        className="fixed left-0 top-32 h-[calc(100vh-8rem)] w-80 bg-white/95 backdrop-blur-md shadow-xl z-50 lg:hidden"
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
              <span className="ml-3 text-lg text-gray-900">Concepta</span>
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

            <div className="border-t border-gray-200/60 mx-6 my-6"></div>

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
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition-colors">
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
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl text-gray-900 leading-tight mb-6"
              >
                Security Strategy & Architecture
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12"
              >
                Comprehensive cybersecurity strategy and architecture solutions
                to protect your business
              </motion.p>
            </div>
          </div>
        </section>

        {/* Security Resources Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
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
                  questions—and more. You'll learn about the scope and scale of
                  today's threats, how Microsoft is helping to dismantle
                  cybercrime, and what we can do, as a Microsoft partner to help
                  address your business' vulnerabilities.
                </p>
                <a
                  href="#"
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
                  href="#"
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
                  many of those security solutions didn't work together. The
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
                  href="#"
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

        {/* Additional Security Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl text-gray-900 mb-4">
                Our Security Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions tailored to your
                organization's needs
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
                  href="#"
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
                  href="#"
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
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More →
                </a>
              </motion.div>
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
              Let's discuss how our cybersecurity expertise can protect and
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
    </motion.div>
  );
}
