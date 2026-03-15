"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BrainCircuit24Regular,
  CloudArrowUp24Regular,
  Code24Regular,
  DataBarVertical24Regular,
  Headset24Regular,
  ShieldCheckmark24Regular,
} from "@fluentui/react-icons";
import { ArrowRight24Regular } from "@fluentui/react-icons";
import { PageShell } from "@/components/layout";
import HeroBackground from "@/components/HeroBackground";

interface ServiceItem {
  title: string;
  description: string;
  bullets: string[];
  icon: React.ComponentType<{ className?: string }>;
}

interface TechCategory {
  title: string;
  items: string[];
}

const services: ServiceItem[] = [
  {
    title: "Artificial Intelligence & AI Governance",
    description:
      "Responsible AI solutions built for governance, compliance, and scale. Concepta delivers AI-driven capabilities that enhance operational efficiency while maintaining strong governance, ethics, and regulatory alignment.",
    bullets: [
      "AI-enabled workflows",
      "Intelligent automation",
      "Decision-support systems",
      "Governance & compliance alignment",
    ],
    icon: BrainCircuit24Regular,
  },
  {
    title: "Cybersecurity & Zero Trust Architecture",
    description:
      "Security strategies that protect mission-critical systems and data. Our cybersecurity services are grounded in Zero Trust principles, helping organizations reduce risk, strengthen resilience, and maintain compliance.",
    bullets: [
      "Zero Trust implementation",
      "Continuous monitoring",
      "Identity & endpoint protection",
      "Compliance & risk alignment",
    ],
    icon: ShieldCheckmark24Regular,
  },
  {
    title: "Application & Platform Support",
    description:
      "Reliable application and platform support for continuous operations. We ensure system availability, performance, and security across enterprise and government environments.",
    bullets: [
      "System maintenance & optimization",
      "Platform modernization",
      "Data integration",
      "Operational support",
    ],
    icon: Code24Regular,
  },
  {
    title: "Solution Architecture & Cloud Enablement",
    description:
      "Architecting secure, scalable solutions for modern environments. Concepta designs and supports solution architectures that integrate cloud, data, and security technologies to meet mission and business needs.",
    bullets: [
      "Cloud architecture & design",
      "Data & security integration",
      "Governance & compliance alignment",
      "Long-term sustainability planning",
    ],
    icon: CloudArrowUp24Regular,
  },
  {
    title: "Service Desk & IT Operations Support",
    description:
      "Responsive IT support that keeps organizations running. Our service desk and IT operations support are designed for reliability, user experience, and operational continuity across hybrid, onsite, and remote environments.",
    bullets: [
      "24/7 responsive support",
      "Proactive monitoring",
      "Issue resolution",
      "Operational continuity",
    ],
    icon: Headset24Regular,
  },
  {
    title: "Data Management & Analytics",
    description:
      "Secure data solutions for informed decision-making. We provide comprehensive data management services including secure storage, backup, analytics, and governance for regulated environments.",
    bullets: [
      "Data backup & recovery",
      "Analytics & reporting",
      "Data governance",
      "Compliance management",
    ],
    icon: DataBarVertical24Regular,
  },
];

const techCategories: TechCategory[] = [
  {
    title: "Cloud Platforms",
    items: ["Microsoft Azure", "Amazon Web Services (AWS)", "Google Cloud Platform (GCP)"],
  },
  {
    title: "Security & Zero Trust",
    items: [
      "Microsoft Sentinel (SIEM/SOAR)",
      "Microsoft Defender 365",
      "Microsoft Defender for Cloud",
      "Microsoft Defender for Endpoint",
      "Microsoft Entra ID (Azure AD)",
      "Microsoft Entra Permissions Management",
      "Microsoft Intune",
      "Microsoft Purview",
      "Azure Security Center",
      "Azure Firewall",
      "Azure DDoS Protection",
      "Azure Key Vault",
      "Azure Information Protection",
      "Azure Front Door",
      "Azure Web Application Firewall (WAF)",
      "Azure API Management",
      "Azure Monitor",
    ],
  },
  {
    title: "AI, Automation & Data",
    items: [
      "Azure OpenAI Service",
      "Azure Machine Learning",
      "Python (AI/ML frameworks)",
      "Power BI",
      "Databricks",
      "Apache Spark",
      "Azure Data Factory",
      "Azure Synapse Analytics",
    ],
  },
  {
    title: "Application Development",
    items: [
      ".NET Core",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "REST & GraphQL APIs",
      "Docker",
      "Kubernetes / AKS",
    ],
  },
  {
    title: "Databases & Storage",
    items: [
      "Microsoft SQL Server",
      "Azure Cosmos DB",
      "PostgreSQL",
      "Azure SQL",
      "Azure Blob Storage",
      "Azure Data Lake Storage",
    ],
  },
  {
    title: "DevOps & Automation",
    items: [
      "GitHub & GitHub Actions",
      "Azure DevOps",
      "Terraform",
      "Bicep",
      "CI/CD pipelines",
      "Infrastructure as Code (IaC)",
    ],
  },
];

export default function Services() {
  return (
    <PageShell currentPage="Services" headerTheme="light">
      <section className="relative overflow-hidden bg-[var(--brand-navy)] pt-[160px] pb-[140px]">
        <HeroBackground />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[5] bg-[linear-gradient(to_bottom,rgba(10,26,47,0.0)_0%,rgba(10,26,47,0.65)_100%)]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[680px]">
            <h1
              className="hero-animate delay-1 hero-title text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight"
            >
              Modern IT services built for secure, regulated, and mission-critical environments
            </h1>
            <p className="hero-animate delay-2 hero-body mt-6 text-base sm:text-lg font-medium leading-relaxed">
              AI-enabled. Security-first. Mission-aligned.
            </p>
            <p className="hero-animate delay-3 mt-8 text-base sm:text-lg leading-relaxed text-[rgba(255,255,255,0.9)]">
              Concepta Innovation Services delivers modern IT solutions designed for government agencies and enterprise organizations that require strong governance, responsible AI, and operational resilience. We help teams modernize confidently while maintaining compliance, security, and mission continuity.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-subtle)] py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4"
          >
            Our Core Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-[680px]"
          >
            AI-enabled, security-first solutions for government and enterprise.
          </motion.p>

          <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 * (index + 1) }}
                viewport={{ once: true }}
                className="concepta-card concepta-card-compact concepta-card-interactive group"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center text-[var(--color-primary)] transition-colors duration-200 group-hover:text-[var(--color-link)]">
                    <service.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 transition-colors duration-200 group-hover:text-[var(--color-link)]">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-3 text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm text-gray-600 leading-relaxed"
                    >
                      • {bullet}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-muted)] py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4"
          >
            Our Technology Stack
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-[680px]"
          >
            Modern, secure, and enterprise-ready technologies that power our solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-5 max-w-[980px] text-base text-gray-600 leading-relaxed"
          >
            Concepta leverages a curated ecosystem of industry-leading platforms, security tools, and development frameworks to deliver secure, scalable, and mission-aligned IT services. Our technology stack reflects our commitment to responsible AI, Zero Trust security, and cloud-native modernization.
          </motion.p>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {techCategories.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.06 * (index + 1) }}
                viewport={{ once: true }}
                className="concepta-card concepta-card-subtle concepta-card-compact"
              >
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold text-gray-900"
          >
            Ready to modernize mission-critical operations?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-[680px] text-lg text-gray-600 leading-relaxed"
          >
            Partner with Concepta to deliver secure, compliant, and resilient IT services aligned to your mission.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[8px] bg-[var(--color-link)] px-8 py-4 text-[18px] font-semibold text-[var(--white)] transition-colors duration-200 hover:bg-[var(--color-link-hover)]"
            >
              Talk to an Expert
              <ArrowRight24Regular className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
