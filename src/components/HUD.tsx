import { motion } from 'framer-motion'
import { useSimulationStore } from '../store/simulationStore'

export default function HUD() {
  const player = useSimulationStore((state) => state.player)
  const currentState = useSimulationStore((state) => state.currentState)

  // Don't show HUD on loading or intro screens
  if (currentState === 'LOADING' || currentState === 'INTRO' || currentState === 'JOIN') {
    return null
  }

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed top-4 right-4 z-50 bg-white backdrop-blur-lg rounded-2xl p-4 border border-[#dbe5fb] shadow-lg min-w-[200px]"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#315cf4] to-[#7458f5] flex items-center justify-center text-lg">
          {player.avatar === 'male' ? '👨‍💻' : player.avatar === 'female' ? '👩‍💻' : '🧑‍💻'}
        </div>
        <div>
          <div className="font-bold text-sm text-[#0b1740]">{player.name || 'Player'}</div>
          <div className="text-xs text-[#5f6e8d]">Level {player.level}</div>
        </div>
      </div>
      
      <div className="mb-3">
        <div className="flex justify-between text-xs mb-1">
          <span>XP</span>
          <span>{player.xp}</span>
        </div>
        <div className="h-2 bg-[#dbe5fb] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(player.xp % 300) / 3}%` }}
            className="h-full bg-gradient-to-r from-[#9fdd42] to-[#04bfd5]"
          />
        </div>
      </div>
      
      <div className="space-y-1">
        {Object.entries(player.skills).map(([key, skill]) => (
          <div key={key} className="flex items-center gap-2 text-xs">
            {skill.completed ? (
              <span className="text-[#9fdd42]">✓</span>
            ) : skill.locked ? (
              <span className="text-[#5f6e8d]">🔒</span>
            ) : (
              <span className="text-[#04bfd5]">●</span>
            )}
            <span className={skill.completed ? 'text-[#9fdd42]' : skill.locked ? 'text-[#5f6e8d]' : 'text-[#0b1740]'}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
