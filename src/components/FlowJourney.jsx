import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Send, FileText, Handshake, CreditCard, Truck, Server, Cpu, Wallet } from 'lucide-react'

const stages = [
  { key: 'submit', label: 'Submit request', Icon: Send, desc: 'Share requirements and capacity targets.' },
  { key: 'quote', label: 'Get quote', Icon: FileText, desc: 'Receive a tailored, incentive-optimized quote.' },
  { key: 'contract', label: 'Accept contract', Icon: Handshake, desc: 'Execute agreements and timelines.' },
  { key: 'pay', label: 'Payment', Icon: CreditCard, desc: 'Secure allocation and lock pricing.' },
  { key: 'logistics', label: 'Logistics', Icon: Truck, desc: 'Procurement, shipping, and customs if needed.' },
  { key: 'deployment', label: 'Deployment', Icon: Server, desc: 'Rack, power, and cooling, with QA.' },
  { key: 'hashing', label: 'Hashing starts', Icon: Cpu, desc: 'Machines join pool and begin hashing.' },
  { key: 'payout', label: 'Periodic payout', Icon: Wallet, desc: 'Rewards remit on your chosen cadence.' },
]

export default function FlowJourney() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })
  const [active, setActive] = useState(0)

  // Derived positions using useTransform (instead of .to which doesn't exist on MotionValue)
  const horizontalLeft = useTransform(smoothProgress, (v) => `${v * 100}%`)
  const verticalTop = useTransform(smoothProgress, (v) => `${v * 100}%`)

  useEffect(() => {
    const unsub = smoothProgress.on('change', (v) => {
      const idx = Math.min(stages.length - 1, Math.max(0, Math.round(v * (stages.length - 1))))
      setActive(idx)
    })
    return () => {
      if (typeof unsub === 'function') unsub()
    }
  }, [])

  return (
    <section id="flow-2d" ref={ref} className="relative overflow-hidden py-24 sm:py-28 bg-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-white/60">Concept A</p>
          <h2 className="text-3xl sm:text-4xl font-semibold">Scroll-synced investment journey</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Follow the capital from request to recurring rewards. As you scroll, each step activates and the progress dot advances.</p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block relative">
          <div className="relative h-36">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/10" />
            <motion.div className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white shadow-[0_0_20px_4px_rgba(255,255,255,0.25)]" style={{ left: horizontalLeft }} />

            <div className="absolute inset-x-0 -translate-y-1/2 top-1/2 grid" style={{ gridTemplateColumns: `repeat(${stages.length}, minmax(0,1fr))` }}>
              {stages.map((s, i) => (
                <div key={s.key} className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center border ${i <= active ? 'border-white/80 bg-white/10' : 'border-white/15 bg-white/[0.03]'}`}>
                      <s.Icon className={`${i <= active ? 'text-white' : 'text-white/50'} h-5 w-5`} />
                    </div>
                    <div className={`absolute -z-10 inset-0 rounded-full blur-xl ${i === active ? 'bg-white/20' : 'bg-transparent'}`} />
                  </div>
                  <div className="text-center">
                    <div className={`text-sm ${i <= active ? 'text-white' : 'text-white/60'}`}>{s.label}</div>
                    <div className="text-xs text-white/50 mt-1 max-w-[12rem]">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden relative mt-4">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/10" />
          <motion.div className="absolute left-[22px] h-3 w-3 rounded-full bg-white" style={{ top: verticalTop }} />
          <div className="space-y-8">
            {stages.map((s, i) => (
              <div key={s.key} className="pl-12 relative">
                <div className={`absolute left-5 top-1 h-2 w-2 rounded-full ${i <= active ? 'bg-white' : 'bg-white/40'}`} />
                <div className="flex items-start gap-3">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center border ${i <= active ? 'border-white/80 bg-white/10' : 'border-white/15 bg-white/[0.03]'}`}>
                    <s.Icon className={`${i <= active ? 'text-white' : 'text-white/50'} h-5 w-5`} />
                  </div>
                  <div>
                    <div className={`text-base ${i <= active ? 'text-white' : 'text-white/70'}`}>{s.label}</div>
                    <div className="text-sm text-white/60">{s.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
