import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="py-16 bg-gold">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-black mb-2">
              Ready to Partner With Us?
            </h2>
            <p className="text-charcoal-light text-lg">
              Get competitive quotes for bulk metal exports.
            </p>
          </div>
          <Link href="/contact" className="btn-dark whitespace-nowrap">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
