'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, BookOpen, Download, Video, FileText, Calendar, Users } from 'lucide-react'
import Image from 'next/image'

export default function Resources() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={`min-h-screen bg-white transition-all duration-300 ${isMobileMenuOpen ? 'brightness-75' : ''}`}>
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
              <Image
                src="/assets/logo.png?v=2"
                alt="Concepta Innovation Systems"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              {[
                { name: 'Solutions', isActive: false, href: '/solutions' },
                { name: 'Services', isActive: false, href: '/services' },
                { name: 'Resources', isActive: true, href: '/resources' },
                { name: 'About', isActive: false, href: '/about' },
                { name: 'Contact', isActive: false, href: '/contact' }
              ].map((item) => (
                <div key={item.name} className="relative">
                  <a 
                    href={item.href}
                    className={`text-sm transition-colors py-2 ${
                      item.isActive 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
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
              <button className="hidden lg:block text-gray-700 hover:text-gray-900 p-2 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              <button className="hidden lg:block text-gray-700 hover:text-gray-900 p-2 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 919-9" />
                </svg>
              </button>
              
              <button className="hidden lg:block text-gray-700 hover:text-gray-900 p-2 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
      <div className="fixed top-16 w-full text-white z-40" style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-sm text-center text-gray-700">
            🚀 New: Advanced AI-powered cybersecurity solutions now available for enterprise clients.
          </p>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
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
                { name: 'Solutions', isActive: false, href: '/solutions' },
                { name: 'Services', isActive: false, href: '/services' },
                { name: 'Resources', isActive: true, href: '/resources' },
                { name: 'About', isActive: false, href: '/about' },
                { name: 'Contact', isActive: false, href: '/contact' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-200 ${
                    item.isActive 
                      ? 'text-blue-600 bg-white/80 shadow-sm backdrop-blur-sm' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-white/40'
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
                Knowledge Center
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12"
              >
                Stay ahead with insights, guides, and resources to navigate the evolving cybersecurity and technology landscape.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Whitepapers & Reports */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">Whitepapers & Reports</h3>
                <p className="text-gray-600 mb-6">In-depth analysis and research on cybersecurity trends, threat landscapes, and technology innovations.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Download className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Zero Trust Architecture Guide</h4>
                      <p className="text-xs text-gray-500">Comprehensive implementation roadmap</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Download className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">AI Security Threat Report 2024</h4>
                      <p className="text-xs text-gray-500">Latest threat intelligence insights</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Download className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Cloud Migration Best Practices</h4>
                      <p className="text-xs text-gray-500">Strategic planning and execution</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-6 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white py-2 rounded transition-all text-sm">
                  View All Reports
                </button>
              </motion.div>

              {/* Webinars & Videos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Video className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">Webinars & Videos</h3>
                <p className="text-gray-600 mb-6">Educational content and expert insights delivered through engaging video presentations and live sessions.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Upcoming: AI in Cybersecurity</h4>
                      <p className="text-xs text-gray-500">Dec 15, 2024 | 2:00 PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Video className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Cloud Security Fundamentals</h4>
                      <p className="text-xs text-gray-500">45 min recording available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Video className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Digital Transformation Strategies</h4>
                      <p className="text-xs text-gray-500">Expert panel discussion</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-6 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white py-2 rounded transition-all text-sm">
                  Browse Content Library
                </button>
              </motion.div>

              {/* Tools & Calculators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">Tools & Calculators</h3>
                <p className="text-gray-600 mb-6">Interactive tools and calculators to help assess your security posture and plan technology investments.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-4 h-4 bg-blue-600 rounded mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Security Maturity Assessment</h4>
                      <p className="text-xs text-gray-500">Evaluate your current security posture</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-4 h-4 bg-blue-600 rounded mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Cloud Migration ROI Calculator</h4>
                      <p className="text-xs text-gray-500">Calculate potential cost savings</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-4 h-4 bg-blue-600 rounded mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Compliance Checklist Generator</h4>
                      <p className="text-xs text-gray-500">Industry-specific requirements</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-6 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white py-2 rounded transition-all text-sm">
                  Access Tools
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl text-gray-900 mb-4">Latest Insights</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed with our latest articles and analysis on cybersecurity trends and technology innovations.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "The Future of Zero Trust in Enterprise Security",
                  excerpt: "Exploring how zero trust architecture is reshaping enterprise security strategies and implementation best practices.",
                  date: "Dec 10, 2024",
                  readTime: "8 min read",
                  category: "Security"
                },
                {
                  title: "AI-Powered Threat Detection: Game Changer or Hype?",
                  excerpt: "Analyzing the real-world impact of artificial intelligence in cybersecurity threat detection and response.",
                  date: "Dec 8, 2024",
                  readTime: "6 min read",
                  category: "AI & Security"
                },
                {
                  title: "Cloud Migration Strategies for Government Contractors",
                  excerpt: "Essential considerations and compliance requirements for successful cloud adoption in the public sector.",
                  date: "Dec 5, 2024",
                  readTime: "10 min read",
                  category: "Cloud"
                }
              ].map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">{article.category}</span>
                    <span className="text-xs text-gray-500">{article.date}</span>
                  </div>
                  
                  <h3 className="text-lg text-gray-900 mb-3 hover:text-blue-600 transition-colors">{article.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                    <button className="text-blue-600 text-sm hover:text-blue-700 transition-colors">
                      Read More →
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-3xl text-gray-900 mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for the latest cybersecurity insights, industry updates, and exclusive resources.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              No spam. Unsubscribe at any time. Privacy policy applies.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
