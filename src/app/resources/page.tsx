'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheckmark24Regular, BrainCircuit24Regular, CloudArrowUp24Regular, LockClosed24Regular, ArrowRight24Regular } from "@fluentui/react-icons";
import InternalHeroBackground from '@/components/InternalHeroBackground'
import { PageShell } from '@/components/layout'

const topics = [
  {
    icon: ShieldCheckmark24Regular,
    category: "Cybersecurity",
    title: "Zero Trust Architecture & Implementation",
    description: "Concepta implements end-to-end Zero Trust frameworks across identity, endpoints, devices, data, networks, and infrastructure. Our approach helps organizations verify explicitly, enforce least-privilege access, and assume breach to reduce their attack surface.",
    points: ["Identity & access management", "Endpoint protection & compliance", "Network segmentation & monitoring", "NIST 800-207 alignment"],
  },
  {
    icon: BrainCircuit24Regular,
    category: "Artificial Intelligence",
    title: "AI-Powered Solutions, Agentic AI, & Governance",
    description: "Our AI solutions integrate Microsoft Azure AI, Azure OpenAI, and Copilot for Microsoft 365 to enhance productivity, automate workflows, and support decision-making—while maintaining governance, ethics, and regulatory compliance. We also help organizations adopt agentic AI systems with the guardrails required for regulated environments.",
    points: ["Microsoft Copilot deployment & readiness", "Intelligent automation & workflow optimization", "AI governance & ethical frameworks", "Azure OpenAI integration", "Agentic AI lifecycle governance", "Multi-agent system architecture"],
  },
  {
    icon: CloudArrowUp24Regular,
    category: "Cloud & Infrastructure",
    title: "Cloud Migration & Modernization",
    description: "Concepta provides secure cloud architecture solutions to help organizations migrate applications, modernize infrastructure, and build resilient hybrid environments aligned with compliance and Zero Trust principles.",
    points: ["Azure cloud architecture & migration", "Hybrid cloud & multi-cloud strategy", "Disaster recovery & backup solutions", "Secure configuration management"],
  },
  {
    icon: LockClosed24Regular,
    category: "Compliance & Risk",
    title: "Enterprise Risk Management & Compliance",
    description: "We help organizations meet compliance obligations including HIPAA, FISMA, NIST RMF, NIST 800-171, and CMMC through comprehensive security assessments, authority to operate documentation, and continuous monitoring.",
    points: ["HIPAA assessment & compliance programs", "FISMA & FedRAMP alignment", "NIST RMF & 800-171 compliance", "Supply chain risk management (SCRM)"],
  },
]

const caseStudies = [
  {
    category: "Ransomware Recovery",
    title: "G&J Pepsi: Overcoming a Ransomware Attack",
    description: "G&J Pepsi-Cola Bottlers avoided both loss of data and ransom payment when a ransomware attack threatened the company. Microsoft Azure and Microsoft Security were credited for the successful outcome.",
    result: "Zero data loss, no ransom paid, complete system recovery",
  },
  {
    category: "Cloud Transformation",
    title: "Georgia Banking Company: Cloud Adoption with Microsoft Security",
    description: "A growing bank completed its cloud transformation within 13 months and gained scalable security by replacing disconnected products with integrated Microsoft Security solutions.",
    result: "13-month cloud transformation with unified, scalable security",
  },
  {
    category: "Enterprise Security",
    title: "US LBM: Centralizing IT with Microsoft Security",
    description: "Building supplier US LBM centralized IT across multiple acquisitions by adopting Microsoft Sentinel and Microsoft 365 Defender for a complete SIEM and extended detection and response solution.",
    result: "Above-benchmark security score with unified XDR and SIEM",
  },
]

const frameworks = [
  {
    name: 'NIST RMF',
    desc: 'Risk Management Framework',
    logo: '/assets/frameworks/nist-rmf-graphic.png',
    logoAlt: 'NIST RMF graphic',
    href: 'https://csrc.nist.gov/projects/risk-management',
  },
  {
    name: 'NIST 800-171',
    desc: 'Protecting Controlled Unclassified Information',
    logo: '/assets/frameworks/171r3.svg',
    logoAlt: 'NIST SP 800-171 Revision 3 logo',
    href: 'https://www.device42.com/compliance-standards/nist-800-171-compliance-checklist/',
  },
  {
    name: 'FISMA',
    desc: 'Federal Information Security Modernization Act',
    logo: '/assets/frameworks/dhs-seal.png',
    logoAlt: 'U.S. Department of Homeland Security seal',
  },
  {
    name: 'HIPAA',
    desc: 'Health Insurance Portability & Accountability',
    logo: '/assets/frameworks/hhs-seal.png',
    logoAlt: 'U.S. Department of Health and Human Services seal',
  },
  {
    name: 'NIST CSF',
    desc: 'Cybersecurity Framework',
    logo: '/assets/frameworks/nist-mark.png',
    logoAlt: 'National Institute of Standards and Technology logo',
  },
  {
    name: 'Zero Trust',
    desc: 'NIST 800-207 Architecture',
    logo: '/assets/frameworks/nist-mark.png',
    logoAlt: 'National Institute of Standards and Technology logo',
  },
  {
    name: 'CMMC',
    desc: 'Cybersecurity Maturity Model Certification',
    logo: '/assets/frameworks/dod-seal.png',
    logoAlt: 'U.S. Department of Defense seal',
  },
  {
    name: 'FedRAMP',
    desc: 'Federal Risk & Authorization Management',
    logo: '/assets/frameworks/fedramp-logo-inverse.svg',
    logoAlt: 'FedRAMP logo',
  },
]

const msInsights = [
  {
    subsection: "Agentic AI & AI Governance",
    items: [
      {
        title: 'Microsoft "Customer Zero" – Enterprise Agentic AI Adoption',
        description: "How Microsoft deployed agentic AI internally to automate workflows, improve decision-making, and govern multi-agent systems at scale.",
      },
      {
        title: "Microsoft AI Infrastructure Governance Strategy",
        description: "Microsoft's internal governance model for responsible AI, covering safeguards, accountability, and risk management.",
      },
      {
        title: "Microsoft Multi-Agent Governance Reference Architecture",
        description: "A blueprint for governing agentic AI systems, including identity, access, data boundaries, and lifecycle controls.",
      },
      {
        title: "Microsoft AI Agent Governance Toolkit",
        description: "Open-source toolkit for enforcing policy, sandboxing, and guardrails for autonomous AI agents.",
      },
    ],
  },
  {
    subsection: "Cybersecurity & Threat Intelligence",
    items: [
      {
        title: "Microsoft Cyber Pulse (Latest Edition)",
        description: "Microsoft’s flagship threat intelligence report covering identity-based attacks, nation-state threats, ransomware trends, cloud vulnerabilities, and AI-enabled cyber threats.",
      },
      {
        title: "Microsoft Zero Trust Guidance for Regulated Industries",
        description: "Best practices for implementing Zero Trust across hybrid and multi-cloud environments.",
      },
    ],
  },
]

const industryResources = [
  {
    category: "Cloud & Infrastructure",
    items: [
      "Microsoft Cloud Adoption Framework",
      "Azure Well-Architected Framework",
      "AWS Well-Architected Framework",
      "AWS Security Reference Architecture",
      "Google Cloud Security Foundations Guide",
      "VMware Hybrid Cloud Security Architecture",
    ],
  },
  {
    category: "AI Governance & Responsible AI",
    items: [
      "NIST AI Risk Management Framework (AI RMF)",
      "ISO/IEC 42001 AI Management System Standard",
      "OECD AI Principles",
      "CISA/NSA AI Security Guidelines",
    ],
  },
  {
    category: "Cybersecurity & Zero Trust",
    items: [
      "NIST Zero Trust Architecture (SP 800-207)",
      "CISA Zero Trust Maturity Model",
      "MITRE ATT&CK Framework",
      "CIS Benchmarks (Windows, Linux, cloud, network devices)",
    ],
  },
  {
    category: "Compliance & Risk Management",
    items: [
      "FedRAMP Security Controls Baseline",
      "NIST Risk Management Framework (SP 800-37)",
      "NIST SP 800-171 Rev 3",
      "CMMC 2.0 Assessment Guide",
      "HIPAA Security Rule Toolkit",
      "Microsoft Compliance Offerings (Azure, M365, Dynamics)",
    ],
  },
]

export default function Resources() {
  return (
    <PageShell currentPage="Resources" headerTheme="light">
      <section className="relative overflow-hidden pt-[140px] pb-16 sm:pb-20" style={{ background: "var(--color-section-bg-alt)" }}>
        <InternalHeroBackground />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[680px]">
            <p className="hero-animate hero-label text-sm font-medium uppercase tracking-[0.24em]">
              Knowledge Center
            </p>
            <h1 className="hero-animate delay-1 mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[var(--brand-navy)]">
              Resources & Insights
            </h1>
            <p className="hero-animate delay-3 mt-8 text-base sm:text-lg leading-relaxed text-[var(--color-hero-body-muted)]">
              Insights, strategies, and real‑world outcomes across cybersecurity, AI, cloud, and compliance—designed for organizations operating in secure, regulated, and mission‑critical environments.
            </p>
          </div>
        </div>
      </section>

        {/* Topic Areas */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-surface-subtle)]">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold concepta-section-heading mb-4">Areas of Expertise</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Deep domain knowledge across the capabilities that matter most to regulated organizations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {topics.map((topic, index) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="concepta-card concepta-card-compact border-l-4 border-l-[var(--color-link)] bg-[linear-gradient(145deg,#ffffff_0%,#f4f8ff_100%)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <topic.icon className="concepta-card-icon text-[var(--color-link)]" />
                    <span className="text-xs text-[var(--color-link)] bg-blue-50 px-2.5 py-1 font-semibold uppercase tracking-wider">{topic.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold concepta-heading-h3 mb-3">{topic.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{topic.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {topic.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--color-link)] shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="concepta-inline-link inline-flex items-center text-sm font-medium hover:underline"
                  >
                    Discuss with our team
                    <ArrowRight24Regular className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold concepta-section-heading mb-4">Client Outcomes</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real results from organizations that partnered with Concepta and Microsoft to strengthen security and modernize operations.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="concepta-card concepta-card-subtle border-t-4 border-t-[var(--color-link)]"
                >
                  <span className="text-xs text-[var(--color-link)] bg-blue-100 px-2.5 py-1 font-semibold uppercase">{study.category}</span>
                  <h3 className="text-lg font-semibold concepta-heading-h3 mt-4 mb-3">{study.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{study.description}</p>
                  <div className="concepta-card concepta-card-tight bg-white">
                    <p className="text-sm text-[var(--color-link)] mb-1">Result</p>
                    <p className="text-sm text-gray-900 font-medium">{study.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Microsoft AI & Security Insights */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-surface-subtle)]">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold concepta-section-heading mb-4">Microsoft AI & Security Insights</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Authoritative Microsoft resources that support AI governance, agentic AI adoption, and modern cybersecurity practices in regulated environments.
              </p>
            </div>

            <div className="space-y-12">
              {msInsights.map((group) => (
                <div key={group.subsection}>
                  <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-6 pb-3 border-b border-blue-200">{group.subsection}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {group.items.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="concepta-card concepta-card-compact border-l-4 border-l-blue-200"
                      >
                        <h4 className="text-base font-semibold concepta-heading-h4 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Multi-Cloud & Industry Resources */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold concepta-section-heading mb-4">Multi-Cloud & Industry Resources</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Curated resources from AWS, Google Cloud, NIST, CISA, and other trusted organizations to support secure, compliant modernization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {industryResources.map((group, groupIndex) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="concepta-card concepta-card-compact border-l-4 border-l-[var(--color-link)]"
                >
                  <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">{group.category}</h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--color-link)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Frameworks & Standards */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-surface-muted)]">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold concepta-section-heading mb-4">Frameworks & Standards</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our solutions align with leading industry frameworks and regulatory requirements.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14">
              {frameworks.map((framework, index) => (
                <motion.div
                  key={framework.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  {framework.href ? (
                    <a
                      href={framework.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-md p-1 transition-transform duration-200 hover:-translate-y-0.5"
                      aria-label={`${framework.name} reference`}
                      title={framework.desc}
                    >
                      <Image
                        src={framework.logo}
                        alt={framework.logoAlt}
                        width={160}
                        height={56}
                        className="h-12 w-auto max-w-[160px] object-contain"
                      />
                    </a>
                  ) : (
                    <Image
                      src={framework.logo}
                      alt={framework.logoAlt}
                      width={160}
                      height={56}
                      className="h-12 w-auto max-w-[160px] object-contain"
                      title={framework.desc}
                    />
                  )}
                  <h3 className="mt-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                    {framework.href ? (
                      <a href={framework.href} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-link)] transition-colors">
                        {framework.name}
                      </a>
                    ) : (
                      framework.name
                    )}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

    </PageShell>
  )
}
