import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useSimulationStore } from '../../store/simulationStore'

export default function CSSMissionScene() {
  const { addXP, completeSkill, setState } = useSimulationStore()
  const [styling, setStyling] = useState(false)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if (styling) {
      const timer = setTimeout(() => {
        setCompleted(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [styling])

  const handleStart = () => {
    setStyling(true)
  }

  const handleComplete = () => {
    addXP(150)
    completeSkill('css')
    setState('ROADMAP')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7faff] px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white backdrop-blur-lg rounded-2xl p-8 border border-[#dbe5fb] shadow-lg">
          <h2 className="text-3xl font-display font-bold text-[#0b1740] mb-2">
            Mission 2: CSS Styling
          </h2>
          <p className="text-[#5f6e8d] mb-6">Make your webpage beautiful</p>

          {/* Before/After */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div className="text-xs text-[#5f6e8d] mb-2">Before</div>
              <div className="bg-[#0b1740] rounded-xl p-4 min-h-[150px]">
                <h1 className="text-white text-lg">Hello World</h1>
                <p className="text-[#5f6e8d] text-sm">Plain text</p>
              </div>
            </div>
            <div>
              <div className="text-xs text-[#5f6e8d] mb-2">After</div>
              <motion.div
                className="bg-gradient-to-br from-[#315cf4] to-[#7458f5] rounded-xl p-4 min-h-[150px]"
                animate={styling ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-white text-2xl font-bold">Hello World</h1>
                <p className="text-white/80 text-sm">Beautiful styling!</p>
              </motion.div>
            </div>
          </div>

          {/* Actions */}
          {!styling && !completed && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStart}
              className="w-full py-4 bg-gradient-to-r from-[#315cf4] to-[#7458f5] rounded-xl font-bold text-lg text-white"
            >
              Apply CSS
            </motion.button>
          )}

          {completed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">🎨</div>
              <div className="text-[#9fdd42] font-bold text-xl mb-2">+150 XP</div>
              <div className="text-[#0b1740] mb-4">CSS Mission Complete!</div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleComplete}
                className="px-8 py-4 bg-gradient-to-r from-[#315cf4] to-[#7458f5] rounded-xl font-bold text-lg text-white"
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
