import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { SCHEDULE } from '../data/event'

function ScheduleCard({ ev, isLeft }) {
  const Icon = ev.icon
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl glass-strong p-6 shadow-glass transition-shadow duration-300 hover:shadow-card-hover"
    >
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/10 text-gold-300 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-block rounded-full bg-tech-blue/15 px-3 py-1 font-display text-sm font-bold tracking-wide text-tech-sky">
              {ev.time}
            </span>
            {ev.location && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-silver-300">
                <MapPin className="h-3 w-3 text-gold-300" />
                {ev.location}
              </span>
            )}
          </div>
          <h3 className="mt-2 font-display text-lg font-bold text-white">
            {ev.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-silver-300">
            {ev.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.6', 'end 0.5'],
  })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section id="schedule" className="relative px-5 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Хөтөлбөр"
        title="Өдрийн"
        highlight="хөтөлбөр"
        subtitle="Өглөөний аяллаас эхлээд оройн баяр хүртэл — өдөр хэрхэн өрнөхийг эндээс үзээрэй."
      />

      <div ref={ref} className="relative mx-auto mt-16 max-w-5xl">
        {/* Rail: base + animated gold progress */}
        <div className="absolute left-5 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="h-full w-full bg-gradient-to-b from-gold-200 via-gold-400 to-gold-500 shadow-[0_0_14px_rgba(212,175,55,0.6)]"
          />
        </div>

        <div className="space-y-10 md:space-y-4">
          {SCHEDULE.map((ev, i) => {
            const isLeft = i % 2 === 0
            return (
              <div
                key={ev.time}
                className="relative md:grid md:grid-cols-2 md:gap-x-16"
              >
                {/* Node on the rail */}
                <div className="absolute left-5 top-6 z-10 -translate-x-1/2 md:left-1/2">
                  <span className="absolute inset-0 -m-2 animate-pulse-glow rounded-full bg-gold-400/30 blur-md" />
                  <span className="relative flex h-4 w-4 items-center justify-center rounded-full border-2 border-gold-300 bg-navy-900">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
                  </span>
                </div>

                {/* Card — placed on the correct side for desktop */}
                <div
                  className={`pl-14 md:pl-0 ${
                    isLeft
                      ? 'md:col-start-1 md:pr-4'
                      : 'md:col-start-2 md:pl-4'
                  }`}
                >
                  <ScheduleCard ev={ev} isLeft={isLeft} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
