import { Mail, Phone, Globe, Heart } from "lucide-react";
import AnimatedBackground from "./ui/AnimatedBackground";
import Reveal from "./ui/Reveal";
import { EVENT } from "../data/event";

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
          {/* <h2 className="mt-6 font-display text-2xl font-extrabold text-white sm:text-3xl">
            <span className="text-gold">{EVENT.milestone}</span>
          </h2> */}
          {/* <p className="mx-auto mt-3 max-w-lg text-balance text-silver-300">
            {EVENT.celebration} хамтдаа тэмдэглэе
          </p> */}
          <div className="mx-auto mt-6 h-px w-24 gold-rule" />
        </Reveal>
      </div>
    </footer>
  );
}
