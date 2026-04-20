"use client";
import "./landingpage.css";

import { motion } from "framer-motion";

interface UseCase {
  id: string;
  icon: string;
  title: string;
  description: string;
  iconBg: string;
}

const USE_CASES: UseCase[] = [
  {
    id: "1",
    icon: "🧠",
    title: "Supporting Learning Differences",
    description:
      "Tailored check-ins and goal tracks for families navigating ADHD, dyslexia, and more.",
    iconBg: "rgba(124,58,237,.12)",
  },
  {
    id: "2",
    icon: "💬",
    title: "Improving Family Communication",
    description:
      "Structured conversations and shared notes that bring parents and kids closer.",
    iconBg: "rgba(56,189,248,.12)",
  },
  {
    id: "3",
    icon: "🏅",
    title: "Building Healthy Habits",
    description:
      "Routine trackers, streaks, and positive reinforcement that make habits stick.",
    iconBg: "rgba(52,211,153,.12)",
  },
  {
    id: "4",
    icon: "🌍",
    title: "Co-Parenting Coordination",
    description:
      "A shared family hub that keeps both parents aligned, even across households.",
    iconBg: "rgba(251,146,60,.12)",
  },
  {
    id: "5",
    icon: "🎯",
    title: "Academic Goal Planning",
    description:
      "From reading milestones to exam prep — plan, track, and celebrate together.",
    iconBg: "rgba(252,211,77,.12)",
  },
  {
    id: "6",
    icon: "❤️",
    title: "Emotional Wellbeing",
    description:
      "Daily mood logs, calm corner activities, and guided breathing for kids and parents.",
    iconBg: "rgba(244,114,182,.12)",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function UseCasesSection() {
  return (
    <section className="section-shell plain">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* <div className="section-label">
            <span className="section-label-dot" />
            Why Families Love It
          </div> */}
          <h2 className="section-heading">
            What Families use <span className="grad">ParKids</span> For
          </h2>
          <p className="section-sub">
            Whether you're managing routines, co-parenting, or raising a
            neurodivergent child — there's a track built for you.
          </p>
        </motion.div>

        {USE_CASES.length === 0 ? (
          <p className="empty-state">
            Use cases will appear here once configured.
          </p>
        ) : (
          <motion.div
            className="usecases-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {USE_CASES.map((uc) => (
              <motion.article
                key={uc.id}
                className="usecase-card"
                variants={item}
              >
                <div className="usecase-icon" style={{ background: uc.iconBg }}>
                  {uc.icon}
                </div>
                <div className="usecase-title">{uc.title}</div>
                <div className="usecase-desc">{uc.description}</div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
