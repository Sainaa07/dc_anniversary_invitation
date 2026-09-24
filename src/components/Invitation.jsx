import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, X } from 'lucide-react'
import Reveal from './ui/Reveal'
import { EVENT } from '../data/event'

/** The compact card that rises out of the envelope. */
function LetterCard({ open }) {
  return (
    <motion.div
      className="absolute left-1/2 z-20 w-[86%] -translate-x-1/2"
      style={{ bottom: 0 }}
      initial={false}
      animate={{
        y: open ? '-52%' : '6%',
        zIndex: open ? 50 : 20,
        opacity: open ? 1 : 0,
      }}
      transition={{
        duration: open ? 0.7 : 1.05,
        delay: open ? 0.35 : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="overflow-hidden rounded-xl border border-gold-400/30 bg-gradient-to-b from-[#0d1730] to-[#0a1128] px-5 py-5 text-center shadow-card-hover">
        <p className="text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-gold-300">
          Таныг хүндэтгэн урьж байна
        </p>
        <h3 className="mt-1.5 font-display text-base font-extrabold leading-tight text-white sm:text-lg">
          {EVENT.company}
          <span className="block text-gold">{EVENT.celebration}</span>
        </h3>
        <div className="mx-auto my-3 h-px w-14 gold-rule" />
        <ul className="space-y-1.5 text-left text-[0.78rem] text-silver-200 sm:text-sm">
          <li className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 shrink-0 text-gold-300" />
            {EVENT.dateLabel}
          </li>
          <li className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 shrink-0 text-gold-300" />
            {EVENT.timeLabel}
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-gold-300" />
            {EVENT.venue.name}, {EVENT.venue.city}
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default function Invitation({ open, setOpen }) {
  return (
    <section
      id="invitation"
      className="relative overflow-hidden px-5 py-24 sm:py-32"
    >
      {/* soft backdrop accents */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-[130px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal variant="up">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
            Урилга
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-5xl">
            Таныг <span className="text-gold">урьж байна</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-silver-300">
            Дугтуйг дарж, өөрийн урилгаа нээгээрэй. Баяр, хүндэтгэл, дурсамжаар
            дүүрэн өдөр таныг хүлээж байна.
          </p>
        </Reveal>

        {/* Envelope — the padding-top grows when open so the risen letter has
            its own room and never overlaps the heading (key for mobile). */}
        <Reveal variant="scale" delay={0.15} className="mt-12">
          <div
            className={`flex justify-center transition-all ease-out ${
              open
                ? 'pt-[150px] duration-500 sm:pt-[180px]'
                : 'pt-0 delay-500 duration-700'
            }`}
          >
            <div className="perspective">
              <div
                role="button"
                tabIndex={0}
                aria-label={open ? 'Урилга хаах' : 'Урилга нээх'}
                onClick={() => setOpen(!open)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setOpen(!open)
                  }
                }}
                className="group relative aspect-[7/5] w-[min(320px,82vw)] cursor-pointer select-none outline-none sm:w-[380px]"
              >
                {/* glow under envelope */}
                <div className="absolute inset-x-8 bottom-2 h-10 rounded-full bg-gold-400/30 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Envelope back */}
                <div className="absolute inset-0 rounded-xl border border-gold-400/25 bg-gradient-to-b from-navy-700 to-navy-800 shadow-glass" />

                {/* The letter card */}
                <LetterCard open={open} />

                {/* Envelope front pocket (V-notch top) */}
                <div
                  className="absolute inset-0 z-30 rounded-xl border border-gold-400/20 bg-gradient-to-b from-navy-600 to-navy-700"
                  style={{
                    clipPath: 'polygon(0 0, 50% 42%, 100% 0, 100% 100%, 0 100%)',
                  }}
                >
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/25 to-transparent" />
                </div>

                {/* Envelope flap */}
                <motion.div
                  className="absolute inset-x-0 top-0 origin-top"
                  style={{ height: '62%', transformStyle: 'preserve-3d' }}
                  initial={false}
                  animate={{
                    rotateX: open ? 180 : 0,
                    zIndex: open ? 10 : 40,
                  }}
                  transition={{
                    duration: open ? 0.6 : 0.9,
                    delay: open ? 0 : 0.75,
                    ease: open ? [0.5, 0, 0.2, 1] : [0.34, 0.02, 0.26, 1],
                  }}
                >
                  <div
                    className="h-full w-full border-b border-gold-400/30 bg-gradient-to-b from-navy-600 to-navy-700"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                  />
                </motion.div>

                {/* Hint */}
                <AnimatePresence>
                  {!open && (
                    <motion.span
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute -bottom-9 left-1/2 z-40 -translate-x-1/2 whitespace-nowrap text-xs font-medium uppercase tracking-[0.25em] text-silver-400"
                    >
                      Дарж нээнэ үү ✦
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Close / reset control */}
        <AnimatePresence>
          {open && (
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 glass px-5 py-2 text-sm text-silver-200 transition-colors hover:text-gold-200"
            >
              <X className="h-4 w-4" />
              Урилга хаах
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
