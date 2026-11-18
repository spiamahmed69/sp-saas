import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'

const testimonials = [
  {
    quote: 'SP SaaS replaced four tools in our stack. The AI reports alone save our ops team about 15 hours a week — and the dashboard is the first thing I open every morning.',
    name: 'Sarah Kim',
    role: 'COO, TechNova',
    initials: 'SK',
    color: 'bg-indigo-600',
  },
  {
    quote: 'We onboarded a 40-person team in a single afternoon. The automations handled our entire client follow-up flow, and response times dropped from hours to minutes.',
    name: 'James Lee',
    role: 'Founder, Cloudly',
    initials: 'JL',
    color: 'bg-cyan-500',
  },
  {
    quote: 'The AI Analytics tool feels like having a data analyst on staff. I ask a question in plain English and get a board-ready answer. Our churn is down 22% since we switched.',
    name: 'Priya Sharma',
    role: 'Head of Growth, DataFlow',
    initials: 'PS',
    color: 'bg-violet-600',
  },
  {
    quote: 'Enterprise-grade security without enterprise-grade hassle. SSO, audit logs and a dedicated manager — our compliance team signed off in one week.',
    name: 'Marcus Chen',
    role: 'CTO, Nexa',
    initials: 'MC',
    color: 'bg-emerald-500',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((index + 1) % testimonials.length)

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Loved by teams <span className="text-gradient">around the world</span></>}
          subtitle="4.9 out of 5 from 2,400+ verified reviews on G2, Capterra and Product Hunt."
        />

        <Reveal className="mt-12">
          <div key={index} className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-card p-8 sm:p-12 text-center">
            <span className="mx-auto w-14 h-14 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
              <Quote className="w-7 h-7 text-indigo-600 dark:text-indigo-300 fill-indigo-600 dark:fill-indigo-300" />
            </span>
            <div className="mt-5 flex justify-center gap-1 text-amber-400">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-amber-400" />)}
            </div>
            <p className="mt-5 text-lg sm:text-2xl font-medium leading-relaxed text-slate-800 dark:text-slate-100">“{t.quote}”</p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold`}>{t.initials}</span>
              <span className="text-left">
                <span className="block font-display font-bold text-slate-900 dark:text-white">{t.name}</span>
                <span className="block text-sm text-slate-500 dark:text-slate-400">{t.role}</span>
              </span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={prev} aria-label="Previous testimonial" className="w-11 h-11 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 transition shadow-card">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} aria-label={`Go to testimonial ${i + 1}`} className={`h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-indigo-600' : 'w-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-indigo-300'}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next testimonial" className="w-11 h-11 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 transition shadow-card">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
