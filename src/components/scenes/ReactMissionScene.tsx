import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useSimulationStore } from '../../store/simulationStore'

export default function ReactMissionScene() {
  const { addXP, completeSkill, setState } = useSimulationStore()
  const [transforming, setTransforming] = useState(false)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if (transforming) {
      const timer = setTimeout(() => {
        setCompleted(true)
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [transforming])

  const handleTransform = () => {
    setTransforming(true)
  }

  const handleComplete = () => {
    addXP(250)
    completeSkill('react')
    setState('ROADMAP')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-ink px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-display font-bold text-white mb-2">
            Mission 4: React Components
          </h2>
          <p className="text-brand-sub mb-6">Transform your site into components</p>

          {/* Transformation Demo */}
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: transforming ? 0 : 1 }}
              className="text-center"
            >
              <div className="text-gray-400 mb-4">Traditional HTML/CSS/JS</div>
              <div className="bg-gray-800 rounded-lg p-4 text-left text-sm">
                <div className="text-green-400">&lt;div&gt;</div>
                <div className="text-gray-300 pl-4">Traditional Website</div>
                <div className="text-green-400">&lt;/div&gt;</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: transforming ? 1 : 0, scale: transforming ? 1 : 0.8 }}
              className="text-center"
            >
              <div className="text-brand-cyan mb-4">⚛️ React Components</div>
              <div className="bg-gradient-to-br from-brand-blue to-brand-violet rounded-lg p-4 text-left text-sm">
                <div className="text-white font-bold">&lt;App /&gt;</div>
                <div className="text-white/80 pl-4">Component-Based</div>
                <div className="text-white/80 pl-4">Reusable & Scalable</div>
              </div>
            </motion.div>
          </div>

          {/* Actions */}
          {!transforming && !completed && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTransform}
              className="w-full py-4 bg-gradient-to-r from-brand-blue to-brand-violet rounded-xl font-bold text-lg"
            >
              Transform to React
            </motion.button>
          )}

          {completed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">⚛️</div>
              <div className="text-brand-lime font-bold text-xl mb-2">+250 XP</div>
              <div className="text-white mb-4">React Mission Complete!</div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleComplete}
                className="px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-violet rounded-xl font-bold text-lg"
              >
                Continue
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
