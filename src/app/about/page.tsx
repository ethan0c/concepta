import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Concepta Innovation Services",
  description: "Learn about Concepta Innovation Services - a Microsoft Azure AI Partner providing innovative IT and cybersecurity solutions for government and enterprise clients since 2009.",
  openGraph: {
    title: "About Concepta Innovation Services",
    description: "Microsoft Azure AI Partner delivering innovative IT and cybersecurity solutions.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
