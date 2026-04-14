import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Mathias Boulanger | Product Manager & AI Builder",
  description:
    "Product Manager combining product ownership with hands-on AI deployment. I ship prototypes fast, train teams on AI adoption, and measure impact on every initiative.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
