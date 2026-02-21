"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Article {
  category: string;
  title: string;
  description: string;
  publishedDate: string;
  readTime: string;
  href: string;
  image: string;
}

interface CaseStudy {
  category: string;
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
  href: string;
}

interface Partner {
  src: string;
  alt: string;
}

const defaultArticle: Article = {
  category: "Latest Insights",
  title: "Unleashing the Power of Generative AI in Enterprise Security",
  description:
    "Discover how organizations leverage Azure OpenAI to enhance threat detection, automate incident response, and strengthen cybersecurity posture.",
  publishedDate: "December 2024",
  readTime: "5 min read",
  href: "/resources",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
};

const defaultCaseStudy: CaseStudy = {
  category: "Case Study",
  title: "Zero-Trust Architecture for Fortune 500 Manufacturing",
  description:
    "How we helped a leading manufacturer reduce security incidents by 85% while improving operational efficiency across 50+ global locations.",
  metrics: [
    { value: "85%", label: "Incident Reduction" },
    { value: "60%", label: "Cost Savings" },
    { value: "30 Days", label: "Implementation" },
  ],
  href: "/resources",
};

const defaultPartners: Partner[] = [
  { src: "/assets/partners/Acer-Logo.png", alt: "Acer" },
  { src: "/assets/partners/Cisco-Logo.png", alt: "Cisco" },
  { src: "/assets/partners/dell.png", alt: "Dell Technologies" },
  { src: "/assets/partners/DH-80px_2019.png", alt: "DH" },
  { src: "/assets/partners/HP-Logo.png", alt: "HP" },
  { src: "/assets/partners/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png", alt: "IBM" },
  { src: "/assets/partners/purepng.com-ingram-micro-logologobrand-logoiconslogos-25151993953320b2j.png", alt: "Ingram Micro" },
  { src: "/assets/partners/Microsoft-Logo.png", alt: "Microsoft" },
  { src: "/assets/partners/logo-arrow-five-years-out.svg", alt: "Arrow" },
];

interface ResourcesInsightsSectionProps {
  title?: string;
  subtitle?: string;
  article?: Article;
  caseStudy?: CaseStudy;
  partners?: Partner[];
}

export default function ResourcesInsightsSection({
  title = "Resources & Insights",
  subtitle = "Stay ahead with the latest cybersecurity insights and technology partnerships.",
  article = defaultArticle,
  caseStudy = defaultCaseStudy,
  partners = defaultPartners,
}: ResourcesInsightsSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="page-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="cisco-headline text-gray-900 mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-500 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {/* Featured Article - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href={article.href} className="group block bg-[#f4f4f4] hover:bg-[#e8e8e8] transition-colors h-full">
              <div className="grid sm:grid-cols-2 h-full">
                {/* Image */}
                <div className="relative h-48 sm:h-full min-h-[200px]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Content */}
                <div className="p-5 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-medium text-[#0B4BBB] uppercase tracking-wider">
                      {article.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3 mb-3 group-hover:text-[#0B4BBB] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {article.publishedDate} &middot; {article.readTime}
                    </span>
                    <svg
                      className="w-5 h-5 text-[#0B4BBB] group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={caseStudy.href} className="group block bg-[#161616] text-white p-6 sm:p-8 h-full hover:bg-[#262626] transition-colors">
              <span className="text-xs font-medium text-[#4589ff] uppercase tracking-wider">
                {caseStudy.category}
              </span>
              <h3 className="text-lg font-semibold mt-3 mb-3 leading-snug">
                {caseStudy.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
                {caseStudy.description}
              </p>
              {/* Metrics */}
              <div className="space-y-4 mb-6">
                {caseStudy.metrics.map((metric, index) => (
                  <div key={index} className="flex items-baseline justify-between border-t border-white/10 pt-3">
                    <span className="text-xs text-gray-400">{metric.label}</span>
                    <span className="text-xl font-semibold text-white">{metric.value}</span>
                  </div>
                ))}
              </div>
              <span className="inline-flex items-center text-sm font-medium text-[#4589ff] group-hover:text-white transition-colors">
                View case study
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Technology Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="border-t border-gray-200 pt-10 sm:pt-14">
            <div className="text-center mb-8">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">
                Technology Partners
              </h3>
              <p className="text-sm text-gray-500">
                We partner with leading technology companies to deliver innovative solutions.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-2"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={80}
                    height={40}
                    className="max-h-7 sm:max-h-9 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
