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
    label: "Enterprise Clients",
    description: "Trusted by leading organizations",
  },
  {
    value: "15+",
    label: "Years in Business",
    description: "Deep industry expertise",
  },
  {
    value: "100+",
    label: "Projects Delivered",
    description: "Successful implementations",
  },
  {
    value: "3",
    label: "Global Offices",
    description: "North America & beyond",
  },
];

interface StatisticsSectionProps {
  title?: string;
  subtitle?: string;
  stats?: StatItem[];
}

export default function StatisticsSection({
  title = "Proven Results",
  subtitle = "Delivering exceptional outcomes across diverse industries and enterprise environments.",
  stats = defaultStats,
}: StatisticsSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-hero-bg)]">
      <div className="page-container">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold text-white mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="border-t-2 border-[var(--color-primary)] pt-6">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-medium text-gray-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
