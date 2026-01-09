import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import LiveRatesTicker from '@/components/LiveRatesTicker'
import ProductsShowcase from '@/components/ProductsShowcase'
import WhyChooseUs from '@/components/WhyChooseUs'
import StatsSection from '@/components/StatsSection'
import DelhiSpotRates from '@/components/DelhiSpotRates'
import CTABanner from '@/components/CTABanner'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] lg:min-h-[680px] flex items-center bg-charcoal pt-[72px]">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="container-main relative z-10 py-12 lg:py-20">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p className="font-montserrat font-medium text-xs tracking-[3px] uppercase text-gold mb-5">
              Trusted Metal Exporters Since 2008
            </p>

            {/* Headline */}
            <h1 className="font-montserrat font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Premium Metals for Global Industries
            </h1>

            {/* Subheadline */}
            <p className="font-inter text-base sm:text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
              Export-grade copper, aluminium, nickel, lead, zinc & tin. LME-linked pricing. Serving 50+ countries from India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary">
                Explore Products
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link href="/live-rates" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-black">
                View Live Rates
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* Live Rates Ticker */}
      <LiveRatesTicker />

      {/* Products Showcase */}
      <ProductsShowcase />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Statistics */}
      <StatsSection />

      {/* Delhi Spot Rates */}
      <DelhiSpotRates />

      {/* CTA Banner */}
      <CTABanner />
    </>
  )
}
