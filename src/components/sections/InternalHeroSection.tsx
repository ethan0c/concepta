"use client";

import { motion } from "framer-motion";
import InternalHeroBackground from "@/components/InternalHeroBackground";

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
  sectionClassName = "pt-[140px] pb-16 sm:pb-20",
  titleClassName = "text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-[var(--brand-navy)]",
  descriptionClassName = "hero-body-muted text-base sm:text-lg leading-relaxed max-w-xl",
  children,
}: InternalHeroSectionProps) {
  return (
    <section className={`relative overflow-hidden ${sectionClassName}`} style={{ background: "#EEF2F9" }}>
      <InternalHeroBackground />
      <div className="page-container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-8 h-[2px] bg-[var(--brand-cyan)]" />
            <span className="hero-label text-xs sm:text-sm font-medium tracking-wider uppercase text-[var(--brand-cyan)]">{label}</span>
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