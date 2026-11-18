# SP SaaS — AI-Powered Software for Modern Teams

A premium, production-ready SaaS landing page for software products, AI tools and web applications.
Built with **React 18 + Vite 5 + Tailwind CSS 3 + Framer Motion 11 + Lucide React**.

## Features

- Modern Navbar with mobile menu and dark/light mode toggle (persisted in `localStorage`)
- Hero with headline, dual CTAs and trust indicators
- Animated Product Dashboard Preview — stat cards with count-up animation, animated bar chart, recent activity feed
- Trusted By brand wordmarks
- Features & Benefits (6 features)
- AI Tools Showcase — 4 AI tools with a working live demo prompt box
- How It Works (4 steps)
- Product Integrations (Slack, Google Drive, GitHub, Stripe, Zapier, Notion, Figma, Zoom)
- Pricing Plans — Free $0, Pro $29/mo, Enterprise $99/mo with a **working Monthly/Yearly toggle** (yearly = 20% off)
- Testimonials carousel with prev/next controls and dots
- FAQ accordion (6 questions)
- Newsletter subscription with email validation and success state
- Final CTA gradient banner and premium footer
- Fully responsive, SEO meta tags, smooth scrolling, Framer Motion animations

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

Requires Node.js 18+.

## Deployment (Netlify)

`netlify.toml` is included:

- Build command: `npm run build`
- Publish directory: `dist`
- SPA fallback redirect `/* → /index.html` (status 200)

Connect the GitHub repository in Netlify and deploy — the settings are picked up automatically.

## Project structure

```
src/
  App.jsx                 # composition + dark mode state
  main.jsx                # entry point
  index.css               # Tailwind + custom utilities
  components/
    Navbar.jsx  Hero.jsx  DashboardPreview.jsx  TrustedBy.jsx
    Features.jsx  AITools.jsx  HowItWorks.jsx  Integrations.jsx
    Pricing.jsx  Testimonials.jsx  FAQ.jsx  Newsletter.jsx
    FinalCTA.jsx  Footer.jsx  Reveal.jsx
```

## License

MIT — free to use for personal and commercial projects.
