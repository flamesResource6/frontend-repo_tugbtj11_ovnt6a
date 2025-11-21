import { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Flow3D() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // Parallax camera overlay values to hint 3D movement without heavy scene ops
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 6])
  const y = useTransform(scrollYProgress, [0, 1], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.9, 1], [0, 1, 1, 0])

  return (
    <section id="flow-3d" ref={ref} className="relative h-[90vh] sm:h-[100vh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Lightweight Spline scene; you can replace with a path/waypoints variant */}
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Labels/waypoints overlay tied to scroll parallax */}
      <motion.div style={{ rotate, y, opacity }} className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full relative">
          <Waypoint label="Submit" style={{ left: '12%', top: '68%' }} />
          <Waypoint label="Quote" style={{ left: '28%', top: '54%' }} />
          <Waypoint label="Contract" style={{ left: '42%', top: '46%' }} />
          <Waypoint label="Payment" style={{ left: '56%', top: '42%' }} />
          <Waypoint label="Logistics" style={{ left: '68%', top: '48%' }} />
          <Waypoint label="Deployment" style={{ left: '78%', top: '58%' }} />
          <Waypoint label="Hashing" style={{ left: '86%', top: '70%' }} />
          <Waypoint label="Payout" style={{ left: '90%', top: '78%' }} />
        </div>
      </motion.div>

      <div className="absolute inset-x-0 top-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/70">Concept B</p>
            <h2 className="text-3xl sm:text-4xl font-semibold">3D waypoints along the investment path</h2>
            <p className="mt-2 text-white/75 max-w-2xl">Scroll to gently pan through milestones. Labels hover over the scene for clarity with a subtle parallax.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Waypoint({ label, style }) {
  return (
    <div style={style} className="absolute">
      <div className="relative">
        <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_20px_6px_rgba(255,255,255,0.25)]" />
        <div className="absolute left-3 top-[-6px] text-xs sm:text-sm text-white/90 whitespace-nowrap">{label}</div>
      </div>
    </div>
  )
}
