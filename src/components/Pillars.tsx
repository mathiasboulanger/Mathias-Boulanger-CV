"use client";

import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
    title: "Product Management",
    description:
      "Own high-revenue products end-to-end: strategy, specs, cross-functional coordination, delivery.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22" />
        <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
        <path d="M16 16c-2.5-1.5-5.5-1.5-8 0" />
      </svg>
    ),
    title: "AI Enablement",
    description:
      "Run an AI Champions program with executive sponsors across 100+ people: training, platform evaluation, measured adoption.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
        <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
        <path d="M3 16v3a2 2 0 0 0 2 2h3" />
        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Prototyping & Building",
    description:
      "Direct AI to build working products, then validate the hypothesis before any engineering investment.",
  },
];

export default function Pillars() {
  return (
    <section id="work" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">
            What I Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16">
            Three pillars of impact
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.1} className="h-full">
              <div className="group relative p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:bg-card-hover transition-all duration-300 h-full flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{pillar.title}</h3>
                <p className="text-muted text-sm leading-relaxed flex-1">
                  {pillar.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
