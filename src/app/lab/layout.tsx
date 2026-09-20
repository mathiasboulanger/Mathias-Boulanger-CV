import type { Metadata } from "next";
import { Bricolage_Grotesque, Public_Sans, JetBrains_Mono } from "next/font/google";
import "./lab.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const data = JetBrains_Mono({
  variable: "--font-data",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mathias Boulanger",
  description:
    "Product Manager and AI Product Builder. On some products I lead the team that builds them, on others I build them myself, directing AI.",
  // A design candidate living alongside the page it may replace. Two pages
  // carrying the same facts on one domain split their own search signals, so
  // this one stays out of the index until it either wins or is dropped.
  robots: { index: false, follow: false },
};

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${display.variable} ${body.variable} ${data.variable} lab-root`}
    >
      {children}
    </div>
  );
}
