import { motion } from 'framer-motion'

/**
 * Scroll-triggered entrance wrapper.
 * Fades + slides/scale into view once, then stays put.
 */
const VARIANTS = {
  up: { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -40 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
}

export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
  amount = 0.3,
  once = true,
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={VARIANTS[variant] || VARIANTS.up}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Container that staggers its Reveal-like children.
 * Pair with <motion.div variants={item}> children.
 */
export const stagger = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
})

export const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}
