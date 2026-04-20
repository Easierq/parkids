//gemini code

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Menu, X, HardHat, ChevronDown, ShieldCheck } from "lucide-react";
// import { cn } from "@/lib/utils";

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "#about" },
//   {
//     label: "Services",
//     href: "#services",
//     dropdown: [
//       { label: "Structural Design", href: "#services" },
//       { label: "Road Construction", href: "#services" },
//       { label: "Site Supervision", href: "#services" },
//       { label: "Project Management", href: "#services" },
//     ],
//   },
//   { label: "Projects", href: "#projects" },
//   { label: "Process", href: "#process" },
//   { label: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
//         scrolled
//           ? "bg-white/90 backdrop-blur-md border-blue-100 py-3 shadow-sm"
//           : "bg-transparent border-transparent py-6"
//       )}
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex items-center justify-between">
//           {/* LOGO: MUKHAFA ENGINEERING */}
//           <Link href="/" className="flex items-center gap-4 group">
//             <div className="relative">
//               <div className="bg-blue-600 p-2.5 transition-transform duration-500 group-hover:rotate-90">
//                 <HardHat className="w-5 h-5 text-white" />
//               </div>
//               <div className="absolute -bottom-1 -right-1 size-3 bg-blue-100 border border-white" />
//             </div>
//             <div className="flex flex-col">
//               <span className="text-xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
//                 MUKHAFA
//               </span>
//               <span className="text-[9px] font-black text-blue-600 tracking-[0.3em] uppercase mt-1">
//                 Engineering Protocol
//               </span>
//             </div>
//           </Link>

//           {/* DESKTOP NAV: SYSTEM NODES */}
//           <div className="hidden lg:flex items-center">
//             {navLinks.map((link) =>
//               link.dropdown ? (
//                 <div
//                   key={link.label}
//                   className="relative h-full"
//                   onMouseEnter={() => setActiveDropdown(link.label)}
//                   onMouseLeave={() => setActiveDropdown(null)}
//                 >
//                   <button className="flex items-center gap-1.5 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors">
//                     {link.label}
//                     <ChevronDown
//                       className={cn(
//                         "w-3 h-3 transition-transform duration-300",
//                         activeDropdown === link.label && "rotate-180"
//                       )}
//                     />
//                   </button>

//                   {activeDropdown === link.label && (
//                     <div className="absolute top-full left-0 w-64 bg-white border border-blue-100 shadow-2xl shadow-blue-900/5 p-2 animate-in fade-in slide-in-from-top-2">
//                       <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 px-3 pt-2">
//                         Services
//                       </div>
//                       {link.dropdown.map((item) => (
//                         <Link
//                           key={item.label}
//                           href={item.href}
//                           className="block px-3 py-3 text-[10px] font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all uppercase tracking-tight border-l-2 border-transparent hover:border-blue-600"
//                         >
//                           {item.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   className="px-5 py-2 text-xs font-semibold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors relative group"
//                 >
//                   {link.label}
//                   <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
//                 </Link>
//               )
//             )}
//           </div>

//           {/* SYSTEM STATUS & CTA */}
//           <div className="hidden lg:flex items-center gap-8 border-l border-blue-50 pl-8">
//             <Link
//               href="#contact"
//               className="bg-slate-900 hover:bg-blue-600 text-white px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all transform hover:-translate-y-0.5 active:scale-95"
//             >
//               Work with Us
//             </Link>
//           </div>

//           {/* MOBILE TOGGLE */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden text-slate-900 p-2 hover:bg-blue-50 transition-colors"
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* MOBILE OVERLAY: BLUEPRINT STYLE */}
//         {isOpen && (
//           <div className="lg:hidden mt-4 bg-white border border-blue-100 p-6 shadow-2xl animate-in zoom-in-95">
//             <div className="space-y-1">
//               {navLinks.map((link) => (
//                 <div
//                   key={link.label}
//                   className="border-b border-blue-50 last:border-0"
//                 >
//                   <Link
//                     href={link.href}
//                     onClick={() => setIsOpen(false)}
//                     className="flex items-center justify-between py-4 text-[10px] font-black uppercase tracking-widest text-slate-900"
//                   >
//                     {link.label}
//                     <ShieldCheck className="w-3 h-3 text-blue-200" />
//                   </Link>
//                   {link.dropdown && (
//                     <div className="pb-4 space-y-3 pl-4">
//                       {link.dropdown.map((item) => (
//                         <Link
//                           key={item.label}
//                           href={item.href}
//                           onClick={() => setIsOpen(false)}
//                           className="block text-[9px] font-bold text-slate-500 uppercase tracking-tight hover:text-blue-600"
//                         >
//                           {item.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 pt-6 border-t border-blue-100 flex flex-col gap-4">
//               <Link
//                 href="#contact"
//                 onClick={() => setIsOpen(false)}
//                 className="block w-full bg-blue-600 text-white py-4 text-[10px] font-black uppercase tracking-widest text-center"
//               >
//                 Start Engineering Protocol
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, HardHat, ChevronDown, Cpu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo, LogoWhite } from "./logo";

const navLinks = [
  { name: "About", href: "#about" },
  {
    name: "Services",
    href: "#services",
    dropdown: [
      { name: "Structural Design", href: "#services" },
      { name: "Road Construction", href: "#services" },
      { name: "Site Supervision", href: "#services" },
      { name: "Project Management", href: "#services" },
    ],
  },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "hidden md:flex fixed top-0 w-full z-[100] transition-all duration-500",
          scrolled ? "py-4" : "py-8"
        )}
      >
        <div className="container mx-auto px-6">
          <div
            className={cn(
              "flex justify-between items-center backdrop-blur-xl bg-white/80 border border-slate-200 px-6 py-3 transition-all rounded-md md:rounded-full",
              scrolled ? "shadow-2xl shadow-blue-500/10" : ""
            )}
          >
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() =>
                    link.dropdown && setActiveDropdown(link.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        className={cn(
                          "size-3 transition-transform",
                          activeDropdown === link.name && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {/* Desktop Dropdown Menu */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-4 w-64 bg-white border border-slate-200 shadow-2xl p-2"
                      >
                        <div className="grid grid-cols-1">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="px-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-blue-600 border-b border-slate-50 last:border-0 transition-all flex items-center justify-between group/item"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Link href="#contact" className="hidden sm:block">
                <Button className="h-10 px-6 rounded-md bg-slate-900 hover:bg-blue-600 text-white font-black text-[9px] uppercase tracking-[0.3em] transition-all">
                  Work with us
                </Button>
              </Link>

              <button
                onClick={() => setIsOpen(true)}
                className="flex lg:hidden py-3 px-2 rounded-full hover:bg-slate-50 transition-all"
              >
                <div className="space-y-2">
                  <div className="w-5 h-0.5 bg-slate-950" />
                  <div className="w-5 h-0.5 bg-slate-950 ml-auto" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <nav
        className={cn(
          "z-[100] h-16 w-full fixed md:hidden top-0",
          scrolled && "bg-white backdrop-blur-md bg-opacity-70"
        )}
      >
        <div className="container h-full mx-auto px-6">
          <div
            className={cn(
              "flex h-full items-center justify-between",
              scrolled ? "shadow-2xl shadow-blue-500/10" : ""
            )}
          >
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() =>
                    link.dropdown && setActiveDropdown(link.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        className={cn(
                          "size-3 transition-transform",
                          activeDropdown === link.name && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {/* Desktop Dropdown Menu */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-4 w-64 bg-white border border-slate-200 shadow-2xl p-2"
                      >
                        <div className="grid grid-cols-1">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="px-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-blue-600 border-b border-slate-50 last:border-0 transition-all flex items-center justify-between group/item"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Link href="#contact" className="hidden sm:block">
                <Button className="h-10 px-6 rounded-md bg-slate-900 hover:bg-blue-500 text-white font-black text-[9px] uppercase tracking-[0.3em] transition-all">
                  Work with us
                </Button>
              </Link>

              <button
                onClick={() => setIsOpen(true)}
                className="flex lg:hidden py-3 px-2 rounded-full hover:bg-slate-50 transition-all"
              >
                <div className="space-y-2">
                  <div className="w-5 h-0.5 bg-slate-950" />
                  <div className="w-5 h-0.5 bg-slate-950 ml-auto" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── SIDEBAR OVERLAY ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="hidden sm:flex fixed hidden-scrollbar inset-0 z-[150] bg-slate-950/60 backdrop-blur-md pb-5"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed hidden-scrollbar inset-y-0 right-0 z-[200] w-full max-w-lg bg-slate-950 flex flex-col p-6 md:p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                <LogoWhite />
                <button
                  onClick={() => setIsOpen(false)}
                  className="size-14 flex items-center justify-center border border-white/10 text-white hover:bg-white hover:text-slate-950 transition-all rounded-full"
                >
                  <X />
                </button>
              </div>

              {/* Mobile Links with Dropdown handling */}
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <div key={link.name}>
                    <div className="flex items-center justify-between group">
                      <Link
                        href={link.href}
                        onClick={() => {
                          setActiveDropdown(
                            activeDropdown === link.name ? null : link.name
                          ),
                            setIsOpen(false);
                        }}
                        className="text-2xl font-bold tracking-tighter hover:italic hover:text-blue-500 cursor-pointer transition-all text-white"
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === link.name ? null : link.name
                            )
                          }
                          className="size-12 flex items-center justify-center text-white"
                        >
                          <ChevronDown
                            className={cn(
                              "transition-transform",
                              activeDropdown === link.name && "rotate-180"
                            )}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Accordion Content */}
                    <AnimatePresence>
                      {link.dropdown && activeDropdown === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-none mt-4"
                        >
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="block p-4 border-b border-white/5 text-lg font-black text-slate-200 tracking-widest hover:text-blue-400"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
