'use client'

import { useState } from 'react'
import Link from 'next/link'
import { TrendingUp, TrendingDown, ArrowRight, Shield, Award, Globe, Zap, Building, Cpu, Car, Wrench, Radio } from 'lucide-react'
import LiveRatesTicker from '@/components/LiveRatesTicker'
import DelhiSpotRates from '@/components/DelhiSpotRates'
import CTABanner from '@/components/CTABanner'

const products = [
  {
    id: 'copper',
    name: 'Copper',
    symbol: 'Cu',
    tagline: 'Cathodes, Rods & Wire',
    description: 'Premium LME Grade A copper for electrical and industrial applications. Sourced from trusted refineries with full certification.',
    grade: 'LME Grade A',
    purity: '99.99%',
    forms: ['Cathodes', 'CC Rod (8mm)', 'Wire Rod', 'Copper Scrap'],
    applications: ['Electrical wiring', 'Power transmission', 'Electronics', 'Plumbing'],
    lmeRate: 12846.5,
    change: 38,
    popular: true,
  },
  {
    id: 'aluminium',
    name: 'Aluminium',
    symbol: 'Al',
    tagline: 'Ingots & Alloys',
    description: 'High-purity P1020 aluminium ingots and specialized alloys for automotive, construction, and packaging industries.',
    grade: 'P1020',
    purity: '99.7%',
    forms: ['Ingots', 'Billets', 'Wire Rod', 'Alloy Ingots'],
    applications: ['Automotive', 'Construction', 'Packaging', 'Aerospace'],
    lmeRate: 3063.5,
    change: -22,
    popular: false,
  },
  {
    id: 'nickel',
    name: 'Nickel',
    symbol: 'Ni',
    tagline: 'Cathodes & Briquettes',
    description: 'LME-grade nickel cathodes and briquettes for stainless steel production and specialized alloy manufacturing.',
    grade: 'LME Grade',
    purity: '99.8%',
    forms: ['Cathodes', 'Briquettes', 'Powder', 'Rounds'],
    applications: ['Stainless steel', 'Batteries', 'Superalloys', 'Plating'],
    lmeRate: 16895,
    change: -155,
    popular: false,
  },
  {
    id: 'lead',
    name: 'Lead',
    symbol: 'Pb',
    tagline: 'Ingots & Lead Hard',
    description: 'Pure lead ingots for battery manufacturing, radiation shielding, and cable sheathing applications.',
    grade: '99.97%',
    purity: '99.97%',
    forms: ['Ingots', 'Lead Hard', 'Lead Alloy', 'Sheet'],
    applications: ['Batteries', 'Radiation shielding', 'Cable sheathing', 'Weights'],
    lmeRate: 2013.5,
    change: -42,
    popular: false,
  },
  {
    id: 'zinc',
    name: 'Zinc',
    symbol: 'Zn',
    tagline: 'SHG Ingots',
    description: 'Special High Grade (SHG) zinc ingots for galvanizing, die-casting, and brass manufacturing.',
    grade: 'SHG',
    purity: '99.995%',
    forms: ['Ingots', 'Jumbo Ingots', 'Zinc Alloy', 'Die-cast Alloy'],
    applications: ['Galvanizing', 'Die-casting', 'Brass production', 'Pharmaceuticals'],
    lmeRate: 3171,
    change: -34,
    popular: false,
  },
  {
    id: 'tin',
    name: 'Tin',
    symbol: 'Sn',
    tagline: 'Ingots & Bars',
    description: 'High-purity tin ingots for soldering, tinplate manufacturing, and food-grade applications.',
    grade: '99.9%',
    purity: '99.9%',
    forms: ['Ingots', 'Bars', 'Solder', 'Anode'],
    applications: ['Soldering', 'Tinplate', 'Food packaging', 'Bronze alloys'],
    lmeRate: 41900,
    change: 25,
    popular: false,
  },
]

const industries = [
  { icon: Zap, name: 'Electrical & Electronics', description: 'Copper wire, components' },
  { icon: Car, name: 'Automotive', description: 'Alloys, die-casting' },
  { icon: Building, name: 'Construction', description: 'Structural materials' },
  { icon: Cpu, name: 'Manufacturing', description: 'Industrial metals' },
  { icon: Wrench, name: 'Engineering', description: 'Specialty alloys' },
  { icon: Radio, name: 'Telecommunications', description: 'Cable materials' },
]

const qualityFeatures = [
  {
    icon: Shield,
    title: 'LME Registered',
    description: 'We supply London Metal Exchange registered brands.',
  },
  {
    icon: Award,
    title: 'Lab Tested',
    description: 'Every shipment comes with certified test reports.',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'ISO 9001:2015 compliant processes throughout.',
  },
]

export default function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState('copper')
  const [filter, setFilter] = useState('all')

  const activeProductData = products.find(p => p.id === activeProduct) || products[0]

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[350px] flex items-center bg-charcoal pt-[72px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        </div>

        <div className="container-main relative z-10">
          <nav className="text-sm mb-6">
            <Link href="/" className="text-gold hover:underline">Home</Link>
            <span className="text-white/50 mx-2">›</span>
            <span className="text-white/70">Products</span>
          </nav>
          <h1 className="font-montserrat font-bold text-4xl lg:text-5xl text-white mb-4">
            Our Premium Metals
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Export-grade quality materials for global industries.
          </p>
        </div>
      </section>

      {/* Live Rates Ticker */}
      <LiveRatesTicker />

      {/* Filter Bar */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container-main">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2.5 rounded-lg font-montserrat font-medium text-sm transition-colors ${
                filter === 'all' ? 'bg-gold text-black' : 'border border-gray-200 text-charcoal hover:border-gold'
              }`}
            >
              All Metals
            </button>
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setFilter(product.id)}
                className={`px-5 py-2.5 rounded-lg font-montserrat font-medium text-sm transition-colors ${
                  filter === product.id ? 'bg-gold text-black' : 'border border-gray-200 text-charcoal hover:border-gold'
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-offwhite">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter(p => filter === 'all' || p.id === filter)
              .map((product) => (
              <div 
                key={product.id}
                id={product.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 group hover:border-gold/30 transition-colors"
              >
                {/* Image placeholder */}
                <div className="relative h-52 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-montserrat text-5xl font-bold text-gray-300 block">
                      {product.symbol}
                    </span>
                    <span className="text-gray-400 text-sm">{product.name}</span>
                  </div>
                  {product.popular && (
                    <span className="absolute top-4 right-4 bg-gold text-black text-xs font-semibold px-3 py-1 rounded uppercase tracking-wide">
                      Popular
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-xl text-charcoal mb-1">
                    {product.name}
                  </h3>
                  <p className="text-gold text-sm font-medium mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="bg-offwhite rounded-lg px-3 py-2">
                      <span className="text-gray-400 text-xs block">Grade</span>
                      <span className="text-charcoal font-medium">{product.grade}</span>
                    </div>
                    <div className="bg-offwhite rounded-lg px-3 py-2">
                      <span className="text-gray-400 text-xs block">Purity</span>
                      <span className="text-charcoal font-medium">{product.purity}</span>
                    </div>
                  </div>

                  {/* Forms */}
                  <div className="mb-4">
                    <span className="text-gray-400 text-xs block mb-2">Available Forms</span>
                    <div className="flex flex-wrap gap-2">
                      {product.forms.slice(0, 3).map((form, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-charcoal px-2 py-1 rounded">
                          {form}
                        </span>
                      ))}
                      {product.forms.length > 3 && (
                        <span className="text-xs text-gold font-medium">
                          +{product.forms.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* LME Rate */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-400 uppercase tracking-wide block">LME Rate</span>
                      <div className="flex items-center gap-2">
                        <span className="font-montserrat font-semibold text-charcoal">
                          ${product.lmeRate.toLocaleString()}/MT
                        </span>
                        <span className={`flex items-center text-xs font-medium ${product.change >= 0 ? 'text-success' : 'text-danger'}`}>
                          {product.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                          <span className="ml-1">{product.change >= 0 ? '+' : ''}{product.change}</span>
                        </span>
                      </div>
                    </div>
                    <Link 
                      href="/contact"
                      className="btn-primary text-xs py-2 px-4"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Specifications Detail */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <h2 className="section-heading-center mb-12">Product Specifications</h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product.id)}
                className={`px-6 py-3 rounded-lg font-montserrat font-medium text-sm transition-colors ${
                  activeProduct === product.id 
                    ? 'bg-charcoal text-white' 
                    : 'bg-gray-100 text-charcoal hover:bg-gray-200'
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <span className="font-montserrat text-7xl font-bold text-gray-300 block mb-2">
                  {activeProductData.symbol}
                </span>
                <span className="text-gray-400">{activeProductData.name}</span>
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="font-montserrat font-bold text-xl text-gold">
                    {activeProductData.symbol}
                  </span>
                </span>
                <div>
                  <h3 className="font-montserrat font-bold text-2xl text-charcoal">
                    {activeProductData.name}
                  </h3>
                  <p className="text-gold">{activeProductData.tagline}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                {activeProductData.description}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex border-b border-gray-100 pb-3">
                  <span className="w-32 text-gray-400 text-sm">Grade</span>
                  <span className="font-medium text-charcoal">{activeProductData.grade}</span>
                </div>
                <div className="flex border-b border-gray-100 pb-3">
                  <span className="w-32 text-gray-400 text-sm">Purity</span>
                  <span className="font-medium text-charcoal">{activeProductData.purity}</span>
                </div>
                <div className="flex border-b border-gray-100 pb-3">
                  <span className="w-32 text-gray-400 text-sm">LME Rate</span>
                  <span className="font-montserrat font-semibold text-charcoal">
                    ${activeProductData.lmeRate.toLocaleString()}/MT
                  </span>
                </div>
                <div className="flex border-b border-gray-100 pb-3">
                  <span className="w-32 text-gray-400 text-sm">Forms</span>
                  <span className="font-medium text-charcoal">{activeProductData.forms.join(', ')}</span>
                </div>
              </div>

              <div className="mb-8">
                <span className="font-montserrat font-semibold text-sm text-charcoal mb-3 block">
                  Applications
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeProductData.applications.map((app, i) => (
                    <span key={i} className="px-3 py-1.5 bg-offwhite rounded-lg text-sm text-charcoal">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <Link href="/contact" className="btn-primary">
                Request Quote <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Delhi Spot Rates */}
      <DelhiSpotRates />

      {/* Quality Assurance */}
      <section className="py-16 bg-charcoal">
        <div className="container-main">
          <h2 className="font-montserrat font-bold text-3xl text-gold text-center mb-12">
            Quality You Can Trust
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 border border-gold/20 rounded-xl"
              >
                <feature.icon className="w-12 h-12 text-gold mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-montserrat font-semibold text-lg text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <h2 className="section-heading-center mb-12">Industries We Serve</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-offwhite flex items-center justify-center">
                  <industry.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-charcoal mb-1">
                  {industry.name}
                </h3>
                <p className="text-gray-400 text-xs">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  )
}
