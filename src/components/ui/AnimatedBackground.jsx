import { useMemo } from 'react'
import { motion } from 'framer-motion'

/**
 * Ambient animated backdrop: drifting gradient orbs, a faint tech grid,
 * and slow-floating "data" particles. Purely decorative (aria-hidden).
 */
export default function AnimatedBackground({ dense = false }) {
  const particles = useMemo(() => {
    const count = dense ? 34 : 20
    // Deterministic pseudo-random so layout is stable between renders.
    return Array.from({ length: count }, (_, i) => {
      const r = (n) => ((Math.sin(i * 999.13 + n) + 1) / 2)
      return {
        left: r(1) * 100,
        top: r(2) * 100,
        size: 1.5 + r(3) * 3.5,
        delay: r(4) * 6,
        duration: 7 + r(5) * 9,
        gold: r(6) > 0.5,
      }
    })
  }, [dense])

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base radial wash */}
      <div className="absolute inset-0 bg-navy-radial" />

      {/* Tech grid */}
      <div
        className="absolute inset-0 bg-grid-lines opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_35%,black,transparent)]"
        style={{ backgroundSize: '54px 54px' }}
      />

      {/* Drifting orbs */}
      <motion.div
        className="absolute -top-40 -left-24 h-[38rem] w-[38rem] rounded-full bg-tech-blue/25 blur-[120px]"
        animate={{ x: [0, 60, -20, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 h-[34rem] w-[34rem] rounded-full bg-gold-400/20 blur-[130px]"
        animate={{ x: [0, -50, 30, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-tech-cyan/15 blur-[120px]"
        animate={{ x: [0, 40, -30, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: p.gold
              ? 'rgba(232,200,120,0.9)'
              : 'rgba(120,180,255,0.85)',
            boxShadow: p.gold
              ? '0 0 8px rgba(212,175,55,0.8)'
              : '0 0 8px rgba(56,189,248,0.8)',
          }}
          animate={{ y: [0, -26, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-navy-950" />
    </div>
  )
}
