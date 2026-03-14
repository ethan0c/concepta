"use client";

import { PageShell } from "@/components/layout";
import { HeroSection, CoreServicesSection, WhoWeServeSection, PartnerNetworkSection, WhyChooseUsSection, ClosingCTASection } from "@/components/sections";

export default function Home() {
  return (
    <PageShell currentPage="Home" headerTheme="light">
      <HeroSection />
      <div className="bg-[var(--color-page-bg)]">
        <CoreServicesSection />
        <WhoWeServeSection />
        <PartnerNetworkSection />
        <WhyChooseUsSection />
        <ClosingCTASection />
      </div>
    </PageShell>
  );
}
