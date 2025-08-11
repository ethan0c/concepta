'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-gray-200' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="Concepta Innovation Systems"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { name: 'Services', isActive: false },
                { name: 'Partners', isActive: false },
                { name: 'Resources', isActive: false },
                { name: 'About', isActive: false },
                { name: 'Contact', isActive: true }
              ].map((item) => (
                <div key={item.name} className="relative group">
                  <button 
                    className={`flex items-center font-semibold transition-all duration-300 py-2 relative ${
                      item.isActive 
                        ? 'text-[#0B4BBB]' 
                        : 'text-gray-700 hover:text-[#0B4BBB]'
                    }`}
                  >
                    {item.name}
                    
                    {/* Active page indicator - modern underline bar */}
                    {item.isActive && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0B4BBB] origin-left"
                      />
                    )}
                    
                    {/* Hover indicator */}
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0B4BBB] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </button>
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-[#0B4BBB] font-medium transition-colors">
                Login
              </button>
              <button className="bg-[#0B4BBB] text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        {/* Background flowing graphics like Cisco */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
          {/* Flowing lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
            <path
              d="M0,400 Q300,200 600,400 T1200,400"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M0,500 Q400,250 800,500 T1200,500"
              stroke="url(#gradient2)"
              strokeWidth="3"
              fill="none"
              opacity="0.2"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
                <stop offset="50%" stopColor="#06B6D4" stopOpacity="1" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium border border-blue-500/20">
                Microsoft Azure AI Partner
              </div>
              
              <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight">
                Secure. <span className="font-bold">Modern.</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Resilient.
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Enterprise cybersecurity and AI solutions that protect, innovate, and scale with your organization's digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Explore Solutions
                </button>
                <button className="text-gray-300 border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white/5">
                  Schedule Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Cisco-style tech graphic */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded w-1/3"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30"></div>
                    ))}
                  </div>
                  
                  <div className="h-32 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-lg border border-gray-600/50 flex items-center justify-center">
                    <span className="text-2xl font-light text-gray-300">AI Analytics</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {['Microsoft', 'Azure', 'AWS', 'Google Cloud', 'IBM'].map((partner) => (
              <div key={partner} className="text-center">
                <div className="h-12 flex items-center justify-center">
                  <span className="text-2xl font-light text-gray-400">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catch up from Concepta Live - Cisco inspired */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center space-x-12 mb-8 text-gray-400">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 mb-2">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2Z"/>
                  </svg>
                </div>
                <span className="text-sm">Security</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 mb-2">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
                  </svg>
                </div>
                <span className="text-sm">Compliance</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 mb-2">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <span className="text-sm">Innovation</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 mb-2">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 12H22L18 8V11H6V13H18V16L22 12Z"/>
                  </svg>
                </div>
                <span className="text-sm">Performance</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 mb-2">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
                  </svg>
                </div>
                <span className="text-sm">Support</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Latest from Concepta Innovation
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                category: "Press release",
                title: "Powering the future of secure AI infrastructure",
                link: "Read about secure AI infrastructure",
                gradient: "from-blue-500 via-purple-500 to-blue-600"
              },
              {
                category: "Press release", 
                title: "Unveiling secure network architecture to accelerate workplace AI transformation",
                link: "Read about workplace AI transformation",
                gradient: "from-orange-500 via-red-500 to-pink-500"
              },
              {
                category: "Press release",
                title: "Transforming security for the agentic AI era, further fusing security into the network",
                link: "Read about security in the agentic AI era",
                gradient: "from-yellow-500 via-orange-500 to-red-500"
              },
              {
                category: "Press release",
                title: "Powering AI-ready data centers, from hyperscale to enterprise",
                link: "Read about AI-ready data centers",
                gradient: "from-cyan-500 via-blue-500 to-purple-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className={`h-48 bg-gradient-to-br ${item.gradient} relative`}>
                    {/* Cisco-style flowing graphics */}
                    <div className="absolute inset-0 opacity-30">
                      <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                        <path
                          d="M0,100 Q50,50 100,100 T200,100"
                          stroke="white"
                          strokeWidth="2"
                          fill="none"
                          opacity="0.6"
                        />
                        <path
                          d="M0,120 Q75,70 150,120 T200,120"
                          stroke="white"
                          strokeWidth="1.5"
                          fill="none"
                          opacity="0.4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                    {item.link} →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade technology solutions built for the modern digital landscape
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Cybersecurity & Risk Management",
                description: "Advanced threat protection, zero-trust architecture, and comprehensive security frameworks designed to safeguard your digital infrastructure.",
                features: ["Zero-Trust Security", "Threat Intelligence", "Compliance Management"]
              },
              {
                title: "AI & Machine Learning",
                description: "Intelligent automation and machine learning solutions that transform operations and enhance decision-making capabilities across your organization.",
                features: ["Process Automation", "Predictive Analytics", "Natural Language Processing"]
              },
              {
                title: "Cloud Infrastructure",
                description: "Seamless cloud migration and optimization strategies that ensure scalability, security, and cost-effectiveness for your business operations.",
                features: ["Azure Migration", "Multi-Cloud Strategy", "Infrastructure Optimization"]
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="border border-gray-200 rounded-lg p-8 hover:border-[#0B4BBB] transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-[#0B4BBB] transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-[#0B4BBB] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Copilot Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                AI-Powered Innovation with{' '}
                <span className="text-[#0B4BBB]">Microsoft Copilot</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Leverage the power of artificial intelligence and Microsoft Copilot to transform your business operations, enhance productivity, and drive innovation across your organization.
              </p>
              <div className="space-y-6">
                {[
                  "Intelligent document processing and analysis",
                  "Automated workflow optimization",
                  "Advanced data insights and reporting",
                  "Natural language business intelligence"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#0B4BBB] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 bg-[#0B4BBB] text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Learn About AI Solutions
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-32 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-[#0B4BBB] font-medium">AI Analytics Dashboard</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-gray-50 rounded"></div>
                    <div className="h-20 bg-gray-50 rounded"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting and implementation services for enterprise and government clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Risk Management",
                services: ["Supply Chain Risk Management", "Enterprise Risk Assessment", "Compliance Frameworks"]
              },
              {
                category: "Innovation",
                services: ["NextGen Technology Solutions", "Digital Transformation", "Process Optimization"]
              },
              {
                category: "Infrastructure",
                services: ["IoT Deployment", "Disaster Recovery", "Storage Solutions"]
              }
            ].map((serviceGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <h3 className="text-xl font-medium text-gray-900 mb-6">
                  {serviceGroup.category}
                </h3>
                <ul className="space-y-3">
                  {serviceGroup.services.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[#0B4BBB] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Industry Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert analysis and thought leadership on cybersecurity and technology trends
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                date: "July 11, 2023",
                title: "Securing CI/CD Environments",
                excerpt: "Best practices for protecting continuous integration and deployment pipelines from emerging threats in modern development workflows.",
                readTime: "5 min read"
              },
              {
                date: "July 5, 2023", 
                title: "DDoS Attack Prevention Strategies",
                excerpt: "Advanced methodologies for mitigating distributed denial-of-service attacks in cloud-native infrastructure environments.",
                readTime: "7 min read"
              },
              {
                date: "July 5, 2023",
                title: "Next-Generation Email Security",
                excerpt: "Comprehensive protection strategies against sophisticated phishing and social engineering attacks targeting enterprise communications.",
                readTime: "6 min read"
              }
            ].map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 border border-gray-200 hover:border-[#0B4BBB] transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-[#0B4BBB] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <button className="text-[#0B4BBB] font-medium hover:underline">
                  Read More →
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <Image
                  src="/assets/logo.png"
                  alt="Concepta Innovation Systems"
                  width={48}
                  height={48}
                  className="w-12 h-12 brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md mb-6">
                Empowering organizations with cutting-edge cybersecurity and AI solutions for a secure digital future.
              </p>
              <div className="text-sm text-gray-500">
                Microsoft Azure AI Partner
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-6">Solutions</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI & Machine Learning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud Infrastructure</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Risk Management</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-6">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div>
                  <a href="mailto:support@conceptainnovation.com" className="hover:text-white transition-colors">
                    support@conceptainnovation.com
                  </a>
                </div>
                <div>(877)-594-1944</div>
                <div className="pt-4">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#0B4BBB] text-white placeholder-gray-500"
                    />
                    <button className="bg-[#0B4BBB] text-white px-4 py-2 rounded-r-md font-medium hover:bg-blue-700 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
              <p>© 2022, Concepta Innovation Systems, LLC. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
