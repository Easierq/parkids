// import { LogoWhite } from "./logo";

// export function Footer() {
//   return (
//     <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
//       {/* Decorative Blur */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />

//       <div className="container mx-auto px-6">
//         <div className="grid lg:grid-cols-12 gap-20 mb-12 md:mb-32">
//           <div className="lg:col-span-5">
//             {/* <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-white mb-8">
//               OASIS<span className="text-blue-500">.</span>
//             </h2> */}
//             <LogoWhite />
//             <p className="text-zinc-300 text-xl leading-relaxed max-w-sm mt-4">
//               Defining the new standard of campus security and visitor
//               intelligence.
//             </p>
//           </div>

//           <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
//             <div>
//               <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">
//                 Navigation
//               </h4>
//               <ul className="space-y-4 text-zinc-400 font-medium">
//                 <li className="hover:text-blue-500 transition-colors">
//                   <a href="#features">Features</a>
//                 </li>
//                 <li className="hover:text-blue-500 transition-colors">
//                   <a href="#kiosk">The Kiosk</a>
//                 </li>
//                 <li className="hover:text-blue-500 transition-colors">
//                   <a href="#pricing">Pricing</a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">
//                 Company
//               </h4>
//               <ul className="space-y-4 text-zinc-400 font-medium">
//                 <li className="hover:text-blue-500 transition-colors">
//                   <a href="#">About Us</a>
//                 </li>
//                 <li className="hover:text-blue-500 transition-colors">
//                   <a href="#">Safety Standards</a>
//                 </li>
//                 <li className="hover:text-blue-500 transition-colors">
//                   <a href="#">Legal</a>
//                 </li>
//               </ul>
//             </div>

//             {/* Updated Contact Section */}
//             <div className="">
//               <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">
//                 Inquiries
//               </h4>
//               <ul className="space-y-4 text-zinc-400 font-medium">
//                 <li>
//                   <a
//                     href="tel:+1800OASIS"
//                     className="hover:text-blue-500 transition-colors block"
//                   >
//                     +1 (800) OASIS-SAFE
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="mailto:hello@oasis.io"
//                     className="hover:text-blue-500 transition-colors block"
//                   >
//                     hello@oasis.io
//                   </a>
//                 </li>
//                 <li className="text-zinc-400 text-sm leading-relaxed pt-2">
//                   123 Security Plaza,
//                   <br />
//                   Silicon Valley, CA 94025
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row justify-between items-center pt-10 border-t border-white/5 text-sm font-medium text-zinc-400">
//           <p>© 2026 OASIS SYSTEMS INTERNATIONAL</p>
//           <div className="flex flex-wrap justify-center gap-10 mt-6 lg:mt-0">
//             <span className="hover:text-white cursor-pointer transition-colors">
//               Privacy Policy
//             </span>
//             <span className="hover:text-white cursor-pointer transition-colors">
//               Terms of Service
//             </span>
//             <span className="hover:text-white cursor-pointer transition-colors">
//               Cookie Policy
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// import Link from "next/link";
// import {
//   HardHat,
//   Mail,
//   Phone,
//   MapPin,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Youtube,
//   ArrowUp,
// } from "lucide-react";

// const footerLinks = {
//   Services: [
//     { label: "Road Construction", href: "#services" },
//     { label: "Bridge Engineering", href: "#services" },
//     { label: "Structural Design", href: "#services" },
//     { label: "Drainage & Hydrology", href: "#services" },
//     { label: "Project Management", href: "#services" },
//     { label: "Site Supervision", href: "#services" },
//   ],
//   Company: [
//     { label: "About Us", href: "#about" },
//     { label: "Our Projects", href: "#projects" },
//     { label: "Our Process", href: "#process" },
//     { label: "Video Gallery", href: "#videos" },
//     { label: "Project Map", href: "#map" },
//     { label: "Contact Us", href: "#contact" },
//   ],
// };

// const socials = [
//   { icon: Facebook, href: "#", label: "Facebook" },
//   { icon: Twitter, href: "#", label: "Twitter" },
//   { icon: Linkedin, href: "#", label: "LinkedIn" },
//   { icon: Youtube, href: "#", label: "YouTube" },
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-slate-950 text-gray-400">
//       {/* Main Footer */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Brand */}
//           <div className="lg:col-span-1">
//             <Link href="/" className="flex items-center gap-3 mb-6 group">
//               <div className="bg-amber-500 p-2 rounded-lg">
//                 <HardHat className="w-6 h-6 text-slate-900" />
//               </div>
//               <div>
//                 <span className="text-2xl font-black text-white tracking-tight">
//                   MUKHAFA
//                 </span>
//                 <p className="text-amber-400 text-xs font-semibold tracking-widest -mt-1">
//                   ENGINEERING
//                 </p>
//               </div>
//             </Link>
//             <p className="text-sm leading-relaxed mb-6">
//               Building world-class infrastructure across Nigeria with precision,
//               integrity and excellence.
//             </p>
//             {/* Socials */}
//             <div className="flex gap-3">
//               {socials.map(({ icon: Icon, href, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   aria-label={label}
//                   className="w-10 h-10 bg-slate-800 hover:bg-amber-500 hover:text-slate-900 rounded-lg flex items-center justify-center transition-all duration-300"
//                 >
//                   <Icon className="w-5 h-5" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Links */}
//           {Object.entries(footerLinks).map(([title, links]) => (
//             <div key={title}>
//               <h4 className="text-white font-black text-lg mb-5">{title}</h4>
//               <ul className="space-y-3">
//                 {links.map((link) => (
//                   <li key={link.label}>
//                     <Link
//                       href={link.href}
//                       className="text-sm hover:text-amber-400 transition-colors flex items-center gap-2 group"
//                     >
//                       <span className="w-1.5 h-1.5 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* Contact */}
//           <div>
//             <h4 className="text-white font-black text-lg mb-5">Contact</h4>
//             <div className="space-y-4">
//               {[
//                 { icon: Phone, val: "+234 800 000 0000" },
//                 { icon: Mail, val: "info@mukhafa.com" },
//                 { icon: MapPin, val: "Kano, Nigeria" },
//               ].map(({ icon: Icon, val }, i) => (
//                 <div key={i} className="flex items-start gap-3 text-sm">
//                   <Icon className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
//                   <span>{val}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Working Hours */}
//             <div className="mt-6 bg-slate-900 rounded-xl p-4">
//               <p className="text-white font-bold text-sm mb-2">Working Hours</p>
//               <p className="text-xs">Mon – Fri: 8:00 AM – 6:00 PM</p>
//               <p className="text-xs">Saturday: 9:00 AM – 2:00 PM</p>
//               <p className="text-xs text-gray-500">Sunday: Closed</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-slate-800">
//         <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-sm">
//             © {new Date().getFullYear()} Mukhafa Engineering. All rights
//             reserved.
//           </p>
//           <div className="flex items-center gap-6 text-sm">
//             <a href="#" className="hover:text-amber-400 transition-colors">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:text-amber-400 transition-colors">
//               Terms of Service
//             </a>
//             <a
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 window.scrollTo({ top: 0, behavior: "smooth" });
//               }}
//               className="w-9 h-9 bg-amber-500 hover:bg-amber-400 rounded-lg flex items-center justify-center text-slate-900 transition-colors"
//               aria-label="Back to top"
//             >
//               <ArrowUp className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

//gemini code

// "use client";

// import Link from "next/link";
// import {
//   HardHat,
//   Mail,
//   Phone,
//   MapPin,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Youtube,
//   ArrowUp,
//   ShieldCheck,
//   Cpu,
//   Globe,
// } from "lucide-react";
// import { LogoWhite } from "./logo";

// const footerLinks = {
//   Services: [
//     { label: "Road Construction", href: "#services" },
//     { label: "Bridge Engineering", href: "#services" },
//     { label: "Structural Design", href: "#services" },
//     { label: "Drainage & Hydrology", href: "#services" },
//     { label: "Project Management", href: "#services" },
//     { label: "Site Supervision", href: "#services" },
//   ],
//   Infrastructure: [
//     { label: "Project Registry", href: "#projects" },
//     { label: "Engineering Workflow", href: "#process" },
//     { label: "Visual Intelligence", href: "#videos" },
//     { label: "Geospatial Map", href: "#map" },
//     { label: "Technical Expertise", href: "#expertise" },
//     { label: "Intake Protocol", href: "#contact" },
//   ],
// };

// const socials = [
//   { icon: Facebook, href: "#", label: "Facebook" },
//   { icon: Twitter, href: "#", label: "Twitter" },
//   { icon: Linkedin, href: "#", label: "LinkedIn" },
//   { icon: Youtube, href: "#", label: "YouTube" },
// ];

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-slate-950 text-slate-400 border-t border-white/5">
//       {/* PRIMARY DATA GRID */}
//       <div className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16">
//           {/* BRAND ARCHITECTURE */}
//           <div className="lg:col-span-4">
//             <LogoWhite />
//             <p className="text-[11px] font-bold uppercase tracking-tight leading-relaxed mt-4 max-w-sm mb-10 italic">
//               — Providing high-fidelity infrastructure solutions across the West
//               African region through precision engineering and tactical project
//               management.
//             </p>

//             {/* SOCIAL TELEMETRY */}
//             <div className="flex gap-2">
//               {socials.map(({ icon: Icon, href, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   className="size-10 bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-500"
//                 >
//                   <Icon className="size-4" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* LINK COLUMNS */}
//           {Object.entries(footerLinks).map(([title, links]) => (
//             <div key={title} className="lg:col-span-2">
//               <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
//                 {title}
//               </h4>
//               <ul className="space-y-4">
//                 {links.map((link) => (
//                   <li key={link.label}>
//                     <Link
//                       href={link.href}
//                       className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition-colors flex items-center gap-3 group"
//                     >
//                       <div className="w-0 h-px bg-blue-600 group-hover:w-3 transition-all" />
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* OPERATIONAL STATUS */}
//           <div className="lg:col-span-4">
//             <div className="space-y-6">
//               {[
//                 {
//                   icon: Phone,
//                   label: "PHONE NUMBER",
//                   val: "+234 800 000 0000",
//                 },
//                 { icon: Mail, label: "EMAIL", val: "ops@mukhafa.com" },
//                 { icon: MapPin, label: "LOCATION", val: "Osogbo, Nigeria" },
//               ].map(({ icon: Icon, label, val }, i) => (
//                 <div key={i} className="flex flex-col gap-1">
//                   <span className="text-[8px] font-black text-slate-500 tracking-widest">
//                     {label}
//                   </span>
//                   <div className="flex items-center gap-3 text-white">
//                     <Icon className="size-3 text-blue-600" />
//                     <span className="text-xs font-black uppercase italic tracking-tighter">
//                       {val}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-10 p-6 bg-white/5 border border-white/5 rounded-md">
//               <div className="flex items-center gap-2 mb-4">
//                 <span className="text-[10px] font-black text-white uppercase tracking-widest">
//                   Working Hours
//                 </span>
//               </div>
//               <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-2">
//                 <span>Mon — Fri</span>
//                 <span className="text-slate-300">8am — 6pm</span>
//               </div>
//               <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-slate-500">
//                 <span>Sat</span>
//                 <span className="text-slate-300">10am — 4pm</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* SYSTEM FOOTNOTE */}
//       <div className="border-t border-white/5 bg-slate-950">
//         <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="flex items-center gap-6">
//             <span className="text-[9px] font-black uppercase tracking-[0.2em]">
//               © {currentYear} Mukhafa Engineering Group
//             </span>
//             <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-6">
//               <ShieldCheck className="size-3 text-blue-600" />
//               <span className="text-[8px] font-black uppercase tracking-widest text-slate-600 italic">
//                 ISO 9001 COMPLIANT
//               </span>
//             </div>
//           </div>

//           <div className="flex items-center gap-8 text-[9px] font-black uppercase tracking-[0.2em]">
//             <a href="#" className="hover:text-white transition-colors">
//               Privacy Protocol
//             </a>
//             <a href="#" className="hover:text-white transition-colors">
//               Terms Of Service
//             </a>
//             <button
//               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//               className="size-10 bg-blue-600 text-white flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all shadow-2xl shadow-blue-900/40"
//               aria-label="Back to top"
//             >
//               <ArrowUp className="size-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";
import {
  HardHat,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ArrowUp,
  ShieldCheck,
  Cpu,
  Globe,
} from "lucide-react";
import { Logo, LogoWhite } from "./logo"; // Note: You might want to swap this for a dark logo component if available

const footerLinks = {
  Services: [
    { label: "Road Construction", href: "#services" },
    { label: "Bridge Engineering", href: "#services" },
    { label: "Structural Design", href: "#services" },
    { label: "Drainage & Hydrology", href: "#services" },
    { label: "Project Management", href: "#services" },
    { label: "Site Supervision", href: "#services" },
  ],
  Infrastructure: [
    { label: "Project Registry", href: "#projects" },
    { label: "Engineering Workflow", href: "#process" },
    { label: "Visual Intelligence", href: "#videos" },
    { label: "Geospatial Map", href: "#map" },
    { label: "Technical Expertise", href: "#expertise" },
    { label: "Intake Protocol", href: "#contact" },
  ],
};

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-8 bg-blue-50 text-blue-900/70 border-t border-blue-100">
      {/* PRIMARY DATA GRID */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16">
          {/* BRAND ARCHITECTURE */}
          <div className="lg:col-span-4">
            <Logo />
            {/* </div> */}
            <p className="text-[13px] font-bold uppercase tracking-tight leading-relaxed mt-4 max-w-sm mb-10 italic text-blue-900/80">
              — Providing high-fidelity infrastructure solutions across the West
              African region through precision engineering and tactical project
              management.
            </p>

            {/* SOCIAL TELEMETRY */}
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="size-10 rounded-lg bg-blue-200/50 border border-blue-300 flex items-center justify-center text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-500"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* LINK COLUMNS */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2 whitespace-nowrap">
              <h4 className="text-[10px] font-black text-blue-900 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[10px] font-black uppercase tracking-widest text-blue-900/70 hover:text-blue-600 hover:translate-x-2 transition-all flex items-center group"
                    >
                      {/* <div className="w-0 h-px bg-blue-600 group-hover:w-3 transition-all" /> */}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* OPERATIONAL STATUS */}
          <div className="lg:col-span-4 whitespace-nowrap">
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  label: "PHONE NUMBER",
                  val: "+234 800 000 0000",
                },
                { icon: Mail, label: "EMAIL", val: "ops@mukhafa.com" },
                { icon: MapPin, label: "LOCATION", val: "Osogbo, Nigeria" },
              ].map(({ icon: Icon, label, val }, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-[8px] font-black text-blue-400 tracking-widest">
                    {label}
                  </span>
                  <div className="flex items-center gap-3 text-blue-900">
                    <Icon className="size-3 text-blue-600" />
                    <span className="text-xs font-black uppercase italic tracking-tighter">
                      {val}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-blue-200/30 border border-blue-200 rounded-md">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-black text-blue-900 uppercase tracking-widest">
                  Working Hours
                </span>
              </div>
              <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-blue-500 mb-2">
                <span>Mon — Fri</span>
                <span className="text-blue-900">8am — 6pm</span>
              </div>
              <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-blue-500">
                <span>Sat</span>
                <span className="text-blue-900">10am — 4pm</span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div></div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="size-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all shadow-xl shadow-blue-400/20"
                aria-label="Back to top"
              >
                <ArrowUp className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SYSTEM FOOTNOTE */}
      <div className="border-t border-blue-200 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6">
          <div className="flex items-center gap-6">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-900">
              © {currentYear} Mukhafa Engineering Group
            </span>
            <div className="hidden md:flex items-center gap-4 border-l border-blue-200 pl-6">
              <ShieldCheck className="size-3 text-blue-600" />
              <span className="text-[8px] font-black uppercase tracking-widest text-blue-400 italic">
                ISO 9001 COMPLIANT
              </span>
            </div>
          </div>

          <div className="flex items-center gap-8 text-[9px] font-black uppercase tracking-[0.2em]">
            <div className="flex flex-wrap items-center gap-8">
              <a
                href="#"
                className="text-blue-900/60 hover:text-blue-600 transition-colors"
              >
                Privacy policy
              </a>
              <a
                href="#"
                className="text-blue-900/60 hover:text-blue-600 transition-colors"
              >
                Terms Of Service
              </a>
            </div>

            {/* <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="size-10 bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all shadow-xl shadow-blue-400/20"
              aria-label="Back to top"
            >
              <ArrowUp className="size-4" />
            </button> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
