import { create } from 'zustand'

export type SimulationState = 
  | 'LOADING'
  | 'INTRO'
  | 'AVATAR_SELECTION'
  | 'ROADMAP'
  | 'HTML_MISSION'
  | 'CSS_MISSION'
  | 'JS_MISSION'
  | 'REACT_MISSION'
  | 'PROJECT_MISSION'
  | 'HACKATHON_MISSION'
  | 'INTERNSHIP'
  | 'GRADUATION'
  | 'JOIN'

export type Avatar = 'male' | 'female' | 'non-binary'

export interface Skill {
  name: string
  completed: boolean
  locked: boolean
}

export interface Player {
  name: string
  avatar: Avatar
  level: number
  xp: number
  skills: Record<string, Skill>
  projects: string[]
  badges: string[]
  hackathons: number
}

interface SimulationStore {
  currentState: SimulationState
  player: Player
  setState: (state: SimulationState) => void
  setPlayerName: (name: string) => void
  setPlayerAvatar: (avatar: Avatar) => void
  addXP: (amount: number) => void
  completeSkill: (skillName: string) => void
  addProject: (project: string) => void
  addBadge: (badge: string) => void
  incrementHackathons: () => void
  reset: () => void
}

const initialSkills: Record<string, Skill> = {
  html: { name: 'HTML', completed: false, locked: false },
  css: { name: 'CSS', completed: false, locked: true },
  javascript: { name: 'JavaScript', completed: false, locked: true },
  react: { name: 'React', completed: false, locked: true },
  git: { name: 'Git', completed: false, locked: true },
  projects: { name: 'Projects', completed: false, locked: true },
  hackathons: { name: 'Hackathons', completed: false, locked: true },
  internship: { name: 'Internship', completed: false, locked: true },
}

export const useSimulationStore = create<SimulationStore>((set) => ({
  currentState: 'LOADING',
  player: {
    name: '',
    avatar: 'male',
    level: 1,
    xp: 0,
    skills: initialSkills,
    projects: [],
    badges: [],
    hackathons: 0,
  },
  setState: (state) => set({ currentState: state }),
  setPlayerName: (name) => set((state) => ({ 
    player: { ...state.player, name } 
  })),
  setPlayerAvatar: (avatar) => set((state) => ({ 
    player: { ...state.player, avatar } 
  })),
  addXP: (amount) => set((state) => {
    const newXP = state.player.xp + amount
    const newLevel = Math.floor(newXP / 300) + 1
    return {
      player: { ...state.player, xp: newXP, level: newLevel }
    }
  }),
  completeSkill: (skillName) => set((state) => {
    const skills = { ...state.player.skills }
    skills[skillName].completed = true
    
    // Unlock next skill
    const skillOrder = ['html', 'css', 'javascript', 'react', 'git', 'projects', 'hackathons', 'internship']
    const currentIndex = skillOrder.indexOf(skillName)
    if (currentIndex < skillOrder.length - 1) {
      skills[skillOrder[currentIndex + 1]].locked = false
    }
    
    return { player: { ...state.player, skills } }
  }),
  addProject: (project) => set((state) => ({
    player: { 
      ...state.player, 
      projects: [...state.player.projects, project] 
    }
  })),
  addBadge: (badge) => set((state) => ({
    player: { 
      ...state.player, 
      badges: [...state.player.badges, badge] 
    }
  })),
  incrementHackathons: () => set((state) => ({
    player: { 
      ...state.player, 
      hackathons: state.player.hackathons + 1 
    }
  })),
  reset: () => set({
    currentState: 'LOADING',
    player: {
      name: '',
      avatar: 'male',
      level: 1,
      xp: 0,
      skills: initialSkills,
      projects: [],
      badges: [],
      hackathons: 0,
    },
  }),
}))
