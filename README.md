# Concepta Innovation Systems

A modern, responsive Next.js website for **Concepta Innovation Systems**, a Microsoft Azure AI Partner specializing in cybersecurity and technology solutions for government and enterprise clients.

## Features

- 🔒 **Modern Design**: Clean, professional corporate website with deep blue (#0B4BBB) branding
- 📱 **Responsive**: Mobile-first design that works perfectly on all devices
- ⚡ **Fast**: Built with Next.js 15 and optimized for performance
- 🎨 **Modern UI Motion**: Framer Motion transitions with static branded home hero imagery
- 🧭 **Unified Footer CTA**: Shared bottom CTA merged into the footer and shown site-wide
- 📚 **Content-Rich Pages**: Dedicated Solutions, Services, Resources, About, Contact, Privacy, and Terms pages
- 🔍 **Accessible**: Clean, semantic HTML structure with proper accessibility
- 🎯 **SEO Ready**: Optimized for search engines

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Fluent UI React Icons + Lucide React
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

## Scripts

- `npm run dev` - Start local dev server
- `npm run build` - Create production build
- `npm run start` - Run production server
- `npm run lint` - Run Next.js lint checks
- `npm run lint:colors` - Validate color token usage

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   ├── contact/
│   ├── resources/
│   ├── services/
│   ├── solutions/
│   ├── privacy/
│   └── terms/
└── components/
	├── layout/
	└── sections/
```

## Sections

- **Header**: Logo, navigation, search, contact info, CTA button
- **Hero**: Main headline and company description with static branded visual
- **Solutions**: Core capability and offering overviews
- **Services**: Detailed cybersecurity, IT support, and architecture services
- **Resources**: Insights, frameworks, case studies, and curated references
- **Footer**: Site-wide CTA, contact information, social links, and legal links

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

Made and developed by Ocelabs.tech
- Email: ocelabs.tech@gmail.com
- Phone: 717-578-1388

---

© 2022, Concepta Innovation Systems, LLC
