'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import HeroBackground from '@/components/HeroBackground'
import { Footer, BottomFooter } from '@/components/layout'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    const firstName = ((data.get('name') as string) || '').split(' ')[0]
    const company = (data.get('company') as string) || ''
    const subject = (data.get('subject') as string) || ''
    let emailSubject = firstName
    if (company) emailSubject += ` from ${company}`
    if (subject) emailSubject += ` (${subject})`

    const payload: Record<string, string> = {}
    data.forEach((value, key) => {
      payload[key] = value as string
    })
    payload._subject = emailSubject

    try {
      const res = await fetch('https://formspree.io/f/mojkeolo', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Contact" />

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="relative bg-[#161616] py-16 sm:py-20 lg:py-24 overflow-hidden">
          <HeroBackground />
          <div className="page-container relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <span className="w-8 h-[2px] bg-[#0B4BBB]" />
                <span className="text-gray-500 text-xs sm:text-sm font-medium tracking-wider uppercase">
                  Contact Us
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B4BBB] leading-tight mb-4"
              >
                Contact Concepta Innovation Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-xl sm:text-2xl text-black leading-snug max-w-xl mb-4 font-light"
              >
                Let&apos;s talk about secure, governed, and modern IT solutions.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-black leading-relaxed max-w-xl"
              >
                Whether you are exploring AI-enabled solutions, cybersecurity services, application and platform support, or broader IT modernization and operational initiatives, Concepta Innovation Services is ready to engage.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
          <div className="page-container">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl text-gray-900 mb-6">Contact Information</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Reach out to start a conversation about how Concepta can support your organization&apos;s technology and modernization goals.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#0B4BBB]" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">(877)-594-1944</p>
                      <p className="text-sm text-gray-500">Monday – Friday, 8:00 AM – 6:00 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#0B4BBB]" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">support@conceptainnovation.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#0B4BBB]" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">Headquarters</h3>
                      <p className="text-gray-600">
                        1451 Rockville Pike, Suite 250<br />
                        Rockville, MD 20852
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#0B4BBB]" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                        Weekend: Emergency support available
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6">
                  <h3 className="text-lg text-gray-900 mb-3">Ready to Connect?</h3>
                  <p className="text-gray-600 mb-4">
                    Our team is available to discuss your IT, cybersecurity, AI, or modernization needs. Reach out and we will be in touch promptly.
                  </p>
                  <a href="tel:+18775941944" className="inline-flex items-center justify-center px-6 py-2.5 bg-[#0B4BBB] hover:bg-[#0a3d9c] text-white text-sm font-medium transition-colors">
                    Call (877)-594-1944
                  </a>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8"
              >
                <h2 className="text-2xl text-gray-900 mb-6">Send Us a Message</h2>

                {status === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 text-green-800 text-sm mb-6">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Thank you! Your message has been sent. We&apos;ll be in touch soon.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm mb-6">
                    Something went wrong. Please try again or email us directly at support@conceptainnovation.com.
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B4BBB] focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B4BBB] focus:border-transparent"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B4BBB] focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B4BBB] focus:border-transparent"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">
                      Area of Interest *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B4BBB] focus:border-transparent"
                    >
                      <option value="">Select an area of interest</option>
                      <option value="AI & Intelligent Automation">AI &amp; Intelligent Automation</option>
                      <option value="Cybersecurity & Zero Trust">Cybersecurity &amp; Zero Trust</option>
                      <option value="Application & Platform Support">Application &amp; Platform Support</option>
                      <option value="IT Operations & Service Desk">IT Operations &amp; Service Desk</option>
                      <option value="Cloud & Solution Architecture">Cloud &amp; Solution Architecture</option>
                      <option value="General IT Consulting / Advisory">General IT Consulting / Advisory</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B4BBB] focus:border-transparent resize-vertical"
                      placeholder="Tell us about your IT, AI, cybersecurity, or modernization needs..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1 w-4 h-4 text-[#0B4BBB] border-gray-300 focus:ring-[#0B4BBB]"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I agree to receive communications from Concepta Innovation Services and understand that I can unsubscribe at any time. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#0B4BBB] hover:bg-[#0a3d9c] text-white py-3 px-6 transition-colors flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600">
                    Prefer to schedule a call?{' '}
                    <a href="tel:+18775941944" className="text-[#0B4BBB] hover:text-[#0a3d9c] transition-colors">
                      Call (877) 594-1944
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
        <BottomFooter />
      </main>
    </div>
  )
}
