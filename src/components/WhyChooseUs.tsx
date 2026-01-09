import Image from 'next/image'
import { Globe, ShieldCheck, Truck, Handshake } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Exporting to 50+ countries across Asia, Middle East, Europe, Africa & Americas.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assured',
    description: 'LME-registered brands meeting international purity standards.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Truck,
    title: 'Reliable Logistics',
    description: 'Established shipping partnerships for timely deliveries worldwide.',
    image: 'https://images.unsplash.com/photo-1494412651409-ae510d011566?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Handshake,
    title: 'Trusted Partner',
    description: '15+ years of export excellence with 500+ satisfied clients.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800'
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container-main">
        <h2 className="section-heading mb-8 lg:mb-12">Why GM International?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-offwhite hover:bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-transparent hover:border-gold/20"
            >
              <div className="h-40 overflow-hidden relative">
                 <Image 
                   src={feature.image} 
                   alt={feature.title} 
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors" />
              </div>
              
              <div className="p-6 relative">
                <div className="absolute -top-8 right-6 bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                  <feature.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                </div>
                
                <h3 className="font-montserrat font-semibold text-lg text-charcoal mb-3 mt-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
