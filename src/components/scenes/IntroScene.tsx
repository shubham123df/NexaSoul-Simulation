import { motion } from 'framer-motion'
import { useSimulationStore } from '../../store/simulationStore'

export default function IntroScene() {
  const setState = useSimulationStore((state) => state.setState)

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7faff] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-[#315cf4]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-[#7458f5]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-[#9fdd42]/10 rounded-full blur-2xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold text-gradient mb-4"
        >
          NexaSoul
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-[#0b1740] mb-4"
        >
          Frontend Developer Simulation
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg md:text-xl text-[#5f6e8d] mb-8 max-w-2xl mx-auto"
        >
          Master HTML, CSS, JavaScript, React, and more through an interactive journey. 
          Can you become internship ready?
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {['🌐 HTML', '🎨 CSS', '💻 JavaScript', '⚛️ React', '📦 Git', '🏆 Hackathons'].map((feature, index) => (
            <motion.span
              key={feature}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="px-4 py-2 bg-white border border-[#dbe5fb] rounded-full text-sm font-medium text-[#0b1740] shadow-sm"
            >
              {feature}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(49, 92, 244, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 1.4, duration: 0.3 }}
          onClick={() => setState('AVATAR_SELECTION')}
          className="px-12 py-5 bg-gradient-to-r from-[#315cf4] to-[#7458f5] rounded-full font-bold text-lg md:text-xl shadow-lg hover:shadow-xl transition-all text-white"
        >
          Start Your Journey →
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-6 text-sm text-[#5f6e8d]"
        >
          Free • No Signup • Learn by Doing
        </motion.p>
      </motion.div>
    </div>
  )
}
