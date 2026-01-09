'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, MessageCircle, ChevronDown, Send, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

const faqs = [
  {
    question: 'What is your minimum order quantity?',
    answer: 'Our minimum order quantity varies by product. For most metals, we accept orders starting from 1 MT (Metric Ton). For bulk orders above 100 MT, we offer special pricing.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept Letter of Credit (L/C), Telegraphic Transfer (T/T), and Document Against Payment (D/P). Payment terms are negotiable based on order volume and relationship.',
  },
  {
    question: 'Do you provide test certificates?',
    answer: 'Yes, every shipment comes with mill test certificates (MTC) and third-party lab analysis reports. We can also arrange inspection through SGS, Bureau Veritas, or any agency of your choice.',
  },
  {
    question: 'Which countries do you export to?',
    answer: 'We export to 50+ countries including UAE, Saudi Arabia, Qatar, Turkey, Germany, UK, USA, Brazil, Nigeria, Kenya, Bangladesh, Vietnam, and many more. Contact us for specific destination queries.',
  },
  {
    question: 'What is the typical delivery time?',
    answer: 'Delivery time depends on destination and order size. Typically, orders are dispatched within 7-10 days of payment confirmation. Transit time varies from 10-30 days based on shipping route.',
  },
]

const regions = [
  { name: 'Middle East', countries: 'UAE, Saudi Arabia, Qatar, Oman' },
  { name: 'Africa', countries: 'Nigeria, Kenya, Egypt, South Africa' },
  { name: 'Asia Pacific', countries: 'Bangladesh, Vietnam, Indonesia, Japan' },
  { name: 'Europe', countries: 'Germany, UK, Netherlands, Turkey' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    metal: '',
    quantity: '',
    message: '',
  })
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      metal: '',
      quantity: '',
      message: '',
    })
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[320px] flex items-center bg-charcoal pt-[72px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        </div>

        <div className="container-main relative z-10">
          <nav className="text-sm mb-6">
            <Link href="/" className="text-gold hover:underline">Home</Link>
            <span className="text-white/50 mx-2">›</span>
            <span className="text-white/70">Contact</span>
          </nav>
          <h1 className="font-montserrat font-bold text-4xl lg:text-5xl text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Let's discuss your metal export requirements.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form - 3 cols */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h2 className="font-montserrat font-bold text-2xl text-charcoal mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 mb-8">
                  Fill out the form and our team will respond within 24 hours.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
                      <Send className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="font-montserrat font-semibold text-xl text-charcoal mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Thank you for your inquiry. We'll get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="label-field">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="label-field">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="label-field">Company Name</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company Ltd."
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="label-field">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98XXX XXXXX"
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="label-field">Subject *</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="input-field"
                      >
                        <option value="">Select a subject</option>
                        <option value="quote">Request a Quote</option>
                        <option value="inquiry">General Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="support">Technical Support</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="label-field">Metal of Interest</label>
                        <select
                          value={formData.metal}
                          onChange={(e) => setFormData({ ...formData, metal: e.target.value })}
                          className="input-field"
                        >
                          <option value="">Select metal</option>
                          <option value="copper">Copper</option>
                          <option value="aluminium">Aluminium</option>
                          <option value="nickel">Nickel</option>
                          <option value="lead">Lead</option>
                          <option value="zinc">Zinc</option>
                          <option value="tin">Tin</option>
                          <option value="multiple">Multiple Metals</option>
                        </select>
                      </div>
                      <div>
                        <label className="label-field">Estimated Quantity</label>
                        <select
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          className="input-field"
                        >
                          <option value="">Select quantity</option>
                          <option value="1-10">1 - 10 MT</option>
                          <option value="10-50">10 - 50 MT</option>
                          <option value="50-100">50 - 100 MT</option>
                          <option value="100+">100+ MT</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="label-field">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements..."
                        className="input-field resize-none"
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-primary w-full md:w-auto disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send size={16} className="ml-2" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info - 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              {/* Office Address */}
              <div className="bg-offwhite rounded-xl p-6">
                <MapPin className="w-10 h-10 text-gold mb-4" strokeWidth={1.5} />
                <h3 className="font-montserrat font-semibold text-sm text-gold uppercase tracking-wider mb-3">
                  Head Office
                </h3>
                <p className="font-montserrat font-semibold text-charcoal mb-1">
                  GM International LLP
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  123 Trade Center, Industrial Area<br />
                  New Delhi - 110001, India
                </p>
                <a href="#" className="text-gold text-sm font-medium hover:underline">
                  Get Directions →
                </a>
              </div>

              {/* Phone */}
              <div className="bg-offwhite rounded-xl p-6">
                <Phone className="w-10 h-10 text-gold mb-4" strokeWidth={1.5} />
                <h3 className="font-montserrat font-semibold text-sm text-gold uppercase tracking-wider mb-3">
                  Call Us
                </h3>
                <p className="font-montserrat font-semibold text-charcoal text-lg mb-1">
                  +91 98XXX XXXXX
                </p>
                <p className="text-gray-500 text-sm mb-1">
                  +91 11-XXXX XXXX (Landline)
                </p>
                <p className="text-gray-400 text-xs">
                  Mon-Sat: 9:00 AM - 6:00 PM IST
                </p>
              </div>

              {/* Email */}
              <div className="bg-offwhite rounded-xl p-6">
                <Mail className="w-10 h-10 text-gold mb-4" strokeWidth={1.5} />
                <h3 className="font-montserrat font-semibold text-sm text-gold uppercase tracking-wider mb-3">
                  Email Us
                </h3>
                <a href="mailto:exports@gminternational.com" className="font-medium text-charcoal hover:text-gold block mb-1">
                  exports@gminternational.com
                </a>
                <a href="mailto:info@gminternational.com" className="text-gray-500 text-sm hover:text-gold block mb-2">
                  info@gminternational.com
                </a>
                <p className="text-gray-400 text-xs">
                  Response within 24 hours
                </p>
              </div>

              {/* WhatsApp */}
              <div className="bg-offwhite rounded-xl p-6">
                <MessageCircle className="w-10 h-10 text-success mb-4" strokeWidth={1.5} />
                <h3 className="font-montserrat font-semibold text-sm text-gold uppercase tracking-wider mb-3">
                  Quick Connect
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Chat with us on WhatsApp for quick responses.
                </p>
                <a 
                  href="https://wa.me/919XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-success text-white rounded-lg font-medium text-sm hover:bg-success/90 transition-colors"
                >
                  <MessageCircle size={18} />
                  Start Chat
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h3 className="font-montserrat font-semibold text-sm text-charcoal uppercase tracking-wider mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {[Linkedin, Twitter, Facebook, Instagram].map((Icon, index) => (
                    <a 
                      key={index}
                      href="#"
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500">Google Map Embed Placeholder</p>
        </div>
        
        {/* Map Overlay Card */}
        <div className="absolute bottom-8 left-8 bg-white rounded-xl p-6 max-w-xs border border-gray-100">
          <p className="font-montserrat font-semibold text-charcoal mb-2">
            GM International LLP
          </p>
          <p className="text-gray-500 text-sm mb-4">
            123 Trade Center, Industrial Area, New Delhi
          </p>
          <a 
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold text-sm font-medium hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-charcoal">
        <div className="container-main">
          <h2 className="font-montserrat font-bold text-2xl text-gold text-center mb-4">
            Our Global Reach
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Serving clients across 50+ countries
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="text-center p-6 border border-gold/20 rounded-xl">
                <h3 className="font-montserrat font-semibold text-lg text-white mb-2">
                  {region.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {region.countries}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-main max-w-3xl">
          <h2 className="section-heading-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-100 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-offwhite transition-colors"
                >
                  <span className="font-montserrat font-medium text-charcoal pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-gold flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-8 bg-offwhite border-t border-gray-100">
        <div className="container-main">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-2 text-charcoal">
              <Clock size={18} className="text-gold" />
              <span className="font-montserrat font-semibold text-sm uppercase tracking-wider">
                Business Hours
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              <span>Saturday: 10:00 AM - 4:00 PM</span>
              <span className="text-gray-400">Sunday: Closed</span>
            </div>
            <span className="text-xs text-gray-400">
              IST (Indian Standard Time)
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
