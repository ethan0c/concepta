"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Certification {
  label: string;
  hasImage?: boolean;
  imageSrc?: string;
}

interface Feature {
  title: string;
  description: string;
}

const defaultCertifications: Certification[] = [
  { label: "Microsoft Azure AI Partner" },
  { label: "ISO 27001 Certified" },
  { label: "SOC 2 Type II Compliant" },
  { label: "SBA Certified Partner", hasImage: true, imageSrc: "/assets/sba.jpg" },
];

const defaultFeatures: Feature[] = [
  {
    title: "Government-Grade Security",
    description:
      "FedRAMP, FISMA, and SOC 2 compliant solutions for the most demanding security requirements.",
  },
  {
    title: "Microsoft Certified Experts",
    description:
      "Our team holds advanced Azure certifications and maintains direct relationships with Microsoft engineering teams.",
  },
  {
    title: "Rapid Deployment",
    description:
      "Accelerated implementation timelines with minimal business disruption using proven methodologies.",
  },
];

interface WhyChooseUsSectionProps {
  title?: string;
  description?: string;
  certifications?: Certification[];
  features?: Feature[];
  phone?: string;
}

export default function WhyChooseUsSection({
  title = "Why Concepta?",
  description = "As a Microsoft Azure AI Partner, we combine deep technical expertise with proven industry experience to deliver transformative cybersecurity and technology solutions.",
  certifications = defaultCertifications,
  features = defaultFeatures,
  phone = "(877) 594-1944",
}: WhyChooseUsSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#f4f4f4]">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="cisco-headline text-gray-900 mb-4"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed"
            >
              {description}
            </motion.p>

            {/* Certification Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 text-xs sm:text-sm font-medium text-gray-700"
                >
                  {cert.hasImage && cert.imageSrc ? (
                    <Image
                      src={cert.imageSrc}
                      alt={cert.label}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  ) : (
                    <div className="w-1.5 h-1.5 bg-[#0B4BBB] rounded-full" />
                  )}
                  {cert.label}
                </div>
              ))}
            </motion.div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-8 h-8 bg-[#0B4BBB] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - CTA Card + Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Image */}
            <div className="relative h-48 sm:h-64 lg:h-72 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=900&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* CTA Card */}
            <div className="bg-[#0B4BBB] p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                Ready to get started?
              </h3>
              <p className="text-blue-200 text-sm sm:text-base mb-6 leading-relaxed">
                Schedule a consultation with our cybersecurity experts to discuss your 
                requirements and develop a customized solution strategy.
              </p>
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="block w-full bg-white text-[#0B4BBB] px-6 py-3 text-sm font-medium text-center hover:bg-gray-100 transition-colors"
                >
                  Schedule Free Consultation
                </Link>
                <Link
                  href="/resources"
                  className="block w-full border border-white/50 text-white px-6 py-3 text-sm font-medium text-center hover:bg-white/10 transition-colors"
                >
                  Download Security Assessment Guide
                </Link>
              </div>
              <div className="mt-6 pt-5 border-t border-white/20 text-center">
                <p className="text-blue-200 text-xs mb-1">Or call us directly</p>
                <a href="tel:+18775941944" className="text-lg font-semibold hover:text-blue-200 transition-colors">
                  {phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
