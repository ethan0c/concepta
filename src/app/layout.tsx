import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Concepta Innovation Systems | Microsoft Azure AI Partner",
  description: "Concepta Innovation Systems is an information technology and cybersecurity firm providing comprehensive IT and Cybersecurity Solutions through innovation, security, and resilience. Microsoft Azure AI Partner specializing in government and enterprise solutions.",
  keywords: "cybersecurity, IT solutions, Microsoft Azure, AI partner, government technology, enterprise security, cloud migration, cybersecurity consulting",
  authors: [{ name: "Concepta Innovation Systems" }],
  creator: "Concepta Innovation Systems",
  publisher: "Concepta Innovation Systems",
  robots: "index, follow",
  openGraph: {
    title: "Concepta Innovation Systems | Microsoft Azure AI Partner",
    description: "Comprehensive IT and Cybersecurity Solutions through innovation, security, and resilience.",
    url: "https://conceptainnovation.com",
    siteName: "Concepta Innovation Systems",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concepta Innovation Systems | Microsoft Azure AI Partner",
    description: "Comprehensive IT and Cybersecurity Solutions through innovation, security, and resilience.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0B4BBB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
