import "./globals.css";

import type { Metadata } from "next";
// import CookieBanner from "@/components/CookieBanner";
import { Inter } from "next/font/google";

// import { Toaster } from "@/components/ui/toaster";

// const poppins = Poppins({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["300", "400", "500", "600", "700"],
// });

const inter = Inter({ subsets: ["latin"] });

import { cn } from "@/lib/utils";
// import ToastContainer from "@/components/ui/ToastContainer";

export const metadata: Metadata = {
  title: "ParKids — Intelligent Family Growth Planner",
  description:
    "Par-Kids helps families have intentional, guided weekly check-ins that strengthen parent-child bonds and track developmental growth.",
  keywords: [
    "parenting",
    "family",
    "child development",
    "family bonding",
    "check-in",
  ],
  openGraph: {
    title: "Par-Kids — Grow Together. Stay Connected.",
    description:
      "A guided check-in platform that helps parents and children connect intentionally every week.",
    url: "https://parkids.com",
    siteName: "ParKids",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className)}>
        {children}
        {/* <ToastContainer /> */}
      </body>
    </html>
  );
}
