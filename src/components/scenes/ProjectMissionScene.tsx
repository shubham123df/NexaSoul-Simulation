import { motion } from 'framer-motion'
import { useState } from 'react'
import { useSimulationStore } from '../../store/simulationStore'

const projects = [
  { id: 1, name: 'Portfolio Website', icon: '🌐', xp: 100 },
  { id: 2, name: 'Calculator App', icon: '🧮', xp: 80 },
  { id: 3, name: 'Weather App', icon: '🌤️', xp: 120 },
  { id: 4, name: 'Todo List', icon: '✅', xp: 60 },
]

export default function ProjectMissionScene() {
  const { addXP, addProject, completeSkill, setState } = useSimulationStore()
  const [building, setBuilding] = useState<string | null>(null)
  const [completedProjects, setCompletedProjects] = useState<number[]>([])

  const handleBuild = (projectId: number) => {
    setBuilding(projectId.toString())
    setTimeout(() => {
      const project = projects.find(p => p.id === projectId)
      if (project) {
        addXP(project.xp)
        addProject(project.name)
        setCompletedProjects([...completedProjects, projectId])
      }
      setBuilding(null)
    }, 1500)
  }

  const handleContinue = () => {
    completeSkill('projects')
    completeSkill('git')
    setState('ROADMAP')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-ink px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl w-full"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-display font-bold text-white mb-2">
            Mission 5: Project Builder
          </h2>
          <p className="text-brand-sub mb-6">Build real projects for your portfolio</p>

          {/* Projects Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {projects.map((project) => {
              const isCompleted = completedProjects.includes(project.id)
              const isBuilding = building === project.id.toString()

              return (
                <motion.button
                  key={project.id}
                  whileHover={{ scale: isCompleted ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => !isCompleted && handleBuild(project.id)}
                  disabled={isCompleted || !!building}
                  className={`p-4 rounded-xl text-left transition-all ${
                    isCompleted
                      ? 'bg-brand-lime/20 border border-brand-lime/50'
                      : isBuilding
                      ? 'bg-brand-blue/20 border border-brand-blue/50'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="text-3xl mb-2">{project.icon}</div>
                  <div className="font-bold text-white">{project.name}</div>
                  <div className="text-xs text-brand-sub">+{project.xp} XP</div>
                  {isBuilding && (
                    <motion.div
                      className="mt-2 h-1 bg-white/20 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.5 }}
                    >
                      <motion.div
                        className="h-full bg-brand-blue"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.5 }}
                      />
                    </motion.div>
                  )}
                  {isCompleted && (
                    <div className="mt-2 text-brand-lime text-sm">✓ Completed</div>
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-brand-sub">Progress</span>
              <span className="text-white">{completedProjects.length}/{projects.length} Projects</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(completedProjects.length / projects.length) * 100}%` }}
                className="h-full bg-gradient-to-r from-brand-blue to-brand-violet"
              />
            </div>
          </div>

          {/* Continue Button */}
          {completedProjects.length === projects.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">🎨</div>
              <div className="text-brand-lime font-bold text-xl mb-2">All Projects Built!</div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContinue}
                className="px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-violet rounded-xl font-bold text-lg"
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
