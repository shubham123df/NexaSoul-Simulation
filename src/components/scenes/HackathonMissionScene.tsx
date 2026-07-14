import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useSimulationStore } from '../../store/simulationStore'

export default function HackathonMissionScene() {
  const { addXP, addBadge, incrementHackathons, completeSkill, setState } = useSimulationStore()
  const [accepted, setAccepted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if (accepted && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + 10, 100))
      }, 300)
      return () => clearTimeout(timer)
    } else if (progress === 100 && !completed) {
      setCompleted(true)
    }
  }, [accepted, progress, completed])

  const handleAccept = () => {
    setAccepted(true)
  }

  const handleComplete = () => {
    addXP(300)
    addBadge('Hackathon Winner')
    incrementHackathons()
    completeSkill('hackathons')
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
            Mission 6: Hackathon
          </h2>
          <p className="text-[#5f6e8d] mb-6">48-hour challenge to build under pressure</p>

          {!accepted && !completed && (
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#315cf4] to-[#7458f5] rounded-xl p-6 mb-6">
                <div className="text-4xl mb-4">🏆</div>
                <div className="text-white font-bold text-xl mb-2">48-Hour Hackathon</div>
                <div className="text-white/80">Challenge: Build a landing page</div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAccept}
                className="px-8 py-4 bg-gradient-to-r from-[#315cf4] to-[#7458f5] rounded-xl font-bold text-lg text-white"
              >
                Accept Challenge
              </motion.button>
            </div>
          )}

          {accepted && !completed && (
            <div className="text-center">
              <div className="text-4xl mb-4 animate-pulse">🏃</div>
              <div className="text-[#5f6e8d] font-bold text-xl mb-4">Building in progress...</div>
              <div className="h-4 bg-[#dbe5fb] rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-[#315cf4] to-[#7458f5]"
                />
              </div>
              <div className="text-[#5f6e8d]">{progress}% Complete</div>
            </div>
          )}

          {completed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">🏆</div>
              <div className="text-[#9fdd42] font-bold text-xl mb-2">+300 XP</div>
              <div className="text-[#0b1740] mb-2">Hackathon Complete!</div>
              <div className="text-[#04bfd5] mb-4">🏅 Badge: Hackathon Winner</div>
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
