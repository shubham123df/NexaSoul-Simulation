# NexaSoul Simulation

An interactive frontend developer simulation experience for the NexaSoul club at Chandigarh University.

## 🎮 Features

- **State Machine Architecture**: Game-like progression instead of traditional website navigation
- **Interactive Missions**: HTML, CSS, JavaScript, React, Projects, Hackathons, and Internship simulations
- **XP & Leveling System**: Earn XP and level up as you complete missions
- **Skill Unlocking**: Complete missions to unlock new skills
- **Persistent HUD**: Real-time progress tracking
- **Smooth Animations**: Powered by Framer Motion

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Framer Motion** - Animations
- **Zustand** - State management
- **Tailwind CSS** - Styling

## 📂 Project Structure

```
src/
├── components/
│   ├── scenes/          # All simulation scenes
│   │   ├── LoadingScene.tsx
│   │   ├── IntroScene.tsx
│   │   ├── AvatarSelectionScene.tsx
│   │   ├── RoadmapScene.tsx
│   │   ├── HTMLMissionScene.tsx
│   │   ├── CSSMissionScene.tsx
│   │   ├── JSMissionScene.tsx
│   │   ├── ReactMissionScene.tsx
│   │   ├── ProjectMissionScene.tsx
│   │   ├── HackathonMissionScene.tsx
│   │   ├── InternshipScene.tsx
│   │   ├── GraduationScene.tsx
│   │   └── JoinScene.tsx
│   └── HUD.tsx          # Persistent heads-up display
├── store/
│   └── simulationStore.ts  # Zustand state management
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🎯 Simulation Flow

1. **Loading** → Initial loading screen
2. **Intro** → Welcome and start button
3. **Avatar Selection** → Choose avatar and enter name
4. **Roadmap** → View and select missions
5. **Missions** → Complete interactive missions:
   - HTML Explorer
   - CSS Styling
   - JavaScript Interactivity
   - React Components
   - Project Builder
   - Hackathon Challenge
   - Internship Offer
6. **Graduation** → Celebration and stats
7. **Join** → Call to action to join NexaSoul

## 🌐 Deployment

This project can be deployed to any static hosting service:
- **Render**: `npm run build` and deploy the `dist` folder
- **Vercel**: Connect GitHub repository
- **Netlify**: Drag and drop the `dist` folder

## 📝 License

This project is part of NexaSoul club activities at Chandigarh University.
