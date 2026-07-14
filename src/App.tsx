import { motion, AnimatePresence } from 'framer-motion'
import { useSimulationStore } from './store/simulationStore'
import LoadingScene from './components/scenes/LoadingScene'
import IntroScene from './components/scenes/IntroScene'
import AvatarSelectionScene from './components/scenes/AvatarSelectionScene'
import RoadmapScene from './components/scenes/RoadmapScene'
import HTMLMissionScene from './components/scenes/HTMLMissionScene'
import CSSMissionScene from './components/scenes/CSSMissionScene'
import JSMissionScene from './components/scenes/JSMissionScene'
import ReactMissionScene from './components/scenes/ReactMissionScene'
import ProjectMissionScene from './components/scenes/ProjectMissionScene'
import HackathonMissionScene from './components/scenes/HackathonMissionScene'
import InternshipScene from './components/scenes/InternshipScene'
import GraduationScene from './components/scenes/GraduationScene'
import JoinScene from './components/scenes/JoinScene'
import HUD from './components/HUD'

function App() {
  const currentState = useSimulationStore((state) => state.currentState)

  return (
    <div className="min-h-screen bg-brand-ink overflow-hidden">
      <HUD />
      <AnimatePresence mode="wait">
        {currentState === 'LOADING' && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingScene />
          </motion.div>
        )}
        
        {currentState === 'INTRO' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <IntroScene />
          </motion.div>
        )}
        
        {currentState === 'AVATAR_SELECTION' && (
          <motion.div
            key="avatar"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <AvatarSelectionScene />
          </motion.div>
        )}
        
        {currentState === 'ROADMAP' && (
          <motion.div
            key="roadmap"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <RoadmapScene />
          </motion.div>
        )}
        
        {currentState === 'HTML_MISSION' && (
          <motion.div
            key="html"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HTMLMissionScene />
          </motion.div>
        )}
        
        {currentState === 'CSS_MISSION' && (
          <motion.div
            key="css"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CSSMissionScene />
          </motion.div>
        )}
        
        {currentState === 'JS_MISSION' && (
          <motion.div
            key="js"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <JSMissionScene />
          </motion.div>
        )}
        
        {currentState === 'REACT_MISSION' && (
          <motion.div
            key="react"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ReactMissionScene />
          </motion.div>
        )}
        
        {currentState === 'PROJECT_MISSION' && (
          <motion.div
            key="project"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectMissionScene />
          </motion.div>
        )}
        
        {currentState === 'HACKATHON_MISSION' && (
          <motion.div
            key="hackathon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HackathonMissionScene />
          </motion.div>
        )}
        
        {currentState === 'INTERNSHIP' && (
          <motion.div
            key="internship"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <InternshipScene />
          </motion.div>
        )}
        
        {currentState === 'GRADUATION' && (
          <motion.div
            key="graduation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GraduationScene />
          </motion.div>
        )}
        
        {currentState === 'JOIN' && (
          <motion.div
            key="join"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <JoinScene />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
