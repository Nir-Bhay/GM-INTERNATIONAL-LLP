'use client'

import { useEffect, useState } from 'react'

const stats = [
  { value: 50, suffix: '+', label: 'Countries Served' },
  { value: 1000, suffix: '+', label: 'Tons Monthly Export' },
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 15, suffix: '+', label: 'Years Experience' },
]

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, hasStarted])

  return { count, start: () => setHasStarted(true) }
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, start } = useCountUp(value)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start()
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById(`stat-${label}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [start, label])

  return (
    <div id={`stat-${label}`} className="text-center">
      <div className="font-montserrat font-bold text-5xl lg:text-6xl text-gold mb-2">
        {count}{suffix}
      </div>
      <div className="font-inter text-white/80 text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-charcoal relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <div className="container-main relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
