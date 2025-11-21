import { motion } from 'framer-motion'
import { BadgeDollarSign, Landmark, Leaf, Gauge, ArrowUpRight, Shield, Zap } from 'lucide-react'

const items = [
  {
    icon: Landmark,
    title: 'IRA §45Q & §48 ITC',
    desc: 'Stack federal Investment Tax Credits and direct-pay incentives aligned with domestic manufacturing and clean power.',
    stat: '30-50% basis',
  },
  {
    icon: Leaf,
    title: 'Renewable-first Siting',
    desc: 'Co-located with wind and solar to monetize curtailment and grid stabilization, lowering net cost of energy.',
    stat: 'Sub $0.04/kWh',
  },
  {
    icon: Gauge,
    title: 'High-Efficiency ASICs',
    desc: 'Next-gen miners with immersion options deliver leading J/TH performance and heat-reuse optionality.',
    stat: '20-30% uplift',
  },
  {
    icon: Shield,
    title: 'Institutional Controls',
    desc: 'SOC 2-aligned processes, segregated custody, and insurance-backed operations for allocators.',
    stat: 'Risk-managed',
  },
]

export default function Features() {
  return (
    <section id="credits" className="relative py-24 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.06),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">US incentives unlock superior unit economics</h2>
          <p className="mt-4 text-white/70">Our siting and procurement strategies are built to qualify and maximize federal and state benefits, compressing time-to-breakeven and compounding returns.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-300/10 blur-2xl" />
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-amber-300">
                <BadgeDollarSign className="h-4 w-4" />
                <span className="text-sm">{it.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="col-span-2 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-8 ring-1 ring-white/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">Modeled performance</h3>
                <p className="mt-2 text-white/70 max-w-xl">Base case assumes disciplined reinvestment of cashflows, power hedging, and conservative BTC price trajectories. Upside from heat reuse and demand-response programs.</p>
              </div>
              <ArrowUpRight className="h-6 w-6 text-amber-300" />
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Metric label="4-year ROI" value="200%" />
              <Metric label="Breakeven" value="< 24 mo" />
              <Metric label="IRR" value="28-35%" />
              <Metric label="Net cost / kWh" value="$0.03 - $0.045" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
            className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10"
          >
            <div className="inline-flex items-center gap-2 text-amber-300">
              <Zap className="h-4 w-4" />
              <span className="text-sm">Demand response</span>
            </div>
            <h3 className="mt-3 text-xl font-semibold">Grid services as revenue</h3>
            <p className="mt-2 text-white/70">We curtail and ramp intelligently, selling flexibility back to the grid while avoiding peak pricing. Balancing economics with community resilience.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Metric({ label, value }) {
  return (
    <div className="rounded-xl bg-black/40 ring-1 ring-white/10 p-4">
      <div className="text-sm text-white/60">{label}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
    </div>
  )
}
