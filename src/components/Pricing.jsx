import { useState } from 'react'
import { Check, Sparkles } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'

const plans = [
  {
    name: 'Free',
    tagline: 'For trying things out',
    monthly: 0,
    yearly: 0,
    cta: 'Start Free',
    featured: false,
    features: ['Up to 3 team members', '1 workspace', 'Basic analytics', 'Community support', '100 AI credits / month'],
  },
  {
    name: 'Pro',
    tagline: 'For growing teams',
    monthly: 29,
    yearly: 23,
    cta: 'Start 14-Day Free Trial',
    featured: true,
    features: ['Unlimited team members', 'Unlimited workspaces', 'AI Tools Suite — full access', 'Real-time analytics & forecasts', '100+ integrations', 'Priority support', '10,000 AI credits / month'],
  },
  {
    name: 'Enterprise',
    tagline: 'For companies at scale',
    monthly: 99,
    yearly: 79,
    cta: 'Talk to Sales',
    featured: false,
    features: ['Everything in Pro', 'SSO & advanced security (SOC 2)', 'Custom AI models & data residency', 'Dedicated success manager', '99.99% uptime SLA', 'Unlimited AI credits'],
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing Plans"
          title={<>Simple pricing that <span className="text-gradient">scales with you</span></>}
          subtitle="Start free, upgrade when you are ready. No hidden fees, cancel anytime."
        />

        <Reveal className="mt-10 flex items-center justify-center gap-4">
          <span className={`text-sm font-semibold ${!yearly ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>Monthly</span>
          <button
            onClick={() => setYearly(!yearly)}
            aria-label="Toggle yearly billing"
            className={`relative w-14 h-8 rounded-full transition ${yearly ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'}`}
          >
            <span className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow transition-all ${yearly ? 'left-7' : 'left-1'}`} />
          </button>
          <span className={`text-sm font-semibold ${yearly ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
            Yearly
            <span className="ml-2 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-xs px-2.5 py-1 font-bold">Save 20%</span>
          </span>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="h-full">
              <div className={`relative h-full rounded-3xl p-8 flex flex-col ${p.featured ? 'bg-slate-900 dark:bg-gradient-to-b dark:from-indigo-600 dark:to-violet-700 text-white shadow-soft lg:-translate-y-3 ring-2 ring-indigo-500' : 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-card'}`}>
                {p.featured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 shadow-soft">
                    <Sparkles className="w-3.5 h-3.5" /> Most Popular
                  </span>
                )}
                <h3 className={`font-display text-xl font-bold ${p.featured ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{p.name}</h3>
                <p className={`mt-1 text-sm ${p.featured ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>{p.tagline}</p>
                <div className="mt-6 flex items-end gap-2">
                  <span className={`font-display text-5xl font-extrabold ${p.featured ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    ${yearly ? p.yearly : p.monthly}
                  </span>
                  <span className={`pb-1.5 text-sm ${p.featured ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                    / user / month{yearly && p.monthly > 0 ? ' · billed yearly' : ''}
                  </span>
                </div>
                {yearly && p.monthly > 0 && (
                  <p className="mt-1 text-xs font-semibold text-emerald-500">You save ${(p.monthly - p.yearly) * 12} per user / year</p>
                )}
                <ul className="mt-7 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${p.featured ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'}`}>
                      <span className={`mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center ${p.featured ? 'bg-white/20' : 'bg-indigo-50 dark:bg-indigo-500/15'}`}>
                        <Check className={`w-3.5 h-3.5 ${p.featured ? 'text-white' : 'text-indigo-600 dark:text-indigo-300'}`} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#newsletter" className={`mt-8 block text-center rounded-full py-3.5 font-semibold text-sm transition hover:scale-[1.02] ${p.featured ? 'bg-white text-slate-900' : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-soft'}`}>
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-10" delay={0.15}>
          <p className="text-sm text-slate-500 dark:text-slate-400">All plans include a 14-day Pro trial · No credit card required · Cancel anytime</p>
        </Reveal>
      </div>
    </section>
  )
}
