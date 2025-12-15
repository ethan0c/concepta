"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Server,
  Cloud,
  Shield,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ITSupport() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll tracking for future header animations
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

      {/* Contact Info Bar */}
      <div className="fixed top-16 w-full z-40 bg-[#0B4BBB]">
        <div className="w-full px-6 py-2 flex justify-center items-center space-x-6">
          <a href="tel:+18775941944" className="text-sm text-white hover:text-blue-200 transition-colors flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (877)-594-1944
          </a>
          <span className="text-blue-300">|</span>
          <a href="mailto:support@conceptainnovation.com" className="text-sm text-white hover:text-blue-200 transition-colors flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            support@conceptainnovation.com
          </a>
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
              <Link 
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-white/40 rounded-lg transition-all duration-200"
              >
                Support
              </Link>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-200/60">
            <div className="text-sm text-gray-500 mb-4">
              <p>(877)-594-1944</p>
              <p>support@conceptainnovation.com</p>
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
                Concepta IT Support Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12"
              >
                Your Trusted Partner for Comprehensive IT Solutions
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto"
              >
                At Concepta, we empower your business with a full suite of IT support services,
                designed to keep your operations running efficiently, securely, and without interruption.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-20 bg-white">
          <div className="w-full px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-gray-900 mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive IT support offerings designed to keep your business running smoothly
              </p>
            </div>

            {/* Managed Desktop Services */}
            <div className="mb-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900">
                  Managed Desktop Services
                </h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-semibold">Proactive Monitoring:</span> 24/7 coverage to ensure your desktops are always performing at their best.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-semibold">Reactive User Support:</span> Round-the-clock assistance for any technical issues your team encounters.
                  </div>
                </li>
              </ul>
            </div>

            {/* Cybersecurity Services */}
            <div className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900">
                  Cybersecurity Services
                </h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-semibold">Security Assessments:</span> Identify vulnerabilities and strengthen your defenses.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-semibold">24/7 Security Operations Center:</span> Continuous monitoring and rapid threat response.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-semibold">Incident Response & Remediation:</span> Expert support to contain and resolve security incidents.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-semibold">Advanced Endpoint Detection (EDR):</span> Cutting-edge protection for every device.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-semibold">SIEM & Log Management:</span> Azure Sentinel Services for comprehensive security intelligence.
                  </div>
                </li>
              </ul>
            </div>

            {/* Backup and Disaster Recovery */}
            <div className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900">
                  Backup and Disaster Recovery
                </h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-semibold">Cloud Backup:</span> Reliable backup solutions for Azure and Microsoft 365 environments, protecting your critical data from loss.
                  </div>
                </li>
              </ul>
            </div>

            {/* Managed Server Services */}
            <div className="mb-12 bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900">
                  Managed Server Services
                </h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">✓</span>
                  <div>
                    Management and support for <span className="font-semibold">Windows Server 2012 and above</span>, ensuring optimal performance and reliability.
                  </div>
                </li>
              </ul>
            </div>

            {/* Managed Network Services */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mr-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900">
                  Managed Network Services
                </h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-semibold">Proactive Monitoring:</span> 24/7 oversight, utilizing SNMP or cloud-based tools to keep your network healthy and secure.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-semibold">Reactive Network Support:</span> Immediate assistance for any network issues, any time of day.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3 mt-1">✓</span>
                  <div>
                    Comprehensive management for <span className="font-semibold">switches, routers, and access points (APs)</span>.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="w-full px-8 text-center">
            <h2 className="text-4xl mb-6">
              Let Concepta Be the Backbone of Your IT Infrastructure
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Contact us today to learn how our managed services can help your business thrive in a digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded font-medium transition-colors">
                  Contact Our Team
                </button>
              </Link>
              <button className="text-white border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded font-medium transition-all">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
