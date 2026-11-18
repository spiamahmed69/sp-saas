import { Github, Linkedin, Mail, MapPin, Sparkles, Twitter, Youtube } from 'lucide-react'

const columns = [
  {
    title: 'Product',
    links: ['Features', 'AI Tools', 'Integrations', 'Pricing', 'Changelog'],
    hrefs: ['#features', '#ai-tools', '#integrations', '#pricing', '#dashboard'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'Press Kit', 'Contact'],
    hrefs: ['#top', '#top', '#top', '#top', '#newsletter'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'API Reference', 'Community', 'Status', 'Help Center'],
    hrefs: ['#faq', '#faq', '#faq', '#faq', '#faq'],
  },
]

const socials = [
  { icon: Twitter, label: 'Twitter / X' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Github, label: 'GitHub' },
  { icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </span>
              <span className="font-display text-xl font-bold text-white">SP <span className="text-gradient">SaaS</span></span>
            </a>
            <p className="mt-5 text-sm leading-relaxed max-w-sm">
              The all-in-one AI-powered platform for modern teams. Automate workflows, understand your data and grow faster — all in one place.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-indigo-400" /> hello@spsaas.com</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-400" /> Gulshan, Dhaka, Bangladesh</p>
            </div>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href="#top" aria-label={s.label} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition">
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-white">{col.title}</h4>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link, i) => (
                  <li key={link}>
                    <a href={col.hrefs[i]} className="hover:text-white transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} SP SaaS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-white transition">Privacy Policy</a>
            <a href="#top" className="hover:text-white transition">Terms of Service</a>
            <a href="#top" className="hover:text-white transition">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
