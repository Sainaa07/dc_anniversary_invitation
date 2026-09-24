import {
  Star,
  Users,
  Trophy,
  PartyPopper,
  Flame,
  Zap,
  Shield,
  Bus,
  Coffee,
  Landmark,
  Goal,
  Sparkles,
  Mic2,
  Film,
  Lightbulb,
  Utensils,
  Gift,
  MoonStar,
} from "lucide-react";

/**
 * Бүх контентын нэг эх сурвалж.
 * Захиалагчийн засах бүх зүйл (огноо, байршил, хөтөлбөр, багууд) энд байрлана.
 */

// ── Тоолуур эргэлзэх агшин ────────────────────────────────────
// ISO 8601 + цагийн бүс (+08:00 = Улаанбаатар). Тоолуур энэ агшин руу тоолно.
export const EVENT_ISO = "2026-10-02T07:00:00+08:00";

export const EVENT = {
  company: "Datacare",
  companyFull: "Datacare ХХК",
  milestone: "15 жилийн ой",
  celebration: "15 жилийн ойн баяр",
  years: 15,
  tagline: "Амжилтын 15 жил",
  kicker: "Datacare ХХК · 15 жилийн ой",
  invitation:
    "Арван таван жилийн турш бид өгөгдлийг итгэл болгож, технологийг хөгжил дэвшлээр хувиргасаар ирлээ. Энэ өдөр бид хамтдаа туулсан замнал, бүтээсэн амжилт, цаашид хамтдаа босгох ирээдүйгээ тэмдэглэн өнгөрүүлэх гэж байна. Танийг энэ баярт хамтдаа оролцохыг чин сэтгэлээсээ урьж байна.",

  dateLabel: "2026 оны 10-р сарын 02, Баасан",
  timeLabel: "Өглөө 07:00 — Шөнө 23:30",
  dressCode: "Casual Cocktail",

  venue: {
    name: "Glory resort",
    line1: "Горхи-Тэрэлж байгалийн цогцолборт газар",
    line2: "Glory mountain resort",
    city: "Тэрэлж",
    // Google Maps хайлтын холбоос — тодорхой байршлаар солиж болно.
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Glory+Resort+Terelj+Mongolia",
  },

  contact: {
    rsvpEmail: "info@datacare.mn",
    phone: "+976 7700 0000",
    website: "https://datacare.mn",
  },
};

export const DRESS_CODE = {
  title: "Хувцаслалт",
  headline: "Casual Cocktail",
  description:
    "Тав тухтай ч гоёмсог. Эрэгтэйчүүд цэвэрхэн цамц эсвэл нимгэн костюм; эмэгтэйчүүд коктейл даашинз эсвэл гоёмсог энгийн хувцас. Тэрэлжийн байгальд зохицсон, өдрөөс орой хүртэл тохирох хувцсаа сонгоорой.",
  palette: [
    { name: "Шөнийн хөх", hex: "#0A1128" },
    { name: "Алтлаг шар", hex: "#D4AF37" },
    { name: "Мөнгөлөг", hex: "#D9DEE7" },
  ],
};

export const SCHEDULE = [
  {
    time: "07:00",
    location: "Оффис",
    title: "Тэрэлж рүү хөдөлнө",
    description: "Оффисын гаднаас цугларч, Тэрэлж рүү хамт олноороо хөдөлнө.",
    icon: Bus,
  },
  {
    time: "09:00–10:00",
    location: "Red rock",
    title: "Өглөөний цай",
    description:
      "Red rock дээр буфет хэлбэрийн өглөөний цайгаар өдрийг эхлүүлнэ.",
    icon: Coffee,
  },
  {
    time: "10:30–12:00",
    location: "Гүнжийн сүм",
    title: "Гүнжийн сүм үзэх",
    description: "Түүхэн Гүнжийн сүмээр зочилж, соёл, түүхтэй нь танилцана.",
    icon: Landmark,
  },
  {
    time: "13:00–15:00",
    location: "Red rock",
    title: "Хөл бөмбөг & Газрын теннис",
    description:
      "Спорт талбай дээр хөл бөмбөг, газрын теннисээр өрсөлдөж, хамтын хоол (share food)-оо талбай дээрээ шимтэнэ.",
    icon: Goal,
  },
  {
    time: "15:30–16:30",
    location: "Glory resort",
    title: "Арга хэмжээний бэлтгэл",
    description:
      "Glory resortод байрлаж, оройн арга хэмжээндээ бэлтгэнэ. Хувцаслалт: Casual Cocktail.",
    icon: Sparkles,
  },
  {
    time: "16:30–21:00",
    location: "Glory resort",
    title: "Нээлт",
    description: "Арга хэмжээгээ нээж, хүндэтгэлийн үг хэлнэ.",
    icon: Mic2,
  },

  {
    time: "21:30–23:30",
    location: "Улаанбаатар",
    title: "Улаанбаатар руу буцна",
    description:
      "Оффисын гадаа ирж, өдрийг өндөрлөнө. Хүсвэл Тэрэлждээ үлдэх боломжтой.",
    icon: MoonStar,
  },
];

// Ойн хөл бөмбөгийн тэмцээний 4 баг.
// Хүсвэл багийн нэрийг өөрчилж болно.
export const TEAMS = [
  {
    name: "1-р баг",
    sport: "Хөл бөмбөг",
    icon: Flame,
    accent: "#FB7185",
    color: "from-rose-400/25 to-orange-500/5",
    members: [
      "Цэнгэлдалай",
      "Түвшин",
      "Халиун",
      "Билэгмаа",
      "Дөлгөөн",
      "Дарханбаяр",
      "Эрдэнэзаяа",
      "Дэмбэрэлдодов",
      "Зоригтбаатар",
      "Энхзул",
    ],
  },
  {
    name: "2-р баг",
    sport: "Хөл бөмбөг",
    icon: Zap,
    accent: "#38BDF8",
    color: "from-tech-blue/30 to-tech-sky/10",
    members: [
      "Сайнбаяр",
      "Сумъяа",
      "Ариунхүслэн",
      "Адъяасүрэн",
      "Хосбаяр",
      "Цогийнлоовон",
      "Отгонноминзаяа",
      "Дашбуян",
      "Нинжсүрэн",
    ],
  },
  {
    name: "3-р баг",
    sport: "Хөл бөмбөг",
    icon: Shield,
    accent: "#34D399",
    color: "from-emerald-400/25 to-emerald-500/5",
    members: [
      "Отгонжаргал",
      "Гэрэлт-Од",
      "Мөнхсарнай",
      "Алтанцэцэг",
      "Энхжаргал",
      "Түвшинтөгс",
      "Алтангэрэл.А",
      "Баатарчулуун",
      "Алтангэрэл.Б",
      "Мягмарсүрэн",
    ],
  },
  {
    name: "4-р баг",
    sport: "Хөл бөмбөг",
    icon: Star,
    accent: "#E8C878",
    color: "from-gold-300/25 to-gold-500/5",
    members: [
      "Бат-Өлзий",
      "Чинбат",
      "Саруул",
      "Галсандагва",
      "Лхагва-Эрдэнэ",
      "Төрбадрах",
      "Мөнхтуяа",
      "Эрдэнэзаяа /эм/",
      "Алтанзул",
    ],
  },
];

// Хөл хэсгийн статистик мөр.
export const STATS = [
  { value: "15", label: "Амжилтын жил", icon: Star },
  { value: "200+", label: "Хамт олон", icon: Users },
  { value: "500+", label: "Хэрэгжүүлсэн төсөл", icon: Trophy },
  { value: "1", label: "Мартагдашгүй өдөр", icon: PartyPopper },
];
