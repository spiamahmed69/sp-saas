import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'

const faqs = [
  {
    q: 'Is there really a free plan?',
    a: 'Yes. The Free plan is free forever — up to 3 team members, 1 workspace, basic analytics and 100 AI credits a month. No credit card is required to sign up.',
  },
  {
    q: 'How does the 14-day Pro trial work?',
    a: 'Every new workspace gets 14 days of Pro, free. You keep everything you build, and we only ask for payment if you choose to continue. Cancel in one click, anytime.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'Yes — a 30-day money-back guarantee on all paid plans. If SP SaaS is not right for you, email billing@spsaas.com and we will refund the last payment in full.',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. We are SOC 2 Type II certified, encrypt data at rest and in transit, support SSO and two-factor authentication, and never train AI models on your private data.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Cancel from Settings → Billing in under a minute. Your workspace stays on the Free plan, so you never lose your data or history.',
  },
  {
    q: 'Do you support custom integrations or APIs?',
    a: 'Yes. Every plan includes a full REST API and webhooks. Enterprise plans add custom integrations, data residency options and a dedicated success manager.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Frequently asked <span className="text-gradient">questions</span></>}
          subtitle="Everything else you might want to know. Still curious? Email hello@spsaas.com — a human replies within a day."
        />
        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <div className={`rounded-2xl border overflow-hidden transition ${open === i ? 'border-indigo-300 dark:border-indigo-500/50 bg-white dark:bg-slate-900 shadow-card' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60'}`}>
                <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-semibold text-slate-900 dark:text-white">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-indigo-600 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                </button>
                {open === i && (
                  <p className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">{f.a}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
