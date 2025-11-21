import { motion } from 'framer-motion'
import { Mail, Download } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-gradient-to-b from-black/95 to-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 overflow-hidden relative">
          <div className="absolute -inset-16 -z-0 bg-gradient-to-r from-amber-400/10 via-yellow-200/5 to-transparent blur-3xl" />
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Request the investor deck</h3>
              <p className="mt-2 text-white/70">Get a detailed breakdown of sites, incentives, risk controls, and modeled returns.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center gap-2 bg-white text-black px-5 py-3 rounded-md font-medium hover:bg-amber-200">
                <Download className="h-4 w-4" /> Download PDF
              </a>
              <a href="mailto:invest@usmining.capital" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-5 py-3 rounded-md font-medium hover:bg-white/20 ring-1 ring-white/20">
                <Mail className="h-4 w-4" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
