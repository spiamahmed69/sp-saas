import { Link2, Rocket, TrendingUp, UserPlus } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'

const steps = [
  { icon: UserPlus, step: 'Step 1', title: 'Sign up free', desc: 'Create your workspace in under a minute. No credit card, no sales call — just your email.' },
  { icon: Link2, step: 'Step 2', title: 'Connect your tools', desc: 'Link Slack, Google Drive, Stripe and more in one click. Your data syncs automatically.' },
  { icon: Rocket, step: 'Step 3', title: 'Automate with AI', desc: 'Turn on AI workflows for reports, follow-ups and support. Watch hours of busywork disappear.' },
  { icon: TrendingUp, step: 'Step 4', title: 'Grow faster', desc: 'Track everything in real time, spot what works, and scale the plays that win.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title={<>From sign-up to superpowers in <span className="text-gradient">four steps</span></>}
          subtitle="Most teams are fully set up before lunch on day one. Here is the whole journey."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="relative h-full rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all">
                <span className="absolute top-6 right-6 font-display text-4xl font-extrabold text-slate-100 dark:text-slate-800">{String(i + 1).padStart(2, '0')}</span>
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center shadow-soft">
                  <s.icon className="w-6 h-6 text-white" />
                </span>
                <p className="mt-5 text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-300">{s.step}</p>
                <h3 className="mt-1.5 font-display text-lg font-bold text-slate-900 dark:text-white">{s.title}</h3>
                <p className="mt-2.5 text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
