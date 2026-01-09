'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/live-rates', label: 'Live Rates' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white border-b border-gray-200' : 'bg-white border-b border-gray-200'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 flex items-center justify-center">
              <svg viewBox="0 0 44 44" className="w-full h-full">
                {/* Laurel Wreath */}
                <g fill="#D4AF37">
                  <path d="M22 2C12 2 4 10 4 20c0 2 .3 4 .9 6 .2-.5.5-1 .8-1.4C5.3 22.6 5 21.3 5 20c0-9.4 7.6-17 17-17s17 7.6 17 17c0 1.3-.3 2.6-.7 3.8.3.4.6.9.8 1.4.6-2 .9-4 .9-6 0-10-8-18-18-18z"/>
                  <path d="M8 28c-1 2-1.5 4-1.5 6 0 2.5 1 5 3 7l1-1c-1.5-1.5-2.5-3.5-2.5-6 0-1.5.4-3 1-4.5-.4-.4-.7-1-1-1.5zM36 28c1 2 1.5 4 1.5 6 0 2.5-1 5-3 7l-1-1c1.5-1.5 2.5-3.5 2.5-6 0-1.5-.4-3-1-4.5.4-.4.7-1 1-1.5z"/>
                </g>
                {/* GM Letters with colored stripes */}
                <text x="22" y="26" textAnchor="middle" fontSize="14" fontWeight="bold" fontFamily="Montserrat, sans-serif">
                  <tspan fill="#29B6F6">G</tspan>
                  <tspan fill="#D4AF37">M</tspan>
                </text>
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="font-montserrat font-bold text-lg text-charcoal leading-tight block">GM International</span>
              <span className="font-inter text-xs text-gray-500 tracking-wider uppercase">LLP</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'nav-link-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="container-main py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link py-2 ${pathname === link.href ? 'text-gold' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="btn-primary mt-4 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
