"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = "Home" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "Services", href: "/services" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Header */}
      <header className="fixed w-full z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Mobile Menu Button - Left Side */}
            <button
              className="lg:hidden text-gray-700 hover:text-gray-900 p-2 -ml-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo */}
            <div className="flex items-center flex-1 lg:flex-none justify-center lg:justify-start">
              <Link
                href="/"
                className="hover:opacity-80 transition-opacity flex items-center"
              >
                <Image
                  src="/assets/logo.png?v=2"
                  alt="Concepta Innovation Services"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
                <span className="ml-2 sm:ml-3 text-sm sm:text-base font-semibold text-gray-900 hidden xs:block">
                  Concepta Innovation
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className={`text-sm xl:text-base transition-colors py-2 ${
                      item.name === currentPage
                        ? "text-blue-600 font-medium"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.name === currentPage && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center">
              {/* Get Quote Button */}
              <Link 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded text-sm font-medium transition-colors"
              >
                <span className="hidden sm:inline">Get a Quote</span>
                <span className="sm:hidden">Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Info Bar - Desktop only */}
      <div className="fixed top-14 sm:top-16 w-full z-40 bg-[#0B4BBB] hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-center items-center space-x-6">
          <a href="tel:+18775941944" className="text-xs sm:text-sm text-white hover:text-blue-200 transition-colors flex items-center">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            (877)-594-1944
          </a>
          <span className="text-blue-300 hidden sm:inline">|</span>
          <a href="mailto:support@conceptainnovation.com" className="text-xs sm:text-sm text-white hover:text-blue-200 transition-colors flex items-center">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            <span className="hidden md:inline">support@conceptainnovation.com</span>
            <span className="md:hidden">Email Us</span>
          </a>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 top-0 h-full w-[280px] sm:w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
      >
        <div className="flex flex-col min-h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center">
              <Image
                src="/assets/logo.png?v=2"
                alt="Concepta Innovation"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="ml-3 text-sm font-semibold text-gray-900">
                Concepta Innovation
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-500 hover:text-gray-700 p-2 -mr-2"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Contact Info - Mobile */}
          <div className="bg-[#0B4BBB] px-4 py-3">
            <a href="tel:+18775941944" className="flex items-center text-white text-sm mb-2">
              <Phone className="w-4 h-4 mr-2" />
              (877)-594-1944
            </a>
            <a href="mailto:support@conceptainnovation.com" className="flex items-center text-white text-sm">
              <Mail className="w-4 h-4 mr-2" />
              support@conceptainnovation.com
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 py-4">
            <nav className="space-y-1 px-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left py-3 px-4 rounded-lg text-base transition-all duration-200 ${
                    item.name === currentPage
                      ? "text-blue-600 bg-blue-50 font-medium"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="border-t border-gray-200 mx-4 my-4"></div>

            {/* Service Links */}
            <div className="px-3">
              <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Services</p>
              <Link 
                href="/services/security-strategy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left py-2.5 px-4 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg text-sm transition-all duration-200"
              >
                Security Strategy
              </Link>
              <Link 
                href="/services/it-support"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left py-2.5 px-4 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg text-sm transition-all duration-200"
              >
                IT Support
              </Link>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <Link 
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-center font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
