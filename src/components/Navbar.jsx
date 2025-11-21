import { useState } from 'react'
import { Menu, X, Bitcoin, ShieldCheck } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 ring-1 ring-white/20 grid place-items-center">
            <Bitcoin className="h-5 w-5 text-black" />
          </div>
          <span className="font-semibold tracking-tight">US Mining Capital</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#credits" className="hover:text-white transition-colors">Tax Credits</a>
          <a href="#roi" className="hover:text-white transition-colors">200% ROI</a>
          <a href="#why-us" className="hover:text-white transition-colors">Why USA</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#cta" className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md hover:bg-amber-200 transition-colors">
            <ShieldCheck className="h-4 w-4" /> Get the Deck
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-6 py-4 space-y-3 text-white/90">
            <a onClick={() => setOpen(false)} href="#credits" className="block">Tax Credits</a>
            <a onClick={() => setOpen(false)} href="#roi" className="block">200% ROI</a>
            <a onClick={() => setOpen(false)} href="#why-us" className="block">Why USA</a>
            <a onClick={() => setOpen(false)} href="#faq" className="block">FAQ</a>
            <a onClick={() => setOpen(false)} href="#cta" className="block bg-white text-black px-4 py-2 rounded-md text-center">Get the Deck</a>
          </div>
        </div>
      )}
    </header>
  )
}
