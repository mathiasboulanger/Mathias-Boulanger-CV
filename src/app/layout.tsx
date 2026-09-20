import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import {
  Bricolage_Grotesque,
  Public_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import "./lab.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const bodyFace = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const dataFace = JetBrains_Mono({
  variable: "--font-data",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mathias Boulanger | Product Manager & AI Product Builder",
  description:
    "I'm drawn to products that change how people work. On some I lead the team that builds them, on others I build them myself, directing AI.",
  openGraph: {
    title: "Mathias Boulanger | Product Manager & AI Builder",
    description:
      "Product Manager combining product ownership with hands-on AI deployment. I ship prototypes fast, train teams on AI adoption, and measure impact on every initiative.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathias Boulanger | Product Manager & AI Builder",
    description:
      "Product Manager combining product ownership with hands-on AI deployment.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${display.variable} ${bodyFace.variable} ${dataFace.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
