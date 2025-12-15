"use client";

import Image from "next/image";

interface Certification {
  label: string;
  hasImage?: boolean;
  imageSrc?: string;
}

interface Feature {
  title: string;
  description: string;
}

const defaultCertifications: Certification[] = [
  { label: "Microsoft Azure AI Partner" },
  { label: "ISO 27001 Certified" },
  { label: "SOC 2 Type II Compliant" },
  { label: "SBA Certified Partner", hasImage: true, imageSrc: "/assets/sba.jpg" },
];

const defaultFeatures: Feature[] = [
  {
    title: "Government-Grade Security",
    description:
      "FedRAMP, FISMA, and SOC 2 compliant solutions for the most demanding security requirements.",
  },
  {
    title: "Microsoft Certified Experts",
    description:
      "Our team holds advanced Azure certifications and maintains direct relationships with Microsoft engineering teams.",
  },
  {
    title: "Rapid Deployment",
    description:
      "Accelerated implementation timelines with minimal business disruption using proven methodologies.",
  },
];

interface WhyChooseUsSectionProps {
  title?: string;
  description?: string;
  certifications?: Certification[];
  features?: Feature[];
  ctaTitle?: string;
  ctaDescription?: string;
  phone?: string;
}

export default function WhyChooseUsSection({
  title = "Why Choose Concepta Innovation Services?",
  description = "As a Microsoft Azure AI Partner, we combine deep technical expertise with proven industry experience to deliver transformative cybersecurity and technology solutions. We help government contractors, Fortune 500 companies, and growing enterprises achieve secure digital transformation through innovative technology solutions.",
  certifications = defaultCertifications,
  features = defaultFeatures,
  ctaTitle = "Ready to Get Started?",
  ctaDescription = "Schedule a consultation with our cybersecurity experts to discuss your specific requirements and develop a customized solution strategy.",
  phone = "(877)-594-1944",
}: WhyChooseUsSectionProps) {
  return (
    <section className="py-10 bg-gray-50">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="cisco-headline text-gray-900 mb-3">{title}</h2>
            <p className="cisco-body-midsize text-gray-600 mb-4 leading-relaxed">
              {description}
            </p>

            {/* Certifications & Badges */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-white rounded-lg border border-gray-200"
                >
                  {cert.hasImage && cert.imageSrc ? (
                    <Image
                      src={cert.imageSrc}
                      alt={cert.label}
                      width={24}
                      height={24}
                      className="w-6 h-6 mr-3 flex-shrink-0"
                    />
                  ) : (
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                  )}
                  <span className="cisco-body-large font-cisco-medium text-gray-700">
                    {cert.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 relative overflow-hidden"
                    style={{
                      background:
                        "radial-gradient(circle at top left, #0B4BBB, #082E84 70%)",
                    }}
                  >
                    <svg
                      className="w-3 h-3 text-white relative z-10"
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
                  <div className="ml-4">
                    <h3 className="cisco-h6 font-cisco-medium text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="cisco-h6 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="rounded-lg p-8 text-white relative overflow-hidden"
              style={{
                background:
                  "radial-gradient(circle at top left, #0B4BBB, #082E84 70%)",
              }}
            >
              {/* Subtle overlay pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="card-mesh"
                      x="0"
                      y="0"
                      width="50"
                      height="50"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="25"
                        cy="25"
                        r="0.5"
                        fill="white"
                        opacity="0.4"
                      />
                      <line
                        x1="25"
                        y1="0"
                        x2="25"
                        y2="50"
                        stroke="white"
                        strokeWidth="0.1"
                        opacity="0.2"
                      />
                      <line
                        x1="0"
                        y1="25"
                        x2="50"
                        y2="25"
                        stroke="white"
                        strokeWidth="0.1"
                        opacity="0.2"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#card-mesh)" />
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="cisco-h5 font-cisco-medium mb-6">{ctaTitle}</h3>
                <p className="mb-6 opacity-90">{ctaDescription}</p>
                <div className="space-y-4">
                  <button className="w-full bg-white text-blue-900 px-6 py-3 rounded font-cisco-medium hover:bg-blue-50 transition-colors">
                    Schedule Free Consultation
                  </button>
                  <button className="w-full border border-white text-white px-6 py-3 rounded font-cisco-medium hover:bg-white hover:text-blue-900 transition-all">
                    Download Security Assessment Guide
                  </button>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-600 text-center">
                  <p className="cisco-body-midsize opacity-75">
                    Or call us directly:
                  </p>
                  <p className="cisco-h6 font-cisco-medium">{phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
