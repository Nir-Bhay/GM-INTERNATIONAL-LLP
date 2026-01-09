import Link from 'next/link'
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'copper',
    name: 'Copper',
    description: 'LME Grade A cathodes, CC rods & wire for electrical applications.',
    grade: 'Grade A',
    purity: '99.99%',
    lmeRate: 12846.5,
    change: 38,
    image: '/images/copper.jpg',
    popular: true,
  },
  {
    id: 'aluminium',
    name: 'Aluminium',
    description: 'P1020 ingots and alloys for automotive & construction industries.',
    grade: 'P1020',
    purity: '99.7%',
    lmeRate: 3063.5,
    change: -22,
    image: '/images/aluminium.jpg',
    popular: false,
  },
  {
    id: 'nickel',
    name: 'Nickel',
    description: 'High-purity cathodes and briquettes for stainless steel production.',
    grade: 'LME Grade',
    purity: '99.8%',
    lmeRate: 16895,
    change: -155,
    image: '/images/nickel.jpg',
    popular: false,
  },
  {
    id: 'lead',
    name: 'Lead',
    description: 'Pure lead ingots for battery manufacturing and radiation shielding.',
    grade: '99.97%',
    purity: '99.97%',
    lmeRate: 2013.5,
    change: -42,
    image: '/images/lead.jpg',
    popular: false,
  },
  {
    id: 'zinc',
    name: 'Zinc',
    description: 'SHG zinc ingots for galvanizing and die-casting applications.',
    grade: 'SHG',
    purity: '99.995%',
    lmeRate: 3171,
    change: -34,
    image: '/images/zinc.jpg',
    popular: false,
  },
  {
    id: 'tin',
    name: 'Tin',
    description: 'High-purity tin ingots for soldering and food-grade applications.',
    grade: '99.9%',
    purity: '99.9%',
    lmeRate: 41900,
    change: 25,
    image: '/images/tin.jpg',
    popular: false,
  },
]

export default function ProductsShowcase() {
  return (
    <section className="py-20 bg-offwhite">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="section-heading-center">Our Premium Metals</h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Export-grade metals meeting LME standards. Competitive pricing with reliable supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 group hover:border-gold/30 transition-colors"
            >
              {/* Image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="font-montserrat text-4xl font-bold text-gray-300">
                  {product.name.substring(0, 2)}
                </span>
                {product.popular && (
                  <span className="absolute top-4 right-4 bg-gold text-black text-xs font-semibold px-3 py-1 rounded uppercase tracking-wide">
                    Popular
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-charcoal mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="flex gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-400">Grade:</span>
                    <span className="ml-1 text-charcoal font-medium">{product.grade}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Purity:</span>
                    <span className="ml-1 text-charcoal font-medium">{product.purity}</span>
                  </div>
                </div>

                {/* LME Rate */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">LME Rate</span>
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
                    href={`/products#${product.id}`}
                    className="text-gold font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products" className="btn-secondary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
