import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Linkedin, Twitter } from 'lucide-react'

const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Our Products' },
    { href: '/live-rates', label: 'Live Rates' },
    { href: '/contact', label: 'Contact' },
  ],
  products: [
    { href: '/products#copper', label: 'Copper' },
    { href: '/products#aluminium', label: 'Aluminium' },
    { href: '/products#nickel', label: 'Nickel' },
    { href: '/products#lead', label: 'Lead' },
    { href: '/products#zinc', label: 'Zinc' },
    { href: '/products#tin', label: 'Tin' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t-2 border-gold">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="relative w-48 h-12">
                <Image 
                  src="/logo.png" 
                  alt="GM International LLP" 
                  fill
                  className="object-contain object-left invert brightness-0"
                  style={{ filter: 'brightness(0) invert(1)' }} 
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium metal exports from India. LME-linked pricing with competitive rates for copper, aluminium, nickel, lead, zinc & tin.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-white uppercase tracking-wider text-sm mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-montserrat font-semibold text-white uppercase tracking-wider text-sm mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-semibold text-white uppercase tracking-wider text-sm mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span>123 Trade Center, Industrial Area<br />New Delhi - 110001, India</span>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <span>+91 98XXX XXXXX</span>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <span>exports@gminternational.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GM International LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Made in India</span>
            <span className="text-lg">🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
