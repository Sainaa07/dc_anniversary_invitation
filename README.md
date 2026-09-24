# Datacare — 15 жилийн ойн Landing Page

**Datacare ХХК-ийн 15 жилийн ойн** баярт зориулсан, өндөр төвшний анимэйшнтэй,
**монгол хэл дээрх** урилга-хуудас. React + Vite, Tailwind CSS, Framer Motion,
lucide-react ашиглан бүтээв.

![Stack](https://img.shields.io/badge/React-18-61DAFB) ![Vite](https://img.shields.io/badge/Vite-5-646CFF) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38BDF8) ![FramerMotion](https://img.shields.io/badge/Framer_Motion-11-EF3E75)

## ✨ Онцлог

- **Hero** — анимэйшнтэй градиент/бөөмсийн дэвсгэр, алтан ойн эмблем, савласан цифрүүдтэй **бодит цагийн тоолуур** (өдөр · цаг · минут · секунд).
- **Интерактив дугтуй урилга** — лацдсан дугтуйг дарж таглааг нээхэд захидлын хуудас 3D эффекттэйгээр гарч ирнэ. Hero дээрх «Урилга нээх» товч автоматаар гүйлгэж, дугтуйг задална.
- **Арга хэмжээний мэдээлэл** — Огноо & Цаг, Байршил (**Google Map дээр харах** товчтой), Хувцаслалт (өнгөний палитртай) glassmorphism картууд.
- **Интерактив хөтөлбөр** — Тэрэлж рүү хийх өдрийн аяллын хөтөлбөр, **скролл дагасан алтан прогресс шугам** ба гарч ирэх анимэйштэй.
- **Хөл бөмбөгийн 4 баг** — багийн лого, спорт, бүрэлдэхүүнийг харуулсан, өнгө бүхий hover гэрэлтэлттэй responsive grid.
- Скроллд мэдрэмтгий шилэн дэвсгэртэй **тогтмол navbar**, мобайл цэс; бүртгэлийн CTA + статистиктэй footer.
- Бүрэн **responsive**, `prefers-reduced-motion` дэмжинэ. Гарчгийн фонт **Montserrat** (кирилл бүрэн дэмждэг), биетийн фонт **Inter**.

## 🚀 Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

> Requires Node.js 18+.

## 🎨 Customising the content

All event content lives in a single file — no component edits needed:

**[`src/data/event.js`](src/data/event.js)**

- `EVENT_ISO` — the date/time the countdown targets (ISO 8601, e.g. `2026-10-17T18:00:00+08:00`).
- `EVENT` — company name, tagline, invitation copy, date/time labels, venue (incl. `mapsUrl`), and contact details.
- `DRESS_CODE` — dress code copy and colour palette swatches.
- `SCHEDULE` — timeline entries (`time`, `location`, `title`, `description`, `icon`).
- `TEAMS` — team cards (`name`, `sport`, `icon`, `accent` colour, `members`). An empty `members` array shows a "roster TBD" placeholder.
- `STATS` — the footer stat strip.

Brand colours, fonts, and animations are defined in **[`tailwind.config.js`](tailwind.config.js)**.

## 🗂 Project structure

```
src/
├─ App.jsx                     # page assembly + invitation open state
├─ index.css                   # Tailwind layers + glassmorphism utilities
├─ data/event.js               # ← all editable content
├─ hooks/useCountdown.js       # live countdown hook
└─ components/
   ├─ Navbar.jsx  Hero.jsx  CountdownTimer.jsx
   ├─ Invitation.jsx           # interactive envelope reveal
   ├─ EventDetails.jsx  Timeline.jsx  Teams.jsx  Footer.jsx
   ├─ SectionHeading.jsx
   └─ ui/  (Reveal.jsx, AnimatedBackground.jsx)
```

---

Made with care for the Datacare team. 🥂
