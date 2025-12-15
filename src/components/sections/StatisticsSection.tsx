"use client";

import { motion } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
  description: string;
}

const defaultStats: StatItem[] = [
  {
    value: "50+",
    label: "Clients Served",
    description: "Government & Enterprise",
  },
  {
    value: "99.9%",
    label: "Uptime Guarantee",
    description: "Mission-Critical Systems",
  },
  {
    value: "24/7",
    label: "Security Monitoring",
    description: "Threat Detection & Response",
  },
  {
    value: "15+",
    label: "Years Experience",
    description: "Cybersecurity Excellence",
  },
];

interface StatisticsSectionProps {
  title?: string;
  subtitle?: string;
  stats?: StatItem[];
}

export default function StatisticsSection({
  title = "Proven Results",
  subtitle = "Delivering exceptional results across diverse industries and enterprise environments",
  stats = defaultStats,
}: StatisticsSectionProps) {
  return (
    <section
      className="py-10 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="stats-pattern"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="60" cy="60" r="1.5" fill="#0B4BBB" opacity="0.4" />
              <circle cx="30" cy="30" r="0.8" fill="#0B4BBB" opacity="0.3" />
              <circle cx="90" cy="30" r="0.8" fill="#0B4BBB" opacity="0.3" />
              <circle cx="30" cy="90" r="0.8" fill="#0B4BBB" opacity="0.3" />
              <circle cx="90" cy="90" r="0.8" fill="#0B4BBB" opacity="0.3" />
              <line
                x1="60"
                y1="0"
                x2="60"
                y2="120"
                stroke="#0B4BBB"
                strokeWidth="0.3"
                opacity="0.2"
              />
              <line
                x1="0"
                y1="60"
                x2="120"
                y2="60"
                stroke="#0B4BBB"
                strokeWidth="0.3"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-pattern)" />
        </svg>
      </div>

      <div className="page-container relative z-10">
        <div className="text-center mb-8">
          <h2 className="cisco-headline text-gray-900 mb-4">{title}</h2>
          <p className="cisco-h5 text-gray-600">{subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="cisco-headline font-cisco-regular text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="cisco-h6 text-gray-600 font-cisco-medium">
                {stat.label}
              </div>
              <div className="cisco-body-large text-gray-500">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
