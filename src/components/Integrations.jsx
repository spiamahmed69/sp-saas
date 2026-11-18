import { Reveal, SectionHeading } from './Reveal'

const integrations = [
  { name: 'Slack', desc: 'Chat & alerts', color: 'bg-[#4A154B]', letter: 'S' },
  { name: 'Google Drive', desc: 'Files & docs', color: 'bg-blue-500', letter: 'G' },
  { name: 'GitHub', desc: 'Code & deploys', color: 'bg-slate-900 dark:bg-slate-700', letter: 'G' },
  { name: 'Stripe', desc: 'Payments', color: 'bg-indigo-600', letter: 'S' },
  { name: 'Zapier', desc: 'Automation', color: 'bg-orange-500', letter: 'Z' },
  { name: 'Notion', desc: 'Docs & wikis', color: 'bg-slate-800 dark:bg-slate-600', letter: 'N' },
  { name: 'Figma', desc: 'Design', color: 'bg-violet-600', letter: 'F' },
  { name: 'Zoom', desc: 'Meetings', color: 'bg-sky-500', letter: 'Z' },
]

export default function Integrations() {
  return (
    <section id="integrations" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product Integrations"
          title={<>Plays nicely with <span className="text-gradient">the tools you love</span></>}
          subtitle="100+ one-click integrations. Connect your stack in minutes — no developers, no custom code."
        />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
          {integrations.map((it, i) => (
            <Reveal key={it.name} delay={(i % 4) * 0.08}>
              <div className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all cursor-pointer">
                <span className={`w-12 h-12 rounded-2xl ${it.color} flex items-center justify-center text-white font-display text-xl font-bold group-hover:scale-110 transition`}>
                  {it.letter}
                </span>
                <h3 className="mt-4 font-display font-bold text-slate-900 dark:text-white">{it.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{it.desc}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-indigo-600 dark:text-indigo-300">Connect →</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center mt-10" delay={0.15}>
          <p className="text-slate-500 dark:text-slate-400">
            Can't find your tool? <a href="#faq" className="font-semibold text-indigo-600 dark:text-indigo-300 hover:underline">We support custom APIs and webhooks on every plan.</a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
