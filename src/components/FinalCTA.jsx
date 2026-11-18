import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from './Reveal'

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 px-6 py-16 sm:px-16 sm:py-20 text-center shadow-soft">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
            <div className="relative">
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight max-w-2xl mx-auto">
                Ready to work smarter, not harder?
              </h2>
              <p className="mt-5 text-lg text-indigo-100 max-w-xl mx-auto">
                Join 12,000+ teams already growing with SP SaaS. Set up in minutes — your first AI workflow is free.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#pricing" className="w-full sm:w-auto rounded-full bg-white text-slate-900 font-bold px-8 py-4 shadow-lg hover:scale-[1.03] transition inline-flex items-center justify-center gap-2">
                  Start Free Trial <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#dashboard" className="w-full sm:w-auto rounded-full border-2 border-white/60 text-white font-semibold px-8 py-4 hover:bg-white/10 transition inline-flex items-center justify-center">
                  See the Dashboard
                </a>
              </div>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-indigo-100">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> Free 14-day Pro trial</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> No credit card required</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> Cancel anytime</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
