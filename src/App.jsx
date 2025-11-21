import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FlowJourney from './components/FlowJourney'
import Flow3D from './components/Flow3D'
import LogisticsMap from './components/LogisticsMap'
import Features from './components/Features'
import ROISection from './components/ROISection'
import WhyUSA from './components/WhyUSA'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        {/* Animation test sections */}
        <FlowJourney />
        <Flow3D />
        <LogisticsMap />
        {/* Existing content */}
        <Features />
        <ROISection />
        <WhyUSA />
        <CTA />
        <footer className="py-10 border-t border-white/10 text-white/60 text-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} US Mining Capital. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#credits" className="hover:text-white">Tax Credits</a>
              <a href="#roi" className="hover:text-white">ROI</a>
              <a href="#why-us" className="hover:text-white">Why USA</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
