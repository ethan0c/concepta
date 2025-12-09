"use client";

import { motion } from "framer-motion";

interface ServiceItem {
  title: string;
  href: string;
  icon: "shield" | "computer" | "cloud";
}

const serviceIcons = {
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  ),
  computer: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  ),
  cloud: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
    />
  ),
};

const defaultServices: ServiceItem[] = [
  {
    title: "Security Strategy & Architecture",
    href: "/services/security-strategy",
    icon: "shield",
  },
  {
    title: "IT Support Services",
    href: "/services/it-support",
    icon: "computer",
  },
  {
    title: "Cloud Modernization Services",
    href: "/services/cloud-modernization",
    icon: "cloud",
  },
];

interface CoreServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: ServiceItem[];
}

export default function CoreServicesSection({
  title = "Our Core Services",
  subtitle = "Comprehensive cybersecurity and technology solutions",
  services = defaultServices,
}: CoreServicesSectionProps) {
  return (
    <section className="py-8 bg-white">
      <div className="page-container">
        <div className="text-center mb-6">
          <h2 className="cisco-h1 text-gray-900 mb-3">{title}</h2>
          <p className="cisco-h6 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.a
              key={service.href}
              href={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="group block p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-300 hover:shadow-sm cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {serviceIcons[service.icon]}
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="cisco-h6 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
