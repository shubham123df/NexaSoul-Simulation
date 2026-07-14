import { motion } from 'framer-motion'
import { useState } from 'react'
import { useSimulationStore } from '../../store/simulationStore'

export default function AvatarSelectionScene() {
  const { setPlayerName, setPlayerAvatar, setState } = useSimulationStore()
  const [selectedAvatar, setSelectedAvatar] = useState<'male' | 'female' | 'non-binary'>('male')
  const [name, setName] = useState('')

  const handleContinue = () => {
    if (name.trim()) {
      setPlayerName(name.trim())
      setPlayerAvatar(selectedAvatar)
      setState('ROADMAP')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-ink px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <h2 className="text-3xl font-display font-bold text-center text-white mb-8">
          Choose Your Avatar
        </h2>

        {/* Avatar Selection */}
        <div className="flex justify-center gap-6 mb-8">
          {(['male', 'female', 'non-binary'] as const).map((avatar) => (
            <motion.button
              key={avatar}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedAvatar(avatar)}
              className={`text-6xl p-4 rounded-2xl transition-all ${
                selectedAvatar === avatar
                  ? 'bg-gradient-to-br from-brand-blue to-brand-violet scale-110'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {avatar === 'male' ? '👨' : avatar === 'female' ? '👩' : '🧑'}
            </motion.button>
          ))}
        </div>

        {/* Name Input */}
        <div className="mb-8">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-brand-sub focus:outline-none focus:border-brand-blue text-center text-lg"
            onKeyPress={(e) => e.key === 'Enter' && handleContinue()}
          />
        </div>

        {/* Continue Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleContinue}
          disabled={!name.trim()}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
            name.trim()
              ? 'bg-gradient-to-r from-brand-blue to-brand-violet hover:shadow-lg'
              : 'bg-white/10 cursor-not-allowed'
          }`}
        >
          Continue
        </motion.button>
      </motion.div>
    </div>
  )
}
