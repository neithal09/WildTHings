import { useState, useEffect } from "react";
import {
  Home,
  Search,
  PlusCircle,
  Users,
  User,
  Play,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  BadgeCheck,
  TrendingUp,
  Star,
  ShoppingBag,
  Zap,
  Shield,
  BookOpen,
  Mic,
  Radio,
  ChevronRight,
  Award,
  Lock,
  Globe,
  Bell,
  Flame,
  Video,
  HelpCircle,
  Gift,
  Crown,
  Store,
} from "lucide-react";

const NAV_ITEMS = [
  { icon: Home, label: "Bedroom" },
  { icon: Search, label: "Crave" },
  { icon: PlusCircle, label: "Tempt" },
  { icon: Users, label: "Confess" },
  { icon: User, label: "Mine" },
];

const TRENDING_TAGS = [
  "#SlowBurn",
  "#3amThoughts",
  "#PillowTalk",
  "#GoodGirl",
  "#DirtyLittleSecret",
  "#TiedUpTonight",
  "#JustGiveIn",
];

const FEED_CARDS = [
  {
    id: 1,
    title: "A slow burn. A deep hum. And then you forget your own name.",
    creator: "WiildThing",
    expert: true,
    likes: "12.4K",
    comments: "892",
    saves: "3.1K",
    tag: "The Tease",
    tagColor: "text-martini",
    bg: "from-violet/40 to-chocolate",
    accent: "#AF9B3F",
    image: "/mood-stories.png",
  },
  {
    id: 2,
    title: "The sound. The snap. The shiver down your spine.",
    creator: "WiildThing",
    expert: false,
    likes: "8.9K",
    comments: "1.2K",
    saves: "5.4K",
    tag: "Got Whipped Yet",
    tagColor: "text-rust-light",
    bg: "from-rust/30 to-chocolate",
    accent: "#C7553A",
    image: "/mood-people.png",
  },
  {
    id: 3,
    title: "Your hands, their hands, and this in between.",
    creator: "WiildThing",
    expert: true,
    likes: "21K",
    comments: "445",
    saves: "9.8K",
    tag: "Linger",
    tagColor: "text-cream",
    bg: "from-violet to-chocolate",
    accent: "#FDF3DF",
    image: "/mood-products.png",
  },
];

const SHOWS = [
  { title: "No Hands Needed", episodes: 8, badge: "Featured" },
  { title: "When Loud Is The Only Option", episodes: 12, badge: "New" },
  { title: "Midnight Thoughts", episodes: 6, badge: "Drop" },
];

const EXPERTS = [
  { name: "The Tease", specialty: "Slow Burn", posts: "48 whispers" },
  { name: "The Linger", specialty: "Lingerie & Lace", posts: "36 whispers" },
  { name: "The Indulgent", specialty: "After Dark", posts: "29 whispers" },
  { name: "The Daring", specialty: "Bound & Wanting", posts: "41 whispers" },
];

const CONTENT_PILLARS = [
  {
    icon: Video,
    title: "The Tease",
    desc: "Whispers, glances, the things half-said.",
    formats: ["Slow Burns", "Pillow Talk", "Push & Pull"],
    accent: "#AF9B3F",
    border: "border-martini/40",
  },
  {
    icon: BookOpen,
    title: "Wild Talk",
    desc: "A page out of an unputdownable erotica.",
    formats: ["Letters Unsealed", "Confessions", "Bedtime Stories"],
    accent: "#6D457C",
    border: "border-violet-light/40",
  },
  {
    icon: BadgeCheck,
    title: "After Dark",
    desc: "For the hours nobody talks about.",
    formats: ["3 AM DMs", "Last Calls", "Quiet Riots"],
    accent: "#FDF3DF",
    border: "border-cream/30",
  },
  {
    icon: Mic,
    title: "The Mood",
    desc: "Press play. Let the rhythm take over.",
    formats: ["Slow Sultry Jazz", "Pulsing Beats", "No Hands Needed"],
    accent: "#AA462B",
    border: "border-rust/50",
  },
  {
    icon: MessageCircle,
    title: "The Wiildside",
    desc: "Where the bad decisions live.",
    formats: ["Bound & Wanting", "Linger", "Goosebumps"],
    accent: "#C5B364",
    border: "border-martini-lightest/40",
  },
  {
    icon: ShoppingBag,
    title: "Shop The Sensation",
    desc: "The tools, the toys, the temptations.",
    formats: ["Velvet Drawer", "First Bite", "Couples Mischief"],
    accent: "#572C66",
    border: "border-violet/50",
  },
];

const COMMUNITY_POSTS = [
  {
    anon: true,
    title: "Wide awake. Must be thinking about us. Anyone else still up?",
    replies: 124,
    expert: false,
    upvotes: 892,
  },
  {
    anon: false,
    name: "A.",
    title: "Footsie under the table. The night was already decided.",
    replies: 67,
    expert: false,
    upvotes: 2100,
  },
  {
    anon: false,
    name: "WiildThing",
    title: "Let's make bad decisions ;)",
    replies: 203,
    expert: true,
    upvotes: 5400,
  },
];

const GAMIFICATION = [
  { icon: Play, label: "Linger a little", pts: "+10" },
  { icon: MessageCircle, label: "Say the quiet part", pts: "+15" },
  { icon: HelpCircle, label: "Whisper a secret", pts: "+20" },
  { icon: Bookmark, label: "Slip into your drawer", pts: "+5" },
  { icon: Radio, label: "Stay up late with us", pts: "+50" },
  { icon: Award, label: "Give in completely", pts: "+100" },
];

const REWARDS = [
  {
    icon: Gift,
    label: "Turn us on, turn the price down",
    color: "text-rust-light",
  },
  { icon: ShoppingBag, label: "Free indulgences", color: "text-martini" },
  { icon: Crown, label: "Certified Wiildthing", color: "text-cream" },
  { icon: Zap, label: "First taste access", color: "text-martini-lightest" },
  { icon: Lock, label: "Velvet drawer drops", color: "text-violet-lightest" },
  { icon: Star, label: "Make a mess credit", color: "text-cream-dark" },
];

const PHASES = [
  {
    phase: "Volume I",
    title: "First Bite",
    color: "#AF9B3F",
    dot: "bg-martini",
    items: [
      "Whispers, teases, the slow tilt of the head",
      "The first drawer opens",
      "Set the scent before we walk in",
    ],
  },
  {
    phase: "Volume II",
    title: "The Slow Burn",
    color: "#AA462B",
    dot: "bg-rust",
    items: [
      "More tools, more toys, more temptation",
      "Letters back and forth, sealed with trembling hands",
    ],
  },
  {
    phase: "Volume III",
    title: "Confessions",
    color: "#6D457C",
    dot: "bg-violet-lightest",
    items: [
      "Anonymous, incognito, completely yours",
      "Stories murmured against warm skin",
      "Loops you can't stop running",
    ],
  },
  {
    phase: "Volume IV",
    title: "The Dive",
    color: "#FDF3DF",
    dot: "bg-cream",
    items: [
      "Speak in every accent of desire",
      "More keepers of secrets",
      "Take it home. Let it ruin you.",
    ],
  },
];

const DIFFERENTIATORS = [
  {
    icon: Shield,
    title: "No Receipts That Say Too Much",
    desc: "Names hidden. History gone. Just satisfied.",
  },
  {
    icon: BadgeCheck,
    title: "Subtle, Never Crass",
    desc: "We don't beg for attention. We command it.",
  },
  {
    icon: ShoppingBag,
    title: "Tools, Toys, Temptations",
    desc: "Get it on. No questions asked.",
  },
  {
    icon: Users,
    title: "The 3 AM DM",
    desc: "No distance. Just raw, real talk about desire.",
  },
  {
    icon: Globe,
    title: "Wild, On Your Terms",
    desc: "We don't define wild. You do.",
  },
];

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1 bg-rust text-cream text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
      <span className="w-1.5 h-1.5 rounded-full bg-cream" />
      LIVE
    </span>
  );
}

function ExpertBadge() {
  return (
    <span className="inline-flex items-center gap-0.5 text-martini text-xs font-semibold">
      <BadgeCheck size={12} /> Expert
    </span>
  );
}

function PointsPopup({ visible }: { visible: boolean }) {
  return (
    <div
      className={`fixed top-20 right-6 z-50 bg-martini text-chocolate font-bold text-sm px-4 py-2 rounded-full shadow-lg shadow-martini/30 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      Good girl.
    </div>
  );
}

export default function App() {
  const [activeNav, setActiveNav] = useState(0);
  const [likedCards, setLikedCards] = useState<Set<number>>(new Set());
  const [savedCards, setSavedCards] = useState<Set<number>>(new Set());
  const [showPoints, setShowPoints] = useState(false);
  const [points, setPoints] = useState(2450);
  const [anonymousMode, setAnonymousMode] = useState(false);

  useEffect(() => {
    document.title = "Wiild Things — Your Safe Wellness Space";
  }, []);

  const triggerPoints = (bonus: number) => {
    setPoints((p) => p + bonus);
    setShowPoints(true);
    setTimeout(() => setShowPoints(false), 2000);
  };

  const toggleLike = (id: number) => {
    setLikedCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else {
        next.add(id);
        triggerPoints(10);
      }
      return next;
    });
  };

  const toggleSave = (id: number) => {
    setSavedCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else {
        next.add(id);
        triggerPoints(5);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-chocolate text-cream font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
        * { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Cormorant Garamond', serif; letter-spacing: 0.02em; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .card-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .card-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(19,13,17,0.6); }
        .gradient-text { background: linear-gradient(135deg, #AF9B3F 0%, #AA462B 50%, #3B174E 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .section-fade { animation: fadeUp 0.5s ease forwards; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <PointsPopup visible={showPoints} />

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-chocolate/95 backdrop-blur border-b border-martini/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center gap-4">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img
              src="/wild-logo.png"
              alt=""
              className="h-9 md:h-10 w-auto object-contain"
            />
            <img
              src="/wiildthing-wordmark.png"
              alt="WiildThing"
              className="h-7 md:h-8 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1 ml-2">
            {NAV_ITEMS.map((item, i) => {
              const isActive = activeNav === i;
              return (
                <button
                  key={item.label}
                  onClick={() => setActiveNav(i)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-martini/15 text-martini"
                      : "text-cream/60 hover:text-cream hover:bg-violet/20"
                  }`}
                >
                  <item.icon size={15} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2 bg-violet/20 border border-martini/20 rounded-full px-4 py-2 ml-auto w-56">
            <Search size={14} className="text-cream/40" />
            <input
              placeholder="What are you craving today?"
              className="bg-transparent text-sm text-cream/80 placeholder-cream/30 outline-none w-full ml-1"
            />
          </div>

          <div className="flex items-center gap-2 ml-auto md:ml-0">
            <button
              className="relative p-2 rounded-full hover:bg-violet/20 transition-colors"
              aria-label="Notifications"
            >
              <Bell size={18} className="text-cream/60" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rust rounded-full" />
            </button>
            <button
              className="relative p-2 rounded-full hover:bg-violet/20 transition-colors"
              aria-label="The velvet drawer"
            >
              <Store size={18} className="text-cream/60" />
              <span className="absolute top-1 right-1 min-w-[16px] h-4 px-1 text-[10px] font-bold bg-martini text-chocolate rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <div className="hidden sm:flex items-center gap-2 bg-martini/15 border border-martini/40 rounded-full px-3 py-1">
              <Star size={12} className="text-martini" />
              <span className="text-martini text-xs font-bold">
                {points.toLocaleString()}
              </span>
            </div>
            <button
              onClick={() => setAnonymousMode(!anonymousMode)}
              className={`hidden sm:block text-xs font-semibold px-3 py-1.5 rounded-full transition-all border ${
                anonymousMode
                  ? "bg-violet/30 border-violet-lightest/50 text-cream"
                  : "bg-violet/10 border-cream/10 text-cream/50"
              }`}
              aria-label="Toggle incognito mode"
            >
              {anonymousMode ? (
                <span className="flex items-center gap-1">
                  <Lock size={10} /> Incognito
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <Globe size={10} /> Open
                </span>
              )}
            </button>
            <button
              className="w-9 h-9 rounded-full overflow-hidden border border-martini/40 hover:border-martini transition-colors shrink-0"
              aria-label="Profile"
            >
              <img
                src="/mood-people.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

        {/* MOBILE NAV STRIP */}
        <nav className="lg:hidden border-t border-martini/10">
          <div className="max-w-6xl mx-auto px-2 flex items-center gap-1 overflow-x-auto scrollbar-hide py-2">
            {NAV_ITEMS.map((item, i) => {
              const isActive = activeNav === i;
              return (
                <button
                  key={item.label}
                  onClick={() => setActiveNav(i)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium shrink-0 transition-colors ${
                    isActive
                      ? "bg-martini/15 text-martini"
                      : "text-cream/60 hover:text-cream hover:bg-violet/20"
                  }`}
                >
                  <item.icon size={14} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>
      </header>

      {/* MOBILE SEARCH */}
      <div className="md:hidden px-4 py-3 bg-chocolate">
        <div className="flex items-center gap-2 bg-violet/20 rounded-full px-4 py-2.5 border border-martini/20">
          <Search size={14} className="text-cream/40" />
          <input
            placeholder="Search topics, experts…"
            className="bg-transparent text-sm text-cream/80 placeholder-cream/30 outline-none w-full ml-1"
          />
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 pb-12">
        {/* HERO */}
        <section className="py-12 text-center section-fade">
          <div className="inline-flex items-center gap-2 bg-martini/10 border border-martini/30 rounded-full px-4 py-1.5 mb-6 text-martini text-xs font-semibold">
            <Zap size={12} />
            Wide awake? Must be thinking about us.
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-tight mb-4 text-cream">
            Let's make
            <br />
            <span className="gradient-text italic">bad decisions.</span>
          </h1>
          <p className="text-cream/60 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            We don't deal in caution. We deal in heat. We deal in hunger. The
            wild thing within you is eternal — and here, it has a home.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button className="bg-gradient-to-r from-martini to-martini-light text-chocolate font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm">
              Give in
            </button>
            <button className="bg-violet/30 border border-martini/30 text-cream font-semibold px-6 py-3 rounded-full hover:bg-violet/50 transition-colors text-sm">
              Linger a while
            </button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-8 text-center">
            {[
              ["50K+", "Kept Secrets"],
              ["500+", "Whispered Promises"],
              ["100+", "Velvet Drawers"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-display text-3xl font-semibold text-cream">
                  {num}
                </div>
                <div className="text-cream/40 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* VISUAL WORLD BAND */}
        <section className="mb-12 -mx-4 md:mx-0 md:rounded-3xl overflow-hidden relative">
          <img
            src="/mood-world.png"
            alt="The WiildThing visual world"
            className="w-full h-56 md:h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-chocolate via-chocolate/40 to-transparent flex items-center">
            <div className="px-6 md:px-10 max-w-md">
              <div className="font-display italic text-cream/90 text-lg md:text-2xl leading-snug">
                By saying so little, we say everything.
              </div>
              <div className="text-cream/50 text-xs mt-2">
                Subtle seduction. Less is more. Suggestion louder than explicit.
              </div>
            </div>
          </div>
        </section>

        {/* TRENDING TAGS */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={16} className="text-rust-light" />
            <span className="text-sm font-semibold text-cream/70">
              On Everyone's Lips
            </span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {TRENDING_TAGS.map((tag) => (
              <button
                key={tag}
                className="bg-violet/20 hover:bg-violet/40 border border-martini/20 text-cream/70 text-sm px-4 py-1.5 rounded-full transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* LIVE NOW BANNER */}
        <section className="mb-10">
          <div className="bg-gradient-to-r from-rust/40 to-violet/30 border border-rust/40 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LiveBadge />
              <div>
                <div className="font-bold text-sm text-cream">
                  Pillow Talk — happening right now
                </div>
                <div className="text-cream/50 text-xs">
                  2.3K already up · No hands needed
                </div>
              </div>
            </div>
            <button
              onClick={() => triggerPoints(50)}
              className="bg-rust hover:bg-rust-light text-cream text-xs font-bold px-4 py-2 rounded-full transition-colors flex items-center gap-1.5"
            >
              <Radio size={12} /> Slip in
            </button>
          </div>
        </section>

        {/* FOR YOU FEED */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-semibold flex items-center gap-2 text-cream">
              <Flame size={18} className="text-rust-light" /> For Your Eyes
            </h2>
            <button className="text-martini text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Take me there <ChevronRight size={14} />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {FEED_CARDS.map((card) => (
              <div
                key={card.id}
                className={`bg-gradient-to-br ${card.bg} border border-martini/15 rounded-2xl overflow-hidden card-hover`}
              >
                <div className="relative h-44 flex items-center justify-center overflow-hidden">
                  <img
                    src={card.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate via-chocolate/40 to-transparent" />
                  <button className="relative w-12 h-12 bg-cream/10 hover:bg-cream/20 backdrop-blur rounded-full flex items-center justify-center transition-colors border border-cream/30">
                    <Play
                      size={20}
                      className="text-cream ml-0.5"
                      fill="currentColor"
                    />
                  </button>
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-xs font-semibold ${card.tagColor} bg-chocolate/60 px-2 py-0.5 rounded-full`}
                    >
                      {card.tag}
                    </span>
                  </div>
                  {card.expert && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-chocolate/60 px-2 py-0.5 rounded-full">
                        <ExpertBadge />
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm leading-snug mb-1 text-cream">
                    {card.title}
                  </h3>
                  <p className="text-cream/40 text-xs mb-3">{card.creator}</p>
                  <div className="flex items-center gap-4 text-cream/50 text-xs">
                    <button
                      onClick={() => toggleLike(card.id)}
                      className={`flex items-center gap-1 transition-colors ${likedCards.has(card.id) ? "text-rust-light" : "hover:text-rust-light"}`}
                    >
                      <Heart
                        size={14}
                        fill={likedCards.has(card.id) ? "currentColor" : "none"}
                      />
                      {card.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-martini transition-colors">
                      <MessageCircle size={14} /> {card.comments}
                    </button>
                    <button
                      onClick={() => toggleSave(card.id)}
                      className={`flex items-center gap-1 transition-colors ${savedCards.has(card.id) ? "text-martini" : "hover:text-martini"}`}
                    >
                      <Bookmark
                        size={14}
                        fill={savedCards.has(card.id) ? "currentColor" : "none"}
                      />
                      {card.saves}
                    </button>
                    <button className="flex items-center gap-1 hover:text-cream transition-colors ml-auto">
                      <Share2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Velvet Drawer Strip */}
          <div className="mt-6 relative rounded-2xl overflow-hidden border border-martini/20">
            <img
              src="/mood-products.png"
              alt="In the velvet drawer"
              className="w-full h-44 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-chocolate/90 via-chocolate/30 to-chocolate/90" />
            <div className="absolute inset-0 flex items-center justify-between px-5">
              <div>
                <div className="font-display italic text-cream text-xl md:text-2xl leading-tight">
                  In the velvet drawer
                </div>
                <div className="text-cream/60 text-xs mt-1 max-w-xs">
                  The tools, the toys, the temptations.
                </div>
              </div>
              <button className="bg-martini hover:bg-martini-light text-chocolate text-xs font-bold px-4 py-2 rounded-full transition-colors">
                Take it home
              </button>
            </div>
          </div>
        </section>

        {/* FEATURED SHOWS */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-semibold text-cream">
              Bedtime Stories
            </h2>
            <button className="text-martini text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Read in bed <ChevronRight size={14} />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {SHOWS.map((show) => (
              <div
                key={show.title}
                className="bg-violet/15 hover:bg-violet/25 border border-martini/15 rounded-2xl p-5 card-hover cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-martini to-rust flex items-center justify-center mb-3">
                  <Video size={18} className="text-chocolate" />
                </div>
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold text-sm text-cream">{show.title}</h3>
                  <span className="text-xs bg-martini/20 text-martini px-2 py-0.5 rounded-full font-medium">
                    {show.badge}
                  </span>
                </div>
                <p className="text-cream/40 text-xs mb-3">
                  {show.episodes} Chapters
                </p>
                <div className="flex gap-2">
                  {Array.from(
                    { length: Math.min(show.episodes, 4) },
                    (_, i) => (
                      <button
                        key={i}
                        className="bg-violet/20 hover:bg-martini/20 text-cream/50 hover:text-martini text-xs px-2 py-1 rounded-lg transition-colors"
                      >
                        Ch {i + 1}
                      </button>
                    ),
                  )}
                  {show.episodes > 4 && (
                    <span className="text-cream/30 text-xs self-center">
                      +{show.episodes - 4}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERTS */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-semibold flex items-center gap-2 text-cream">
              <BadgeCheck size={18} className="text-martini" /> Keepers of
              Secrets
            </h2>
            <button className="text-martini text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Meet them all <ChevronRight size={14} />
            </button>
          </div>
          <div className="grid md:grid-cols-4 gap-3">
            {EXPERTS.map((e) => (
              <div
                key={e.name}
                className="bg-violet/15 hover:bg-violet/25 border border-martini/15 rounded-2xl p-4 text-center card-hover cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full mx-auto mb-3 border-2 border-martini/40 overflow-hidden bg-gradient-to-br from-violet to-violet-dark">
                  <img
                    src="/mood-people.png"
                    alt=""
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <div className="font-semibold text-sm mb-0.5 text-cream">
                  {e.name}
                </div>
                <div className="text-cream/40 text-xs mb-1">{e.specialty}</div>
                <ExpertBadge />
                <div className="text-cream/30 text-xs mt-2">{e.posts}</div>
                <button className="mt-3 w-full bg-martini/10 hover:bg-martini/25 border border-martini/30 text-martini text-xs font-semibold py-1.5 rounded-lg transition-colors">
                  Get closer
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CONTENT PILLARS */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl font-semibold mb-2 text-cream">
              The Many Volumes of Desire
            </h2>
            <p className="text-cream/50 text-sm">
              An unfinished book with nine more volumes, yet to be conceived
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {CONTENT_PILLARS.map((p) => (
              <div
                key={p.title}
                className={`bg-violet/10 border ${p.border} rounded-2xl p-5 card-hover`}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: `${p.accent}22` }}
                >
                  <p.icon size={18} style={{ color: p.accent }} />
                </div>
                <h3
                  className="font-bold text-sm mb-1"
                  style={{ color: p.accent }}
                >
                  {p.title}
                </h3>
                <p className="text-cream/50 text-xs mb-3">{p.desc}</p>
                <ul className="space-y-1">
                  {p.formats.map((f) => (
                    <li
                      key={f}
                      className="text-cream/40 text-xs flex items-center gap-1.5"
                    >
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ background: p.accent }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* COMMUNITY */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-semibold flex items-center gap-2 text-cream">
              <Users size={18} className="text-martini" /> Confessions
            </h2>
            <button className="text-martini text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Tell yours <ChevronRight size={14} />
            </button>
          </div>
          <div className="space-y-3">
            {COMMUNITY_POSTS.map((post, i) => (
              <div
                key={i}
                className="bg-violet/15 hover:bg-violet/25 border border-martini/15 rounded-2xl p-4 card-hover cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                      post.expert
                        ? "bg-martini/20 border border-martini/40"
                        : "bg-violet/30"
                    }`}
                  >
                    {post.anon ? (
                      <Lock size={14} className="text-cream/50" />
                    ) : (
                      <User size={14} className="text-cream/60" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-cream/60">
                        {post.anon ? "Incognito" : post.name}
                      </span>
                      {post.expert && <ExpertBadge />}
                    </div>
                    <h3 className="text-sm font-medium leading-snug text-cream">
                      {post.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3 pl-12 text-cream/30 text-xs">
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} /> {post.replies} murmured back
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart size={12} /> {post.upvotes.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-violet/15 border border-martini/15 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-violet/30 flex items-center justify-center shrink-0">
              {anonymousMode ? (
                <Lock size={14} className="text-martini" />
              ) : (
                <User size={14} className="text-cream/50" />
              )}
            </div>
            <input
              placeholder={
                anonymousMode
                  ? "Whisper. No names. No traces."
                  : "Spill it. We're listening…"
              }
              className="flex-1 bg-transparent text-sm text-cream/80 placeholder-cream/30 outline-none"
            />
            <button
              onClick={() => triggerPoints(20)}
              className="bg-martini hover:bg-martini-light text-chocolate text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
            >
              Say it
            </button>
          </div>
        </section>

        {/* GAMIFICATION */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-violet/30 to-chocolate-rust border border-martini/30 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-display text-3xl font-semibold flex items-center gap-2 text-cream">
                  <Star size={20} className="text-martini" /> Wiild Currency
                </h2>
                <p className="text-cream/50 text-sm mt-0.5">
                  Play more. We'll make it worth your while.
                </p>
              </div>
              <div className="text-right">
                <div className="font-display text-4xl font-semibold text-martini">
                  {points.toLocaleString()}
                </div>
                <div className="text-cream/40 text-xs">in your drawer</div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {GAMIFICATION.map((g) => (
                <div
                  key={g.label}
                  className="bg-chocolate/40 rounded-xl p-3 flex items-center gap-2 border border-martini/10"
                >
                  <g.icon size={14} className="text-martini shrink-0" />
                  <span className="text-xs text-cream/70 flex-1">
                    {g.label}
                  </span>
                  <span className="text-xs font-bold text-martini shrink-0">
                    {g.pts}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-sm font-bold text-cream/70 mb-3">
                Spend it like you mean it
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {REWARDS.map((r) => (
                  <button
                    key={r.label}
                    className="bg-chocolate/40 hover:bg-chocolate/60 border border-martini/15 rounded-xl p-3 flex items-center gap-2 transition-colors text-left"
                  >
                    <r.icon size={14} className={r.color} />
                    <span className="text-xs text-cream/70">{r.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIFFERENTIATORS */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl font-semibold mb-2 text-cream">
              Why You'll Stay
            </h2>
            <p className="text-cream/50 text-sm">
              Subtle seduction. Witty banter. All things passion.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {DIFFERENTIATORS.map((d) => (
              <div
                key={d.title}
                className="bg-violet/15 hover:bg-violet/25 border border-martini/15 rounded-2xl p-4 text-center card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-martini/15 flex items-center justify-center mx-auto mb-3">
                  <d.icon size={18} className="text-martini" />
                </div>
                <h3 className="font-bold text-xs mb-1 text-cream">{d.title}</h3>
                <p className="text-cream/50 text-xs leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* LAUNCH STRATEGY */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl font-semibold mb-2 text-cream">
              The Unfinished Book
            </h2>
            <p className="text-cream/50 text-sm">
              Volume by volume — read it when you're ready
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-6 top-8 bottom-8 w-0.5 bg-martini/20" />
            <div className="space-y-4">
              {PHASES.map((p) => (
                <div key={p.phase} className="flex gap-5 items-start">
                  <div
                    className={`w-3 h-3 rounded-full ${p.dot} shrink-0 mt-4 hidden md:block relative z-10`}
                  />
                  <div className="flex-1 bg-violet/15 hover:bg-violet/25 border border-martini/15 rounded-2xl p-5 card-hover">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ color: p.color, background: `${p.color}22` }}
                      >
                        {p.phase}
                      </span>
                      <h3
                        className="font-bold text-sm"
                        style={{ color: p.color }}
                      >
                        {p.title}
                      </h3>
                    </div>
                    <ul className="space-y-1.5">
                      {p.items.map((item) => (
                        <li
                          key={item}
                          className="text-cream/60 text-xs flex items-start gap-2"
                        >
                          <span
                            className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                            style={{ background: p.color }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRIVACY SECTION */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-violet/30 to-chocolate-rust border border-martini/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield size={20} className="text-martini" />
              <h2 className="font-display text-2xl font-semibold text-cream">
                Going Incognito
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                ["No Names, No History", "Your account becomes an alias."],
                [
                  "Receipts In Code",
                  "Only SKUs. No product names. No questions.",
                ],
                [
                  "Blurred Until You Want It",
                  "Images stay hidden until your fingers say so.",
                ],
                [
                  "Vanishing Sessions",
                  "Search and history disappear after every visit.",
                ],
              ].map(([title, desc]) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-martini/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Shield size={10} className="text-martini" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-cream">
                      {title}
                    </div>
                    <div className="text-cream/50 text-xs">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-8 text-center">
          <div className="relative bg-gradient-to-br from-violet/40 via-rust/20 to-chocolate border border-martini/30 rounded-2xl p-8 overflow-hidden">
            <img
              src="/mood-stories.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
            />
            <div className="relative">
              <h2 className="font-display text-5xl font-semibold mb-3 text-cream">
                We take you there.
                <br />
                <span className="gradient-text italic">And then some.</span>
              </h2>
              <p className="text-cream/60 text-sm mb-6 max-w-md mx-auto">
                No fear in this journey, only the promise of discovery. Let the
                fire take you.
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <button className="bg-gradient-to-r from-martini to-martini-light text-chocolate font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
                  You in?
                </button>
                <button className="bg-violet/40 border border-martini/30 text-cream font-semibold px-8 py-3 rounded-full hover:bg-violet/60 transition-colors">
                  Take it home
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-cream/30 text-xs py-4 border-t border-martini/15">
          <p>
            © 2026 WiildThing. The wild thing within you is eternal — and here,
            it has a home.
          </p>
        </footer>
      </main>
    </div>
  );
}
