import { motion } from 'framer-motion'
import { useSimulationStore } from '../../store/simulationStore'

const missionDescriptions: Record<string, { icon: string; description: string; xp: string }> = {
  html: { icon: '🌐', description: 'Build your first webpage with HTML structure', xp: '+100 XP' },
  css: { icon: '🎨', description: 'Style your webpage with CSS', xp: '+150 XP' },
  javascript: { icon: '💻', description: 'Add interactivity with JavaScript', xp: '+200 XP' },
  react: { icon: '⚛️', description: 'Build modern apps with React components', xp: '+250 XP' },
  git: { icon: '📦', description: 'Version control with Git', xp: '+100 XP' },
  projects: { icon: '🎨', description: 'Build real projects for your portfolio', xp: '+360 XP' },
  hackathons: { icon: '🏆', description: 'Compete in 48-hour hackathon challenges', xp: '+300 XP' },
  internship: { icon: '💼', description: 'Secure your dream internship', xp: '+500 XP' },
}

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
    <div className="min-h-screen flex items-center justify-center bg-[#f7faff] px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-[#0b1740] mb-4">
          Your Learning Journey
        </h2>
        <p className="text-center text-[#5f6e8d] mb-12">
          Complete missions to become internship-ready
        </p>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {skillOrder.map((key, index) => {
            const skill = skills[key]
            const isCurrent = key === currentSkill
            const isCompleted = skill.completed
            const isLocked = skill.locked
            const missionInfo = missionDescriptions[key]

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={isLocked ? {} : { scale: 1.02 }}
                onClick={() => isCurrent && handleStartMission()}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                  isCompleted
                    ? 'bg-[#9fdd42]/10 border-[#9fdd42] shadow-lg'
                    : isCurrent
                    ? 'bg-[#315cf4]/10 border-[#315cf4] shadow-lg ring-4 ring-[#315cf4]/20'
                    : isLocked
                    ? 'bg-white/50 border-[#dbe5fb] opacity-60'
                    : 'bg-white border-[#dbe5fb] hover:border-[#315cf4]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-3xl">{missionInfo.icon}</div>
                  <div className={`text-xs font-bold px-2 py-1 rounded-full ${
                    isCompleted
                      ? 'bg-[#9fdd42] text-[#0b1740]'
                      : isCurrent
                      ? 'bg-[#315cf4] text-white'
                      : 'bg-[#dbe5fb] text-[#5f6e8d]'
                  }`}>
                    {isCompleted ? '✓ Done' : isCurrent ? 'Current' : isLocked ? '🔒 Locked' : `Step ${index + 1}`}
                  </div>
                </div>
                <h3 className="font-bold text-[#0b1740] text-lg mb-2">{skill.name}</h3>
                <p className="text-sm text-[#5f6e8d] mb-3">{missionInfo.description}</p>
                <div className="text-xs font-bold text-[#315cf4]">{missionInfo.xp}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-2xl p-6 border border-[#dbe5fb] shadow-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-[#0b1740] text-lg">Overall Progress</h3>
            <span className="text-[#5f6e8d]">
              {skillOrder.filter(key => skills[key].completed).length} / {skillOrder.length} Completed
            </span>
          </div>
          <div className="h-3 bg-[#dbe5fb] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(skillOrder.filter(key => skills[key].completed).length / skillOrder.length) * 100}%` }}
              className="h-full bg-gradient-to-r from-[#315cf4] to-[#7458f5]"
            />
          </div>
        </div>

        {/* Start Mission Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartMission}
            className="px-12 py-4 bg-gradient-to-r from-[#315cf4] to-[#7458f5] rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow text-white"
          >
            Start {skills[currentSkill].name} Mission →
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
