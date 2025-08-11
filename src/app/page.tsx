'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-gray-200' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/assets/logo.png?v=2"
                alt="Concepta Innovation Services"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div className="ml-3">
                <div className="text-xl font-semibold text-gray-900">Concepta Innovation Services</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { name: 'Home', isActive: false },
                { name: 'Solutions', isActive: false },
                { name: 'Services', isActive: false },
                { name: 'About', isActive: false },
                { name: '(123)-455-7880', isActive: false }
              ].map((item) => (
                <div key={item.name} className="relative">
                  <button 
                    className="font-medium text-sm text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </button>
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium text-sm transition-colors">
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 hover:text-primary-blue p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 bg-white shadow-lg"
            >
              <div className="px-8 py-6 space-y-6">
                {[
                  { name: 'Services', isActive: false },
                  { name: 'Partners', isActive: false },
                  { name: 'Resources', isActive: false },
                  { name: 'About', isActive: false },
                  { name: 'Contact', isActive: true }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left py-3 px-4 rounded-lg text-lg transition-all duration-300 ${
                      item.isActive 
                        ? 'text-primary-blue bg-blue-50 font-semibold border border-blue-200' 
                        : 'text-gray-700 hover:text-primary-blue hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4 border-t border-gray-200 space-y-4">
                  <button className="block w-full text-left py-3 px-4 text-gray-700 hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-all duration-300 text-lg">
                    Sign In
                  </button>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300 text-lg shadow-lg border-2 border-blue-600">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-to-br from-blue-900 to-blue-700 relative overflow-hidden">
        {/* Microsoft Azure AI Partner Badge */}
        <div className="absolute top-8 left-8 bg-blue-800/50 text-white px-4 py-2 rounded text-sm">
          Microsoft Azure AI Partner
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
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                <div>Secure.</div>
                <div>Modern.</div>
                <div className="text-blue-300">Resilient.</div>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                Enterprise Innovation Services's an information technology and cybersecurity firm. Providing a comprehensive approach to IT and Cybersecurity Solutions through Innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition-colors">
                  Explore Solutions
                </button>
                <button className="text-white border border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded font-semibold transition-all duration-300">
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
                    <div key={i} className="h-16 bg-blue-700/40 rounded border border-blue-500/30"></div>
                  ))}
                </div>
                
                {/* Dashboard Main Area */}
                <div className="h-32 bg-blue-700/40 rounded border border-blue-500/30 flex items-center justify-center">
                  <span className="text-white font-medium">At Sitolutics</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Column Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cybersecurity and technology solutions designed to protect, modernize, and optimize your business operations
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Security Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Security Strategy and Architecture
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Comprehensive security assessments, zero-trust architecture design, and regulatory compliance frameworks to protect your critical assets.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Security Risk Assessments</li>
                <li>• Zero-Trust Implementation</li>
                <li>• Compliance Management</li>
                <li>• Incident Response Planning</li>
              </ul>
            </motion.div>

            {/* AI Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Artificial Intelligence (AI) Solutions
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Leverage cutting-edge AI and machine learning technologies to automate processes, enhance decision-making, and drive innovation.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Azure OpenAI Integration</li>
                <li>• Custom AI Model Development</li>
                <li>• Intelligent Automation</li>
                <li>• Data Analytics & Insights</li>
              </ul>
            </motion.div>

            {/* Cloud Transition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Cloud Modernization Services
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Seamlessly migrate and modernize your applications to Microsoft Azure with enhanced security, scalability, and cost efficiency.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Azure Cloud Migration</li>
                <li>• Application Modernization</li>
                <li>• DevOps Implementation</li>
                <li>• Cloud Cost Optimization</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">
              Delivering exceptional results across diverse industries and enterprise environments
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
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Clients Served</div>
              <div className="text-sm text-gray-500">Government & Enterprise</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime Guarantee</div>
              <div className="text-sm text-gray-500">Mission-Critical Systems</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Security Monitoring</div>
              <div className="text-sm text-gray-500">Threat Detection & Response</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
              <div className="text-sm text-gray-500">Cybersecurity Excellence</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Concepta Innovation Services?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                As a Microsoft Azure AI Partner, we combine deep technical expertise with proven industry experience to deliver transformative cybersecurity and technology solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Government-Grade Security</h3>
                    <p className="text-gray-600">FedRAMP, FISMA, and SOC 2 compliant solutions for the most demanding security requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Microsoft Certified Experts</h3>
                    <p className="text-gray-600">Our team holds advanced Azure certifications and maintains direct relationships with Microsoft engineering teams.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Rapid Deployment</h3>
                    <p className="text-gray-600">Accelerated implementation timelines with minimal business disruption using proven methodologies.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                <p className="mb-6 opacity-90">
                  Schedule a consultation with our cybersecurity experts to discuss your specific requirements and develop a customized solution strategy.
                </p>
                <div className="space-y-4">
                  <button className="w-full bg-white text-blue-900 px-6 py-3 rounded font-semibold hover:bg-blue-50 transition-colors">
                    Schedule Free Consultation
                  </button>
                  <button className="w-full border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-blue-900 transition-all">
                    Download Security Assessment Guide
                  </button>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-600 text-center">
                  <p className="text-sm opacity-75">Or call us directly:</p>
                  <p className="text-xl font-semibold">(123) 455-7880</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Articles & Resources */}
            <div className="space-y-12">
              <div>
                <div className="text-sm text-blue-600 font-medium mb-2">LATEST INSIGHTS</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Unleashing the Power of Generative AI in Enterprise Security
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Discover how organizations are leveraging Azure OpenAI and advanced AI technologies to enhance threat detection, automate incident response, and strengthen their cybersecurity posture.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>Published: August 10, 2025</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Read Full Article →
                </a>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <div className="text-sm text-blue-600 font-medium mb-2">CASE STUDY</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Revolutionizing Modern Cybersecurity for Fortune 500 Manufacturing
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Learn how we helped a leading manufacturing company implement zero-trust architecture, reducing security incidents by 85% while improving operational efficiency across 50+ global locations.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="font-bold text-blue-600">85%</div>
                      <div className="text-xs text-gray-600">Incident Reduction</div>
                    </div>
                    <div>
                      <div className="font-bold text-blue-600">60%</div>
                      <div className="text-xs text-gray-600">Cost Savings</div>
                    </div>
                    <div>
                      <div className="font-bold text-blue-600">30 Days</div>
                      <div className="text-xs text-gray-600">Implementation</div>
                    </div>
                  </div>
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  View Case Study →
                </a>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <div className="text-sm text-blue-600 font-medium mb-2">RESOURCES</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Resources</h3>
                <div className="space-y-3">
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium block">
                    → Microsoft Azure Security Best Practices Guide
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium block">
                    → AI-Powered Threat Detection Whitepaper
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium block">
                    → Compliance Framework Comparison Chart
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium block">
                    → Digital Marketing Content (microsoft.com)
                  </a>
                </div>
                <div className="mt-6">
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    View All Resources →
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Our Partners */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Technology Partners</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Concepta partners with leading technology companies and cloud service providers to deliver continuous innovation and compliant services to our customers. This provides access to specialized training and collaboration with them on their technologies. Our employees are in tune with the products and services that benefit our customers.
              </p>

              {/* Partner Logos Grid */}
              <div className="grid grid-cols-3 gap-6 items-center text-center mb-12">
                <div className="h-16 flex items-center justify-center">
                  <Image
                    src="/assets/partners/Acer-Logo.png"
                    alt="Acer"
                    width={80}
                    height={40}
                    className="max-h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
                <div className="h-16 flex items-center justify-center">
                  <Image
                    src="/assets/partners/200-2001206_cisco-cisco-high-res-logo.png"
                    alt="Cisco"
                    width={80}
                    height={40}
                    className="max-h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
                <div className="h-16 flex items-center justify-center">
                  <Image
                    src="/assets/partners/dell.png"
                    alt="Dell Technologies"
                    width={80}
                    height={40}
                    className="max-h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
                <div className="h-16 flex items-center justify-center">
                  <Image
                    src="/assets/partners/DH-80px_2019.png"
                    alt="DH"
                    width={80}
                    height={40}
                    className="max-h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
                <div className="h-16 flex items-center justify-center">
                  <Image
                    src="/assets/partners/HP-Logo.png"
                    alt="HP"
                    width={80}
                    height={40}
                    className="max-h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
                <div className="h-16 flex items-center justify-center">
                  <Image
                    src="/assets/partners/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png"
                    alt="IBM"
                    width={80}
                    height={40}
                    className="max-h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
                <div className="h-16 flex items-center justify-center">
                  <Image
                    src="/assets/partners/purepng.com-ingram-micro-logologobrand-logoiconslogos-25151993953320b2j.png"
                    alt="Ingram Micro"
                    width={80}
                    height={40}
                    className="max-h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
                <div className="h-16 flex items-center justify-center">
                  <Image
                    src="/assets/partners/Microsoft-Logo.png"
                    alt="Microsoft"
                    width={80}
                    height={40}
                    className="max-h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
                <div className="h-16 flex items-center justify-center">
                  <Image
                    src="/assets/partners/logo-arrow-five-years-out.svg"
                    alt="Arrow"
                    width={80}
                    height={40}
                    className="max-h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              </div>

              {/* Partnership Benefits */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Partnership Benefits</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Direct access to latest technology innovations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Specialized training and certifications
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Priority support and escalation paths
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Collaborative solution development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Blue Design */}
      <footer className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src="/assets/logo.png?v=2"
                    alt="Concepta Innovation Services"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-xl font-bold">Concepta</div>
                  <div className="text-blue-100 text-sm">Innovation Services</div>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed mb-6 max-w-lg">
                Leading cybersecurity and AI solutions provider specializing in Microsoft Azure technologies. We help government contractors, Fortune 500 companies, and growing enterprises achieve secure digital transformation through innovative technology solutions.
              </p>
              
              {/* Certifications & Badges */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-blue-100">Microsoft Azure AI Partner</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-blue-100">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-blue-100">SOC 2 Type II Compliant</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors">Cybersecurity Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI & Machine Learning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud Migration</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Zero-Trust Architecture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">24/7 Monitoring</a></li>
              </ul>
            </div>

            {/* Contact & Support */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact & Support</h4>
              <div className="space-y-4 text-blue-100">
                <div>
                  <div className="font-medium mb-1">Sales Inquiries</div>
                  <a href="tel:123-455-7880" className="hover:text-white transition-colors">
                    (123) 455-7880
                  </a>
                </div>
                <div>
                  <div className="font-medium mb-1">Technical Support</div>
                  <a href="tel:877-594-1944" className="hover:text-white transition-colors">
                    (877) 594-1944
                  </a>
                </div>
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <a href="mailto:info@conceptainnovation.com" className="hover:text-white transition-colors">
                    info@conceptainnovation.com
                  </a>
                </div>
                <div>
                  <div className="font-medium mb-1">Address</div>
                  <div className="text-sm">
                    123 Innovation Drive<br />
                    Technology Park, TX 75001
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-blue-600 pt-12 mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Stay Informed</h3>
                <p className="text-blue-100">
                  Get the latest cybersecurity insights, technology updates, and industry news delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-blue-800/50 border border-blue-600 rounded text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="bg-white text-blue-900 px-6 py-3 rounded font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-blue-600 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 lg:mb-0">
                <p className="text-blue-100 text-sm">© 2025 Concepta Innovation Services, LLC. All rights reserved.</p>
                <div className="flex items-center space-x-4 text-sm">
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">Security</a>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">Accessibility</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-200 text-sm">Follow Us:</span>
                <div className="flex space-x-3">
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
