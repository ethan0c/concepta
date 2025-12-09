"use client";

import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  phone?: string;
  email?: string;
  services?: FooterLink[];
}

export default function Footer({
  phone = "(123) 455-7880",
  email = "info@conceptainnovation.com",
  services = [
    { label: "Cybersecurity", href: "#" },
    { label: "AI Solutions", href: "#" },
    { label: "Cloud Migration", href: "#" },
  ],
}: FooterProps) {
  return (
    <footer
      className="text-white py-6 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top left, #0B4BBB, #082E84 70%)",
      }}
    >
      {/* Subtle Tech Pattern Overlay */}
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="footer-mesh"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="40" cy="40" r="0.8" fill="white" opacity="0.3" />
              <circle cx="20" cy="20" r="0.4" fill="white" opacity="0.2" />
              <circle cx="60" cy="20" r="0.4" fill="white" opacity="0.2" />
              <circle cx="60" cy="60" r="0.4" fill="white" opacity="0.2" />
              <line
                x1="40"
                y1="0"
                x2="40"
                y2="80"
                stroke="white"
                strokeWidth="0.15"
                opacity="0.1"
              />
              <line
                x1="0"
                y1="40"
                x2="80"
                y2="40"
                stroke="white"
                strokeWidth="0.15"
                opacity="0.1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-mesh)" />
        </svg>
      </div>

      <div className="page-container relative z-10">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                <Image
                  src="/assets/logo.png?v=2"
                  alt="Concepta Innovation Systems"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div className="ml-3">
                <div className="cisco-h6">Concepta</div>
                <div className="text-blue-200 cisco-body-midsize">
                  Innovation Services
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="cisco-body-large font-cisco-medium mb-3 text-blue-200">
              Services
            </h4>
            <ul className="space-y-2 cisco-body-large text-blue-100">
              {services.map((service) => (
                <li key={service.label}>
                  <a href={service.href} className="hover:text-white transition-colors">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="cisco-body-large font-cisco-medium mb-3 text-blue-200">
              Contact
            </h4>
            <div className="space-y-2 cisco-body-large text-blue-100">
              <div>
                <a
                  href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {phone}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-white transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="cisco-body-large font-cisco-medium mb-3 text-blue-200">
              Newsletter
            </h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-3 py-2 bg-blue-800/50 border border-blue-600/50 rounded text-white cisco-body-large placeholder-blue-300 focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent"
              />
              <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded cisco-body-large font-cisco-medium transition-colors">
                Subscribe
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="text-blue-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-blue-600/50 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center cisco-body-midsize text-blue-200">
            <p>© 2025 Concepta Innovation Services. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
