"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Partner {
  name: string;
  src: string;
  displayHeight: number;
  /** px of extra horizontal padding inside the logo safe-area */
  padX: number;
  /** if false → grayscale + low opacity, hover restores */
  fullColor: boolean;
}

const partners: Partner[] = [
  {
    name: "Microsoft AI Cloud Partner",
    src: "/assets/partners/microsoft-ai-cloud-partner.svg",
    displayHeight: 48,
    padX: 10,
    fullColor: true,
  },
  {
    name: "AWS",
    src: "/assets/partners/aws-logo.png",
    displayHeight: 40,
    padX: 8,
    fullColor: false,
  },
  {
    name: "Google Cloud",
    src: "/assets/partners/google-cloud-logo.jpg",
    displayHeight: 40,
    padX: 8,
    fullColor: false,
  },
  {
    name: "Cisco",
    src: "/assets/partners/cisco-logo.png",
    displayHeight: 40,
    padX: 8,
    fullColor: false,
  },
  {
    name: "NetApp",
    src: "/assets/partners/netapp-logo.jpg",
    displayHeight: 40,
    padX: 8,
    fullColor: false,
  },
  {
    name: "AvePoint",
    src: "/assets/partners/avepoint-logo.png",
    displayHeight: 40,
    padX: 8,
    fullColor: false,
  },
];

function PartnerLogo({ partner }: { partner: Partner }) {
  const [errored, setErrored] = useState(false);

  const imgStyle: React.CSSProperties = {
    height: partner.displayHeight,
    width: "auto",
    display: "block",
  };

  if (errored) {
    // Text fallback: clean, legible brandname until asset file is added
    return (
      <span
        className="font-semibold tracking-tight concepta-logo-fallback select-none"
        style={{ fontSize: Math.round(partner.displayHeight * 0.38) }}
      >
        {partner.name}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={partner.src}
      alt={partner.name}
      style={imgStyle}
      className={
        partner.fullColor
          ? "concepta-logo-full"
          : "concepta-logo-muted"
      }
      onError={() => setErrored(true)}
    />
  );
}

export default function PartnerNetworkSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-surface-subtle)]">
      <div className="page-container">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold concepta-section-heading mb-4"
          >
            Our Partner Network
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed"
          >
            Trusted relationships with leading technology providers strengthen our ability to deliver secure, scalable, and compliant solutions.
          </motion.p>
        </div>

        {/* Logo row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-x-10 gap-y-8 sm:gap-x-14"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center"
              style={{ paddingLeft: partner.padX, paddingRight: partner.padX }}
            >
              <PartnerLogo partner={partner} />
            </div>
          ))}
        </motion.div>

        {/* Footer microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 text-xs sm:text-sm text-gray-400 leading-relaxed max-w-2xl"
        >
          Certified partnerships that enhance our capabilities across AI, cloud, cybersecurity, and modern infrastructure.
        </motion.p>
      </div>
    </section>
  );
}
