import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin gold progress bar pinned to the very top of the page. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-gold-200 via-gold-400 to-gold-500 shadow-[0_0_10px_rgba(212,175,55,0.6)]"
    />
  )
}
