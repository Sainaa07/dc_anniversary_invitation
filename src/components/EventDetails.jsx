import { motion } from 'framer-motion'
import { CalendarDays, MapPin, Shirt, ExternalLink, Navigation } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { stagger, item } from './ui/Reveal'
import { EVENT, DRESS_CODE } from '../data/event'

function GlassCard({ children, className = '' }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`group relative overflow-hidden rounded-3xl glass-strong p-7 shadow-glass transition-shadow duration-300 hover:shadow-card-hover ${className}`}
    >
      {/* top gold hairline that appears on hover */}
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </motion.div>
  )
}

function IconBadge({ icon: Icon }) {
  return (
    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-400/30 bg-gold-400/10 text-gold-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
      <Icon className="h-6 w-6" />
    </div>
  )
}

export default function EventDetails() {
  return (
    <section id="details" className="relative px-5 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Арга хэмжээний мэдээлэл"
        title="Мэдэх ёстой"
        highlight="бүхэн"
        subtitle="Хуанлидаа тэмдэглээд, замаа төлөвлөөд, гоёмсог хувцаслаарай. Тухайн өдрийн талаарх бүх мэдээлэл энд байна."
      />

      <motion.div
        variants={stagger(0.14)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3"
      >
        {/* Огноо & Цаг */}
        <GlassCard>
          <IconBadge icon={CalendarDays} />
          <h3 className="font-display text-xl font-bold text-white">Огноо &amp; Цаг</h3>
          <p className="mt-3 text-lg font-semibold text-gold-200">
            {EVENT.dateLabel}
          </p>
          <p className="mt-1 text-silver-300">{EVENT.timeLabel}</p>
          <p className="mt-4 text-sm leading-relaxed text-silver-400">
            Өглөө эрт цугларч, Тэрэлж рүү хамтдаа хөдөлнө. Өдрийн аялал оройн
            баяраар өндөрлөнө.
          </p>
        </GlassCard>

        {/* Байршил */}
        <GlassCard>
          <IconBadge icon={MapPin} />
          <h3 className="font-display text-xl font-bold text-white">Байршил</h3>
          <p className="mt-3 text-lg font-semibold text-gold-200">
            {EVENT.venue.name}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-silver-300">
            {EVENT.venue.line1}
            <br />
            {EVENT.venue.line2}
            <br />
            {EVENT.venue.city}
          </p>
          <a
            href={EVENT.venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-2 text-sm font-semibold text-gold-200 transition-all duration-300 hover:bg-gold-400/20"
          >
            <Navigation className="h-4 w-4" />
            Google Map дээр харах
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>
        </GlassCard>

        {/* Dress Code */}
        <GlassCard>
          <IconBadge icon={Shirt} />
          <h3 className="font-display text-xl font-bold text-white">
            {DRESS_CODE.title}
          </h3>
          <p className="mt-3 text-lg font-semibold text-gold-200">
            {DRESS_CODE.headline}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-silver-400">
            {DRESS_CODE.description}
          </p>
          <div className="mt-5 flex items-center gap-3">
            {DRESS_CODE.palette.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-1.5">
                <span
                  className="h-8 w-8 rounded-full border border-white/20 shadow-inner"
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
                <span className="text-[0.6rem] text-silver-400">{c.name}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </section>
  )
}
