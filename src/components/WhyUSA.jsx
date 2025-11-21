import { motion } from 'framer-motion'
import { Building2, Factory, Shield, Scale, Trophy } from 'lucide-react'

const points = [
  { icon: Building2, title: 'Policy clarity', text: 'Rule of law, grid transparency, and scalable interconnection pathways.' },
  { icon: Factory, title: 'Domestic supply chain', text: 'Qualify for domestic content multipliers and inflation-protected credits.' },
  { icon: Shield, title: 'Regulatory-grade ops', text: 'Compliance culture and institutional governance for allocators.' },
  { icon: Scale, title: 'Energy market depth', text: 'Access to wholesale markets, DR programs, and hedging tools.' },
  { icon: Trophy, title: 'Talent & partners', text: 'Best-in-class engineering, EPC, and custody partners headquartered here.' },
]

export default function WhyUSA() {
  return (
    <section id="why-us" className="relative py-24 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.06),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Why mine in the United States</h2>
          <p className="mt-4 text-white/70">Alignment with energy transition policy, capital markets, and grid needs creates durable advantages for long-horizon investors.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
