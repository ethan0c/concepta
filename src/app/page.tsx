"use client";

import Header from "@/components/Header";
import { Footer, BottomFooter } from "@/components/layout";
import { HeroSection, CoreServicesSection, WhyChooseUsSection, ResourcesInsightsSection } from "@/components/sections";

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Home" />

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        <HeroSection />
        <CoreServicesSection />
        <WhyChooseUsSection />
        <ResourcesInsightsSection />
        <Footer />
        <BottomFooter />
      </main>
    </div>
  );
}
