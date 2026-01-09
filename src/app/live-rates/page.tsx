'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TrendingUp, TrendingDown, RefreshCw, Download, Clock } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

const lmeRates = [
  { id: 'copper', name: 'Copper', symbol: 'Cu', rate: 12885, change: 38.5, changePercent: 0.30, high: 12900, low: 12820, unit: '$/MT', image: 'https://images.unsplash.com/photo-1611273298545-0361288f341d?auto=format&fit=crop&q=80&w=200' },
  { id: 'aluminium', name: 'Aluminium', symbol: 'Al', rate: 3081, change: 17.5, changePercent: 0.57, high: 3095, low: 3060, unit: '$/MT', image: 'https://images.unsplash.com/photo-1584013323583-825c93faa1e7?auto=format&fit=crop&q=80&w=200' },
  { id: 'nickel', name: 'Nickel', symbol: 'Ni', rate: 16920, change: 25, changePercent: 0.15, high: 17130, low: 16850, unit: '$/MT', image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?auto=format&fit=crop&q=80&w=200' },
  { id: 'lead', name: 'Lead', symbol: 'Pb', rate: 2006, change: -7.5, changePercent: -0.37, high: 2047, low: 2000, unit: '$/MT', image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=200' },
  { id: 'zinc', name: 'Zinc', symbol: 'Zn', rate: 3107, change: -64, changePercent: -2.02, high: 3152, low: 3100, unit: '$/MT', image: 'https://images.unsplash.com/photo-1533038590840-1cde6e66b060?auto=format&fit=crop&q=80&w=200' },
  { id: 'tin', name: 'Tin', symbol: 'Sn', rate: 44400, change: 2500, changePercent: 5.97, high: 44800, low: 43500, unit: '$/MT', image: 'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&q=80&w=200' },
]

const mcxRates = [
  { name: 'Copper', rate: 1306.1, change: 19, changePercent: 1.48, contract: 'JAN', unit: '₹/Kg' },
  { name: 'Gold', rate: 137900, change: 2139, changePercent: 1.58, contract: 'FEB', unit: '₹/10g' },
  { name: 'Silver', rate: 244070, change: 7754, changePercent: 3.28, contract: 'MAR', unit: '₹/Kg' },
  { name: 'Aluminium', rate: 268.2, change: -1.8, changePercent: -0.67, contract: 'JAN', unit: '₹/Kg' },
  { name: 'Zinc', rate: 278.5, change: -3.2, changePercent: -1.14, contract: 'JAN', unit: '₹/Kg' },
  { name: 'Lead', rate: 176.8, change: -2.5, changePercent: -1.39, contract: 'JAN', unit: '₹/Kg' },
  { name: 'Nickel', rate: 1485.6, change: -12.4, changePercent: -0.83, contract: 'JAN', unit: '₹/Kg' },
]

const delhiRates = [
  { material: 'Copper Armature (Plant)', hindi: 'कॉपर आर्मेचर (प्लांट)', rate: '₹1,112 - ₹1,202' },
  { material: 'Copper Armature (Motor)', hindi: 'कॉपर आर्मेचर (मोटर)', rate: '₹1,090 - ₹1,180' },
  { material: 'CC Rod (8mm)', hindi: 'सीसी रॉड 8mm', rate: '₹835 - ₹845' },
  { material: 'Brass (Mixed)', hindi: 'पीतल (मिक्स)', rate: '₹555 - ₹565' },
  { material: 'Brass Honey', hindi: 'पीतल हनी', rate: '₹590 - ₹600' },
  { material: 'Aluminium (Utensil)', hindi: 'एल्युमीनियम (बर्तन)', rate: '₹185 - ₹195' },
  { material: 'Aluminium (Section)', hindi: 'एल्युमीनियम (सेक्शन)', rate: '₹195 - ₹205' },
  { material: 'Lead (Pure)', hindi: 'लेड (शुद्ध)', rate: '₹195 - ₹205' },
  { material: 'Lead (Battery)', hindi: 'लेड (बैटरी)', rate: '₹138 - ₹145' },
  { material: 'Zinc (Ingot)', hindi: 'जिंक (इंगट)', rate: '₹295 - ₹305' },
  { material: 'Tin (Ingot)', hindi: 'टिन (इंगट)', rate: '₹2,450 - ₹2,550' },
  { material: 'Nickel (Cathode)', hindi: 'निकल (कैथोड)', rate: '₹1,560 - ₹1,640' },
]

export default function LiveRatesPage() {
  const [activeTab, setActiveTab] = useState<'lme' | 'mcx' | 'delhi'>('lme')
  const [lastUpdated] = useState(new Date().toLocaleTimeString('en-IN', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  }))

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[320px] flex items-center bg-charcoal pt-[72px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/60" />
        </div>

        <div className="container-main relative z-10">
          <nav className="text-sm mb-6">
            <Link href="/" className="text-gold hover:underline">Home</Link>
            <span className="text-white/50 mx-2">›</span>
            <span className="text-white/70">Live Rates</span>
          </nav>
          <h1 className="font-montserrat font-bold text-4xl lg:text-5xl text-white mb-4">
            Live Market Rates
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Real-time LME, MCX & Delhi spot prices for all metals.
          </p>
        </div>
      </section>

      {/* Rate Update Info */}
      <section className="py-4 bg-charcoal border-b border-gray-800">
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                Live
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <Clock size={14} />
                Last updated: {lastUpdated} IST
              </span>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-gold border border-gold/30 rounded-lg hover:bg-gold/10 transition-colors">
                <RefreshCw size={14} />
                Refresh
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 border border-gray-600 rounded-lg hover:border-gray-500 transition-colors">
                <Download size={14} />
                Export CSV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-[72px] z-40">
        <div className="container-main">
          <div className="flex gap-2">
            {[
              { id: 'lme', label: 'LME Rates ($/MT)' },
              { id: 'mcx', label: 'MCX India (₹)' },
              { id: 'delhi', label: 'Delhi Spot (₹/Kg)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-6 py-3 rounded-lg font-montserrat font-medium text-sm transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-charcoal text-white' 
                    : 'bg-gray-100 text-charcoal hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LME Rates */}
      {activeTab === 'lme' && (
        <section className="py-8 lg:py-12 bg-offwhite">
          <div className="container-main">
            <div className="mb-6 lg:mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-charcoal mb-2">
                London Metal Exchange Rates
              </h2>
              <p className="text-gray-500">
                Official LME settlement prices in USD per Metric Ton
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lmeRates.map((metal) => (
                <div 
                  key={metal.id}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Image 
                        src={metal.image} 
                        alt={metal.name}
                        width={48}
                        height={48}
                        className="rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-montserrat font-semibold text-lg text-charcoal">
                          {metal.name}
                        </h3>
                        <span className="text-xs text-gray-400 uppercase tracking-wider">
                          LME Settlement
                        </span>
                      </div>
                    </div>
                    <span className={`flex items-center gap-1 text-sm font-semibold px-2 py-1 rounded ${
                      metal.change >= 0 ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
                    }`}>
                      {metal.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                      {metal.changePercent.toFixed(2)}%
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="font-montserrat font-bold text-3xl text-charcoal">
                      ${metal.rate.toLocaleString()}
                    </span>
                    <span className="text-gray-400 text-sm ml-1">/MT</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm mb-4">
                    <span className={`font-medium ${metal.change >= 0 ? 'text-success' : 'text-danger'}`}>
                      {metal.change >= 0 ? '+' : ''}{metal.change}
                    </span>
                    <span className="text-gray-400">from previous close</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-400 block">Day High</span>
                      <span className="font-medium text-charcoal">${metal.high.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 block">Day Low</span>
                      <span className="font-medium text-charcoal">${metal.low.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MCX Rates */}
      {activeTab === 'mcx' && (
        <section className="py-12 bg-offwhite">
          <div className="container-main">
            <div className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-charcoal mb-2">
                MCX India Futures
              </h2>
              <p className="text-gray-500">
                Multi Commodity Exchange of India - Live futures prices
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] bg-white rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-charcoal text-white">
                    <th className="py-4 px-6 text-left font-montserrat font-semibold text-sm uppercase tracking-wide">
                      Commodity
                    </th>
                    <th className="py-4 px-6 text-left font-montserrat font-semibold text-sm uppercase tracking-wide">
                      Contract
                    </th>
                    <th className="py-4 px-6 text-right font-montserrat font-semibold text-sm uppercase tracking-wide">
                      Price
                    </th>
                    <th className="py-4 px-6 text-right font-montserrat font-semibold text-sm uppercase tracking-wide">
                      Change
                    </th>
                    <th className="py-4 px-6 text-right font-montserrat font-semibold text-sm uppercase tracking-wide">
                      % Change
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mcxRates.map((item, index) => (
                    <tr 
                      key={index}
                      className={`border-b border-gray-100 hover:bg-offwhite transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      }`}
                    >
                      <td className="py-4 px-6">
                        <span className="font-montserrat font-semibold text-charcoal">
                          {item.name}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded text-charcoal">
                          {item.contract}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className="font-montserrat font-semibold text-charcoal">
                          {item.rate.toLocaleString()}
                        </span>
                        <span className="text-gray-400 text-sm ml-1">{item.unit}</span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className={`font-medium ${item.change >= 0 ? 'text-success' : 'text-danger'}`}>
                          {item.change >= 0 ? '+' : ''}{item.change}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-sm font-medium ${
                          item.change >= 0 ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
                        }`}>
                          {item.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                          {item.changePercent.toFixed(2)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Delhi Spot Rates */}
      {activeTab === 'delhi' && (
        <section className="py-12 bg-offwhite">
          <div className="container-main">
            <div className="mb-8">
              <h2 className="font-montserrat font-bold text-2xl text-charcoal mb-2">
                Delhi Spot Rates (दिल्ली दलाल भाव)
              </h2>
              <p className="text-gray-500">
                Daily spot prices for scrap and refined metals in Delhi market
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] bg-white rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gold text-black">
                    <th className="py-4 px-6 text-left font-montserrat font-semibold text-sm uppercase tracking-wide">
                      Material
                    </th>
                    <th className="py-4 px-6 text-left font-montserrat font-semibold text-sm uppercase tracking-wide">
                      हिंदी
                    </th>
                    <th className="py-4 px-6 text-right font-montserrat font-semibold text-sm uppercase tracking-wide">
                      Rate (₹/Kg)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {delhiRates.map((item, index) => (
                    <tr 
                      key={index}
                      className={`border-b border-gray-100 hover:bg-offwhite transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      }`}
                    >
                      <td className="py-4 px-6 font-inter text-charcoal">
                        {item.material}
                      </td>
                      <td className="py-4 px-6 font-inter text-gray-500">
                        {item.hindi}
                      </td>
                      <td className="py-4 px-6 text-right font-montserrat font-semibold text-charcoal">
                        {item.rate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-400 mt-6 text-center">
              * Rates are indicative and subject to change. Contact us for exact pricing.
            </p>
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="container-main">
          <div className="bg-offwhite rounded-xl p-6">
            <h3 className="font-montserrat font-semibold text-charcoal mb-2">
              Disclaimer
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              The rates displayed are for reference purposes only and may differ from actual trading prices. 
              LME rates are sourced from London Metal Exchange. MCX rates are from Multi Commodity Exchange of India. 
              Delhi spot rates are indicative dealer prices. For actual quotations and trading, please contact our sales team.
              Rates are updated during market hours and may have a delay of 15-20 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  )
}
