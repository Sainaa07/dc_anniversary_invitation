import { useEffect, useMemo, useRef, useState } from 'react'

/**
 * Ambient animated backdrop: drifting gradient orbs, a faint tech grid,
 * and slow-floating "data" particles. Purely decorative (aria-hidden).
 *
 * Perf: orbs are pre-faded radial gradients (no filter: blur) and all
 * motion is compositor-friendly CSS transform/opacity keyframes — no
 * per-frame JS. Everything pauses while the backdrop is offscreen.
 */
export default function AnimatedBackground({ dense = false }) {
  const ref = useRef(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { rootMargin: '120px' }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  const particles = useMemo(() => {
    const count = dense ? 26 : 16
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
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${
        paused ? 'anim-paused' : ''
      }`}
    >
      {/* Base radial wash */}
      <div className="absolute inset-0 bg-navy-radial" />

      {/* Tech grid */}
      <div
        className="absolute inset-0 bg-grid-lines opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_35%,black,transparent)]"
        style={{ backgroundSize: '54px 54px' }}
      />

      {/* Drifting orbs — soft radial gradients stand in for blurred discs */}
      <div
        className="absolute -top-40 -left-24 h-[38rem] w-[38rem] rounded-full"
        style={{
          background:
            'radial-gradient(circle closest-side, rgba(37,99,235,0.28), transparent 72%)',
          animation: 'orb-drift-a 22s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-1/3 -right-32 h-[34rem] w-[34rem] rounded-full"
        style={{
          background:
            'radial-gradient(circle closest-side, rgba(212,175,55,0.22), transparent 72%)',
          animation: 'orb-drift-b 26s ease-in-out infinite',
        }}
      />
      <div
        className="absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full"
        style={{
          background:
            'radial-gradient(circle closest-side, rgba(34,211,238,0.17), transparent 72%)',
          animation: 'orb-drift-c 30s ease-in-out infinite',
        }}
      />

      {/* Floating particles — every second one hidden on small screens */}
      {particles.map((p, i) => (
        <span
          key={i}
          className={`absolute rounded-full ${i % 2 ? 'hidden sm:block' : ''}`}
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
            opacity: 0.2,
            animation: `particle-float ${p.duration}s ease-in-out ${-p.delay}s infinite`,
          }}
        />
      ))}

      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-navy-950" />
    </div>
  )
}
