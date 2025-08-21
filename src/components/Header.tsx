"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = "Home" }: HeaderProps) {
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
        <div className="header-content">
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
              <a
                href="/"
                className="hover:opacity-80 transition-opacity flex items-center"
              >
                <Image
                  src="/assets/logo.png?v=2"
                  alt="Concepta Innovation Services"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="ml-3 cisco-h5 font-cisco-medium text-gray-900">
                  Concepta Innovation Services
                </span>
              </a>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  <a
                    href={item.href}
                    className={`cisco-body-large transition-colors py-2 ${
                      item.name === currentPage
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </a>
                  {item.name === currentPage && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-3">
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
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 919-9"
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
              <button className="lg:hidden bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded cisco-body-midsize font-cisco-medium transition-colors">
                Quote
              </button>

              {/* Get Quote Button - Desktop */}
              <button className="hidden lg:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded font-cisco-medium cisco-body-large transition-colors">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Notification Bar */}
      <div
        className="fixed top-16 w-full z-40"
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
        }}
      >
        <div className="header-content py-2">
          <p className="cisco-body-large text-center text-gray-700">
            🚀 New: Advanced AI-powered cybersecurity solutions now available for enterprise clients.
          </p>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 top-[88px] h-[calc(100vh-88px)] w-72 bg-white/95 backdrop-blur-md shadow-xl z-50 lg:hidden"
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-3 border-b border-gray-200/60">
            <div className="flex items-center">
              <Image
                src="/assets/logo.png?v=2"
                alt="Concepta Innovation Services"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="ml-3 cisco-h6 text-gray-900">
                Concepta Innovation Services
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
          <div className="flex-1 py-3">
            <nav className="space-y-1 px-3">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left py-3 px-4 rounded-lg cisco-body-large transition-all duration-200 ${
                    item.name === currentPage
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
            <div className="space-y-1 px-3">
              <button className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-white/40 rounded-lg cisco-body-large transition-all duration-200">
                Sign In
              </button>
              <button className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-white/40 rounded-lg cisco-body-large transition-all duration-200">
                Support
              </button>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-200/60">
            <div className="cisco-body-large text-gray-500 mb-4">
              <p>(123) 455-7880</p>
              <p>info@conceptainnovation.com</p>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded cisco-body-large font-cisco-medium transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </motion.div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}