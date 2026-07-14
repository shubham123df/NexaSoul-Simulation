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
      className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 min-w-[200px]"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center text-lg">
          {player.avatar === 'male' ? '👨' : player.avatar === 'female' ? '👩' : '🧑'}
        </div>
        <div>
          <div className="font-bold text-sm">{player.name || 'Player'}</div>
          <div className="text-xs text-brand-sub">Level {player.level}</div>
        </div>
      </div>
      
      <div className="mb-3">
        <div className="flex justify-between text-xs mb-1">
          <span>XP</span>
          <span>{player.xp}</span>
        </div>
        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(player.xp % 300) / 3}%` }}
            className="h-full bg-gradient-to-r from-brand-lime to-brand-cyan"
          />
        </div>
      </div>
      
      <div className="space-y-1">
        {Object.entries(player.skills).map(([key, skill]) => (
          <div key={key} className="flex items-center gap-2 text-xs">
            {skill.completed ? (
              <span className="text-brand-lime">✓</span>
            ) : skill.locked ? (
              <span className="text-brand-sub">🔒</span>
            ) : (
              <span className="text-brand-cyan">●</span>
            )}
            <span className={skill.completed ? 'text-brand-lime' : skill.locked ? 'text-brand-sub' : 'text-white'}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
