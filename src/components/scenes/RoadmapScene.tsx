import { motion } from 'framer-motion'
import { useSimulationStore } from '../../store/simulationStore'

export default function RoadmapScene() {
  const { player, setState } = useSimulationStore()
  const skills = player.skills

  const skillOrder = ['html', 'css', 'javascript', 'react', 'git', 'projects', 'hackathons', 'internship']
  const currentSkill = skillOrder.find(key => !skills[key].locked && !skills[key].completed) || 'html'

  const handleStartMission = () => {
    const stateMap: Record<string, any> = {
      html: 'HTML_MISSION',
      css: 'CSS_MISSION',
      javascript: 'JS_MISSION',
      react: 'REACT_MISSION',
      git: 'PROJECT_MISSION',
      projects: 'PROJECT_MISSION',
      hackathons: 'HACKATHON_MISSION',
      internship: 'INTERNSHIP',
    }
    setState(stateMap[currentSkill])
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7faff] px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl w-full"
      >
        <h2 className="text-3xl font-display font-bold text-center text-[#0b1740] mb-12">
          Your Journey
        </h2>

        {/* Roadmap */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#315cf4]/20" />

          {/* Skills */}
          <div className="space-y-8">
            {skillOrder.map((key, index) => {
              const skill = skills[key]
              const isCurrent = key === currentSkill
              const isCompleted = skill.completed
              const isLocked = skill.locked

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Node */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    isCompleted
                      ? 'bg-[#9fdd42] text-[#0b1740]'
                      : isCurrent
                      ? 'bg-[#315cf4] text-white animate-pulse'
                      : 'bg-[#dbe5fb] text-[#5f6e8d]'
                  }`}>
                    {isCompleted ? '✓' : isLocked ? '🔒' : index + 1}
                  </div>

                  {/* Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className={`p-4 rounded-xl ${
                      isCompleted
                        ? 'bg-[#9fdd42]/20 border border-[#9fdd42]/50'
                        : isCurrent
                        ? 'bg-[#315cf4]/20 border border-[#315cf4]/50'
                        : 'bg-white border border-[#dbe5fb]'
                    }`}>
                      <div className="font-bold text-[#0b1740]">{skill.name}</div>
                      {isCompleted && <div className="text-xs text-[#9fdd42] mt-1">Completed</div>}
                      {isCurrent && <div className="text-xs text-[#04bfd5] mt-1">Current Mission</div>}
                      {isLocked && <div className="text-xs text-[#5f6e8d] mt-1">Locked</div>}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Start Mission Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartMission}
            className="px-8 py-4 bg-gradient-to-r from-[#315cf4] to-[#7458f5] rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow text-white"
          >
            Start {skills[currentSkill].name} Mission
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
