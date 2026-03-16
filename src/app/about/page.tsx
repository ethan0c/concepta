import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Concepta Innovation Services",
  description: "Mission-aligned IT for secure, regulated, and mission-critical environments through AI-enabled automation, cybersecurity, cloud, and professional IT services.",
  openGraph: {
    title: "About Concepta Innovation Services",
    description: "Empowering government and industry with secure, intelligent, and mission-ready technology solutions.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
