"use client";

import { motion } from "framer-motion";

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

          {/* Right Column - Dashboard Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-blue-800/30 rounded-lg p-6 md:p-8 backdrop-blur-sm border border-blue-600/30">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="h-2 bg-blue-400 rounded-full w-24"></div>
                <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-16 bg-gradient-to-br from-blue-700/40 to-blue-800/60 rounded-lg border border-blue-500/30 flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300 hover:border-green-400/50"
                >
                  <div className="text-green-400 cisco-body-small font-cisco-bold drop-shadow-lg">
                    99.9%
                  </div>
                  <div className="text-blue-200 text-xs font-cisco-medium">
                    Uptime
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-16 bg-gradient-to-br from-blue-700/40 to-blue-800/60 rounded-lg border border-blue-500/30 flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300 hover:border-blue-400/50"
                >
                  <div className="text-blue-300 cisco-body-small font-cisco-bold drop-shadow-lg">
                    24/7
                  </div>
                  <div className="text-blue-200 text-xs font-cisco-medium">
                    Monitoring
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-16 bg-gradient-to-br from-blue-700/40 to-blue-800/60 rounded-lg border border-blue-500/30 flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300 hover:border-green-400/50"
                >
                  <div className="text-green-400 cisco-body-small font-cisco-bold drop-shadow-lg">
                    0
                  </div>
                  <div className="text-blue-200 text-xs font-cisco-medium">
                    Threats
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-16 bg-gradient-to-br from-blue-700/40 to-blue-800/60 rounded-lg border border-blue-500/30 flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300 hover:border-green-400/50"
                >
                  <div className="text-green-400 cisco-body-small font-cisco-bold drop-shadow-lg">
                    256
                  </div>
                  <div className="text-blue-200 text-xs font-cisco-medium">
                    Secured
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-16 bg-gradient-to-br from-blue-700/40 to-blue-800/60 rounded-lg border border-blue-500/30 flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300 hover:border-blue-400/50"
                >
                  <div className="text-blue-300 cisco-body-small font-cisco-bold drop-shadow-lg">
                    15ms
                  </div>
                  <div className="text-blue-200 text-xs font-cisco-medium">
                    Response
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-16 bg-gradient-to-br from-blue-700/40 to-blue-800/60 rounded-lg border border-blue-500/30 flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300 hover:border-green-400/50"
                >
                  <div className="text-green-400 cisco-body-small font-cisco-bold drop-shadow-lg">
                    100%
                  </div>
                  <div className="text-blue-200 text-xs font-cisco-medium">
                    Protected
                  </div>
                </motion.div>
              </div>

              {/* Dashboard Main Area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="h-28 md:h-32 bg-gradient-to-br from-blue-700/40 via-blue-800/50 to-blue-900/60 rounded-lg border border-blue-500/30 p-4 flex flex-col justify-between backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-blue-200 cisco-body-small font-cisco-medium">
                    System Status
                  </span>
                  <div className="flex items-center space-x-2">
                    <motion.div
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-green-400 rounded-full shadow-sm"
                    />
                    <span className="text-green-400 cisco-body-small font-cisco-bold">
                      All Systems Operational
                    </span>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="flex justify-between cisco-body-small text-blue-200 mb-1">
                    <span className="font-cisco-medium">Security Score</span>
                    <span className="font-cisco-bold text-green-400">
                      98/100
                    </span>
                  </div>
                  <div className="w-full bg-blue-800/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "98%" }}
                      transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                      className="h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400"
                    />
                  </div>
                </div>

                <div className="text-center mt-2">
                  <span className="text-white cisco-body-large font-cisco-bold">
                    Secure. Modern. Scalable.
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
