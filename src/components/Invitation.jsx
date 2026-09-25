import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Lock, MapPin, X } from "lucide-react";
import Reveal from "./ui/Reveal";
import { EVENT, GUESTS } from "../data/event";

/** The compact card that rises out of the envelope. */
function LetterCard({ open, guest }) {
  return (
    <motion.div
      className="absolute left-1/2 z-20 w-[86%]"
      // Хэвтээ голлолтыг framer-motion дотор хийнэ — Tailwind-ийн
      // -translate-x-1/2 класс энд ажиллахгүй: y анимаци transform-ыг
      // бүхэлд нь дарж бичдэг тул mobile дээр хүрээнээс гарч байсан.
      style={{ bottom: 0, x: "-50%" }}
      initial={false}
      animate={{
        y: open ? "-52%" : "6%",
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
          Эрхэм хүндэт
        </p>
        {guest && (
          <p className="mt-0 font-display text-lg font-extrabold text-gold sm:text-xl">
            {guest}
          </p>
        )}
        <p className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-silver-300">
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
          {/* <li className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 shrink-0 text-gold-300" />
            {EVENT.timeLabel}
          </li> */}
          <li className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-gold-300" />
            {EVENT.venue.name}, {EVENT.venue.city}
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default function Invitation({ open, setOpen }) {
  const [guest, setGuest] = useState(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  const unlocked = Boolean(guest);
  // Hero-гийн товч setOpen(true) хийсэн ч кодоо оруулаагүй бол дугтуй хаалттай хэвээр.
  const isOpen = open && unlocked;

  // Цоожтой байхад нээх оролдлого хийвэл код руу чиглүүлнэ.
  useEffect(() => {
    if (open && !unlocked) inputRef.current?.focus();
  }, [open, unlocked]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = GUESTS[code.trim()];
    if (name) {
      setGuest(name);
      setError(false);
      setOpen(true);
    } else {
      setError(true);
      inputRef.current?.focus();
    }
  };

  const handleEnvelope = () => {
    if (!unlocked) {
      inputRef.current?.focus();
      return;
    }
    setOpen(!open);
  };

  return (
    <section
      id="invitation"
      className="relative overflow-hidden px-5 py-24 sm:py-32"
    >
      {/* soft backdrop accents */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle closest-side, rgba(212,175,55,0.12), transparent 72%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal variant="up">
          <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-5xl">
            Таныг <span className="text-gold">урьж байна</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-silver-300">
            Ажилтны кодоо оруулж, өөрийн нэрийн урилгаа нээгээрэй. Баяр,
            хүндэтгэл, дурсамжаар дүүрэн өдөр таныг хүлээж байна.
          </p>
        </Reveal>

        {/* Цоож — ажилтны код зөв бол урилга нээгдэнэ */}
        <AnimatePresence initial={false}>
          {!unlocked && (
            <motion.form
              onSubmit={handleSubmit}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
              className="mx-auto mt-10 max-w-sm"
            >
              <div
                className={`glass rounded-2xl px-6 py-6 transition-colors ${
                  error ? "!border-rose-400/50" : ""
                }`}
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/10">
                  <Lock className="h-4 w-4 text-gold-300" />
                </div>
                {/* <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
                  Урилга цоожтой
                </p> */}
                <div className="mt-4 flex gap-2">
                  <input
                    ref={inputRef}
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value.replace(/\D/g, "").slice(0, 4));
                      setError(false);
                    }}
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="• • • •"
                    aria-label="Ажилтны код"
                    className="w-full min-w-0 rounded-xl border border-white/15 bg-navy-900/70 px-4 py-2.5 text-center text-lg font-semibold tracking-[0.35em] text-white placeholder:text-silver-400 focus:border-gold-400/60 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-xl bg-gold-gradient px-5 py-2.5 font-display text-sm font-bold text-navy-950 transition-transform duration-300 hover:scale-[1.03]"
                  >
                    Нээх
                  </button>
                </div>
                {error && (
                  <p className="mt-3 text-sm text-rose-300">
                    Код буруу байна. Дахин оролдоно уу.
                  </p>
                )}
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Envelope — the padding-top grows when open so the risen letter has
            its own room and never overlaps the heading (key for mobile). */}
        <Reveal variant="scale" delay={0.15} className="mt-12">
          <div
            className={`flex justify-center transition-all ease-out ${
              isOpen
                ? "pt-[170px] duration-500 sm:pt-[200px]"
                : "pt-0 delay-500 duration-700"
            }`}
          >
            <div className="perspective">
              <div
                role="button"
                tabIndex={0}
                aria-label={isOpen ? "Урилга хаах" : "Урилга нээх"}
                onClick={handleEnvelope}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleEnvelope();
                  }
                }}
                className="group relative aspect-[7/5] w-[min(320px,82vw)] cursor-pointer select-none outline-none sm:w-[380px]"
              >
                {/* glow under envelope */}
                <div className="absolute inset-x-8 bottom-2 h-10 rounded-full bg-gold-400/30 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Envelope back */}
                <div className="absolute inset-0 rounded-xl border border-gold-400/25 bg-gradient-to-b from-navy-700 to-navy-800 shadow-glass" />

                {/* The letter card */}
                <LetterCard open={isOpen} guest={guest} />

                {/* Envelope front pocket (V-notch top) */}
                <div
                  className="absolute inset-0 z-30 rounded-xl border border-gold-400/20 bg-gradient-to-b from-navy-600 to-navy-700"
                  style={{
                    clipPath:
                      "polygon(0 0, 50% 42%, 100% 0, 100% 100%, 0 100%)",
                  }}
                >
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/25 to-transparent" />
                </div>

                {/* Envelope flap */}
                <motion.div
                  className="absolute inset-x-0 top-0 origin-top"
                  style={{ height: "62%", transformStyle: "preserve-3d" }}
                  initial={false}
                  animate={{
                    rotateX: isOpen ? 180 : 0,
                    zIndex: isOpen ? 10 : 40,
                  }}
                  transition={{
                    duration: isOpen ? 0.6 : 0.9,
                    delay: isOpen ? 0 : 0.75,
                    ease: isOpen ? [0.5, 0, 0.2, 1] : [0.34, 0.02, 0.26, 1],
                  }}
                >
                  {/* rounded-t-xl — таг хаалттай үед дугтуйн дээд булангууд
                      доод давхаргуудтайгаа адил дугуй харагдана */}
                  <div
                    className="h-full w-full rounded-t-xl border-b border-gold-400/30 bg-gradient-to-b from-navy-600 to-navy-700"
                    style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                  />
                </motion.div>

                {/* Hint */}
                <AnimatePresence>
                  {!isOpen && (
                    <motion.span
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute -bottom-9 left-1/2 z-40 -translate-x-1/2 whitespace-nowrap text-xs font-medium uppercase tracking-[0.25em] text-silver-400"
                    >
                      {unlocked ? "Дарж нээнэ үү ✦" : "Кодоо оруулна уу ✦"}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Close / reset control */}
        <AnimatePresence>
          {isOpen && (
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
  );
}
