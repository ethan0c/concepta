"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="pt-8 md:pt-12 pb-8 md:pb-12 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(11, 75, 187, 0.85), rgba(8, 46, 132, 0.85)), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Subtle Tech Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="mesh"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="1" fill="white" opacity="0.3" />
              <circle cx="25" cy="25" r="0.5" fill="white" opacity="0.2" />
              <circle cx="75" cy="25" r="0.5" fill="white" opacity="0.2" />
              <circle cx="25" cy="75" r="0.5" fill="white" opacity="0.2" />
              <circle cx="75" cy="75" r="0.5" fill="white" opacity="0.2" />
              <line
                x1="50"
                y1="0"
                x2="50"
                y2="100"
                stroke="white"
                strokeWidth="0.2"
                opacity="0.1"
              />
              <line
                x1="0"
                y1="50"
                x2="100"
                y2="50"
                stroke="white"
                strokeWidth="0.2"
                opacity="0.1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh)" />
        </svg>
      </div>

      <div className="page-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <h1 className="cisco-headline text-white leading-tight">
              Cyber Solutions built on Innovation
            </h1>

            <p className="cisco-h6 text-blue-100 leading-relaxed max-w-xl">
              Concepta is an information technology and cybersecurity firm
              delivering secure, modern solutions across cloud, AI, and
              enterprise infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded cisco-body-large font-cisco-medium transition-colors">
                Explore Solutions
              </button>
              <button className="text-white border border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded cisco-body-large font-cisco-medium transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>

          {/* Right Column - Microsoft Partnership */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 rounded-lg p-6 md:p-8 backdrop-blur-sm border border-white/20">
              {/* Partnership Header */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-white cisco-body-large font-cisco-medium">
                    Microsoft Partner
                  </span>
                </div>
              </div>

              {/* Microsoft Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center mb-6"
              >
                <Image
                  src="/assets/partners/Microsoft-Logo.png"
                  alt="Microsoft Partner"
                  width={180}
                  height={40}
                  className="h-10 w-auto brightness-0 invert"
                />
              </motion.div>

              {/* Partnership Badges */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white/10 rounded-lg p-4 text-center border border-white/10"
                >
                  <div className="text-white cisco-body-large font-cisco-bold mb-1">
                    Azure AI
                  </div>
                  <div className="text-blue-200 text-xs">
                    Partner
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-white/10 rounded-lg p-4 text-center border border-white/10"
                >
                  <div className="text-white cisco-body-large font-cisco-bold mb-1">
                    Security
                  </div>
                  <div className="text-blue-200 text-xs">
                    Specialization
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="bg-white/10 rounded-lg p-4 text-center border border-white/10"
                >
                  <div className="text-white cisco-body-large font-cisco-bold mb-1">
                    Cloud
                  </div>
                  <div className="text-blue-200 text-xs">
                    Solutions
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-white/10 rounded-lg p-4 text-center border border-white/10"
                >
                  <div className="text-white cisco-body-large font-cisco-bold mb-1">
                    Copilot
                  </div>
                  <div className="text-blue-200 text-xs">
                    Ready
                  </div>
                </motion.div>
              </div>

              {/* Partnership Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg border border-white/10 p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-blue-200 cisco-body-small font-cisco-medium">
                    Certified Expertise
                  </span>
                  <div className="flex items-center space-x-2">
                    <motion.div
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-green-400 rounded-full"
                    />
                    <span className="text-green-400 cisco-body-small font-cisco-bold">
                      Verified
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-6 text-center">
                  <div>
                    <div className="text-white cisco-h5 font-cisco-bold">15+</div>
                    <div className="text-blue-200 text-xs">Years</div>
                  </div>
                  <div className="h-8 w-px bg-white/20"></div>
                  <div>
                    <div className="text-white cisco-h5 font-cisco-bold">500+</div>
                    <div className="text-blue-200 text-xs">Clients</div>
                  </div>
                  <div className="h-8 w-px bg-white/20"></div>
                  <div>
                    <div className="text-white cisco-h5 font-cisco-bold">100%</div>
                    <div className="text-blue-200 text-xs">Certified</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
