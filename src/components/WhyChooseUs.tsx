import { Globe, ShieldCheck, Truck, Handshake } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Exporting to 50+ countries across Asia, Middle East, Europe, Africa & Americas.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assured',
    description: 'LME-registered brands meeting international purity standards.',
  },
  {
    icon: Truck,
    title: 'Reliable Logistics',
    description: 'Established shipping partnerships for timely deliveries worldwide.',
  },
  {
    icon: Handshake,
    title: 'Trusted Partner',
    description: '15+ years of export excellence with 500+ satisfied clients.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container-main">
        <h2 className="section-heading mb-12">Why GM International?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="border-l-4 border-gold pl-6 py-2"
            >
              <feature.icon className="w-10 h-10 text-gold mb-4" strokeWidth={1.5} />
              <h3 className="font-montserrat font-semibold text-lg text-charcoal mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
