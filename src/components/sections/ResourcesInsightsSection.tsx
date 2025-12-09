"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Article {
  category: string;
  title: string;
  description: string;
  publishedDate: string;
  readTime: string;
  href: string;
  linkText: string;
}

interface CaseStudy {
  category: string;
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
  href: string;
  linkText: string;
}

interface Partner {
  src: string;
  alt: string;
}

const defaultArticle: Article = {
  category: "LATEST INSIGHTS",
  title: "Unleashing the Power of Generative AI in Enterprise Security",
  description:
    "Discover how organizations are leveraging Azure OpenAI and advanced AI technologies to enhance threat detection, automate incident response, and strengthen their cybersecurity posture.",
  publishedDate: "August 10, 2025",
  readTime: "5 min read",
  href: "#",
  linkText: "Read Full Article",
};

const defaultCaseStudy: CaseStudy = {
  category: "CASE STUDY",
  title: "Revolutionizing Modern Cybersecurity for Fortune 500 Manufacturing",
  description:
    "Learn how we helped a leading manufacturing company implement zero-trust architecture, reducing security incidents by 85% while improving operational efficiency across 50+ global locations.",
  metrics: [
    { value: "85%", label: "Incident Reduction" },
    { value: "60%", label: "Cost Savings" },
    { value: "30 Days", label: "Implementation" },
  ],
  href: "#",
  linkText: "View Case Study",
};

const defaultResources = [
  "Microsoft Azure Security Best Practices Guide",
  "AI-Powered Threat Detection Whitepaper",
  "Compliance Framework Comparison Chart",
  "Digital Marketing Content (microsoft.com)",
];

const defaultPartners: Partner[] = [
  { src: "/assets/partners/Acer-Logo.png", alt: "Acer" },
  { src: "/assets/partners/Cisco-Logo.png", alt: "Cisco" },
  { src: "/assets/partners/dell.png", alt: "Dell Technologies" },
  { src: "/assets/partners/DH-80px_2019.png", alt: "DH" },
  { src: "/assets/partners/HP-Logo.png", alt: "HP" },
  {
    src: "/assets/partners/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png",
    alt: "IBM",
  },
  {
    src: "/assets/partners/purepng.com-ingram-micro-logologobrand-logoiconslogos-25151993953320b2j.png",
    alt: "Ingram Micro",
  },
  { src: "/assets/partners/Microsoft-Logo.png", alt: "Microsoft" },
  { src: "/assets/partners/logo-arrow-five-years-out.svg", alt: "Arrow" },
];

const defaultPartnerBenefits = [
  "Direct access to latest technology innovations",
  "Specialized training and certifications",
  "Priority support and escalation paths",
  "Collaborative solution development",
];

interface ResourcesInsightsSectionProps {
  title?: string;
  subtitle?: string;
  article?: Article;
  caseStudy?: CaseStudy;
  resources?: string[];
  partners?: Partner[];
  partnerBenefits?: string[];
}

export default function ResourcesInsightsSection({
  title = "Resources & Insights",
  subtitle = "Stay ahead with the latest cybersecurity insights, industry best practices, and technology partnerships",
  article = defaultArticle,
  caseStudy = defaultCaseStudy,
  resources = defaultResources,
  partners = defaultPartners,
  partnerBenefits = defaultPartnerBenefits,
}: ResourcesInsightsSectionProps) {
  return (
    <section className="py-10 bg-gray-50">
      <div className="page-container">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="cisco-headline font-cisco-medium text-gray-900 mb-4">
            {title}
          </h2>
          <p className="cisco-h5 text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Articles & Resources */}
          <div className="space-y-12">
            {/* Featured Article */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="cisco-body-large text-blue-600 font-cisco-medium mb-3 flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                {article.category}
              </div>
              <h3 className="cisco-h3 font-cisco-medium text-gray-900 mb-4">
                {article.title}
              </h3>
              <p className="cisco-body-midsize text-gray-600 mb-6 leading-relaxed">
                {article.description}
              </p>
              <div className="flex items-center cisco-body-large text-gray-500 mb-4">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Published: {article.publishedDate}</span>
                <span className="mx-2">•</span>
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{article.readTime}</span>
              </div>
              <a
                href={article.href}
                className="text-blue-600 hover:text-blue-700 font-cisco-medium inline-flex items-center group"
              >
                {article.linkText}
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.div>

            {/* Case Study */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="cisco-body-large text-blue-600 font-cisco-medium mb-3 flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                {caseStudy.category}
              </div>
              <h3 className="cisco-h3 font-cisco-medium text-gray-900 mb-4">
                {caseStudy.title}
              </h3>
              <p className="cisco-body-midsize text-gray-600 mb-6 leading-relaxed">
                {caseStudy.description}
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {caseStudy.metrics.map((metric, index) => (
                    <div key={index}>
                      <div className="cisco-h3 font-cisco-bold text-blue-600">
                        {metric.value}
                      </div>
                      <div className="cisco-body-large text-gray-600">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={caseStudy.href}
                className="text-blue-600 hover:text-blue-700 font-cisco-medium inline-flex items-center group"
              >
                {caseStudy.linkText}
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.div>

            {/* Resources Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-100"
            >
              <div className="cisco-body-midsize text-blue-600 font-cisco-medium mb-3 flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                RESOURCES
              </div>
              <h3 className="cisco-h6 font-cisco-medium text-gray-900 mb-6">
                Additional Resources
              </h3>
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center text-blue-600 hover:text-blue-700 font-cisco-medium group py-2 px-3 rounded hover:bg-blue-50 transition-all"
                  >
                    <svg
                      className="w-4 h-4 mr-3 group-hover:translate-x-1 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {resource}
                  </a>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-cisco-medium inline-flex items-center group"
                >
                  View All Resources
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Technology Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100 h-full">
              <h2 className="cisco-h5 font-cisco-medium text-gray-900 mb-6">
                Our Technology Partners
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Concepta partners with leading technology companies and cloud
                service providers to deliver continuous innovation and compliant
                services to our customers. This provides access to specialized
                training and collaboration with them on their technologies.
              </p>

              {/* Partner Logos Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-6 items-center text-center mb-6">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="h-12 md:h-14 flex items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={80}
                      height={40}
                      className="max-h-8 md:max-h-10 w-auto grayscale hover:grayscale-0 transition-all duration-200 opacity-80 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>

              {/* Partnership Benefits */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5 md:p-6">
                <h3 className="cisco-h6 font-cisco-medium text-gray-900 mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Partnership Benefits
                </h3>
                <ul className="space-y-2 md:space-y-3 cisco-body-midsize text-gray-600">
                  {partnerBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mr-3"
                        style={{
                          background:
                            "radial-gradient(circle at top left, #0B4BBB, #082E84 70%)",
                        }}
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
