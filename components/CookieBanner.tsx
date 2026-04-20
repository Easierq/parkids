"use client";

import { useCookieStore } from "@/store/cookieStore";
import { useState, useEffect } from "react";
import {
  Cookie,
  Settings,
  X,
  CheckCircle,
  Shield,
  BarChart,
  Target,
  LucideIcon,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type CookieCategory = "essential" | "functional" | "analytics" | "marketing";

interface CategoryConfig {
  id: CookieCategory;
  name: string;
  icon: LucideIcon;
  description: string;
  disabled: boolean;
}

const cookieCategories: CategoryConfig[] = [
  {
    id: "essential",
    name: "Essential",
    icon: Shield,
    description: "Required for core system security and access protocol.",
    disabled: true,
  },
  {
    id: "functional",
    name: "Functional",
    icon: Settings,
    description: "Remembers your interface preferences and terminal state.",
    disabled: false,
  },
  {
    id: "analytics",
    name: "Analytics",
    icon: BarChart,
    description: "Anonymous metrics to optimize system performance.",
    disabled: false,
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: Target,
    description: "Tailored information based on usage patterns.",
    disabled: false,
  },
];

export default function CookieBanner() {
  const {
    showBanner,
    hasConsent,
    preferences,
    acceptAll,
    rejectAll,
    setPreferences,
    setConsent,
  } = useCookieStore();

  const [showSettings, setShowSettings] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !showBanner || hasConsent) return null;

  const handleTogglePreference = (categoryId: CookieCategory) => {
    if (categoryId === "essential") return;
    setPreferences({
      ...preferences,
      [categoryId]: !preferences[categoryId],
    });
  };

  return (
    <>
      <AnimatePresence>
        {/* ── Settings Modal ── */}
        {showSettings && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSettings(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-slate-900 p-6 md:p-8 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    {/* <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-2">
                      Privacy Configuration
                    </h3> */}
                    <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter">
                      Cookie <span className="text-blue-500">settings.</span>
                    </h2>
                  </div>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 hover:bg-white/10 transition-colors"
                  >
                    <X className="size-5" />
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="p-4 md:p-8 space-y-4 max-h-[60vh] overflow-y-auto">
                {cookieCategories.map((category) => {
                  const Icon = category.icon;
                  const isEnabled = preferences[category.id];
                  return (
                    <div
                      key={category.id}
                      className={cn(
                        "p-2 md:p-5 border transition-all flex items-center justify-between gap-2 md:gap-4",
                        isEnabled
                          ? "border-blue-600 bg-blue-50/30"
                          : "border-slate-100 bg-white"
                      )}
                    >
                      <div className="flex basis-3/4 items-start gap-2 md:gap-4">
                        <div
                          className={cn(
                            "p-2",
                            isEnabled ? "text-blue-600" : "text-slate-400"
                          )}
                        >
                          <Icon className="size-5" />
                        </div>
                        <div className="w-auto">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-black uppercase text-xs tracking-widest text-slate-900">
                              {category.name}
                            </h4>
                            {category.disabled && (
                              <span className="text-[8px] font-black uppercase px-1.5 py-0.5 bg-slate-100 text-slate-500 border border-slate-200">
                                Required
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 font-medium italic">
                            — {category.description}
                          </p>
                        </div>
                      </div>
                      <div className="basis-1/4 flex justify-end">
                        <button
                          onClick={() => handleTogglePreference(category.id)}
                          disabled={category.disabled}
                          className={cn(
                            "relative w-12 h-6 transition-colors",
                            isEnabled ? "bg-blue-600" : "bg-slate-200",
                            category.disabled && "opacity-50 cursor-not-allowed"
                          )}
                        >
                          <div
                            className={cn(
                              "absolute top-1 left-1 size-4 bg-white transition-transform",
                              isEnabled && "translate-x-6"
                            )}
                          />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-slate-100 bg-slate-50">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      acceptAll();
                      setShowSettings(false);
                    }}
                    className="flex-1 h-14 bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] px-6 py-3 hover:bg-slate-900 transition-all"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={() => {
                      setConsent(true);
                      setShowSettings(false);
                    }}
                    className="flex-1 h-14 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] px-6 py-3 hover:bg-blue-600 transition-all"
                  >
                    Save Selection
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* ── Main Bottom Banner ── */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[90] p-4 md:p-8"
        >
          <div className="max-w-7xl mx-auto bg-white border border-slate-200 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)] overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Visual Accent */}
              <div className="w-full lg:w-2 bg-blue-600" />

              <div className="flex-1 p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="space-y-4 max-w-3xl text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <Cookie className="size-4 text-blue-600" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                      Cookie Access Protocol
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                    We utilize data nodes to refine your interface experience
                    and system performance. By initializing
                    <span className="text-slate-900 font-bold italic">
                      {" "}
                      "Accept All"
                    </span>
                    , you permit our full tracking suite. Explore our{" "}
                    <a
                      href="/"
                      className="text-blue-600 underline underline-offset-4 font-black"
                    >
                      Privacy Ledger
                    </a>{" "}
                    for more.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <button
                    onClick={acceptAll}
                    className="h-14 px-8 bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 transition-all flex items-center justify-center gap-2 group"
                  >
                    Accept All
                    <CheckCircle className="size-4 group-hover:scale-110 transition-transform" />
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="h-14 px-8 border border-slate-200 text-slate-900 font-black uppercase tracking-widest text-[10px] hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
                  >
                    <Settings className="size-4" />
                    Customize
                  </button>
                  <button
                    onClick={rejectAll}
                    className="h-14 px-8 text-slate-400 font-black uppercase tracking-widest text-[10px] hover:text-slate-900 transition-all"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
