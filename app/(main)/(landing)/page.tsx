import LandingPageClient from "@/components/parkids/LandingPageClient";

const data = {
  metric: {
    checkin_completion_pct: 87,
    goals_completed_count: 142,
    mood_trend_label: "Improving",
  },

  pricingPlans: [
    {
      id: "plan_free",
      slug: "free",
      name: "Starter",
      price_monthly_cents: 0,
      period_label: "month",
      description:
        "Great for families getting started with weekly check-ins and shared goals.",
      is_featured: false,
      feature_list: [
        "Up to 4 family members",
        "Weekly check-ins",
        "2 active goals",
        "Basic mood tracking",
        "Community support",
      ],
      limit_note: "Limited analytics and reminders",
      cta_label: "Start Free",
      sort_order: 1,
    },
    {
      id: "plan_growth",
      slug: "growth",
      name: "Growth",
      price_monthly_cents: 1299,
      period_label: "month",
      description:
        "Perfect for families who want deeper insights, routines, and accountability.",
      is_featured: true,
      feature_list: [
        "Up to 8 family members",
        "Unlimited goals",
        "Daily check-ins",
        "Family polls & voting",
        "Mood trends dashboard",
        "Smart reminders",
        "Milestone celebrations",
      ],
      limit_note: null,
      cta_label: "Choose Growth",
      sort_order: 2,
    },
    {
      id: "plan_premium",
      slug: "premium",
      name: "Premium",
      price_monthly_cents: 2499,
      period_label: "month",
      description:
        "Advanced planning and coaching tools for highly engaged families.",
      is_featured: false,
      feature_list: [
        "Unlimited members",
        "Advanced analytics",
        "Custom routines",
        "Priority support",
        "Private family journal",
        "Goal templates",
        "Export reports",
      ],
      limit_note: "Best for large households",
      cta_label: "Go Premium",
      sort_order: 3,
    },
  ],

  faqs: [
    {
      id: "faq_1",
      question: "How does the family check-in system work?",
      answer:
        "Each family member answers quick guided prompts about mood, school, goals, relationships, and wellbeing. Parents can review trends and celebrate progress.",
      sort_order: 1,
    },
    {
      id: "faq_2",
      question: "Can children use the platform safely?",
      answer:
        "Yes. Child views are simplified and permission-based. Parents control visibility, voting access, and note management.",
      sort_order: 2,
    },
    {
      id: "faq_3",
      question: "Is ParKids good for teenagers too?",
      answer:
        "Absolutely. Many families use it with teens to improve communication, independence, and accountability.",
      sort_order: 3,
    },
    {
      id: "faq_4",
      question: "Can I cancel anytime?",
      answer:
        "Yes. Paid plans can be cancelled anytime and remain active until the current billing cycle ends.",
      sort_order: 4,
    },
    {
      id: "faq_5",
      question: "Do you offer yearly plans?",
      answer:
        "Yes. Annual billing is available with discounted pricing compared to monthly plans.",
      sort_order: 5,
    },
  ],

  useCases: [
    {
      id: "use_1",
      title: "Better Parent-Child Communication",
      description:
        "Use guided check-ins to create consistent conversations without awkwardness.",
      tags: ["communication", "relationships"],
      sort_order: 1,
    },
    {
      id: "use_2",
      title: "School & Homework Accountability",
      description:
        "Track academic goals, routines, and progress across the week.",
      tags: ["school", "productivity"],
      sort_order: 2,
    },
    {
      id: "use_3",
      title: "Family Routine Building",
      description:
        "Create habits around chores, sleep, reading, and screen-time balance.",
      tags: ["habits", "routine"],
      sort_order: 3,
    },
    {
      id: "use_4",
      title: "Conflict Reduction",
      description:
        "Use shared voting and transparent expectations to reduce unnecessary arguments.",
      tags: ["peace", "structure"],
      sort_order: 4,
    },
    {
      id: "use_5",
      title: "Celebrating Growth",
      description:
        "Highlight wins, completed goals, and positive momentum as a family.",
      tags: ["motivation", "growth"],
      sort_order: 5,
    },
  ],

  galleryItems: [
    {
      id: "gallery_1",
      icon: "🎓",
      title: "Math test improvement",
      subtitle: "Aisha moved from 72% to 88%",
      color_token: "gold",
      sort_order: 1,
    },
    {
      id: "gallery_2",
      icon: "⚽",
      title: "Weekend football bonding",
      subtitle: "Family match at the park",
      color_token: "green",
      sort_order: 2,
    },
    {
      id: "gallery_3",
      icon: "📚",
      title: "7-day reading streak",
      subtitle: "Shared bedtime reading challenge",
      color_token: "blue",
      sort_order: 3,
    },
    {
      id: "gallery_4",
      icon: "🍕",
      title: "Pizza night voted winner",
      subtitle: "Family decision poll",
      color_token: "red",
      sort_order: 4,
    },
    {
      id: "gallery_5",
      icon: "🏆",
      title: "Goals completed milestone",
      subtitle: "10 tasks completed this month",
      color_token: "purple",
      sort_order: 5,
    },
    {
      id: "gallery_6",
      icon: "😊",
      title: "Mood trend improving",
      subtitle: "3 positive weeks in a row",
      color_token: "teal",
      sort_order: 6,
    },
  ],
};

export default function MainPage() {
  return (
    <LandingPageClient
      metric={data.metric}
      pricingPlans={data.pricingPlans}
      faqs={data.faqs}
      useCases={data.useCases}
      galleryItems={data.galleryItems}
    />
  );
}
