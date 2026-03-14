"use client";

import { motion } from "framer-motion";
import HeroBackground from "@/components/HeroBackground";

interface InternalHeroSectionProps {
  label: string;
  title: string;
  description?: string;
  sectionClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  children?: React.ReactNode;
}

export default function InternalHeroSection({
  label,
  title,
  description,
  sectionClassName = "py-16 sm:py-20 lg:py-24",
  titleClassName = "text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight mb-6",
  descriptionClassName = "text-base sm:text-lg text-white/75 leading-relaxed max-w-xl",
  children,
}: InternalHeroSectionProps) {
  return (
    <section className={`relative bg-[var(--color-hero-bg)] overflow-hidden ${sectionClassName}`}>
      <HeroBackground />
      <div className="page-container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-8 h-[2px] bg-[var(--color-primary)]" />
            <span className="text-blue-300 text-xs sm:text-sm font-medium tracking-wider uppercase">{label}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={titleClassName}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={descriptionClassName}
            >
              {description}
            </motion.p>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}