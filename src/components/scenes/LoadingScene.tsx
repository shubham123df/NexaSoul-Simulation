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
    <div className="min-h-screen flex items-center justify-center bg-[#f7faff] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#315cf4]/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4"
        >
          NexaSoul
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center justify-center gap-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 bg-[#315cf4] rounded-full"
          />
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            className="w-2 h-2 bg-[#315cf4] rounded-full"
          />
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            className="w-2 h-2 bg-[#315cf4] rounded-full"
          />
          <span className="text-[#5f6e8d] ml-2">Loading simulation...</span>
        </motion.div>
      </motion.div>
    </div>
  )
}
