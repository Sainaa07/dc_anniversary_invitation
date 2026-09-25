import { motion } from "framer-motion";
import { Users, Volleyball } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { stagger, item } from "./ui/Reveal";
import { TEAMS } from "../data/event";

// ── Decorative bouncing footballs ────────────────────────────
const BALLS = [
  { left: "5%", size: 34, delay: 0, dur: 1.7 },
  { left: "24%", size: 22, delay: 0.4, dur: 1.45 },
  { left: "47%", size: 27, delay: 0.15, dur: 1.55 },
  { left: "70%", size: 20, delay: 0.55, dur: 1.4 },
  { left: "88%", size: 36, delay: 0.28, dur: 1.7 },
];

const ballVariants = {
  hidden: { y: -240, opacity: 0, rotate: 0 },
  show: ({ delay, dur }) => ({
    y: [-240, 0, -100, 0, -44, 0, -14, 0],
    opacity: [0, 1, 1, 1, 1, 1, 1, 1],
    rotate: 540,
    transition: {
      y: {
        duration: dur,
        delay,
        times: [0, 0.3, 0.48, 0.64, 0.76, 0.86, 0.94, 1],
        ease: [
          "easeIn",
          "easeOut",
          "easeIn",
          "easeOut",
          "easeIn",
          "easeOut",
          "easeIn",
        ],
      },
      opacity: { duration: 0.3, delay },
      rotate: { duration: dur, delay, ease: "easeOut" },
    },
  }),
};

function BouncingBalls() {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none relative mx-auto mt-8 h-12 max-w-5xl"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
    >
      {BALLS.map((b, i) => (
        <motion.span
          key={i}
          custom={b}
          variants={ballVariants}
          className="absolute bottom-0 select-none leading-none"
          style={{ left: b.left, fontSize: b.size }}
        >
          ⚽
        </motion.span>
      ))}
    </motion.div>
  );
}

function TeamCard({ team, index }) {
  const Icon = team.icon;
  const hasRoster = team.members && team.members.length > 0;
  const jersey = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-glass transition-shadow duration-300 hover:shadow-card-hover sm:p-7 sm:backdrop-blur-xl"
      style={{ "--accent": team.accent }}
    >
      {/* accent top bar */}
      <span
        className="absolute inset-x-0 top-0 h-1.5"
        style={{
          background: `linear-gradient(90deg, transparent, ${team.accent}, transparent)`,
        }}
      />
      {/* accent glow that blooms on hover */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: team.accent }}
      />
      {/* giant jersey number */}
      <span
        className="pointer-events-none absolute right-4 top-2 font-display text-7xl font-extrabold leading-none"
        style={{ color: team.accent, opacity: 0.12 }}
      >
        {jersey}
      </span>

      {/* Header */}
      <div className="relative flex items-start gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
          style={{ backgroundColor: `${team.accent}1f`, color: team.accent }}
        >
          <Icon className="h-7 w-7" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-xl font-extrabold text-white">
            {team.name}
          </h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-silver-300">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1">
              <Volleyball className="h-3 w-3" />
              {team.sport}
            </span>
            {hasRoster && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1">
                <Users className="h-3 w-3" />
                {team.members.length} тоглогч
              </span>
            )}
          </div>
        </div>
      </div>

      {/* divider */}
      <div
        className="my-5 h-px w-full"
        style={{
          background: `linear-gradient(90deg, ${team.accent}55, transparent)`,
        }}
      />

      {/* Roster */}
      <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-silver-400">
        Бүрэлдэхүүн
      </p>
      {hasRoster ? (
        <ol className="grid grid-cols-2 gap-x-5 gap-y-2.5">
          {team.members.map((m, i) => (
            <li
              key={m}
              className="flex items-center gap-2.5 text-sm text-silver-100"
            >
              <span
                className="w-6 shrink-0 text-right font-display text-xs font-bold tabular-nums"
                style={{ color: team.accent }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="truncate">{m}</span>
            </li>
          ))}
        </ol>
      ) : (
        <p className="rounded-xl border border-dashed border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-silver-400">
          Бүрэлдэхүүн удахгүй тодорхой болно…
        </p>
      )}
    </motion.div>
  );
}

export default function Teams() {
  return (
    <section id="teams" className="relative px-5 py-24 sm:py-32">
      {/* section accent */}
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle closest-side, rgba(37,99,235,0.12), transparent 72%)",
        }}
      />

      <SectionHeading
        eyebrow="Ойн тэмцээн"
        title="Хөл бөмбөг"
        // highlight="баг"
        subtitle="Дөрвөн баг, нэг цом."
      />

      <BouncingBalls />

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="mx-auto mt-6 grid max-w-5xl gap-6 sm:grid-cols-2"
      >
        {TEAMS.map((team, i) => (
          <TeamCard key={team.name} team={team} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
