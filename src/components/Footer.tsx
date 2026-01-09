import Link from 'next/link'
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 44 44" className="w-full h-full">
                  <g fill="#D4AF37">
                    <path d="M22 2C12 2 4 10 4 20c0 2 .3 4 .9 6 .2-.5.5-1 .8-1.4C5.3 22.6 5 21.3 5 20c0-9.4 7.6-17 17-17s17 7.6 17 17c0 1.3-.3 2.6-.7 3.8.3.4.6.9.8 1.4.6-2 .9-4 .9-6 0-10-8-18-18-18z"/>
                  </g>
                  <text x="22" y="26" textAnchor="middle" fontSize="14" fontWeight="bold" fontFamily="Montserrat, sans-serif">
                    <tspan fill="#29B6F6">G</tspan>
                    <tspan fill="#D4AF37">M</tspan>
                  </text>
                </svg>
              </div>
              <div>
                <span className="font-montserrat font-bold text-white block">GM International</span>
                <span className="font-inter text-xs text-gray-400 tracking-wider uppercase">LLP</span>
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
