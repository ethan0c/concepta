"use client";

interface BottomFooterProps {
  companyName?: string;
  year?: number;
}

export default function BottomFooter({
  companyName = "Concepta Innovation Services, LLC",
  year = 2025,
}: BottomFooterProps) {
  const links = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security", href: "#" },
    { label: "Accessibility", href: "#" },
  ];

  return (
    <section
      className="py-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="bottom-pattern"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="60"
                cy="60"
                r="1.5"
                fill="#0B4BBB"
                opacity="0.4"
              />
              <circle
                cx="30"
                cy="30"
                r="0.8"
                fill="#0B4BBB"
                opacity="0.3"
              />
              <circle
                cx="90"
                cy="30"
                r="0.8"
                fill="#0B4BBB"
                opacity="0.3"
              />
              <circle
                cx="30"
                cy="90"
                r="0.8"
                fill="#0B4BBB"
                opacity="0.3"
              />
              <circle
                cx="90"
                cy="90"
                r="0.8"
                fill="#0B4BBB"
                opacity="0.3"
              />
              <line
                x1="60"
                y1="0"
                x2="60"
                y2="120"
                stroke="#0B4BBB"
                strokeWidth="0.3"
                opacity="0.2"
              />
              <line
                x1="0"
                y1="60"
                x2="120"
                y2="60"
                stroke="#0B4BBB"
                strokeWidth="0.3"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bottom-pattern)" />
        </svg>
      </div>

      <div className="page-container relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 lg:mb-0">
            <p className="text-gray-700 cisco-body-large">
              © {year} {companyName}. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 cisco-body-large">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 cisco-body-large">Follow Us:</span>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
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
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
