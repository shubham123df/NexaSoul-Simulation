import { motion } from 'framer-motion'
import { useSimulationStore } from '../store/simulationStore'

export default function SkipButton() {
  const { currentState, setState } = useSimulationStore()

  // Don't show on Loading, Join, or if already at Graduation
  if (currentState === 'LOADING' || currentState === 'JOIN' || currentState === 'GRADUATION') {
    return null
  }

  const handleSkip = () => {
    setState('GRADUATION')
  }

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleSkip}
      className="fixed top-4 left-4 z-50 px-4 py-2 bg-white/90 backdrop-blur-sm border border-[#dbe5fb] rounded-lg text-sm font-medium text-[#5f6e8d] hover:text-[#315cf4] hover:border-[#315cf4] transition-all shadow-sm"
    >
      Skip to End →
    </motion.button>
  )
}
