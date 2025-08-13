'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, Settings, Code, Database, Shield, Cloud, Users } from 'lucide-react'
import Image from 'next/image'

export default function Services() {
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen bg-white transition-all duration-300 ${isMobileMenuOpen ? 'brightness-75' : ''}`}
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
                { name: 'Home', isActive: false, href: '/' },
                { name: 'Solutions', isActive: false, href: '/solutions' },
                { name: 'Services', isActive: true, href: '/services' },
                { name: 'Resources', isActive: false, href: '/resources' },
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
                { name: 'Home', isActive: false, href: '/' },
                { name: 'Solutions', isActive: false, href: '/solutions' },
                { name: 'Services', isActive: true, href: '/services' },
                { name: 'Resources', isActive: false, href: '/resources' },
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
                Professional Services
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12"
              >
                Expert consulting and implementation services to accelerate your digital transformation journey with proven methodologies.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Strategy & Consulting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-3">Strategy & Consulting</h3>
                    <p className="text-gray-600 mb-4">Strategic guidance to align technology with business objectives and drive measurable outcomes.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Digital Transformation Strategy</li>
                      <li>• Technology Roadmap Development</li>
                      <li>• Risk Assessment & Mitigation</li>
                      <li>• Compliance & Governance</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-3">Custom Development</h3>
                    <p className="text-gray-600 mb-4">Tailored software solutions built to meet your specific business requirements and workflows.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Web & Mobile Applications</li>
                      <li>• API Development & Integration</li>
                      <li>• Legacy System Modernization</li>
                      <li>• Microservices Architecture</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-3">Data & Analytics</h3>
                    <p className="text-gray-600 mb-4">Transform raw data into actionable insights with advanced analytics and visualization platforms.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Data Warehouse Design</li>
                      <li>• Business Intelligence Dashboards</li>
                      <li>• Predictive Analytics Models</li>
                      <li>• Real-time Data Processing</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Implementation & Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-3">Security Implementation</h3>
                    <p className="text-gray-600 mb-4">Comprehensive security assessments and implementation of enterprise-grade protection measures.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Security Architecture Review</li>
                      <li>• Penetration Testing</li>
                      <li>• Zero Trust Implementation</li>
                      <li>• Incident Response Planning</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-3">Cloud Migration</h3>
                    <p className="text-gray-600 mb-4">Seamless migration to cloud platforms with minimal downtime and optimized performance.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Cloud Readiness Assessment</li>
                      <li>• Migration Strategy & Planning</li>
                      <li>• Infrastructure as Code</li>
                      <li>• Post-Migration Optimization</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-3">Training & Support</h3>
                    <p className="text-gray-600 mb-4">Comprehensive training programs and ongoing support to ensure successful technology adoption.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• User Training & Onboarding</li>
                      <li>• Technical Documentation</li>
                      <li>• 24/7 Technical Support</li>
                      <li>• Knowledge Transfer Sessions</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl text-gray-900 mb-4">Our Service Methodology</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven approach that ensures successful project delivery and long-term value creation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understand your business needs and technical requirements' },
                { step: '02', title: 'Strategy', desc: 'Develop comprehensive roadmap and implementation plan' },
                { step: '03', title: 'Implementation', desc: 'Execute solution with agile methodology and regular updates' },
                { step: '04', title: 'Optimization', desc: 'Monitor, optimize, and scale for continuous improvement' }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-3xl text-gray-900 mb-6">Start Your Project Today</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to leverage our expertise for your next technology initiative? Let's discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded transition-colors">
                Request Consultation
              </button>
              <button className="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded transition-all">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  )
}
