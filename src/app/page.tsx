"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
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
    <div className="min-h-screen bg-white">
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
              <a href="/" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/assets/logo.png?v=2"
                  alt="Concepta Innovation Systems"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </a>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              {[
                { name: "Home", isActive: true, href: "/" },
                { name: "Solutions", isActive: false, href: "/solutions" },
                { name: "Services", isActive: false, href: "/services" },
                { name: "Resources", isActive: false, href: "/resources" },
                { name: "About", isActive: false, href: "/about" },
                { name: "Contact", isActive: false, href: "/contact" },
              ].map((item) => (
                <div key={item.name} className="relative">
                  <a
                    href={item.href}
                    className={`text-sm transition-colors py-2 ${
                      item.isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </a>
                  {item.isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
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

              {/* Globe Icon */}
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

              {/* User Icon */}
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
        <div className="max-w-7xl mx-auto px-6 py-3">
          <p className="text-sm text-center text-gray-700">
            🚀 New: Advanced AI-powered cybersecurity solutions now available
            for enterprise clients.
          </p>
        </div>
      </div>

      {/* Mobile Sidebar Overlay - Removed */}

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 top-24 h-[calc(100vh-6rem)] w-80 bg-white/95 backdrop-blur-md shadow-xl z-50 lg:hidden"
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}

          {/* Navigation Links */}
          <div className="flex-1 py-6">
            <nav className="space-y-2 px-6">
              {[
                { name: "Home", isActive: true, href: "/" },
                { name: "Solutions", isActive: false, href: "/solutions" },
                { name: "Services", isActive: false, href: "/services" },
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
        className={`transition-all duration-300 ${
          isMobileMenuOpen ? "brightness-75" : ""
        }`}
        onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}
      >
        {/* Hero Section */}
        <section
          className="pt-32 pb-20 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: "url(/hero.png)",
          }}
        >
          {/* Subtle Tech Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="mesh"
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
              <rect width="100%" height="100%" fill="url(#mesh)" />
            </svg>
          </div>

          {/* Floating Particle Effects */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div
              className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-2/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute bottom-1/3 right-2/3 w-2 h-2 bg-white rounded-full animate-pulse"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="text-5xl md:text-5xl text-white leading-tight">
                  <div>Drive your business transformation with AI agents.</div>
                </h1>

                <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                  Enterprise Innovation Services's an information technology and
                  cybersecurity firm. Providing a comprehensive approach to IT
                  and Cybersecurity Solutions through Innovation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-medium transition-colors">
                    Explore Solutions
                  </button>
                  <button className="text-white border border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded font-medium transition-all duration-300">
                    Schedule Demo
                  </button>
                </div>
              </motion.div>

              {/* Right Column - Dashboard Graphic */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-blue-800/30 rounded-lg p-8 backdrop-blur-sm border border-blue-600/30">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-2 bg-blue-400 rounded-full w-24"></div>
                    <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Dashboard Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="h-16 bg-blue-700/40 rounded border border-blue-500/30"
                      ></div>
                    ))}
                  </div>

                  {/* Dashboard Main Area */}
                  <div className="h-32 bg-blue-700/40 rounded border border-blue-500/30 flex items-center justify-center">
                    <span className="text-white font-medium">
                      At Sitolutics
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-gray-900 mb-3">Our Core Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive cybersecurity and technology solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Security Strategy */}
              <motion.a
                href="/services/security-strategy"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group block p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-300 hover:shadow-sm cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                      Security Strategy & Architecture
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.a>

              {/* IT Support Services */}
              <motion.a
                href="/services/it-support"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group block p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-300 hover:shadow-sm cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                      IT Support Services
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.a>

              {/* Cloud Modernization */}
              <motion.a
                href="/services/cloud-modernization"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group block p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-300 hover:shadow-sm cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                      Cloud Modernization Services
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section
          className="py-20 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
          }}
        >
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="stats-pattern"
                  x="0"
                  y="0"
                  width="120"
                  height="120"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="1.5"
                    fill="#0B4BBB"
                    opacity="0.4"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="0.8"
                    fill="#0B4BBB"
                    opacity="0.3"
                  />
                  <circle
                    cx="90"
                    cy="30"
                    r="0.8"
                    fill="#0B4BBB"
                    opacity="0.3"
                  />
                  <circle
                    cx="30"
                    cy="90"
                    r="0.8"
                    fill="#0B4BBB"
                    opacity="0.3"
                  />
                  <circle
                    cx="90"
                    cy="90"
                    r="0.8"
                    fill="#0B4BBB"
                    opacity="0.3"
                  />
                  <line
                    x1="60"
                    y1="0"
                    x2="60"
                    y2="120"
                    stroke="#0B4BBB"
                    strokeWidth="0.3"
                    opacity="0.2"
                  />
                  <line
                    x1="0"
                    y1="60"
                    x2="120"
                    y2="60"
                    stroke="#0B4BBB"
                    strokeWidth="0.3"
                    opacity="0.2"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#stats-pattern)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-gray-900 mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-600">
                Delivering exceptional results across diverse industries and
                enterprise environments
              </p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-normal text-blue-600 mb-2">
                  50+
                </div>
                <div className="text-gray-600 font-medium">Clients Served</div>
                <div className="text-sm text-gray-500">
                  Government & Enterprise
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-normal text-blue-600 mb-2">
                  99.9%
                </div>
                <div className="text-gray-600 font-medium">
                  Uptime Guarantee
                </div>
                <div className="text-sm text-gray-500">
                  Mission-Critical Systems
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-normal text-blue-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">
                  Security Monitoring
                </div>
                <div className="text-sm text-gray-500">
                  Threat Detection & Response
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-normal text-blue-600 mb-2">
                  15+
                </div>
                <div className="text-gray-600 font-medium">
                  Years Experience
                </div>
                <div className="text-sm text-gray-500">
                  Cybersecurity Excellence
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl text-gray-900 mb-6">
                  Why Choose Concepta Innovation Systems?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  As a Microsoft Azure AI Partner, we combine deep technical
                  expertise with proven industry experience to deliver
                  transformative cybersecurity and technology solutions. We help
                  government contractors, Fortune 500 companies, and growing
                  enterprises achieve secure digital transformation through
                  innovative technology solutions.
                </p>

                {/* Certifications & Badges */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium text-gray-700">
                      Microsoft Azure AI Partner
                    </span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium text-gray-700">
                      ISO 27001 Certified
                    </span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium text-gray-700">
                      SOC 2 Type II Compliant
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 relative overflow-hidden"
                      style={{
                        background:
                          "radial-gradient(circle at top left, #0B4BBB, #082E84 70%)",
                      }}
                    >
                      <svg
                        className="w-3 h-3 text-white relative z-10"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900 mb-1">
                        Government-Grade Security
                      </h3>
                      <p className="text-gray-600">
                        FedRAMP, FISMA, and SOC 2 compliant solutions for the
                        most demanding security requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 relative overflow-hidden"
                      style={{
                        background:
                          "radial-gradient(circle at top left, #0B4BBB, #082E84 70%)",
                      }}
                    >
                      <svg
                        className="w-3 h-3 text-white relative z-10"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900 mb-1">
                        Microsoft Certified Experts
                      </h3>
                      <p className="text-gray-600">
                        Our team holds advanced Azure certifications and
                        maintains direct relationships with Microsoft
                        engineering teams.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 relative overflow-hidden"
                      style={{
                        background:
                          "radial-gradient(circle at top left, #0B4BBB, #082E84 70%)",
                      }}
                    >
                      <svg
                        className="w-3 h-3 text-white relative z-10"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900 mb-1">
                        Rapid Deployment
                      </h3>
                      <p className="text-gray-600">
                        Accelerated implementation timelines with minimal
                        business disruption using proven methodologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div
                  className="rounded-lg p-8 text-white relative overflow-hidden"
                  style={{
                    background:
                      "radial-gradient(circle at top left, #0B4BBB, #082E84 70%)",
                  }}
                >
                  {/* Subtle overlay pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <svg
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern
                          id="card-mesh"
                          x="0"
                          y="0"
                          width="50"
                          height="50"
                          patternUnits="userSpaceOnUse"
                        >
                          <circle
                            cx="25"
                            cy="25"
                            r="0.5"
                            fill="white"
                            opacity="0.4"
                          />
                          <line
                            x1="25"
                            y1="0"
                            x2="25"
                            y2="50"
                            stroke="white"
                            strokeWidth="0.1"
                            opacity="0.2"
                          />
                          <line
                            x1="0"
                            y1="25"
                            x2="50"
                            y2="25"
                            stroke="white"
                            strokeWidth="0.1"
                            opacity="0.2"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#card-mesh)" />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-medium mb-6">
                      Ready to Get Started?
                    </h3>
                    <p className="mb-6 opacity-90">
                      Schedule a consultation with our cybersecurity experts to
                      discuss your specific requirements and develop a
                      customized solution strategy.
                    </p>
                    <div className="space-y-4">
                      <button className="w-full bg-white text-blue-900 px-6 py-3 rounded font-medium hover:bg-blue-50 transition-colors">
                        Schedule Free Consultation
                      </button>
                      <button className="w-full border border-white text-white px-6 py-3 rounded font-medium hover:bg-white hover:text-blue-900 transition-all">
                        Download Security Assessment Guide
                      </button>
                    </div>
                    <div className="mt-6 pt-6 border-t border-blue-600 text-center">
                      <p className="text-sm opacity-75">Or call us directly:</p>
                      <p className="text-xl font-medium">(123) 455-7880</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources & Insights Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-medium text-gray-900 mb-4">
                Resources & Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead with the latest cybersecurity insights, industry best
                practices, and technology partnerships
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Column - Articles & Resources */}
              <div className="space-y-12">
                {/* Featured Article */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="text-sm text-blue-600 font-medium mb-3 flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    LATEST INSIGHTS
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">
                    Unleashing the Power of Generative AI in Enterprise Security
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Discover how organizations are leveraging Azure OpenAI and
                    advanced AI technologies to enhance threat detection,
                    automate incident response, and strengthen their
                    cybersecurity posture.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Published: August 10, 2025</span>
                    <span className="mx-2">•</span>
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>5 min read</span>
                  </div>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
                  >
                    Read Full Article
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

                {/* Case Study */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="text-sm text-blue-600 font-medium mb-3 flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    CASE STUDY
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">
                    Revolutionizing Modern Cybersecurity for Fortune 500
                    Manufacturing
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Learn how we helped a leading manufacturing company
                    implement zero-trust architecture, reducing security
                    incidents by 85% while improving operational efficiency
                    across 50+ global locations.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 mb-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">
                          85%
                        </div>
                        <div className="text-sm text-gray-600">
                          Incident Reduction
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">
                          60%
                        </div>
                        <div className="text-sm text-gray-600">
                          Cost Savings
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">
                          30 Days
                        </div>
                        <div className="text-sm text-gray-600">
                          Implementation
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
                  >
                    View Case Study
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

                {/* Resources Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-100"
                >
                  <div className="text-sm text-blue-600 font-medium mb-3 flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    RESOURCES
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-6">
                    Additional Resources
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Microsoft Azure Security Best Practices Guide",
                      "AI-Powered Threat Detection Whitepaper",
                      "Compliance Framework Comparison Chart",
                      "Digital Marketing Content (microsoft.com)",
                    ].map((resource, index) => (
                      <a
                        key={index}
                        href="#"
                        className="flex items-center text-blue-600 hover:text-blue-700 font-medium group py-2 px-3 rounded hover:bg-blue-50 transition-all"
                      >
                        <svg
                          className="w-4 h-4 mr-3 group-hover:translate-x-1 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {resource}
                      </a>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
                    >
                      View All Resources
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
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Technology Partners */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 h-full">
                  <h2 className="text-2xl font-medium text-gray-900 mb-6">
                    Our Technology Partners
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Concepta partners with leading technology companies and
                    cloud service providers to deliver continuous innovation and
                    compliant services to our customers. This provides access to
                    specialized training and collaboration with them on their
                    technologies.
                  </p>

                  {/* Partner Logos Grid */}
                  <div className="grid grid-cols-3 gap-6 items-center text-center mb-8">
                    {[
                      { src: "/assets/partners/Acer-Logo.png", alt: "Acer" },
                      { src: "/assets/partners/Cisco-Logo.png", alt: "Cisco" },
                      {
                        src: "/assets/partners/dell.png",
                        alt: "Dell Technologies",
                      },
                      { src: "/assets/partners/DH-80px_2019.png", alt: "DH" },
                      { src: "/assets/partners/HP-Logo.png", alt: "HP" },
                      {
                        src: "/assets/partners/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png",
                        alt: "IBM",
                      },
                      {
                        src: "/assets/partners/purepng.com-ingram-micro-logologobrand-logoiconslogos-25151993953320b2j.png",
                        alt: "Ingram Micro",
                      },
                      {
                        src: "/assets/partners/Microsoft-Logo.png",
                        alt: "Microsoft",
                      },
                      {
                        src: "/assets/partners/logo-arrow-five-years-out.svg",
                        alt: "Arrow",
                      },
                    ].map((partner, index) => (
                      <div
                        key={index}
                        className="h-16 flex items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Image
                          src={partner.src}
                          alt={partner.alt}
                          width={80}
                          height={40}
                          className="max-h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Partnership Benefits */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Partnership Benefits
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                      {[
                        "Direct access to latest technology innovations",
                        "Specialized training and certifications",
                        "Priority support and escalation paths",
                        "Collaborative solution development",
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mr-3"
                            style={{
                              background:
                                "radial-gradient(circle at top left, #0B4BBB, #082E84 70%)",
                            }}
                          >
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer - Blue Design */}
        <footer
          className="text-white py-12 relative overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at top left, #0B4BBB, #082E84 70%)",
          }}
        >
          {/* Subtle Tech Pattern Overlay */}
          <div className="absolute inset-0 opacity-3">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="footer-mesh"
                  x="0"
                  y="0"
                  width="80"
                  height="80"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="40" cy="40" r="0.8" fill="white" opacity="0.3" />
                  <circle cx="20" cy="20" r="0.4" fill="white" opacity="0.2" />
                  <circle cx="60" cy="20" r="0.4" fill="white" opacity="0.2" />
                  <circle cx="20" cy="60" r="0.4" fill="white" opacity="0.2" />
                  <circle cx="60" cy="60" r="0.4" fill="white" opacity="0.2" />
                  <line
                    x1="40"
                    y1="0"
                    x2="40"
                    y2="80"
                    stroke="white"
                    strokeWidth="0.15"
                    opacity="0.1"
                  />
                  <line
                    x1="0"
                    y1="40"
                    x2="80"
                    y2="40"
                    stroke="white"
                    strokeWidth="0.15"
                    opacity="0.1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#footer-mesh)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid lg:grid-cols-4 gap-8 mb-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                    <Image
                      src="/assets/logo.png?v=2"
                      alt="Concepta Innovation Systems"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-lg font-medium">Concepta</div>
                    <div className="text-blue-200 text-xs">
                      Innovation Systems
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-sm font-medium mb-3 text-blue-200">
                  Services
                </h4>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Cybersecurity
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      AI Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Cloud Migration
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-sm font-medium mb-3 text-blue-200">
                  Contact
                </h4>
                <div className="space-y-2 text-sm text-blue-100">
                  <div>
                    <a
                      href="tel:123-455-7880"
                      className="hover:text-white transition-colors"
                    >
                      (123) 455-7880
                    </a>
                  </div>
                  <div>
                    <a
                      href="mailto:info@conceptainnovation.com"
                      className="hover:text-white transition-colors"
                    >
                      info@conceptainnovation.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-sm font-medium mb-3 text-blue-200">
                  Newsletter
                </h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 px-3 py-2 bg-blue-800/50 border border-blue-600/50 rounded text-white text-sm placeholder-blue-300 focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent"
                  />
                  <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                    Subscribe
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex space-x-3 mt-4">
                  <a
                    href="#"
                    className="text-blue-300 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-blue-300 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Border */}
            <div className="border-t border-blue-600/50 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
                <p>© 2025 Concepta Innovation Systems. All rights reserved.</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Bottom Footer Section */}
        <section
          className="py-8 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
          }}
        >
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="bottom-pattern"
                  x="0"
                  y="0"
                  width="120"
                  height="120"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="1.5"
                    fill="#0B4BBB"
                    opacity="0.4"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="0.8"
                    fill="#0B4BBB"
                    opacity="0.3"
                  />
                  <circle
                    cx="90"
                    cy="30"
                    r="0.8"
                    fill="#0B4BBB"
                    opacity="0.3"
                  />
                  <circle
                    cx="30"
                    cy="90"
                    r="0.8"
                    fill="#0B4BBB"
                    opacity="0.3"
                  />
                  <circle
                    cx="90"
                    cy="90"
                    r="0.8"
                    fill="#0B4BBB"
                    opacity="0.3"
                  />
                  <line
                    x1="60"
                    y1="0"
                    x2="60"
                    y2="120"
                    stroke="#0B4BBB"
                    strokeWidth="0.3"
                    opacity="0.2"
                  />
                  <line
                    x1="0"
                    y1="60"
                    x2="120"
                    y2="60"
                    stroke="#0B4BBB"
                    strokeWidth="0.3"
                    opacity="0.2"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#bottom-pattern)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 lg:mb-0">
                <p className="text-gray-700 text-sm">
                  © 2025 Concepta Innovation Systems, LLC. All rights reserved.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Security
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Accessibility
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 text-sm">Follow Us:</span>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
