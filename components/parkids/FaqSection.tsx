"use client";
import "./landingpage.css";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: "f1",
    question: "Is Parent-Kids safe for my children to use?",
    answer:
      "Absolutely. Child profiles are fully isolated, age-gated, and never exposed to third-party advertising. Parents control all privacy settings, and we are fully COPPA compliant.",
  },
  {
    id: "f2",
    question: "How does the family voting feature work?",
    answer:
      "A parent creates a poll with up to 5 options. All family members — including kids — receive a notification and can vote from their own profile. Results are shown live and the parent can close the poll at any time.",
  },
  {
    id: "f3",
    question: "Can I use Parent-Kids for co-parenting across two households?",
    answer:
      "Yes. Our Pro plan includes co-parenting mode, which lets two parents share a single family hub, with granular permission controls over what each parent can view or edit.",
  },
  {
    id: "f4",
    question: "What age range is Parent-Kids designed for?",
    answer:
      "Parent-Kids supports children from age 3 through 17. The UI and activities adapt by age group — toddlers get simple emoji check-ins, while teens get journaling prompts and goal autonomy.",
  },
  {
    id: "f5",
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, always. You can cancel from your account settings in under 30 seconds. You retain access until the end of your current billing period and your data is exportable at any time.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="section-shell plain">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center" }}
        >
          {/* <div className="section-label" style={{ margin: "0 auto 18px" }}>
            <span className="section-label-dot" />
            FAQ
          </div> */}
          <h2 className="section-heading">
            Frequently asked <span className="grad">questions</span>
          </h2>
          <p
            className="section-sub"
            style={{ margin: "0 auto 52px", textAlign: "center" }}
          >
            Everything you need to know before getting started.
          </p>
        </motion.div>

        {FAQS.length === 0 ? (
          <p className="empty-state">No FAQs published yet.</p>
        ) : (
          <motion.div
            className="faq-list"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <article
                  key={faq.id}
                  className={`faq-item ${isOpen ? "open" : ""}`}
                >
                  <button
                    className="faq-trigger"
                    onClick={() => toggle(faq.id)}
                  >
                    <span className="faq-question">{faq.question}</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="faq-answer">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
