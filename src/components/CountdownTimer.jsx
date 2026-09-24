import { AnimatePresence, motion } from 'framer-motion'
import { useCountdown } from '../hooks/useCountdown'
import { EVENT_ISO } from '../data/event'

/** A single flipping digit-group cell. */
function TimeCell({ value, label }) {
  const display = String(value).padStart(2, '0')
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-20 w-16 items-center justify-center overflow-hidden rounded-2xl glass-strong shadow-glass sm:h-24 sm:w-20 md:h-28 md:w-24">
        {/* top gold hairline */}
        <span className="absolute inset-x-4 top-0 h-px gold-rule opacity-70" />
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={display}
            initial={{ y: '-70%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '70%', opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl font-extrabold tabular-nums text-silver-100 sm:text-4xl md:text-5xl"
          >
            {display}
          </motion.span>
        </AnimatePresence>
        {/* subtle center seam */}
        <span className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-black/30" />
      </div>
      <span className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-silver-300 sm:text-xs">
        {label}
      </span>
    </div>
  )
}

export default function CountdownTimer() {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(EVENT_ISO)

  if (isComplete) {
    return (
      <div className="rounded-2xl glass-strong px-8 py-6 text-center shadow-glass">
        <p className="font-display text-xl font-bold text-gold sm:text-2xl">
          Баяр эхэллээ — тавтай морил! 🥂
        </p>
      </div>
    )
  }

  const cells = [
    { value: days, label: 'Өдөр' },
    { value: hours, label: 'Цаг' },
    { value: minutes, label: 'Минут' },
    { value: seconds, label: 'Секунд' },
  ]

  return (
    <div className="flex items-start gap-2.5 sm:gap-4">
      {cells.map((c, i) => (
        <div key={c.label} className="flex items-start gap-2.5 sm:gap-4">
          <TimeCell value={c.value} label={c.label} />
          {i < cells.length - 1 && (
            <span className="mt-6 font-display text-2xl font-bold text-gold-400/60 sm:mt-7 sm:text-3xl md:mt-8">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
