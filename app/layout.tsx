import "./globals.css";

import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

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
      <body className={cn(inter.className, fraunces.variable)}>
        {children}
        {/* <ToastContainer /> */}
      </body>
    </html>
  );
}
