'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone24Regular, Mail24Regular, Location24Regular, Clock24Regular, CheckmarkCircle24Regular, ArrowRight24Regular } from "@fluentui/react-icons";
import { PageShell } from '@/components/layout'
import InternalHeroBackground from '@/components/InternalHeroBackground'

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
    <PageShell currentPage="Contact" headerTheme="light">
        <section className="relative overflow-hidden pt-[140px] pb-16 sm:pb-20" style={{ background: "var(--color-section-bg-alt)" }}>
          <InternalHeroBackground />
          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-[680px]">
              <p className="hero-animate hero-label text-sm font-medium uppercase tracking-[0.24em] text-[var(--brand-cyan)]">
                Contact Us
              </p>
              <h1 className="hero-animate delay-1 mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[var(--brand-navy)]">
                Contact Concepta Innovation Services
              </h1>
              <p className="hero-animate delay-2 hero-body mt-6 text-base sm:text-lg font-medium leading-relaxed">
                Let&apos;s talk about secure, governed, and modern IT solutions.
              </p>
              <p className="hero-animate delay-3 mt-8 text-base sm:text-lg leading-relaxed text-[var(--color-hero-body-muted)]">
                Whether you&apos;re exploring AI-enabled automation, cybersecurity and Zero Trust, application and platform support, or broader IT modernization initiatives, our team is ready to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-surface-subtle)]">
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
                  <h2 className="text-3xl concepta-section-heading mb-6">Contact Information</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Reach out to discuss how Concepta can support your mission and technology goals.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone24Regular className="concepta-page-icon flex-shrink-0" />
                    <div>
                      <h3 className="text-lg concepta-heading-h3 mb-1">Phone</h3>
                      <p className="text-gray-600">(877) 594-1944</p>
                      <p className="text-sm text-gray-500">Monday-Friday, 8:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail24Regular className="concepta-page-icon flex-shrink-0" />
                    <div>
                      <h3 className="text-lg concepta-heading-h3 mb-1">Email</h3>
                      <p className="text-gray-600">support@conceptainnovation.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Location24Regular className="concepta-page-icon flex-shrink-0" />
                    <div>
                      <h3 className="text-lg concepta-heading-h3 mb-1">Headquarters</h3>
                      <p className="text-gray-600">
                        1451 Rockville Pike, Suite 250<br />
                        Rockville, MD 20852
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock24Regular className="concepta-page-icon flex-shrink-0" />
                    <div>
                      <h3 className="text-lg concepta-heading-h3 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday-Friday: 8:00 AM - 6:00 PM EST<br />
                        Weekend: Emergency support available
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="concepta-card bg-white"
              >
                <h2 className="text-2xl concepta-section-heading mb-6">Send Us a Message</h2>

                {status === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 text-green-800 text-sm mb-6">
                    <CheckmarkCircle24Regular className="concepta-page-icon-sm flex-shrink-0" />
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
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-vertical"
                      placeholder="Tell us about your IT, AI, cybersecurity, or modernization needs..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      value="agreed"
                      required
                      className="mt-1 w-4 h-4 text-[var(--color-primary)] border-gray-300 focus:ring-[var(--color-primary)]"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I agree to receive communications from Concepta Innovation Services and understand that I can unsubscribe at any time. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="concepta-button w-full bg-[var(--color-btn-primary)] hover:bg-[var(--color-btn-primary-hover)] text-white py-3 px-6 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                    <ArrowRight24Regular className="w-4 h-4 shrink-0" />
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600">
                    Prefer to schedule a call?{' '}
                    <a href="tel:+18775941944" className="concepta-inline-link transition-colors">
                      Call us directly at (877) 594-1944
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

    </PageShell>
  )
}
