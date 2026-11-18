import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import DashboardPreview from './components/DashboardPreview.jsx'
import TrustedBy from './components/TrustedBy.jsx'
import Features from './components/Features.jsx'
import AITools from './components/AITools.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Integrations from './components/Integrations.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Newsletter from './components/Newsletter.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const saved = window.localStorage.getItem('sp-saas-theme')
    if (saved) return saved === 'dark'
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('sp-saas-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      <Navbar dark={dark} onToggleDark={() => setDark(!dark)} />
      <main>
        <Hero />
        <DashboardPreview />
        <TrustedBy />
        <Features />
        <AITools />
        <HowItWorks />
        <Integrations />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
