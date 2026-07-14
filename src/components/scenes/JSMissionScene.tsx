import { motion } from 'framer-motion'
import { useState } from 'react'
import { useSimulationStore } from '../../store/simulationStore'

export default function JSMissionScene() {
  const { addXP, completeSkill, setState } = useSimulationStore()
  const [fixed, setFixed] = useState(false)
  const [completed, setCompleted] = useState(false)

  const handleFix = () => {
    setFixed(true)
    setTimeout(() => setCompleted(true), 1500)
  }

  const handleComplete = () => {
    addXP(200)
    completeSkill('javascript')
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
            Mission 3: JavaScript Interactivity
          </h2>
          <p className="text-brand-sub mb-6">Make your webpage interactive</p>

          {/* Interactive Demo */}
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {}}
                disabled={!fixed}
                className={`px-6 py-3 rounded-lg font-bold ${
                  fixed
                    ? 'bg-gradient-to-r from-brand-blue to-brand-violet text-white'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                {fixed ? 'Click Me! ✓' : 'Button (Not Working)'}
              </motion.button>
              <p className="text-gray-400 text-sm mt-4">
                {fixed ? 'Fixed! Button now responds to clicks' : 'Button is not responding - fix the JavaScript'}
              </p>
            </div>
          </div>

          {/* Code Preview */}
          <div className="bg-gray-800 rounded-xl p-4 mb-6 font-mono text-sm">
            <div className="text-gray-400">// Before:</div>
            <div className="text-red-400">button.onclick = null;</div>
            <div className="text-gray-400 mt-2">// After:</div>
            <div className="text-green-400">button.onclick = () {'>'} alert('Hello!');</div>
          </div>

          {/* Actions */}
          {!fixed && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleFix}
              className="w-full py-4 bg-gradient-to-r from-brand-blue to-brand-violet rounded-xl font-bold text-lg"
            >
              Fix JavaScript
            </motion.button>
          )}

          {completed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">⚡</div>
              <div className="text-brand-lime font-bold text-xl mb-2">+200 XP</div>
              <div className="text-white mb-4">JavaScript Mission Complete!</div>
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
