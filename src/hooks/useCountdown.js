import { useEffect, useState, useCallback } from 'react'

/**
 * Live countdown to a target date.
 * Returns { days, hours, minutes, seconds, isComplete }.
 */
export function useCountdown(targetIso) {
  const target = new Date(targetIso).getTime()

  const compute = useCallback(() => {
    const diff = target - Date.now()
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true }
    }
    return {
      days: Math.floor(diff / 86_400_000),
      hours: Math.floor((diff / 3_600_000) % 24),
      minutes: Math.floor((diff / 60_000) % 60),
      seconds: Math.floor((diff / 1_000) % 60),
      isComplete: false,
    }
  }, [target])

  const [timeLeft, setTimeLeft] = useState(compute)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(compute()), 1000)
    return () => clearInterval(id)
  }, [compute])

  return timeLeft
}
