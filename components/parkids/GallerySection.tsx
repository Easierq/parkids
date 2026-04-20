"use client";
import "./landingpage.css";

import { motion } from "framer-motion";

interface GalleryItem {
  id: string;
  icon: string;
  title: string;
  meta: string;
  badge: string;
  iconBg: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    icon: "🎂",
    title: "Lily's 7th Birthday Party",
    meta: "March 2025",
    badge: "Memory",
    iconBg: "rgba(244,114,182,.15)",
  },
  {
    id: "2",
    icon: "🏆",
    title: "Science Fair 1st Place",
    meta: "February 2025",
    badge: "Milestone",
    iconBg: "rgba(252,211,77,.15)",
  },
  {
    id: "3",
    icon: "⛺",
    title: "Family Camping Trip",
    meta: "January 2025",
    badge: "Adventure",
    iconBg: "rgba(52,211,153,.15)",
  },
  {
    id: "4",
    icon: "📖",
    title: "First Chapter Book Finished",
    meta: "December 2024",
    badge: "Milestone",
    iconBg: "rgba(124,58,237,.12)",
  },
  {
    id: "5",
    icon: "🎨",
    title: "Art Class Exhibition",
    meta: "November 2024",
    badge: "Creative",
    iconBg: "rgba(251,146,60,.15)",
  },
  {
    id: "6",
    icon: "🚴",
    title: "Learned to Ride a Bike",
    meta: "October 2024",
    badge: "Milestone",
    iconBg: "rgba(56,189,248,.15)",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function GallerySection() {
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
            Family Gallery
          </div> */}
          <h2 className="section-heading">
            Moments worth <span className="grad">remembering</span>
          </h2>
          <p className="section-sub">
            Capture milestones, adventures, and everyday magic — all in one
            beautiful family gallery.
          </p>
        </motion.div>

        {GALLERY_ITEMS.length === 0 ? (
          <p className="empty-state">No gallery moments yet.</p>
        ) : (
          <motion.div
            className="gallery-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {GALLERY_ITEMS.map((gi) => (
              <motion.article
                key={gi.id}
                className="gallery-card"
                variants={item}
              >
                <div
                  className="gallery-icon-wrap"
                  style={{ background: gi.iconBg }}
                >
                  {gi.icon}
                </div>
                <div className="gallery-title">{gi.title}</div>
                <div className="gallery-meta">{gi.meta}</div>
                <div className="gallery-badge">{gi.badge}</div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
