import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useSimulationStore } from '../store/simulationStore'

export default function FloatingQR() {
  const [isExpanded, setIsExpanded] = useState(false)
  const currentState = useSimulationStore((state) => state.currentState)

  // Don't show on Loading or Join scenes (Join has its own QR display)
  if (currentState === 'LOADING' || currentState === 'JOIN') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 bg-white rounded-2xl p-4 shadow-2xl border border-[#dbe5fb] mb-2"
          >
            <img 
              src="/assets/qr-whatsapp.png" 
              alt="Join WhatsApp" 
              className="w-32 h-32 rounded-lg"
            />
            <p className="text-center text-sm text-[#5f6e8d] mt-2 font-medium">
              Scan to Join
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gradient-to-r from-[#315cf4] to-[#7458f5] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" 
          />
        </svg>
      </motion.button>
    </div>
  )
}
