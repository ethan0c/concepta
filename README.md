# Concepta Innovation Systems

A modern, responsive Next.js website for **Concepta Innovation Systems**, a Microsoft Azure AI Partner specializing in cybersecurity and technology solutions for government and enterprise clients.

## Features

- 🔒 **Modern Design**: Clean, professional corporate website with deep blue (#0B4BBB) branding
- 📱 **Responsive**: Mobile-first design that works perfectly on all devices
- ⚡ **Fast**: Built with Next.js 15 and optimized for performance
- 🎨 **Animations**: Smooth scroll animations using Framer Motion with a static branded home hero visual
- 🔍 **Accessible**: Clean, semantic HTML structure with proper accessibility
- 🎯 **SEO Ready**: Optimized for search engines

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel/Azure

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main homepage with all sections
│   └── globals.css     # Global styles
└── components/         # Reusable components (future expansion)
```

## Sections

- **Header**: Logo, navigation, search, contact info, CTA button
- **Hero**: Main headline and company description with static branded visual
- **Solutions**: Core service offerings (Security, AI, Cloud)
- **Professional Solutions**: Detailed service grid
- **News & Events**: Latest articles and insights
- **Footer**: Contact information, newsletter signup, legal links

## Customization

The website uses Tailwind CSS for styling with custom colors defined in `tailwind.config.ts`:
- Primary: `#0B4BBB` (Concepta Blue)
- Background: White
- Accent: Light gray

## Deployment

This project is ready to deploy on:
- **Vercel** (recommended)
- **Azure Static Web Apps**
- **Netlify**
- Any other hosting platform that supports Next.js

## Contact

For questions about this website, contact:
- Email: support@conceptainnovation.com
- Phone: (877)-594-1944

---

© 2022, Concepta Innovation Systems, LLC
