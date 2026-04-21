"use client";

import "./landingpage.css";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type {
  LandingFaq,
  LandingGalleryItem,
  LandingMetric,
  LandingPricingPlan,
  LandingUseCase,
} from "@/lib/landing";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence

import GoalsSection from "./GoalsSection";
import VotingSection from "./VotingSection";
import InsightsSection from "./InsightsSection";
import GallerySection from "./GallerySection";
import RoleToggleSection from "./RoleToggleSection";

import PricingSection from "./PricingSection";
import FaqSection from "./FaqSection";
import UseCasesSection from "./UseCasesSection ";
import { LiveChatWidget } from "./LiveChatWidget";

type Props = {
  metric: LandingMetric;
  pricingPlans: LandingPricingPlan[];
  faqs: LandingFaq[];
  useCases: LandingUseCase[];
  galleryItems: LandingGalleryItem[];
};

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&h=600&fit=crop",
    sector: "Family Moments",
    protocol: "Daily Check-In",
  },
  {
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop",
    sector: "Child Development",
    protocol: "Growth Tracking",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571210862729-78a52d3779a2?w=800&h=600&fit=crop",
    sector: "Learning Together",
    protocol: "Academic Goals",
  },
];

function formatPrice(cents: number) {
  if (cents === 0) return "$0";
  return `$${Math.round(cents / 100)}/mo`;
}

export default function LandingPageClient({
  metric,
  pricingPlans,
  faqs,
  useCases,
  galleryItems,
}: Props) {
  // const [mobileOpen, setMobileOpen] = useState(false);
  // const [selectedMood, setSelectedMood] = useState(1);
  const [votes, setVotes] = useState([3, 1, 1]);
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0]?.id ?? null);
  const [role, setRole] = useState<"parent" | "child">("parent");

  useEffect(() => {
    if (!openFaq && faqs[0]?.id) {
      setOpenFaq(faqs[0].id);
    }
  }, [openFaq, faqs]);

  const votePct = useMemo(() => {
    const total = votes.reduce((a, b) => a + b, 0);
    return votes.map((value) => Math.round((value / total) * 100));
  }, [votes]);

  return (
    <main className="pk-root">
      <Navbar />
      <Hero />
      <CheckIn />
      <GoalsSection />
      <VotingSection />
      <InsightsSection />
      <GallerySection />
      <RoleToggleSection />
      <UseCasesSection />
      <PricingSection />
      <FaqSection />
      <Ages />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <LiveChatWidget />
      <Footer />
    </main>
  );
}

function useInView(
  threshold = 0.1
): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function SLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-[.72rem] font-extrabold uppercase tracking-widest text-[#7c3aed] mb-3.5">
      {children}
    </div>
  );
}

function CheckIn() {
  const moods = [
    ["😊", "Happy"],
    ["😔", "Sad"],
    ["😤", "Angry"],
    ["😰", "Worried"],
    ["🤩", "Excited"],
    ["😴", "Tired"],
    ["😌", "Calm"],
    ["🥰", "Loved"],
  ];
  const [sel, setSel] = useState(0);
  const [logged, setLogged] = useState(false);
  const [note, setNote] = useState("");

  const handleLog = () => {
    setLogged(true);
    setTimeout(() => setLogged(false), 2200);
  };

  return (
    <section
      id="checkin"
      className="px-[5%] py-16 relative"
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 50% 30%,rgba(167,139,250,.14) 0%,transparent 60%),radial-gradient(ellipse 50% 40% at 80% 80%,rgba(251,146,60,.10) 0%,transparent 50%),linear-gradient(180deg,#fdfbff 0%,rgba(237,233,254,.4) 60%,#fdfbff 100%)",
      }}
    >
      <div className="blobs">
        <div className="blob b5"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <SLabel>Daily Check-In</SLabel>
          <h2
            className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-[#1a0f3a] mb-5"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            How Is Your <span className="grad">Child</span>
            <br />
            Feeling <span className="font-normal italic">Today?</span>
          </h2>
          <p className="text-[1.05rem] text-[#4b3d6e] leading-7 max-w-lg mb-7 font-medium">
            A 60-second daily check-in helps you spot emotional patterns, open
            conversations, and show up for your child when it matters most.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {[
              "🔍 Spots patterns early",
              "💬 Opens dialogue",
              "📊 Weekly mood reports",
              "🧠 AI-powered insights",
            ].map((t) => (
              <span
                key={t}
                className="px-3.5 py-1.5 rounded-full text-[.7rem] font-bold text-[#5b21b6]"
                style={{
                  background: "rgba(167,139,250,.15)",
                  border: "1px solid rgba(124,58,237,.18)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div
            className="rounded-[28px] p-4 md:p-8"
            style={{
              background: "rgba(255,255,255,.85)",
              backdropFilter: "blur(22px)",
              border: "1.5px solid rgba(255,255,255,.95)",
              boxShadow: "0 16px 56px rgba(92,33,182,.10)",
            }}
          >
            <div
              className="text-[1.12rem] font-extrabold text-[#1a0f3a] mb-1"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Emma's Daily Check-In
            </div>
            <div className="text-[.78rem] text-[#7c6fa0] font-semibold mb-5">
              How is Emma feeling today? (Age 8)
            </div>
            <div className="grid grid-cols-4 gap-2 mb-5">
              {moods.map(([e, l], i) => (
                <button
                  key={l}
                  onClick={() => setSel(i)}
                  className="aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 cursor-pointer transition-all hover:scale-105"
                  style={{
                    background:
                      sel === i
                        ? "rgba(124,58,237,.12)"
                        : "rgba(124,58,237,.05)",
                    border:
                      sel === i ? "2px solid #7c3aed" : "2px solid transparent",
                    boxShadow:
                      sel === i ? "0 4px 14px rgba(124,58,237,.2)" : "none",
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  <span className="text-2xl">{e}</span>
                  <span className="text-[.63rem] font-bold text-[#4b3d6e]">
                    {l}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex gap-2 w-full mb-3.5">
              <input
                className="flex-1 min-w-0 px-4 py-3 rounded-[13px] text-[.85rem] text-[#1a0f3a] outline-none transition-all"
                style={{
                  border: "2px solid rgba(124,58,237,.18)",
                  background: "rgba(255,255,255,.7)",
                  fontFamily: "'Nunito', sans-serif",
                }}
                placeholder="Any notes for today?"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(124,58,237,.18)")
                }
              />
              <button
                onClick={handleLog}
                className="px-4 py-3 shrink-0 whitespace-nowrap rounded-[13px] text-white text-[.85rem] font-extrabold border-none cursor-pointer transition-all hover:-translate-y-0.5 hover:scale-105"
                style={{
                  background: logged
                    ? "linear-gradient(135deg,#059669,#34d399)"
                    : "linear-gradient(135deg,#7c3aed,#f472b6)",
                  boxShadow: "0 4px 16px rgba(124,58,237,.28)",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                {logged ? "✓ Logged!" : "Log It ✓"}
              </button>
            </div>
            <span
              className="px-3.5 py-1.5 rounded-full text-[.7rem] font-bold text-[#5b21b6]"
              style={{
                background: "rgba(167,139,250,.15)",
                border: "1px solid rgba(124,58,237,.18)",
              }}
            >
              💡 AI tip ready after logging
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className={`pk-mobile ${mobileOpen ? "open" : ""}`}>
        <div
          className="pk-mobile-backdrop"
          onClick={() => setMobileOpen(false)}
        />

        <aside className="pk-mobile-panel">
          <button
            className="pk-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          <div className="pk-mobile-links">
            <a href="#checkin" onClick={() => setMobileOpen(false)}>
              Check-In
            </a>

            <a href="#goals" onClick={() => setMobileOpen(false)}>
              Goals
            </a>

            <a href="#insights" onClick={() => setMobileOpen(false)}>
              Insights
            </a>

            <a href="#pricing" onClick={() => setMobileOpen(false)}>
              Pricing
            </a>

            <a href="#faq" onClick={() => setMobileOpen(false)}>
              FAQ
            </a>
            <div className="space-y-5 flex flex-col w-2/3 md:w-1/2">
              <a href="/login" className="nctb">
                Log In
              </a>
              <a href="/login" className="ncta">
                Get Started
              </a>
            </div>
          </div>
        </aside>
      </div>

      <nav className="pk-nav">
        <a href="#" className="nav-logo">
          <div className="nlm">👨‍👩‍👧</div>
          <span className="nlt">ParKids</span>
        </a>
        <div className="flex gap-2">
          <ul className="nav-links hidden lg:flex items-center">
            <li>
              <a href="#checkin">Check-In</a>
            </li>
            <li>
              {" "}
              <a href="#goals">Goals</a>
            </li>
            <li>
              <a href="#voting">Decisions</a>
            </li>
            <li>
              {" "}
              <a href="#insights">Insights</a>
            </li>
            <li>
              {" "}
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <div className="nav-actions">
              <li>
                <a href="/login" className="nctb">
                  Log In
                </a>
              </li>
              <li>
                <a href="/login" className="ncta">
                  Get Started
                </a>
              </li>
            </div>
          </ul>
          <button className="burger" onClick={() => setMobileOpen(true)}>
            <div className="space-y-2">
              <div className="w-5 h-0.5 bg-[var(--purple)]" />
              <div className="w-5 h-0.5 bg-[var(--purple)]" />
            </div>
          </button>
        </div>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer>
        <div>
          <a href="#" className="flog">
            <div
              className="nlm"
              style={{ width: "30px", height: "30px", fontSize: ".85rem" }}
            >
              👨‍👩‍👧
            </div>
            <span className="nlt" style={{ fontSize: "1.1rem" }}>
              ParKids
            </span>
          </a>
          <p className="fdesc">
            Empowering parents to support every stage of their child's growth —
            from age 4 to 17.
          </p>
        </div>
        <div className="fcol">
          <h4>Product</h4>
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Age Stages</a>
            </li>
            <li>
              <a href="#">AI Assistant</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="fcol">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
        </div>
        <div className="fcol">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="fbot">
        <span>© 2025 Parent-Kids. All rights reserved.</span>
        <span>Made with 💜 for families everywhere</span>
      </div>
    </>
  );
}

function Hero() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero">
      <div className="blobs">
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
      </div>
      <div className="hero-inner">
        <div className="hc">
          <h1>
            Where <span className="grad">Families</span> Grow,
            <span
              style={{
                fontStyle: "italic",
                fontFamily: "Fraunces",
                fontWeight: 400,
              }}
            >
              {" "}
              Together.
            </span>
          </h1>
          <p>
            ParKids brings structure through check-ins, shared goals, family
            decision-making, and real-time insights.
          </p>
          <div className="hbtns">
            <a href="#" className="btn-p">
              Get Started Free →
            </a>
            <a href="#features" className="btn-g">
              ▶ See How It Works
            </a>
          </div>
          <div className="htrust">
            <div className="avs">
              <div
                className="av"
                style={{
                  background: "linear-gradient(135deg,#7c3aed,#a78bfa)",
                }}
              >
                M
              </div>
              <div
                className="av"
                style={{
                  background: "linear-gradient(135deg,#fb923c,#fcd34d)",
                }}
              >
                S
              </div>
              <div
                className="av"
                style={{
                  background: "linear-gradient(135deg,#34d399,#38bdf8)",
                }}
              >
                J
              </div>
              <div
                className="av"
                style={{
                  background: "linear-gradient(135deg,#f472b6,#7c3aed)",
                }}
              >
                K
              </div>
            </div>
            <span className="tt">
              <strong>14,000+</strong> active families
            </span>
            <div className="tsep"></div>
            <div className="sr">
              <span className="stars">★★★★★</span>
              <span className="stxt">
                <strong>4.9</strong> · 3,200+ reviews
              </span>
            </div>
          </div>
        </div>

        <div className="hv relative h-[500px] md:h-[500px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current} // Key ensures animation runs on state change
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.05, x: -20 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute inset-0"
            >
              {/* Main Image Card */}
              <div className="relative h-full border-2 border-slate-900 bg-slate-900 p-2 overflow-hidden shadow-2xl group">
                <div className="relative h-full overflow-hidden">
                  <img
                    src={slides[current].image}
                    alt={slides[current].sector}
                    className="w-full h-full object-cover opacity-60 group-hover:grayscale group-hover:opacity-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function CTA() {
  return (
    <section
      style={{
        padding: "80px 0",
      }}
    >
      <div className="ctab">
        <h2>
          Your Family's Best Chapter
          <br />
          Starts Today
        </h2>

        <p>
          Join 14,000+ families using Parent-Kids to raise happy, confident,
          well-rounded children — free forever to start.
        </p>

        <div className="cacts">
          <a href="#" className="bw">
            Create Free Family Account →
          </a>

          <a href="#" className="bgw">
            Book a Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="px-[5%] py-16">
      <div
        style={{
          textAlign: "center",
          maxWidth: "540px",
          margin: "0 auto 58px",
        }}
      >
        <div
          className="slbl"
          style={{
            justifyContent: "center",
          }}
        >
          How It Works
        </div>

        <h2 className="stitle">
          Start in Minutes.
          <br />
          Transform Years.
        </h2>

        <p
          className="ssub"
          style={{
            maxWidth: "100%",
            marginBottom: 0,
          }}
        >
          Three simple steps to a more connected, informed, and empowered
          family.
        </p>
      </div>

      <div className="steps">
        <div className="step">
          <div className="stepn">1</div>
          <h3>Create Family Profile</h3>
          <p>
            Add your children, their ages, and development goals. Takes 2
            minutes — no forms, no jargon.
          </p>
        </div>

        <div className="step d2">
          <div className="stepn">2</div>
          <h3>Track & Check In Daily</h3>
          <p>
            Log moods, activities, and milestones. Get instant AI-powered
            guidance tailored to your child's exact stage.
          </p>
        </div>

        <div className="step d4">
          <div className="stepn">3</div>
          <h3>Watch Them Flourish</h3>
          <p>
            Review weekly growth summaries, celebrate milestones, and strengthen
            your family bond every single day.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  return (
    <section id="stories" className="px-[5%] py-16 tbg">
      <div
        style={{
          textAlign: "center",
          maxWidth: "520px",
          margin: "0 auto 50px",
        }}
      >
        <div
          className="slbl"
          style={{
            justifyContent: "center",
          }}
        >
          Family Stories
        </div>

        <h2 className="stitle">
          Families Who Found
          <br />
          Their Rhythm
        </h2>
      </div>

      <div className="tgrid">
        <div className="tcard">
          <div className="tq">"</div>

          <p>
            Parent-Kids showed me my 9-year-old had been anxious for weeks
            before I even noticed. The mood patterns changed how I showed up for
            her completely.
          </p>

          <div className="tau">
            <div
              className="tav"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#a78bfa)",
              }}
            >
              A
            </div>

            <div>
              <div className="tn">Amara O.</div>
              <div className="tr">Mom of Zoe, 9 · Austin, TX</div>
            </div>
          </div>
        </div>

        <div className="tcard d2">
          <div className="tq">"</div>

          <p>
            The teen guides are genuinely brilliant. My 15-year-old and I
            finally have a framework for conversations I never knew how to
            start. Total game changer.
          </p>

          <div className="tau">
            <div
              className="tav"
              style={{
                background: "linear-gradient(135deg,#fb923c,#fcd34d)",
              }}
            >
              R
            </div>

            <div>
              <div className="tn">Robert K.</div>
              <div className="tr">Dad of Kai, 15 · Chicago, IL</div>
            </div>
          </div>
        </div>

        <div className="tcard d4">
          <div className="tq">"</div>

          <p>
            Three kids, three different ages. Parent-Kids handles all of them
            brilliantly — each child gets content that's exactly right for where
            they are developmentally.
          </p>

          <div className="tau">
            <div
              className="tav"
              style={{
                background: "linear-gradient(135deg,#34d399,#38bdf8)",
              }}
            >
              L
            </div>

            <div>
              <div className="tn">Lisa M.</div>
              <div className="tr">Mom of 3 · Seattle, WA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ages() {
  return (
    <section id="ages" className="px-[5%] py-16 abg">
      <div className="slbl">Age-Based Growth</div>
      <h2 className="stitle">
        Built for Every Stage
        <br />
        of Childhood
      </h2>
      <p className="ssub">
        Parent-Kids adapts to your child's exact age — with content, milestones,
        and tools that evolve as they grow from 4 to 17.
      </p>

      <div className="agrid">
        <div className="acard">
          <div
            className="abadge"
            style={{
              background: "rgba(167,139,250,.15)",
              color: "var(--purple)",
            }}
          >
            4–6<span>yrs</span>
          </div>

          <div className="abody">
            <h3>Little Explorers</h3>
            <p>
              Foundation years. Language explosion, social play, and big
              feelings. Track speech, motor skills, and early curiosity
              milestones.
            </p>

            <div className="atags">
              <span
                className="atag"
                style={{
                  background: "rgba(167,139,250,.12)",
                  color: "var(--purple)",
                }}
              >
                Language
              </span>

              <span
                className="atag"
                style={{
                  background: "rgba(52,211,153,.12)",
                  color: "#0d9488",
                }}
              >
                Motor Skills
              </span>

              <span
                className="atag"
                style={{
                  background: "rgba(251,146,60,.12)",
                  color: "#c2410c",
                }}
              >
                Social Play
              </span>
            </div>
          </div>
        </div>

        <div className="acard d1">
          <div
            className="abadge"
            style={{
              background: "rgba(56,189,248,.15)",
              color: "#0369a1",
            }}
          >
            7–9<span>yrs</span>
          </div>

          <div className="abody">
            <h3>Young Thinkers</h3>
            <p>
              Reading, logic, and friendship. Build emotional vocabulary, study
              habits, and creative confidence in school-age children.
            </p>

            <div className="atags">
              <span
                className="atag"
                style={{
                  background: "rgba(56,189,248,.12)",
                  color: "#0369a1",
                }}
              >
                Reading
              </span>

              <span
                className="atag"
                style={{
                  background: "rgba(252,211,77,.15)",
                  color: "#92400e",
                }}
              >
                Emotions
              </span>

              <span
                className="atag"
                style={{
                  background: "rgba(244,114,182,.12)",
                  color: "#9d174d",
                }}
              >
                Creativity
              </span>
            </div>
          </div>
        </div>

        <div className="acard d2">
          <div
            className="abadge"
            style={{
              background: "rgba(251,146,60,.15)",
              color: "#c2410c",
            }}
          >
            10–13<span>yrs</span>
          </div>

          <div className="abody">
            <h3>Growing Independents</h3>
            <p>
              Pre-teen transitions. Self-identity, peer relationships, and
              academic pressure. Tools designed for both parent and child.
            </p>

            <div className="atags">
              <span
                className="atag"
                style={{
                  background: "rgba(251,146,60,.12)",
                  color: "#c2410c",
                }}
              >
                Identity
              </span>

              <span
                className="atag"
                style={{
                  background: "rgba(167,139,250,.12)",
                  color: "var(--purple)",
                }}
              >
                Study Skills
              </span>

              <span
                className="atag"
                style={{
                  background: "rgba(52,211,153,.12)",
                  color: "#0d9488",
                }}
              >
                Resilience
              </span>
            </div>
          </div>
        </div>

        <div className="acard d3">
          <div
            className="abadge"
            style={{
              background: "rgba(244,114,182,.15)",
              color: "#9d174d",
            }}
          >
            14–17<span>yrs</span>
          </div>

          <div className="abody">
            <h3>Teen Pathfinders</h3>
            <p>
              Purpose, autonomy, and emotional depth. Navigate teen
              conversations, mental health support, and future planning
              together.
            </p>

            <div className="atags">
              <span
                className="atag"
                style={{
                  background: "rgba(244,114,182,.12)",
                  color: "#9d174d",
                }}
              >
                Mental Health
              </span>

              <span
                className="atag"
                style={{
                  background: "rgba(252,211,77,.15)",
                  color: "#92400e",
                }}
              >
                Purpose
              </span>

              <span
                className="atag"
                style={{
                  background: "rgba(167,139,250,.12)",
                  color: "var(--purple)",
                }}
              >
                Autonomy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
