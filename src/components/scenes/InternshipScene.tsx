import { motion } from 'framer-motion'
import { useState } from 'react'
import { useSimulationStore } from '../../store/simulationStore'

export default function InternshipScene() {
  const { addXP, addBadge, completeSkill, setState } = useSimulationStore()
  const [opened, setOpened] = useState(false)
  const [completed, setCompleted] = useState(false)

  const handleOpen = () => {
    setOpened(true)
    setTimeout(() => setCompleted(true), 2000)
  }

  const handleComplete = () => {
    addXP(500)
    addBadge('Internship Ready')
    completeSkill('internship')
    setState('GRADUATION')
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
            Mission 7: Internship
          </h2>
          <p className="text-brand-sub mb-6">Your hard work pays off</p>

          {!opened && !completed && (
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpen}
                className="bg-gradient-to-br from-brand-blue to-brand-violet rounded-xl p-8 cursor-pointer inline-block"
              >
                <div className="text-6xl mb-4">📩</div>
                <div className="text-white font-bold text-xl">You've got mail!</div>
                <div className="text-white/80 text-sm mt-2">Click to open</div>
              </motion.div>
            </div>
          )}

          {opened && !completed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 text-brand-ink"
            >
              <div className="text-2xl mb-4">🎉</div>
              <h3 className="font-bold text-xl mb-2">Congratulations!</h3>
              <p className="text-gray-700 mb-4">
                You've been selected for a Frontend Developer Internship!
              </p>
              <div className="bg-brand-lime/20 rounded-lg p-4">
                <div className="font-bold text-brand-ink">Offer Details:</div>
                <div className="text-sm text-gray-700">Position: Frontend Developer Intern</div>
                <div className="text-sm text-gray-700">Start Date: Immediate</div>
              </div>
            </motion.div>
          )}

          {completed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">💼</div>
              <div className="text-brand-lime font-bold text-xl mb-2">+500 XP</div>
              <div className="text-white mb-2">Internship Secured!</div>
              <div className="text-brand-cyan mb-4">🏅 Badge: Internship Ready</div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleComplete}
                className="px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-violet rounded-xl font-bold text-lg"
              >
                Graduate
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
