import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowDownRight, ArrowUpRight, Bell, Bot, CreditCard, Home, LayoutDashboard,
  Search, Settings, TrendingUp, Users, Zap,
} from 'lucide-react'
import { Reveal } from './Reveal'

function Counter({ to, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const dur = 1400
    let raf
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur)
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>
}

const bars = [42, 58, 48, 70, 62, 84, 76, 92, 68, 88, 96, 100]
const stats = [
  { label: 'Monthly revenue', value: 48290, prefix: '$', change: '+18.2%', up: true, icon: TrendingUp },
  { label: 'Active users', value: 12840, change: '+12.4%', up: true, icon: Users },
  { label: 'AI tasks automated', value: 96400, suffix: '+', change: '+32.1%', up: true, icon: Bot },
  { label: 'Churn rate', value: 2, suffix: '.4%', change: '-0.8%', up: false, icon: ArrowDownRight },
]
const activity = [
  { name: 'Sarah Kim', action: 'upgraded to Pro plan', time: '2 min ago', color: 'bg-indigo-500' },
  { name: 'Design Team', action: 'published 3 new workflows', time: '18 min ago', color: 'bg-cyan-500' },
  { name: 'Acme Corp', action: 'connected Slack integration', time: '1 hr ago', color: 'bg-violet-500' },
  { name: 'James Lee', action: 'generated 24 AI reports', time: '3 hrs ago', color: 'bg-emerald-500' },
]

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 48, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-soft overflow-hidden"
          >
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/50">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs font-medium text-slate-500 dark:text-slate-400">app.spsaas.com/dashboard</span>
              <span className="ml-auto hidden sm:flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live
              </span>
            </div>

            <div className="flex">
              <aside className="hidden md:flex flex-col gap-1 w-52 shrink-0 border-r border-slate-100 dark:border-slate-800 p-4">
                <div className="flex items-center gap-2 px-2 py-2 mb-2">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center"><Zap className="w-4 h-4 text-white" /></span>
                  <span className="font-display font-bold text-slate-900 dark:text-white">SP SaaS</span>
                </div>
                {[
                  { icon: LayoutDashboard, label: 'Dashboard', active: true },
                  { icon: TrendingUp, label: 'Analytics' },
                  { icon: Bot, label: 'AI Tools' },
                  { icon: Users, label: 'Customers' },
                  { icon: CreditCard, label: 'Billing' },
                  { icon: Settings, label: 'Settings' },
                ].map((item) => (
                  <span key={item.label} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium ${item.active ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300' : 'text-slate-500 dark:text-slate-400'}`}>
                    <item.icon className="w-5 h-5" /> {item.label}
                  </span>
                ))}
                <div className="mt-auto rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-4 text-white">
                  <p className="text-sm font-semibold">AI Assistant</p>
                  <p className="text-xs text-indigo-100 mt-1">Revenue is up 18% this month. Want a summary?</p>
                  <span className="mt-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">Ask AI →</span>
                </div>
              </aside>

              <div className="flex-1 p-4 sm:p-6 min-w-0">
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">Good morning, Alex 👋</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Here is what is happening across your workspace today.</p>
                  </div>
                  <div className="ml-auto hidden sm:flex items-center gap-2">
                    <span className="relative flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm text-slate-500 dark:text-slate-400">
                      <Search className="w-4 h-4" /> Search…
                    </span>
                    <span className="relative w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400">
                      <Bell className="w-4 h-4" />
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 mt-6">
                  {stats.map((s) => (
                    <div key={s.label} className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{s.label}</span>
                        <s.icon className="w-4 h-4 text-indigo-500" />
                      </div>
                      <p className="mt-2 font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        <Counter to={s.value} prefix={s.prefix || ''} suffix={s.suffix || ''} />
                      </p>
                      <p className={`mt-1 text-xs font-semibold flex items-center gap-1 ${s.up ? 'text-emerald-600' : 'text-red-500'}`}>
                        {s.up ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />} {s.change} vs last month
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid lg:grid-cols-5 gap-4 mt-4">
                  <div className="lg:col-span-3 rounded-2xl border border-slate-100 dark:border-slate-800 p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">Revenue growth</h4>
                      <span className="text-xs font-medium rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 px-2.5 py-1">+18.2% this quarter</span>
                    </div>
                    <div className="mt-5 flex items-end gap-1.5 sm:gap-2 h-32 sm:h-40">
                      {bars.map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: i * 0.05 }}
                          className={`flex-1 rounded-t-md ${i === bars.length - 1 ? 'bg-gradient-to-t from-indigo-600 to-cyan-400' : 'bg-indigo-200 dark:bg-indigo-500/40'}`}
                        />
                      ))}
                    </div>
                    <div className="mt-2 flex justify-between text-[11px] text-slate-400">
                      <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Dec</span>
                    </div>
                  </div>

                  <div className="lg:col-span-2 rounded-2xl border border-slate-100 dark:border-slate-800 p-4 sm:p-5">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">Recent activity</h4>
                    <ul className="mt-4 space-y-3.5">
                      {activity.map((a) => (
                        <li key={a.name} className="flex items-start gap-3">
                          <span className={`w-8 h-8 shrink-0 rounded-full ${a.color} flex items-center justify-center text-white text-xs font-bold`}>
                            {a.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm text-slate-700 dark:text-slate-200 leading-snug"><span className="font-semibold">{a.name}</span> {a.action}</p>
                            <p className="text-xs text-slate-400 mt-0.5">{a.time}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
        <p className="mt-4 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
          <Home className="w-3.5 h-3.5" /> Interactive preview — the real dashboard looks just like this.
        </p>
      </div>
    </section>
  )
}
