'use client'

import { motion } from 'framer-motion'
import { BookOpen, Download, Video, FileText, Calendar } from 'lucide-react'
import Header from '@/components/Header'

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Resources" />

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="bg-[#161616] py-16 sm:py-20 lg:py-24">
          <div className="page-container">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <span className="w-8 h-[2px] bg-[#0B4BBB]" />
                <span className="text-[#6ea6ff] text-xs sm:text-sm font-medium tracking-wider uppercase">
                  Knowledge Center
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6"
              >
                Resources & Insights
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl"
              >
                Stay ahead with insights, guides, and resources to navigate the evolving cybersecurity and technology landscape.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="page-container">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Whitepapers & Reports */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 p-6"
              >
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-[#0B4BBB]" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">Whitepapers & Reports</h3>
                <p className="text-gray-600 mb-6">In-depth analysis and research on cybersecurity trends, threat landscapes, and technology innovations.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Download className="w-4 h-4 text-[#0B4BBB] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Zero Trust Architecture Guide</h4>
                      <p className="text-xs text-gray-500">Comprehensive implementation roadmap</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Download className="w-4 h-4 text-[#0B4BBB] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">AI Security Threat Report 2024</h4>
                      <p className="text-xs text-gray-500">Latest threat intelligence insights</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Download className="w-4 h-4 text-[#0B4BBB] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Cloud Migration Best Practices</h4>
                      <p className="text-xs text-gray-500">Strategic planning and execution</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-6 text-[#0B4BBB] border border-[#0B4BBB] hover:bg-[#0B4BBB] hover:text-white py-2.5 transition-colors text-sm">
                  View All Reports
                </button>
              </motion.div>

              {/* Webinars & Videos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 p-6"
              >
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6">
                  <Video className="w-6 h-6 text-[#0B4BBB]" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">Webinars & Videos</h3>
                <p className="text-gray-600 mb-6">Educational content and expert insights delivered through engaging video presentations and live sessions.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-4 h-4 text-[#0B4BBB] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Upcoming: AI in Cybersecurity</h4>
                      <p className="text-xs text-gray-500">Dec 15, 2024 | 2:00 PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Video className="w-4 h-4 text-[#0B4BBB] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Cloud Security Fundamentals</h4>
                      <p className="text-xs text-gray-500">45 min recording available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Video className="w-4 h-4 text-[#0B4BBB] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Digital Transformation Strategies</h4>
                      <p className="text-xs text-gray-500">Expert panel discussion</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-6 text-[#0B4BBB] border border-[#0B4BBB] hover:bg-[#0B4BBB] hover:text-white py-2.5 transition-colors text-sm">
                  Browse Content Library
                </button>
              </motion.div>

              {/* Tools & Calculators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 p-6"
              >
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-[#0B4BBB]" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">Tools & Calculators</h3>
                <p className="text-gray-600 mb-6">Interactive tools and calculators to help assess your security posture and plan technology investments.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-4 h-4 bg-[#0B4BBB] mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Security Maturity Assessment</h4>
                      <p className="text-xs text-gray-500">Evaluate your current security posture</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-4 h-4 bg-[#0B4BBB] mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Cloud Migration ROI Calculator</h4>
                      <p className="text-xs text-gray-500">Calculate potential cost savings</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-4 h-4 bg-[#0B4BBB] mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sm text-gray-900 mb-1">Compliance Checklist Generator</h4>
                      <p className="text-xs text-gray-500">Industry-specific requirements</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-6 text-[#0B4BBB] border border-[#0B4BBB] hover:bg-[#0B4BBB] hover:text-white py-2.5 transition-colors text-sm">
                  Access Tools
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#f4f4f4]">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">Latest Insights</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                  className="bg-white p-6 cursor-pointer border border-gray-200"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs text-[#0B4BBB] bg-blue-50 px-2 py-1">{article.category}</span>
                    <span className="text-xs text-gray-500">{article.date}</span>
                  </div>
                  
                  <h3 className="text-lg text-gray-900 mb-3 hover:text-[#0B4BBB] transition-colors">{article.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                    <button className="text-[#0B4BBB] text-sm hover:text-[#0a3d9c] transition-colors">
                      Read More →
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="page-container text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest cybersecurity insights, industry updates, and exclusive resources.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B4BBB] focus:border-transparent"
              />
              <button className="bg-[#0B4BBB] hover:bg-[#0a3d9c] text-white px-6 py-3 text-sm font-medium transition-colors whitespace-nowrap">
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
