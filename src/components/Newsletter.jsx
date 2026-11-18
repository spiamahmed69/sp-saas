import { useState } from 'react'
import { CheckCircle2, Mail, Send } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setDone(true)
  }

  return (
    <section id="newsletter" className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Newsletter"
          title={<>Product tips, <span className="text-gradient">once a week</span></>}
          subtitle="Join 18,000+ founders, operators and makers getting practical SaaS and AI playbooks every Tuesday. No spam, unsubscribe anytime."
        />
        <Reveal className="mt-10" delay={0.1}>
          {done ? (
            <div className="rounded-3xl border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 p-8 text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="mt-4 font-display text-xl font-bold text-slate-900 dark:text-white">You're in! 🎉</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Welcome aboard — your first issue lands in <span className="font-semibold">{email}</span> this Tuesday.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError('') }}
                    placeholder="you@company.com"
                    className="w-full rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 pl-12 pr-4 py-3.5 text-sm text-slate-800 dark:text-slate-100 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <button type="submit" className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold px-7 py-3.5 text-sm shadow-soft hover:opacity-90 hover:scale-[1.02] transition inline-flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Subscribe Free
                </button>
              </div>
              {error && <p className="mt-3 text-sm text-red-500 font-medium">{error}</p>}
              <p className="mt-4 text-xs text-slate-400 text-center">We respect your inbox. Unsubscribe anytime with one click.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
