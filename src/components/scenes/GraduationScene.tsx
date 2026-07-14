import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useSimulationStore } from '../../store/simulationStore'

export default function GraduationScene() {
  const { player, setState } = useSimulationStore()
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setShowConfetti(true)
  }, [])

  const handleContinue = () => {
    setState('JOIN')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-ink px-4 relative overflow-hidden">
      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: Math.random() * window.innerWidth, y: -20, opacity: 1 }}
              animate={{ y: window.innerHeight + 20, opacity: 0 }}
              transition={{ duration: 3 + Math.random() * 2, delay: Math.random() * 2, repeat: Infinity }}
              className="absolute text-2xl"
              style={{ left: `${Math.random() * 100}%` }}
            >
              {['🎉', '🎊', '✨', '⭐', '🌟'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl w-full text-center"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-8xl mb-6"
        >
          🎓
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4"
        >
          Congratulations!
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xl text-white mb-8"
        >
          You completed the NexaSoul Frontend Journey
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8"
        >
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold text-brand-lime">{player.xp}</div>
              <div className="text-brand-sub">Total XP</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-cyan">{player.level}</div>
              <div className="text-brand-sub">Level</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-blue">{player.projects.length}</div>
              <div className="text-brand-sub">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-violet">{player.badges.length}</div>
              <div className="text-brand-sub">Badges</div>
            </div>
          </div>
        </motion.div>

        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleContinue}
          className="px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-violet rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          Become a NexaSoul Member
        </motion.button>
      </motion.div>
    </div>
  )
}
