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
    <div className="min-h-screen flex items-center justify-center bg-[#f7faff] px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white backdrop-blur-lg rounded-2xl p-8 border border-[#dbe5fb] shadow-lg">
          <h2 className="text-3xl font-display font-bold text-[#0b1740] mb-2">
            Mission 7: Internship
          </h2>
          <p className="text-[#5f6e8d] mb-6">Your hard work pays off</p>

          {!opened && !completed && (
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpen}
                className="bg-gradient-to-br from-[#315cf4] to-[#7458f5] rounded-xl p-8 cursor-pointer inline-block"
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
              className="bg-white rounded-xl p-6 text-[#0b1740]"
            >
              <div className="text-2xl mb-4">🎉</div>
              <h3 className="font-bold text-xl mb-2">Congratulations!</h3>
              <p className="text-[#5f6e8d] mb-4">
                You've been selected for a Frontend Developer Internship!
              </p>
              <div className="bg-[#9fdd42]/20 rounded-lg p-4">
                <div className="font-bold text-[#0b1740]">Offer Details:</div>
                <div className="text-sm text-[#5f6e8d]">Position: Frontend Developer Intern</div>
                <div className="text-sm text-[#5f6e8d]">Start Date: Immediate</div>
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
              <div className="text-[#9fdd42] font-bold text-xl mb-2">+500 XP</div>
              <div className="text-[#0b1740] mb-2">Internship Secured!</div>
              <div className="text-[#04bfd5] mb-4">🏅 Badge: Internship Ready</div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleComplete}
                className="px-8 py-4 bg-gradient-to-r from-[#315cf4] to-[#7458f5] rounded-xl font-bold text-lg text-white"
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
