import { useEffect, useCallback } from 'react'
import { useSimulationStore } from '../store/simulationStore'

const IDLE_TIMEOUT = 20000 // 20 seconds

export function useIdleTimer() {
  const { currentState, setState } = useSimulationStore()

  const resetIdleTimer = useCallback(() => {
    // This will be called on user interaction
  }, [])

  useEffect(() => {
    let idleTimer: ReturnType<typeof setTimeout>

    const resetTimer = () => {
      clearTimeout(idleTimer)
      idleTimer = setTimeout(() => {
        // Only redirect to INTRO if not already there or in LOADING
        if (currentState !== 'LOADING' && currentState !== 'INTRO') {
          setState('INTRO')
        }
      }, IDLE_TIMEOUT)
    }

    // Initial timer setup
    resetTimer()

    // Event listeners for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click']
    
    events.forEach(event => {
      window.addEventListener(event, resetTimer)
    })

    return () => {
      clearTimeout(idleTimer)
      events.forEach(event => {
        window.removeEventListener(event, resetTimer)
      })
    }
  }, [currentState, setState])

  return resetIdleTimer
}
