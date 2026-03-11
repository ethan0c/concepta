"use client";

import Header from "@/components/Header";
import { Footer, BottomFooter } from "@/components/layout";
import { HeroSection, CoreServicesSection, WhoWeServeSection, WhyChooseUsSection, ClosingCTASection, ResourcesInsightsSection } from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Home" />

      <main className="pt-16 sm:pt-20">
        <HeroSection />
        <CoreServicesSection />
        <WhoWeServeSection />
        <WhyChooseUsSection />
        <ResourcesInsightsSection />
        <ClosingCTASection />
        <Footer />
        <BottomFooter />
      </main>
    </div>
  );
}
