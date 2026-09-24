import Reveal from './ui/Reveal'

/** Shared centered section header with eyebrow, title, and optional subtitle. */
export default function SectionHeading({ eyebrow, title, highlight, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <Reveal variant="up">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal variant="up" delay={0.08}>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          {title} {highlight && <span className="text-gold">{highlight}</span>}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal variant="up" delay={0.16}>
          <p className="mx-auto mt-4 max-w-xl text-balance text-silver-300">
            {subtitle}
          </p>
        </Reveal>
      )}
      <Reveal variant="scale" delay={0.24}>
        <div className="mx-auto mt-6 h-px w-24 gold-rule" />
      </Reveal>
    </div>
  )
}
