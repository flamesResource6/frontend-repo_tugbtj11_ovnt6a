import { motion } from 'framer-motion'

export default function ROISection() {
  const bars = [65, 110, 150, 200]
  return (
    <section id="roi" className="relative py-24 bg-gradient-to-b from-black to-black/95 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_40%_at_50%_0%,rgba(255,215,0,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">200% return in four years</h2>
            <p className="mt-4 text-white/70">Compounding reinvestment, high-efficiency hardware, and tax-optimized capex compress payback and accelerate equity growth. The chart shows cumulative value for a representative allocation.</p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex gap-2"><span className="text-amber-300">•</span> Direct-pay credits reduce upfront basis and improve cash-on-cash yield.</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Revenue diversification from demand response and heat reuse.</li>
              <li className="flex gap-2"><span className="text-amber-300">•</span> Conservative BTC scenarios with upside optionality.</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 -z-0 blur-3xl bg-gradient-to-tr from-amber-400/20 via-yellow-200/10 to-white/0 rounded-full" />
            <div className="relative h-64 sm:h-72 md:h-80 p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
              <div className="grid grid-cols-4 gap-4 items-end h-full">
                {bars.map((h, i) => (
                  <motion.div key={i} initial={{ height: 0, opacity: 0 }} whileInView={{ height: `${h}%`, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }} className="bg-gradient-to-t from-amber-400 to-yellow-200 rounded-md shadow-2xl" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="absolute inset-x-0 bottom-3 px-6 flex justify-between text-xs text-white/60">
                <span>Year 1</span><span>Year 2</span><span>Year 3</span><span>Year 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
