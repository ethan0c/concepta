"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { NotificationBar, Footer, BottomFooter } from "@/components/layout";
import { HeroSection, CoreServicesSection, StatisticsSection, WhyChooseUsSection, ResourcesInsightsSection } from "@/components/sections";

export default function Home() {
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
    <div className="min-h-screen bg-white">
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
              <Link
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
              </Link>
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
                    className={`cisco-body-large transition-colors py-2 ${
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

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
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

      <NotificationBar />

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 top-20 h-[calc(100vh-80px)] w-72 bg-white/95 backdrop-blur-md shadow-xl z-50 lg:hidden"
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-3 border-b border-gray-200/60">
            <div className="flex items-center">
              <Image
                src="/assets/logo.png?v=2"
                alt="Concepta Innovation Systems"
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
                  className={`block w-full text-left py-3 px-4 rounded-lg cisco-body-large transition-all duration-200 ${
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
            <div className="border-t border-gray-200/60 mx-3 my-3"></div>

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
          <div className="p-3 border-t border-gray-200/60">
            <div className="cisco-body-large text-gray-500 mb-2">
              <p>(123) 455-7880</p>
              <p>info@conceptainnovation.com</p>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded cisco-body-large font-cisco-medium transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <main
        className={`pt-20 transition-all duration-200 ${
          isMobileMenuOpen ? "brightness-75" : ""
        }`}
        onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}
      >
        <HeroSection />

        <CoreServicesSection />

        <StatisticsSection />

        <WhyChooseUsSection />

        <ResourcesInsightsSection />

        <Footer />

        <BottomFooter />
      </main>
    </div>
  );
}
