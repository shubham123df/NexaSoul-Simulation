import { motion } from 'framer-motion'
import { useSimulationStore } from '../../store/simulationStore'

export default function IntroScene() {
  const setState = useSimulationStore((state) => state.setState)

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-ink relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-violet/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold text-gradient mb-4"
        >
          NexaSoul
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-white mb-2"
        >
          Frontend Developer Simulation
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-brand-sub text-lg mb-8"
        >
          Can you become internship ready?
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          onClick={() => setState('AVATAR_SELECTION')}
          className="px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-violet rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          Start Simulation
        </motion.button>
      </motion.div>
    </div>
  )
}
