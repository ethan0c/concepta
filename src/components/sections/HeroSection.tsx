import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";

export default function HeroSection() {
  return (
    <section className="hero">
      <HeroBackground />

      <div className="hero-content max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-inner min-h-[56vh] sm:min-h-[60vh] lg:min-h-[64vh] flex items-center">
          <div>
            <h1 className="hero-title hero-headline font-semibold tracking-tight">
              Modern IT solutions for secure, regulated, and mission-critical environments
            </h1>

            <p className="hero-body hero-subheadline leading-relaxed font-light">
              AI-enabled. Security-first. Mission-aligned.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/contact"
                className="hero-cta inline-flex items-center justify-center bg-[#1E3A8A] text-white text-sm hover:bg-[#1e40af]"
              >
                Talk to an Expert
                <svg className="w-4 h-4 ml-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/solutions"
                className="hero-cta inline-flex items-center justify-center border border-[var(--color-primary)] bg-white text-[var(--color-primary)] text-sm hover:bg-blue-50 hover:text-[var(--color-primary-hover)]"
              >
                Explore Our Capabilities
                <svg className="w-4 h-4 ml-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <p className="hero-body-muted mt-5 text-xs sm:text-sm leading-relaxed">
              Designed for organizations operating in secure, governed, and mission‑critical environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
