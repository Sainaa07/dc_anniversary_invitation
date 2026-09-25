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
          <h3 className="mt-6 font-display text-xl font-extrabold text-white sm:text-2xl">
            <span className="text-gold">Let's do our best</span>
          </h3>
          <div className="mx-auto mt-6 h-px w-24 gold-rule" />
        </Reveal>
      </div>
    </footer>
  );
}
