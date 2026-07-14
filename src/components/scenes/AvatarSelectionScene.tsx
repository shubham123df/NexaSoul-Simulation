import { motion } from 'framer-motion'
import { useState } from 'react'
import { useSimulationStore, Avatar } from '../../store/simulationStore'

const avatars = [
  { id: 'male' as Avatar, emoji: '👨‍💻', label: 'Developer' },
  { id: 'female' as Avatar, emoji: '👩‍💻', label: 'Developer' },
  { id: 'non-binary' as Avatar, emoji: '🧑‍💻', label: 'Developer' },
  { id: 'student' as Avatar, emoji: '🎓', label: 'Student' },
  { id: 'explorer' as Avatar, emoji: '🚀', label: 'Explorer' },
  { id: 'creative' as Avatar, emoji: '🎨', label: 'Creative' },
]

export default function AvatarSelectionScene() {
  const { setPlayerName, setPlayerAvatar, setState } = useSimulationStore()
  const [selectedAvatar, setSelectedAvatar] = useState<Avatar>('male')
  const [name, setName] = useState('')

  const handleContinue = () => {
    if (name.trim()) {
      setPlayerName(name.trim())
      setPlayerAvatar(selectedAvatar)
      setState('ROADMAP')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7faff] px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-display font-bold text-[#0b1740] mb-3">
            Choose Your Avatar
          </h2>
          <p className="text-[#5f6e8d] text-lg">Select your identity for the journey</p>
        </motion.div>

        {/* Avatar Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {avatars.map((avatar, index) => (
            <motion.button
              key={avatar.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedAvatar(avatar.id)}
              className={`p-6 rounded-2xl transition-all border-2 ${
                selectedAvatar === avatar.id
                  ? 'bg-gradient-to-br from-[#315cf4] to-[#7458f5] border-[#315cf4] shadow-xl'
                  : 'bg-white border-[#dbe5fb] hover:border-[#315cf4] hover:shadow-lg'
              }`}
            >
              <motion.div
                animate={selectedAvatar === avatar.id ? { rotate: [0, -10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.5 }}
                className="text-6xl mb-3"
              >
                {avatar.emoji}
              </motion.div>
              <div className="font-bold text-[#0b1740]">{avatar.label}</div>
            </motion.button>
          ))}
        </div>

        {/* Name Input */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-sm font-bold text-[#0b1740] mb-2 text-center">
              Enter Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full px-6 py-4 bg-white border-2 border-[#dbe5fb] rounded-xl text-[#0b1740] placeholder-[#5f6e8d] focus:outline-none focus:border-[#315cf4] focus:ring-4 focus:ring-[#315cf4]/20 text-center text-xl font-medium transition-all"
              onKeyPress={(e) => e.key === 'Enter' && handleContinue()}
            />
          </motion.div>
        </div>

        {/* Continue Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleContinue}
          disabled={!name.trim()}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
            name.trim()
              ? 'bg-gradient-to-r from-[#315cf4] to-[#7458f5] hover:shadow-xl text-white'
              : 'bg-[#dbe5fb] cursor-not-allowed text-[#5f6e8d]'
          }`}
        >
          {name.trim() ? 'Begin Your Journey →' : 'Enter your name to continue'}
        </motion.button>
      </motion.div>
    </div>
  )
}
