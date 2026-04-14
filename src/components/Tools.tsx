"use client";

import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    name: "Product & Collaboration",
    tools: ["Notion", "Jira", "Slack", "Confluence", "Figma", "Miro", "G Suite"],
  },
  {
    name: "Analytics & Data",
    tools: ["Mixpanel", "Looker", "Google Analytics", "Chattermill", "SQL"],
  },
  {
    name: "AI & Automation",
    tools: ["Claude (Anthropic)", "n8n", "Make.com", "ChatGPT", "OpenAI API"],
  },
  {
    name: "Design & Creation",
    tools: ["Figma", "Premiere Pro", "Photoshop"],
  },
  {
    name: "Development",
    tools: ["Next.js", "React", "Tailwind CSS", "Prisma", "PostgreSQL", "Replit"],
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
