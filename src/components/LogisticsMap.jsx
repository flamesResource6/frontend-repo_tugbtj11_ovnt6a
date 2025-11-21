import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function LogisticsMap() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="map" ref={ref} className="relative py-24 sm:py-28 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-white/60">Interlude</p>
          <h3 className="text-2xl sm:text-3xl font-semibold">Logistics mini‑map</h3>
          <p className="mt-2 text-white/70 max-w-2xl">A simple arc shows gear moving from supplier to US facility to datacenter.</p>
        </div>
        <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden p-4 sm:p-6">
          <svg viewBox="0 0 1200 600" className="w-full h-[280px] sm:h-[360px]">
            {/* Background grid hint */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              </pattern>
              <linearGradient id="grad" x1="0" x2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <rect width="1200" height="600" fill="url(#grid)" />

            {/* Map silhouette (simplified US outline approximation) */}
            <path d="M120 340 C220 260, 340 220, 460 240 C520 250, 620 240, 700 260 C760 280, 820 320, 920 340 C980 360, 1040 360, 1080 360 L1080 420 L120 420 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />

            {/* Nodes */}
            <circle cx="140" cy="380" r="6" fill="white" />
            <text x="150" y="375" fill="white" opacity="0.8" fontSize="14">Supplier</text>

            <circle cx="520" cy="320" r="6" fill="white" />
            <text x="530" y="315" fill="white" opacity="0.8" fontSize="14">US Facility</text>

            <circle cx="980" cy="360" r="6" fill="white" />
            <text x="990" y="355" fill="white" opacity="0.8" fontSize="14">Datacenter</text>

            {/* Arc path */}
            <path id="arc" d="M 140 380 C 320 200, 720 180, 980 360" fill="none" stroke="url(#grad)" strokeWidth="3" strokeOpacity="0.6" />

            {/* Traveling dot */}
            <motion.circle r="7" fill="white" cx="0" cy="0">
              <animateMotion dur="3s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                <mpath href="#arc" />
              </animateMotion>
            </motion.circle>
          </svg>
          <motion.div style={{ scaleX: progress }} className="origin-left h-1 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full" />
        </div>
      </div>
    </section>
  )
}
