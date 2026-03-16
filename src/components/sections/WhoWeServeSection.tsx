"use client";

import { motion } from "framer-motion";
import {
  BatteryCharge24Regular,
  BuildingGovernment24Regular,
  HeartPulse24Regular,
  Laptop24Regular,
  VehicleTruck24Regular,
} from "@fluentui/react-icons";

interface Sector {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const sectors: Sector[] = [
  {
    title: "Public Sector (Federal, State, Local)",
    description:
      "We support agencies that require secure, reliable, and mission-critical digital operations.",
    icon: BuildingGovernment24Regular,
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "We modernize systems, improve data flows, and support compliance-driven clinical and research environments.",
    icon: HeartPulse24Regular,
  },
  {
    title: "Technology & SaaS",
    description:
      "We help high-growth digital businesses scale through cloud, data, and automation solutions built for performance.",
    icon: Laptop24Regular,
  },
  {
    title: "Transportation",
    description:
      "We engineer solutions that improve operational efficiency, safety, and real-time data visibility across transportation networks.",
    icon: VehicleTruck24Regular,
  },
  {
    title: "Energy & Utilities",
    description:
      "We strengthen operational resilience and support modernization across critical infrastructure environments.",
    icon: BatteryCharge24Regular,
  },
];

export default function WhoWeServeSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-page-bg)]">
      <div className="page-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold concepta-section-heading mb-4"
        >
          Who We Serve
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-gray-600 mb-12 sm:mb-14 leading-relaxed max-w-3xl"
        >
          We partner with organizations operating in complex, high-stakes environments where reliability, security, and scalability matter most.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-10">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="concepta-card concepta-card-compact lg:p-8"
            >
              <div className="flex items-start gap-4">
                <sector.icon className="sector-icon mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl concepta-heading-h3 font-medium mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
