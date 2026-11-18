import { useEffect, useState } from 'react'
import { Menu, Moon, Sparkles, Sun, X } from 'lucide-react'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'AI Tools', href: '#ai-tools' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar({ dark, onToggleDark }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'glass shadow-card py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 flex items-center justify-center shadow-soft">
            <Sparkles className="w-5 h-5 text-white" />
          </span>
          <span className="font-display text-xl font-bold text-slate-900 dark:text-white">
            SP <span className="text-gradient">SaaS</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 transition"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a href="#pricing" className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 transition px-2">
            Sign in
          </a>
          <a href="#pricing" className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold px-5 py-2.5 shadow-soft hover:opacity-90 hover:scale-[1.02] transition">
            Start Free
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-slate-200/60 dark:border-slate-700/60 mt-3 px-6 py-5 space-y-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2.5 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600">
              {l.label}
            </a>
          ))}
          <div className="pt-3 flex gap-3">
            <a href="#pricing" onClick={() => setOpen(false)} className="flex-1 text-center rounded-full border border-slate-300 dark:border-slate-600 py-2.5 text-sm font-semibold">
              Sign in
            </a>
            <a href="#pricing" onClick={() => setOpen(false)} className="flex-1 text-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-2.5 text-sm font-semibold">
              Start Free
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
