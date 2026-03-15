import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  fallback: ["Arial", "Helvetica Neue", "Helvetica", "sans-serif"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B4BBB",
};

export const metadata: Metadata = {
  title: "Concepta Innovation Services | Microsoft Azure AI Partner",
  description: "Concepta Innovation Services is an information technology and cybersecurity firm providing comprehensive IT and Cybersecurity Solutions through innovation, security, and resilience. Microsoft Azure AI Partner specializing in government and enterprise solutions.",
  icons: {
    icon: "/logo-small.png",
  },
  keywords: "cybersecurity, IT solutions, Microsoft Azure, AI partner, government technology, enterprise security, cloud migration, cybersecurity consulting",
  authors: [{ name: "Concepta Innovation Services" }],
  creator: "Concepta Innovation Services",
  publisher: "Concepta Innovation Services",
  robots: "index, follow",
  openGraph: {
    title: "Concepta Innovation Services | Microsoft Azure AI Partner",
    description: "Comprehensive IT and Cybersecurity Solutions through innovation, security, and resilience.",
    url: "https://conceptainnovation.com",
    siteName: "Concepta Innovation Services",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concepta Innovation Services | Microsoft Azure AI Partner",
    description: "Comprehensive IT and Cybersecurity Solutions through innovation, security, and resilience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
