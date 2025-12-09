"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Headphones,
  Server,
  Cloud,
  Shield,
  Users,
  Zap,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Search data for site pages
const searchablePages = [
  { title: "Home", href: "/", description: "Welcome to Concepta Innovation Systems" },
  { title: "Solutions", href: "/solutions", description: "Our technology solutions and offerings" },
  { title: "Services", href: "/services", description: "Professional IT and cybersecurity services" },
  { title: "IT Support", href: "/services/it-support", description: "Managed IT support and helpdesk services" },
  { title: "Security Strategy", href: "/services/security-strategy", description: "Cybersecurity strategy and consulting" },
  { title: "Resources", href: "/resources", description: "Whitepapers, case studies, and insights" },
  { title: "About", href: "/about", description: "About Concepta Innovation Systems" },
  { title: "Contact", href: "/contact", description: "Get in touch with our team" },
];

export default function ITSupport() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(searchablePages);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults(searchablePages);
    } else {
      const filtered = searchablePages.filter(
        (page) =>
          page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          page.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    }
  }, [searchQuery]);

  const handleSearchSelect = (href: string) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    router.push(href);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen bg-white transition-all duration-300 ${
        isMobileMenuOpen ? "brightness-75" : ""
      }`}
    >
      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
              onClick={() => setIsSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-xl bg-white rounded-xl shadow-2xl z-[70] overflow-hidden"
            >
              <div className="flex items-center px-4 border-b border-gray-200">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search pages, services, solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-4 text-gray-900 placeholder-gray-400 focus:outline-none"
                />
                <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-xs text-gray-400 bg-gray-100 rounded">ESC</kbd>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {searchResults.length > 0 ? (
                  <ul className="py-2">
                    {searchResults.map((result, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleSearchSelect(result.href)}
                          className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-start space-x-3"
                        >
                          <Search className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-gray-900 font-medium">{result.title}</p>
                            <p className="text-sm text-gray-500">{result.description}</p>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-8 text-center text-gray-500">No results found</div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
              {/* Search Button */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="hidden lg:flex items-center text-gray-700 hover:text-gray-900 px-3 py-1.5 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors space-x-2"
              >
                <Search className="w-4 h-4" />
                <span className="text-sm text-gray-500">Search...</span>
                <kbd className="hidden xl:inline-flex items-center px-1.5 py-0.5 text-xs text-gray-400 bg-gray-100 rounded">⌘K</kbd>
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

      {/* Contact Info Bar */}
      <div className="fixed top-16 w-full z-40 bg-[#0B4BBB]">
        <div className="w-full px-6 py-2 flex justify-center items-center space-x-6">
          <a href="tel:+14048753741" className="text-sm text-white hover:text-blue-200 transition-colors flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (404) 875-3741
          </a>
          <span className="text-blue-300">|</span>
          <a href="mailto:info@conceptais.com" className="text-sm text-white hover:text-blue-200 transition-colors flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@conceptais.com
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
              <button 
                onClick={() => { setIsMobileMenuOpen(false); setIsSearchOpen(true); }}
                className="flex items-center w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-white/40 rounded-lg transition-all duration-200"
              >
                <Search className="w-4 h-4 mr-3" />
                Search
              </button>
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
              <p>(404) 875-3741</p>
              <p>info@conceptais.com</p>
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
