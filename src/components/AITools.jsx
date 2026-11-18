import { useState } from 'react'
import { Bot, Image as ImageIcon, LineChart, MessageSquareText, PenLine, Send, Sparkles } from 'lucide-react'
import { Reveal, SectionHeading } from './Reveal'

const tools = [
  {
    icon: PenLine,
    name: 'AI Writer',
    desc: 'Draft emails, landing pages and product copy in seconds — in your brand voice.',
    sample: 'Subject: Your trial ends soon — here is 20% off Pro\n\nHi Alex, your team saved 14 hours this week with SP SaaS. Keep the momentum going with Pro, today at 20% off.',
  },
  {
    icon: LineChart,
    name: 'AI Analytics',
    desc: 'Ask questions in plain English and get charts, forecasts and plain-language answers.',
    sample: 'Q: Why did revenue spike in October?\n\nA: Enterprise upgrades rose 34%, driven by the new Slack integration launch and the autumn campaign. Forecast: +12% in November.',
  },
  {
    icon: MessageSquareText,
    name: 'AI Chat Assistant',
    desc: 'A support copilot that answers customers instantly, in 32 languages, 24/7.',
    sample: 'Customer: How do I invite my team?\n\nAI: Go to Settings → Team → Invite. You can add up to 50 members on Pro, with roles for admin, editor and viewer.',
  },
  {
    icon: ImageIcon,
    name: 'AI Image Generator',
    desc: 'Create on-brand visuals, banners and product shots from a single text prompt.',
    sample: 'Prompt: "Modern SaaS dashboard, indigo gradient, clean UI"\n\n✓ 4 images generated in 8 seconds. Saved to your media library.',
  },
]

export default function AITools() {
  const [active, setActive] = useState(0)
  const [prompt, setPrompt] = useState('Write a welcome email for new Pro users')
  const [response, setResponse] = useState('')
  const [generating, setGenerating] = useState(false)

  const runDemo = () => {
    setGenerating(true)
    setResponse('')
    setTimeout(() => {
      setResponse(tools[active].sample)
      setGenerating(false)
    }, 900)
  }

  return (
    <section id="ai-tools" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="AI Tools Showcase"
          title={<>Four AI tools, <span className="text-gradient">one superpower</span></>}
          subtitle="Built-in AI across the whole platform — no add-ons, no extra seats. Try the live demo below."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {tools.map((t, i) => (
              <button
                key={t.name}
                onClick={() => { setActive(i); setResponse('') }}
                className={`text-left rounded-3xl border p-5 transition-all ${active === i ? 'border-indigo-500 bg-white dark:bg-slate-900 shadow-soft ring-2 ring-indigo-500/20' : 'border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 hover:border-indigo-300'}`}
              >
                <span className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center">
                    <t.icon className="w-5 h-5 text-white" />
                  </span>
                  <span className="font-display font-bold text-slate-900 dark:text-white">{t.name}</span>
                  {active === i && <Sparkles className="w-4 h-4 text-indigo-500 ml-auto" />}
                </span>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t.desc}</p>
              </button>
            ))}
          </div>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <div className="h-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-card overflow-hidden flex flex-col">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 dark:border-slate-800">
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">{tools[active].name} — Live Demo</p>
                  <p className="text-xs text-emerald-600 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Ready to generate</p>
                </div>
              </div>
              <div className="flex-1 p-5 sm:p-6">
                <label className="text-xs font-semibold tracking-wide uppercase text-slate-400">Your prompt</label>
                <div className="mt-2 flex gap-2">
                  <input
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="flex-1 min-w-0 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 text-sm text-slate-800 dark:text-slate-100 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="Ask the AI anything…"
                  />
                  <button onClick={runDemo} disabled={generating || !prompt.trim()} className="shrink-0 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-5 py-3 text-sm font-semibold hover:opacity-90 disabled:opacity-50 transition inline-flex items-center gap-2">
                    <Send className="w-4 h-4" /> {generating ? 'Thinking…' : 'Generate'}
                  </button>
                </div>
                <div className="mt-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 p-5 min-h-[180px]">
                  {generating ? (
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce [animation-delay:300ms]" />
                      Generating your result…
                    </div>
                  ) : response ? (
                    <p className="text-sm sm:text-[15px] text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line">{response}</p>
                  ) : (
                    <p className="text-sm text-slate-400">Your AI result will appear here. Try the sample prompt, or type your own and hit Generate.</p>
                  )}
                </div>
                <p className="mt-4 text-xs text-slate-400">Demo output is illustrative — the real AI runs on your own workspace data.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
