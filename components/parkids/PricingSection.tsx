"use client";
import "./landingpage.css";

// import Link from "next/link";
// import { motion } from "framer-motion";

// interface PricingPlan {
//   id: string;
//   name: string;
//   price_monthly_cents: number;
//   feature_list: string[];
//   cta_label: string;
//   is_featured: boolean;
// }

// function formatPrice(cents: number): string {
//   if (cents === 0) return "$0";
//   return `$${Math.round(cents / 100)}/mo`;
// }

// const PLANS: PricingPlan[] = [
//   {
//     id: "free",
//     name: "Starter",
//     price_monthly_cents: 0,
//     is_featured: false,
//     cta_label: "Get Started Free",
//     feature_list: [
//       "1 child profile",
//       "Daily check-ins",
//       "Basic mood logging",
//       "Family voting (3 polls/mo)",
//       "Community support",
//     ],
//   },
//   {
//     id: "family",
//     name: "Family",
//     price_monthly_cents: 999,
//     is_featured: true,
//     cta_label: "Start Free Trial",
//     feature_list: [
//       "Up to 4 child profiles",
//       "Full insights dashboard",
//       "Goal setting & tracking",
//       "Unlimited family voting",
//       "Gallery & milestones",
//       "Priority support",
//     ],
//   },
//   {
//     id: "pro",
//     name: "Pro",
//     price_monthly_cents: 1799,
//     is_featured: false,
//     cta_label: "Go Pro",
//     feature_list: [
//       "Unlimited child profiles",
//       "Co-parenting mode",
//       "Advanced analytics",
//       "Custom goal templates",
//       "Export reports (PDF)",
//       "Dedicated support",
//     ],
//   },
// ];

// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.12 } },
// };
// const item = {
//   hidden: { opacity: 0, y: 28 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// export default function PricingSection() {
//   return (
//     <section id="pricing" className="section-shell dark">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         >
//           {/* <div className="section-label dark-label">
//             <span className="section-label-dot" />
//             Pricing
//           </div> */}
//           <h2 className="section-heading light">
//             A plan for <span className="grad">every family</span>
//           </h2>
//           <p className="section-sub light">
//             Start free and grow as your family does. No hidden fees, cancel
//             anytime.
//           </p>
//         </motion.div>

//         {PLANS.length === 0 ? (
//           <p className="empty-state" style={{ color: "rgba(255,255,255,.4)" }}>
//             No plans available yet.
//           </p>
//         ) : (
//           <motion.div
//             className="pricing-grid"
//             variants={container}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//           >
//             {PLANS.map((plan) => (
//               <motion.article
//                 key={plan.id}
//                 className={`pricing-card ${plan.is_featured ? "featured" : ""}`}
//                 variants={item}
//               >
//                 {plan.is_featured && <div className="pricing-featured-badge" />}

//                 <div>
//                   <div className="pricing-name">{plan.name}</div>
//                   {plan.is_featured && (
//                     <span
//                       style={{
//                         fontSize: ".65rem",
//                         fontWeight: 800,
//                         background: "linear-gradient(135deg,#7c3aed,#fb923c)",
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "transparent",
//                         backgroundClip: "text",
//                         letterSpacing: ".06em",
//                         textTransform: "uppercase",
//                       }}
//                     >
//                       Most Popular
//                     </span>
//                   )}
//                 </div>

//                 <div>
//                   <div className="pricing-price">
//                     {formatPrice(plan.price_monthly_cents)}
//                   </div>
//                   {plan.price_monthly_cents > 0 && (
//                     <div className="pricing-price-sub">
//                       billed monthly · cancel anytime
//                     </div>
//                   )}
//                 </div>

//                 <div className="pricing-divider" />

//                 <ul className="pricing-features">
//                   {plan.feature_list.map((f) => (
//                     <li key={`${plan.id}-${f}`} className="pricing-feature">
//                       <div className="pricing-feature-dot">✓</div>
//                       {f}
//                     </li>
//                   ))}
//                 </ul>

//                 <Link
//                   href="/login"
//                   className={`pricing-cta ${
//                     plan.is_featured ? "solid" : "outline"
//                   }`}
//                 >
//                   {plan.cta_label}
//                 </Link>
//               </motion.article>
//             ))}
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import { motion } from "framer-motion";

interface PricingPlan {
  id: string;
  name: string;
  price_monthly_cents: number;
  feature_list: string[];
  cta_label: string;
  is_featured: boolean;
}

function formatPrice(cents: number): string {
  if (cents === 0) return "$0";
  return `$${Math.round(cents / 100)}/mo`;
}

const PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Starter",
    price_monthly_cents: 0,
    is_featured: false,
    cta_label: "Get Started Free",
    feature_list: [
      "1 child profile",
      "Daily check-ins",
      "Basic mood logging",
      "Family voting (3 polls/mo)",
      "Community support",
    ],
  },
  {
    id: "family",
    name: "Family",
    price_monthly_cents: 999,
    is_featured: true,
    cta_label: "Start Free Trial",
    feature_list: [
      "Up to 4 child profiles",
      "Full insights dashboard",
      "Goal setting & tracking",
      "Unlimited family voting",
      "Gallery & milestones",
      "Priority support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price_monthly_cents: 1799,
    is_featured: false,
    cta_label: "Go Pro",
    feature_list: [
      "Unlimited child profiles",
      "Co-parenting mode",
      "Advanced analytics",
      "Custom goal templates",
      "Export reports (PDF)",
      "Dedicated support",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PricingSection() {
  return (
    <section id="pricing" className="section-shell plain">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* <div className="section-label">
            <span className="section-label-dot" />
            Pricing
          </div> */}
          <h2 className="section-heading">
            A plan for <span className="grad">every family</span>
          </h2>
          <p className="section-sub">
            Start free and grow as your family does. No hidden fees, cancel
            anytime.
          </p>
        </motion.div>

        {PLANS.length === 0 ? (
          <p className="empty-state">No plans available yet.</p>
        ) : (
          <motion.div
            className="pricing-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {PLANS.map((plan) => (
              <motion.article
                key={plan.id}
                className={`pricing-card-light ${
                  plan.is_featured ? "featured-light" : ""
                }`}
                variants={item}
              >
                {plan.is_featured && <div className="pricing-featured-badge" />}

                <div>
                  <div className="pricing-name-light">{plan.name}</div>
                  {plan.is_featured && (
                    <span className="pricing-popular-badge">Most Popular</span>
                  )}
                </div>

                <div>
                  <div className="pricing-price-light">
                    {formatPrice(plan.price_monthly_cents)}
                  </div>
                  {plan.price_monthly_cents > 0 && (
                    <div className="pricing-price-sub-light">
                      billed monthly · cancel anytime
                    </div>
                  )}
                </div>

                <div className="pricing-divider-light" />

                <ul className="pricing-features">
                  {plan.feature_list.map((f) => (
                    <li
                      key={`${plan.id}-${f}`}
                      className="pricing-feature-light"
                    >
                      <div className="pricing-feature-dot-light">✓</div>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/login"
                  className={`pricing-cta ${
                    plan.is_featured ? "solid" : "outline-light"
                  }`}
                >
                  {plan.cta_label}
                </Link>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
