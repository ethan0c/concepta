"use client";

import { useState, useEffect } from "react";
import { Navigation24Regular, Dismiss24Regular, ChevronRight24Regular } from "@fluentui/react-icons";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  currentPage?: string;
  theme?: "default" | "light" | "transparent";
}

export default function Header({ currentPage, theme = "default" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
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

  const isCurrentPageActive = (itemName: string, itemHref: string): boolean => {
    if (currentPage && currentPage.length > 0) {
      return itemName === currentPage;
    }

    if (itemHref === "/") {
      return pathname === "/";
    }

    return pathname === itemHref || pathname.startsWith(`${itemHref}/`);
  };

  const getHeaderBackgroundColor = (): string => {
    if (theme === "light") {
      return scrolled ? "rgb(var(--color-surface-rgb) / 0.95)" : "var(--color-surface)";
    }

    if (theme === "transparent") {
      return scrolled ? "rgb(var(--color-header-bg-rgb) / 0.95)" : "transparent";
    }

    return scrolled ? "rgb(var(--color-header-bg-rgb) / 0.95)" : "var(--color-header-bg)";
  };

  const headerTextClass = "text-black";
  const headerSubtleTextClass = "text-black";

  return (
    <>
      <header
        className={`fixed w-full z-50 border-b border-[var(--color-border-subtle)] transition-all duration-300 ${
          scrolled ? "backdrop-blur-md shadow-lg" : ""
        }`}
        style={{ backgroundColor: getHeaderBackgroundColor() }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 -ml-2 transition-colors ${headerTextClass} ${
                theme === "light" && !scrolled ? "hover:text-[var(--color-primary-hover)]" : "hover:text-[var(--color-primary-hover)]"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <Dismiss24Regular className="w-5 h-5" /> : <Navigation24Regular className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <div className="flex items-center flex-1 lg:flex-none justify-center lg:justify-start">
              <Link
                href="/"
                className="hover:opacity-80 transition-opacity flex items-center"
              >
                <Image
                  src="/logo.png"
                  alt="Concepta Innovation Services"
                  width={160}
                  height={56}
                  className="h-12 sm:h-14 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-2 text-sm transition-colors ${
                    isCurrentPageActive(item.name, item.href)
                      ? `${headerTextClass} font-medium`
                      : `${headerSubtleTextClass} font-normal ${
                          theme === "light" && !scrolled ? "hover:text-[var(--color-primary-hover)] hover:bg-blue-900/5" : "hover:text-[var(--color-primary-hover)] hover:bg-blue-900/5"
                        }`
                  }`}
                >
                  {item.name}
                  {isCurrentPageActive(item.name, item.href) && (
                    <span
                      className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full ${
                        "bg-[var(--color-primary)]"
                      }`}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <a 
                href="tel:+18775941944"
                className={`hidden xl:flex items-center text-xs transition-colors ${headerSubtleTextClass} ${
                  theme === "light" && !scrolled ? "hover:text-[var(--color-primary-hover)]" : "hover:text-[var(--color-primary-hover)]"
                }`}
              >
                (877) 594-1944
              </a>
              <Link 
                href="/contact"
                className="bg-[#1E3A8A] hover:bg-[#1e40af] text-white px-4 sm:px-5 py-2 text-sm font-medium transition-colors"
              >
                <span className="hidden sm:inline">Get a Quote</span>
                <span className="sm:hidden text-xs">Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 top-0 h-full w-[300px] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
      >
        <div className="flex flex-col min-h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
            
              <span className="text-sm font-semibold text-gray-900">
                Concepta Innovation
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1.5 hover:bg-gray-100"
              aria-label="Close menu"
            >
              <Dismiss24Regular className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 py-2">
            <nav className="px-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between w-full py-3 px-4 text-[15px] transition-all duration-150 ${
                    isCurrentPageActive(item.name, item.href)
                      ? "text-[var(--color-primary)] bg-blue-50 font-medium"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                  <ChevronRight24Regular className="w-4 h-4 text-gray-400" />
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="border-t border-gray-100 mx-4 my-3" />

            {/* Service Links */}
            <div className="px-2">
              <p className="px-4 text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Services</p>
              <Link 
                href="/services/security-strategy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2.5 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-sm transition-colors"
              >
                Security Strategy
              </Link>
              <Link 
                href="/services/it-support"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2.5 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-sm transition-colors"
              >
                IT Support
              </Link>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-100 space-y-3">
            <div className="text-xs text-gray-500 space-y-1">
              <a href="tel:+18775941944" className="block hover:text-gray-700">(877) 594-1944</a>
              <a href="mailto:support@conceptainnovation.com" className="block hover:text-gray-700">support@conceptainnovation.com</a>
            </div>
            <Link 
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white py-3 text-center text-sm font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
