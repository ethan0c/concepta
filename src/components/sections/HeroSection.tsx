import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";

export default function HeroSection() {
  return (
    <section className="relative bg-[#161616] overflow-hidden">
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] pt-[80px] pb-[60px] sm:pt-[100px] sm:pb-[80px] lg:pt-[100px] lg:pb-[80px] flex items-center">
          <div className="max-w-4xl">
            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-semibold text-white leading-[1.1] tracking-tight mb-8 sm:mb-10">
              Technology for regulated environments. Done right.
            </h1>

            {/* H2 */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-light">
              AI, cybersecurity, and modern IT services built for secure, governed operations.
            </p>

            {/* CTA */}
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-7 py-4 bg-[#0B4BBB] text-white text-sm font-medium hover:bg-[#0a3d9c] transition-colors"
            >
              Explore Our Services
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
