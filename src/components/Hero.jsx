import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  ChevronDown,
  Mail,
  CalendarClock,
} from "lucide-react";
import AnimatedBackground from "./ui/AnimatedBackground";
import CountdownTimer from "./CountdownTimer";
import { EVENT } from "../data/event";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

function InfoPill({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2.5 rounded-full glass px-4 py-2 text-sm text-silver-200">
      <Icon className="h-4 w-4 text-gold-300" />
      <span className="font-medium">{children}</span>
    </div>
  );
}

export default function Hero({ onOpenInvitation }) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-24 pt-28 sm:pt-32"
    >
      <AnimatedBackground dense />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Anniversary emblem */}

        {/* Title */}
        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          <span className="text-gold-animated">{EVENT.company}</span>
          <span className="mt-2 block text-white">{EVENT.tagline}</span>
        </motion.h1>

        {/* Invitation message */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-silver-300 sm:text-lg"
        >
          {EVENT.invitation}
        </motion.p>

        {/* Event pills */}
        {/* <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <InfoPill icon={Calendar}>{EVENT.dateLabel}</InfoPill>
          <InfoPill icon={Clock}>{EVENT.timeLabel}</InfoPill>
          <InfoPill icon={MapPin}>{EVENT.venue.name}</InfoPill>
        </motion.div> */}

        {/* Countdown */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-col items-center"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-silver-400">
            Үлдсэн хугацаа
          </p>
          <CountdownTimer />
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={onOpenInvitation}
            className="sheen group inline-flex items-center gap-2.5 rounded-full bg-gold-gradient px-8 py-3.5 font-display text-sm font-bold text-navy-950 shadow-gold-glow transition-transform duration-300 hover:scale-[1.04] [background-size:200%_auto]"
          >
            <Mail className="h-4 w-4" />
            Урилга нээх
          </button>
          <a
            href="#schedule"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 glass px-8 py-3.5 font-display text-sm font-bold text-silver-100 transition-all duration-300 hover:border-gold-400/40 hover:text-gold-200"
          >
            <CalendarClock className="h-4 w-4 text-gold-300" />
            Хөтөлбөр үзэх
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#invitation"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-silver-400"
        >
          <span className="text-[0.6rem] uppercase tracking-[0.3em]">Доош</span>
          <ChevronDown className="h-5 w-5 text-gold-300" />
        </motion.div>
      </motion.a>
    </section>
  );
}
