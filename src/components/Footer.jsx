import { Mail, Phone, Globe, Heart } from 'lucide-react'
import AnimatedBackground from './ui/AnimatedBackground'
import Reveal from './ui/Reveal'
import { EVENT } from '../data/event'

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 px-5 pb-12 pt-24 sm:pt-28">
        {/* Brand lockup */}
        <Reveal variant="up" className="mx-auto max-w-3xl text-center">
          <img
            src="/logo/datacare_logo_white.svg"
            alt="Datacare"
            className="mx-auto h-9 w-auto sm:h-11"
          />
          <h2 className="mt-6 font-display text-2xl font-extrabold text-white sm:text-3xl">
            <span className="text-gold">{EVENT.milestone}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-balance text-silver-300">
            {EVENT.tagline}. Хамтдаа тэмдэглэе!
          </p>
          <div className="mx-auto mt-6 h-px w-24 gold-rule" />
        </Reveal>

        {/* Contact */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-silver-300">
          <a
            href={`mailto:${EVENT.contact.rsvpEmail}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-gold-200"
          >
            <Mail className="h-4 w-4 text-gold-300" />
            {EVENT.contact.rsvpEmail}
          </a>
          <a
            href={`tel:${EVENT.contact.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-gold-200"
          >
            <Phone className="h-4 w-4 text-gold-300" />
            {EVENT.contact.phone}
          </a>
          <a
            href={EVENT.contact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-gold-200"
          >
            <Globe className="h-4 w-4 text-gold-300" />
            datacare.mn
          </a>
        </div>

        <p className="mt-10 flex flex-wrap items-center justify-center gap-1.5 text-center text-xs text-silver-500">
          © {new Date().getFullYear()} {EVENT.companyFull}. 15 жилийн ойгоо хамт
          олондоо <Heart className="h-3 w-3 fill-gold-400 text-gold-400" /> зориулан
          тэмдэглэж байна.
        </p>
      </div>
    </footer>
  )
}
