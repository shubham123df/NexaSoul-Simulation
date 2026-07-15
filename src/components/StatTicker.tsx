import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface StatTickerProps {
  value: number
  label: string
  suffix?: string
  duration?: number
}

function StatTicker({ value, label, suffix = '', duration = 2 }: StatTickerProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        // Easing function for smoother animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * value))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, value, duration])

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="text-4xl md:text-5xl font-bold text-gradient mb-1">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-sm md:text-base text-[#5f6e8d] font-medium">
          {label}
        </div>
      </motion.div>
    </div>
  )
}

export default function StatsRow() {
  return (
    <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8">
      <StatTicker value={500} label="Developers" suffix="+" />
      <StatTicker value={120} label="Projects" suffix="+" />
      <StatTicker value={15} label="Hackathons" suffix="+" />
    </div>
  )
}
