import { Reveal } from './Reveal'

const brands = ['TechNova', 'Cloudly', 'DataFlow', 'Nexa', 'OrbitLab', 'BrightDesk', 'HexaSoft', 'Lumina']

export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-slate-100 dark:border-slate-800/70 bg-slate-50/60 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
            Trusted by 12,000+ teams at
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {brands.map((b) => (
              <span key={b} className="font-display text-xl sm:text-2xl font-bold text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition cursor-default select-none">
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
