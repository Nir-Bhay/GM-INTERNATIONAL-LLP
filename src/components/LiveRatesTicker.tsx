'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'

const lmeRates = [
  { name: 'Copper', rate: 12846.5, change: 38, unit: '$/MT' },
  { name: 'Aluminium', rate: 3063.5, change: -22, unit: '$/MT' },
  { name: 'Nickel', rate: 16895, change: -155, unit: '$/MT' },
  { name: 'Lead', rate: 2013.5, change: -42, unit: '$/MT' },
  { name: 'Zinc', rate: 3171, change: -34, unit: '$/MT' },
  { name: 'Tin', rate: 41900, change: 25, unit: '$/MT' },
]

const mcxRates = [
  { name: 'Copper', rate: 1306.1, change: 19, unit: '₹/Kg' },
  { name: 'Gold', rate: 137900, change: 2139, unit: '₹/10g' },
  { name: 'Silver', rate: 244070, change: 7754, unit: '₹/Kg' },
]

export default function LiveRatesTicker() {
  const renderRateItem = (item: typeof lmeRates[0], index: number) => (
    <div key={index} className="flex items-center gap-4 px-6 py-2 border-r border-gray-700 last:border-r-0">
      <span className="font-montserrat font-semibold text-white text-sm uppercase tracking-wide">
        {item.name}
      </span>
      <span className="font-inter text-white font-medium">
        {item.rate.toLocaleString()}
      </span>
      <span className={`flex items-center gap-1 text-sm font-medium ${item.change >= 0 ? 'text-success' : 'text-danger'}`}>
        {item.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
        {item.change >= 0 ? '+' : ''}{item.change}
      </span>
    </div>
  )

  return (
    <section className="bg-charcoal py-4 overflow-hidden">
      <div className="container-main mb-3">
        <div className="flex items-center gap-3">
          <span className="font-montserrat font-semibold text-gold text-xs uppercase tracking-widest">
            Live Market Rates
          </span>
          <span className="flex items-center gap-2 text-xs text-gray-400">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
            Real-time
          </span>
        </div>
      </div>
      
      {/* LME Rates Row */}
      <div className="relative mb-2">
        <div className="flex items-center gap-2 px-6 mb-1">
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">LME</span>
        </div>
        <div className="flex animate-ticker">
          <div className="flex">
            {lmeRates.map((rate, i) => renderRateItem(rate, i))}
          </div>
          <div className="flex">
            {lmeRates.map((rate, i) => renderRateItem(rate, i + lmeRates.length))}
          </div>
        </div>
      </div>

      {/* MCX Rates Row */}
      <div className="relative">
        <div className="flex items-center gap-2 px-6 mb-1">
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">MCX</span>
        </div>
        <div className="flex animate-ticker" style={{ animationDirection: 'reverse' }}>
          <div className="flex">
            {mcxRates.map((rate, i) => renderRateItem(rate, i))}
            {mcxRates.map((rate, i) => renderRateItem(rate, i + mcxRates.length))}
          </div>
          <div className="flex">
            {mcxRates.map((rate, i) => renderRateItem(rate, i))}
            {mcxRates.map((rate, i) => renderRateItem(rate, i + mcxRates.length))}
          </div>
        </div>
      </div>
    </section>
  )
}
