"use client";

import { motion } from "framer-motion";

const audiences = [
  "Federal, State, and Local Government",
  "Healthcare and Regulated Industries",
  "Enterprise and Critical Infrastructure Organizations",
];

export default function WhoWeServeSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#f4f4f4]">
      <div className="page-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="cisco-headline text-gray-900 mb-4"
        >
          Who we serve
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl"
        >
          Built for organizations operating in regulated environments.
        </motion.p>

        <div className="space-y-4">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 * (index + 1) }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <span className="w-2 h-2 bg-[#0B4BBB] rounded-full shrink-0" />
              <span className="text-lg sm:text-xl text-gray-800 font-medium">
                {audience}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
