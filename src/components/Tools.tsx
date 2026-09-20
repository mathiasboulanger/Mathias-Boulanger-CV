"use client";

import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    name: "AI Enablement",
    tools: [
      "Adoption programs",
      "Team training",
      "Use case discovery",
      "Executive buy-in",
      "Impact measurement",
    ],
  },
  {
    name: "Applied AI",
    tools: [
      "LLM workflows",
      "Agent orchestration",
      "MCP servers",
      "Eval design",
      "RAG",
      "Prompt engineering",
      "AI-assisted development",
    ],
  },
  {
    name: "Product",
    tools: [
      "Discovery",
      "Roadmap",
      "Specs",
      "A/B testing",
      "Analytics",
      "Stakeholder management",
    ],
  },
  {
    name: "Delivery",
    tools: [
      "Cross-functional squads",
      "Multi-market launches",
      "Implementation from kickoff to go-live",
    ],
  },
  {
    name: "AI & Automation",
    tools: ["Claude", "Claude Code", "MCP", "n8n", "Make.com", "LLM APIs"],
  },
  {
    // Names the stack behind what is in production without claiming to write it.
    name: "Shipped with AI",
    tools: ["Next.js", "Prisma", "Postgres", "Directus", "Vercel", "Railway"],
  },
  {
    name: "Product & Analytics",
    tools: ["Mixpanel", "Looker", "Jira", "Notion", "Confluence", "Figma", "Airtable"],
  },
];

export default function Tools() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">
            Tools & Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16">
            What I work with
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, i) => (
            <AnimatedSection key={category.name} delay={i * 0.08}>
              <div>
                <h3 className="text-sm font-semibold text-accent mb-4 font-mono">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-lg bg-card border border-border text-sm text-muted hover:text-foreground hover:border-accent/30 transition-all duration-200 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
