import Spline from '@splinetool/react-spline'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" aria-label="Hero">
      {/* Spline Cover Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.2),transparent)]" />

      {/* Content */}
      <div className="relative z-10 pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1 ring-1 ring-white/20 mb-6">
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span className="text-sm">Futuristic, tax-optimized bitcoin mining in the USA</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
              Capture US clean-energy tax credits while compounding a 200% ROI in 4 years
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl">
              Institutional-grade mining strategies designed for American policy tailwinds. We pair low-cost power with federal and state incentives to accelerate payback and scale exposure to Bitcoin.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 bg-white text-black rounded-md px-5 py-3 font-medium hover:bg-amber-200 transition-colors">
                Get the Investor Deck
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#credits" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white rounded-md px-5 py-3 font-medium hover:bg-white/20 ring-1 ring-white/20 transition">
                Explore Tax Credits
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
