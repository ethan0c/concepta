"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface ServiceItem {
  title: string;
  description: string;
  href: string;
  image: string;
  tag: string;
}

const defaultServices: ServiceItem[] = [
  {
    title: "Security Strategy & Architecture",
    description: "Design and implement zero-trust frameworks, compliance programs, and advanced threat management for your organization.",
    href: "/services/security-strategy",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    tag: "Cybersecurity",
  },
  {
    title: "IT Support Services",
    description: "24/7 managed IT support with proactive monitoring, helpdesk, and infrastructure management for seamless operations.",
    href: "/services/it-support",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    tag: "Managed Services",
  },
  {
    title: "Cloud Modernization",
    description: "Migrate and optimize workloads on Microsoft Azure with AI-driven automation and cost-effective scalability.",
    href: "/solutions",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tag: "Cloud & AI",
  },
];

interface CoreServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: ServiceItem[];
}

export default function CoreServicesSection({
  title = "What we do",
  subtitle = "Comprehensive cybersecurity and technology solutions that protect and empower your business.",
  services = defaultServices,
}: CoreServicesSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="page-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
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
            className="text-base sm:text-lg text-gray-500 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {services.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
            >
              <Link
                href={service.href}
                className="group block bg-white h-full hover:bg-gray-50 transition-colors"
              >
                {/* Card Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-medium text-white bg-[#0B4BBB] px-2.5 py-1">
                    {service.tag}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-[#0B4BBB] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-[#0B4BBB] group-hover:gap-2 transition-all">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
