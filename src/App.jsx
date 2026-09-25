import { useState, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import confetti from "canvas-confetti";
import CurtainIntro from "./components/CurtainIntro";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import EventDetails from "./components/EventDetails";
import Timeline from "./components/Timeline";
import Teams from "./components/Teams";
import Footer from "./components/Footer";

export default function App() {
  const [invitationOpen, setInvitationOpen] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  // Hero "Open Invitation" → scroll to the envelope and unseal it.
  const handleOpenInvitation = () => {
    document
      .getElementById("invitation")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    // Let the scroll settle before the envelope animation plays.
    window.setTimeout(() => setInvitationOpen(true), 650);
  };

  // Keep the page in dark mode regardless of OS preference.
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // Lock scrolling while the curtain intro is playing.
  useEffect(() => {
    document.body.style.overflow = introDone ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [introDone]);

  // Safety net: never leave the page locked if the intro callback is missed.
  useEffect(() => {
    if (introDone) return;
    const t = window.setTimeout(() => setIntroDone(true), 5000);
    return () => window.clearTimeout(t);
  }, [introDone]);

  // Celebration fireworks once the curtains have parted.
  useEffect(() => {
    if (!introDone) return;
    const colors = ["#F3E1AC", "#D4AF37", "#38BDF8", "#ffffff"];
    const end = Date.now() + 1000;
    let timer;
    const burst = () => {
      if (Date.now() > end) return;
      confetti({
        particleCount: 80,
        startVelocity: 34,
        spread: 360,
        ticks: 80,
        gravity: 0.85,
        origin: {
          x: 0.12 + Math.random() * 0.76,
          y: 0.12 + Math.random() * 0.35,
        },
        colors,
        zIndex: 90,
        disableForReducedMotion: true,
      });
      timer = window.setTimeout(burst, 380);
    };
    burst();
    return () => window.clearTimeout(timer);
  }, [introDone]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-navy-950 text-silver-100">
        {!introDone && <CurtainIntro onComplete={() => setIntroDone(true)} />}
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero onOpenInvitation={handleOpenInvitation} />
          <Invitation open={invitationOpen} setOpen={setInvitationOpen} />
          <EventDetails />
          <Timeline />
          <Teams />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
