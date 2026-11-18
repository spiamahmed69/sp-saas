import { motion } from 'framer-motion'
import { ArrowRight, Check, Play, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-indigo-500/20 dark:bg-indigo-500/10 blur-3xl" />
        <div className="absolute top-40 -left-32 w-96 h-96 rounded-full bg-cyan-400/20 dark:bg-cyan-400/10 blur-3xl" />
        <div className="absolute top-40 -right-32 w-96 h-96 rounded-full bg-violet-500/20 dark:bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 shadow-card">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            New: AI Analytics 2.0 is live
            <ArrowRight className="w-3.5 h-3.5 text-indigo-600" />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-slate-900 dark:text-white max-w-4xl mx-auto"
        >
          Run your business on <span className="text-gradient">autopilot with AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          SP SaaS brings AI automation, real-time analytics and team collaboration into one beautiful
          platform — so your team ships faster, sells more and works less.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#pricing" className="w-full sm:w-auto rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 text-white font-semibold px-8 py-4 shadow-soft hover:scale-[1.03] hover:opacity-95 transition inline-flex items-center justify-center gap-2">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#dashboard" className="w-full sm:w-auto rounded-full glass font-semibold px-8 py-4 text-slate-800 dark:text-white shadow-card hover:scale-[1.03] transition inline-flex items-center justify-center gap-2">
            <span className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
              <Play className="w-4 h-4 text-white fill-white" />
            </span>
            Watch Demo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-slate-500 dark:text-slate-400"
        >
          <span className="flex items-center gap-1.5">
            <span className="flex text-amber-400">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
            </span>
            4.9/5 from 2,400+ reviews
          </span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> No credit card required</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> Free 14-day Pro trial</span>
        </motion.div>
      </div>
    </section>
  )
}
