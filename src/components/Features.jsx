import { Bot, BarChart3, Users, ShieldCheck, Plug, Workflow } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'

const features = [
  {
    icon: Bot,
    title: 'AI Automation',
    desc: 'Automate repetitive tasks, emails and reports with AI workflows that run while you sleep.',
    gradient: 'from-indigo-600 to-violet-600',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    desc: 'Live dashboards, custom reports and forecasts that show exactly how your business is performing.',
    gradient: 'from-violet-600 to-fuchsia-500',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    desc: 'Shared workspaces, comments and roles keep every team aligned — from 2 people to 2,000.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    desc: 'SOC 2 Type II, SSO, two-factor auth and encryption at rest and in transit. Your data stays yours.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Plug,
    title: '100+ Integrations',
    desc: 'Connect Slack, Google Drive, Stripe, GitHub and more in one click. No code required.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Workflow,
    title: 'Custom Workflows',
    desc: 'Drag-and-drop builders let you design approval flows, pipelines and triggers your way.',
    gradient: 'from-rose-500 to-pink-500',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features & Benefits"
          title={<>Everything your team needs, <span className="text-gradient">in one place</span></>}
          subtitle="Stop juggling five tools. SP SaaS replaces them with a single platform that is fast, secure and genuinely enjoyable to use."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.1}>
              <div className="group h-full rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-card hover:shadow-soft hover:-translate-y-1.5 transition-all duration-300">
                <span className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center shadow-soft group-hover:scale-110 transition`}>
                  <f.icon className="w-6 h-6 text-white" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900 dark:text-white">{f.title}</h3>
                <p className="mt-2.5 text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">{f.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-300 group-hover:gap-2 transition-all">
                  Learn more →
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
