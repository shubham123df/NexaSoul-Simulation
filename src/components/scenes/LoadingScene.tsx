import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useSimulationStore } from '../../store/simulationStore'

export default function LoadingScene() {
  const setState = useSimulationStore((state) => state.setState)

  useEffect(() => {
    const timer = setTimeout(() => {
      setState('INTRO')
    }, 2000)
    return () => clearTimeout(timer)
  }, [setState])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7faff]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="text-6xl mb-4"
        >
          ⚡
        </motion.div>
        <h1 className="text-3xl font-display font-bold text-gradient mb-2">
          NexaSoul
        </h1>
        <p className="text-[#5f6e8d]">Loading simulation...</p>
      </motion.div>
    </div>
  )
}
