import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-cisco)', 'system-ui', 'sans-serif'],
        'cisco': ['var(--font-cisco)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Cisco Momentum Design System Typography Scale
        'cisco-small': ['12px', '16px'],
        'cisco-midsize': ['14px', '20px'], 
        'cisco-large': ['16px', '24px'],
        'cisco-h6': ['20px', '28px'],
        'cisco-h5': ['24px', '32px'],
        'cisco-h4': ['32px', '40px'],
        'cisco-h3': ['32px', '40px'],
        'cisco-h2': ['40px', '52px'],
        'cisco-h1': ['40px', '52px'],
        'cisco-headline': ['52px', '64px'],
      },
      fontWeight: {
        // Cisco Momentum Standard Weights
        'cisco-light': '300',
        'cisco-regular': '400', 
        'cisco-medium': '500',
        'cisco-bold': '700',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'concepta-blue': '#0B4BBB',
        primary: {
          blue: '#0B4BBB',
          cyan: '#00B5E2',
        },
        secondary: {
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6', 
            600: '#4B5563',
            900: '#111827',
          }
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(60px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
