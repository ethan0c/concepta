"use client";

import { PageShell } from "@/components/layout";
import { HeroSection, CoreServicesSection, WhoWeServeSection, WhyChooseUsSection, ClosingCTASection } from "@/components/sections";

export default function Home() {
  return (
    <PageShell currentPage="Home">
      <HeroSection />
      <div className="bg-[var(--color-page-bg)]">
        <CoreServicesSection />
        <WhoWeServeSection />
        <WhyChooseUsSection />
        <ClosingCTASection />
      </div>
    </PageShell>
  );
}
