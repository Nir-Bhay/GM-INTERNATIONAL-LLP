import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'GM International LLP - Premium Metal Exports',
  description: 'Your trusted partner for premium copper, aluminium, nickel, lead, zinc & tin exports worldwide. LME-linked pricing, serving 50+ countries from India.',
  keywords: 'metal exports, copper, aluminium, nickel, lead, zinc, tin, LME, Indian metal exporter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
