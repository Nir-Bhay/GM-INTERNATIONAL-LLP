import Link from 'next/link'
import { Eye, Target, Diamond, Award, Users, Clock, CheckCircle } from 'lucide-react'
import StatsSection from '@/components/StatsSection'
import CTABanner from '@/components/CTABanner'

const coreValues = [
  {
    icon: Diamond,
    title: 'Quality',
    description: 'Premium grade metals meeting international LME standards.',
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'Transparent dealings, honest pricing, and ethical practices.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'Building lasting relationships with every client we serve.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'Timely delivery and consistent supply chain management.',
  },
]

const timeline = [
  {
    year: '2008',
    title: 'Company Founded',
    description: 'Started operations in Delhi with focus on domestic metal trading.',
  },
  {
    year: '2012',
    title: 'First Export',
    description: 'Expanded to international markets, shipping to UAE and Southeast Asia.',
  },
  {
    year: '2016',
    title: 'Global Expansion',
    description: 'Reached 25+ countries with dedicated logistics partnerships.',
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Launched online platform for real-time pricing and order tracking.',
  },
  {
    year: '2024',
    title: 'Industry Leader',
    description: 'Recognized as leading metal exporter with 50+ country presence.',
  },
]

const certifications = [
  'ISO 9001:2015',
  'ISO 14001:2015',
  'BIS Certified',
  'LME Approved',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center bg-charcoal pt-[72px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        </div>

        <div className="container-main relative z-10">
          <nav className="text-sm mb-6">
            <Link href="/" className="text-gold hover:underline">Home</Link>
            <span className="text-white/50 mx-2">›</span>
            <span className="text-white/70">About Us</span>
          </nav>
          <h1 className="font-montserrat font-bold text-4xl lg:text-5xl text-white mb-4">
            About GM International
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Two decades of excellence in global metal trading.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-montserrat font-semibold text-sm text-gold uppercase tracking-widest mb-4 block">
                Our Story
              </span>
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-charcoal mb-6 leading-tight">
                Built on Trust,<br />Driven by Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2008, GM International LLP has grown from a local metal trading company 
                to a trusted name in global metal exports. With headquarters in New Delhi, India, 
                we specialize in exporting premium-grade non-ferrous metals to clients across 50+ countries.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our commitment to quality, competitive LME-linked pricing, and reliable logistics 
                has made us the preferred partner for industries ranging from electrical manufacturing 
                to automotive production worldwide.
              </p>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-offwhite rounded-lg text-sm font-medium text-charcoal"
                  >
                    <CheckCircle size={16} className="text-gold" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-gray-400 font-montserrat">Company Image</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-gold rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-offwhite">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-xl p-8 border-l-4 border-gold">
              <Eye className="w-12 h-12 text-gold mb-6" strokeWidth={1.5} />
              <h3 className="font-montserrat font-bold text-2xl text-charcoal mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and preferred metal export partner globally, 
                known for quality, reliability, and customer-centric approach. 
                We aim to bridge Indian metal manufacturers with global industries.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-xl p-8 border-l-4 border-gold">
              <Target className="w-12 h-12 text-gold mb-6" strokeWidth={1.5} />
              <h3 className="font-montserrat font-bold text-2xl text-charcoal mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver premium-quality metals at competitive prices with exceptional 
                service. We commit to transparent pricing, timely delivery, and building 
                lasting partnerships with every client we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container-main">
          <h2 className="section-heading-center mb-12">Our Core Values</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-charcoal">
        <div className="container-main">
          <h2 className="font-montserrat font-bold text-3xl text-gold text-center mb-16">
            Our Journey
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 -translate-x-1/2 hidden lg:block" />

            <div className="space-y-12 lg:space-y-16">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <span className="font-montserrat font-bold text-3xl text-gold">
                      {item.year}
                    </span>
                    <h3 className="font-montserrat font-semibold text-xl text-white mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 rounded-full bg-gold hidden lg:block" />
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <StatsSection />

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-main text-center">
          <h2 className="font-montserrat font-bold text-3xl text-charcoal mb-4">
            Want to Know More?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Get in touch with our team to discuss your metal requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Contact Us</Link>
            <Link href="/products" className="btn-secondary">View Products</Link>
          </div>
        </div>
      </section>
    </>
  )
}
