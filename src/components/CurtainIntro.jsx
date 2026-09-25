import { motion } from "framer-motion";

/**
 * Theatrical curtain intro — crimson velvet drapes with vertical pleats,
 * a scalloped valance with gold fringe and tassels. The drapes sway
 * gently, then draw apart (bunching up like real fabric), and the
 * valance lifts away to reveal the site.
 */

const T_OPEN = 1.4; // seconds before the drapes start to part
const D_OPEN = 1.0; // how long the drawing-apart takes
const TOTAL = T_OPEN + D_OPEN;
const OPEN_EASE = [0.76, 0, 0.24, 1];

// Keyframe times: three gentle sways, then the pull.
const TIMES = [0, 0.2, 0.4, T_OPEN / TOTAL, 1];
const EASES = ["easeInOut", "easeInOut", "easeInOut", OPEN_EASE];

/** Layered gradients that read as pleated velvet. */
const velvet = {
  backgroundImage: [
    // vertical pleat folds (soft highlight/shadow ripple)
    "repeating-linear-gradient(90deg, rgba(0,0,0,0.45) 0px, rgba(0,0,0,0.06) 16px, rgba(255,255,255,0.10) 30px, rgba(0,0,0,0.06) 44px, rgba(0,0,0,0.45) 60px)",
    // stage-light falloff top & bottom
    "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 64%, rgba(0,0,0,0.55) 100%)",
    // base crimson velvet
    "linear-gradient(180deg, #82152a 0%, #661020 45%, #470b17 100%)",
  ].join(", "),
};

function Drape({ side, onComplete }) {
  const isLeft = side === "left";
  const dir = isLeft ? 1 : -1;
  return (
    <motion.div
      className={`absolute top-0 h-full w-[52%] ${isLeft ? "left-0" : "right-0"}`}
      style={{
        ...velvet,
        transformOrigin: isLeft ? "left center" : "right center",
        boxShadow: "inset 0 0 60px rgba(0,0,0,0.55)",
      }}
      initial={{ x: "0%", scaleX: 1 }}
      animate={{
        x: ["0%", `${dir * 0.6}%`, `${dir * -0.5}%`, "0%", `${dir * -108}%`],
        scaleX: [1, 1, 1, 1, 0.72],
      }}
      transition={{ duration: TOTAL, times: TIMES, ease: EASES }}
      onAnimationComplete={onComplete}
    >
      {/* inner-edge gold trim + soft fabric shadow */}
      <div
        className={`absolute top-0 h-full w-[3px] ${isLeft ? "right-0" : "left-0"}`}
        style={{
          background:
            "linear-gradient(180deg, transparent, #E8C878 12%, #BE9528 55%, #E8C878 88%, transparent)",
        }}
      />
      <div
        className={`absolute top-0 h-full w-8 ${isLeft ? "right-0" : "left-0"}`}
        style={{
          background: `linear-gradient(${isLeft ? "270deg" : "90deg"}, rgba(0,0,0,0.5), transparent)`,
        }}
      />
    </motion.div>
  );
}

/** Scalloped valance (swags) with gold fringe and hanging tassels. */
function Valance() {
  return (
    <motion.div
      className="absolute inset-x-0 top-0 z-20"
      initial={{ y: "0%" }}
      animate={{ y: "-130%" }}
      // Finishes exactly with the drapes, so the unmount never cuts it off.
      transition={{ delay: TOTAL - 0.55, duration: 0.55, ease: OPEN_EASE }}
    >
      {/* curtain rod */}
      <div
        className="h-2 w-full"
        style={{
          background:
            "linear-gradient(180deg, #F3E1AC 0%, #BE9528 60%, #7c5f16 100%)",
        }}
      />
      {/* swags */}
      <div className="flex h-20 w-full sm:h-24">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-full flex-1 rounded-b-[60%] border-b-[3px] border-gold-400/90"
            style={{
              ...velvet,
              boxShadow:
                "inset 0 -14px 20px rgba(0,0,0,0.5), 0 6px 14px rgba(0,0,0,0.45)",
            }}
          />
        ))}
      </div>
      {/* tassels at swag joints */}
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-full flex -translate-x-1/2 flex-col items-center"
          style={{ left: `${(i + 1) * 12.5}%`, marginTop: "-14px" }}
        >
          <span className="h-3.5 w-px bg-gold-400/90" />
          <span
            className="h-4 w-2 rounded-b-full"
            style={{
              background: "linear-gradient(180deg, #E8C878, #BE9528)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      ))}
    </motion.div>
  );
}

export default function CurtainIntro({ onComplete }) {
  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* stage spotlight behind the centre content */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 42%, rgba(255,235,180,0.16), transparent 55%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: T_OPEN, times: [0, 0.3, 0.8, 1] }}
      />

      {/* velvet drapes */}
      <Drape side="left" />
      <Drape side="right" onComplete={onComplete} />

      {/* centre reveal content — sits in the spotlight on the fabric */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 px-6 text-center"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.92, 1, 1, 1.04] }}
        transition={{
          duration: T_OPEN,
          times: [0, 0.24, 0.78, 1],
          ease: "easeInOut",
        }}
      >
        <img
          src="/logo/datacare_logo_white.svg"
          alt="Datacare"
          className="h-9 w-auto drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)] sm:h-12"
        />
        <div className="h-px w-44 gold-rule" />
        <p className="font-display text-sm font-semibold uppercase tracking-[0.42em] text-gold-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
          15th anniversary
        </p>
      </motion.div>

      {/* valance on top of everything */}
      <Valance />
    </div>
  );
}
