import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useSimulationStore } from '../../store/simulationStore'

export default function HTMLMissionScene() {
  const { addXP, completeSkill, setState } = useSimulationStore()
  const [typing, setTyping] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [code, setCode] = useState('')

  const htmlCode = `<h1>Hello World</h1>
<p>Welcome to my first webpage</p>`

  useEffect(() => {
    if (typing) {
      let i = 0
      const timer = setInterval(() => {
        if (i < htmlCode.length) {
          setCode(htmlCode.slice(0, i + 1))
          i++
        } else {
          clearInterval(timer)
          setCompleted(true)
        }
      }, 50)
      return () => clearInterval(timer)
    }
  }, [typing])

  const handleStart = () => {
    setTyping(true)
  }

  const handleComplete = () => {
    addXP(100)
    completeSkill('html')
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
            Mission 1: HTML Explorer
          </h2>
          <p className="text-[#5f6e8d] mb-6">Build your first webpage</p>

          {/* Browser Simulation */}
          <div className="bg-[#0b1740] rounded-xl overflow-hidden mb-6">
            <div className="bg-[#1a2755] px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-4 text-xs text-[#5f6e8d]">index.html</div>
            </div>
            <div className="p-4 min-h-[200px]">
              {!typing && !completed && (
                <div className="text-[#5f6e8d] text-center py-8">
                  Click "Start Mission" to begin coding
                </div>
              )}
              {(typing || completed) && (
                <pre className="text-[#9fdd42] text-sm font-mono whitespace-pre-wrap">
                  {code}
                </pre>
              )}
              {completed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 p-4 bg-[#f7faff] rounded-lg"
                >
                  <h1 className="text-2xl font-bold text-[#0b1740]">Hello World</h1>
                  <p className="text-[#5f6e8d]">Welcome to my first webpage</p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Actions */}
          {!typing && !completed && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStart}
              className="w-full py-4 bg-gradient-to-r from-[#315cf4] to-[#7458f5] rounded-xl font-bold text-lg text-white"
            >
              Start Mission
            </motion.button>
          )}

          {completed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">🎉</div>
              <div className="text-[#9fdd42] font-bold text-xl mb-2">+100 XP</div>
              <div className="text-[#0b1740] mb-4">HTML Mission Complete!</div>
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
