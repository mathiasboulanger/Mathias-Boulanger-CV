import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mathias Boulanger",
  description:
    "The first version of this site, kept for reference after the redesign.",
  // Superseded by the page at the root. Two pages carrying the same facts on
  // one domain split their own signals, so this one stays out of the index.
  robots: { index: false, follow: false },
};

export default function ClassicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="classic-root">{children}</div>;
}
