"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface Project {
  id: string;
  title: string;
  role: string;
  challenge: string;
  actions: string[];
  result?: string;
  stack: string[];
  status?: string;
}

const projects: Project[] = [
  {
    id: "download-store",
    title: "Download Store Redesign",
    role: "Product Manager, Squad Lead @ Qobuz",
    challenge:
      "Modernize a 15+ year old legacy e-commerce platform responsible for 40% of company revenue.",
    actions: [
      "Led CMS migration from legacy to headless Directus",
      "Designed intelligent automation workflows (album detection, hierarchical content propagation)",
      "Coordinated 2 cross-functional squads (Design, Tech, CRM, Marketing)",
      "Conducted user research with internal Merch teams, converting friction into prioritized backlog",
      "Specified 10+ functional components with ~50 pages of product documentation",
    ],
    stack: ["Jira", "Figma", "Directus", "Mixpanel", "Confluence"],
    status: "Launching June/July 2026",
  },
  {
    id: "ai-content",
    title: "AI-Powered Content Pipeline",
    role: "AI & Automation Consultant @ NoCode for Good / LeadUp",
    challenge:
      "Non-profit association producing only 2 content pieces/month, bottlenecked by manual processes.",
    actions: [
      "Designed and deployed automated content pipeline using Make.com and n8n",
      "Built AI-powered workflows: LinkedIn post generation, web article drafting, newsletter automation",
      "Created tutorial content and video walkthroughs for the NoCode France YouTube channel",
    ],
    result:
      "+450% content production (2 to 11 pieces/month: 6 LinkedIn posts + 3 web articles + 1 newsletter)",
    stack: ["Make.com", "n8n", "Claude", "AI integrations"],
  },
  {
    id: "ai-enablement",
    title: "AI Enablement & Agentic Commerce",
    role: "AI Referent & Product Manager @ Qobuz",
    challenge:
      "Evaluate how AI agents could transform music e-commerce and position Qobuz as a first-mover.",
    actions: [
      "Trained teams on AI tools and evaluated platforms for internal adoption",
      "Led strategic exploration of Universal Commerce Protocol (UCP)",
      "Analyzed competitive landscape (AI traffic growth, conversion lift data, market sizing)",
      "Built business case and strategic recommendation presented to C-suite",
    ],
    result:
      "Executive-level strategic recommendation framing Qobuz's entry into agentic commerce",
    stack: ["Claude", "Research", "Strategic analysis"],
  },
  {
    id: "podium-fantasy",
    title: "Podium Fantasy",
    role: "Solo Builder (Personal Project)",
    challenge:
      "Build an F1 prediction game as a full-stack web application from scratch.",
    actions: [
      "Designed and shipped MVP: prediction system, leaderboard, user accounts",
      "Full-stack development from idea to deployed product, independently",
    ],
    result: "Proof of ability to go from idea to deployed product independently",
    stack: [
      "Next.js 14",
      "React",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "Railway",
    ],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 0.1}>
      <div
        className="group relative rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted text-sm">{project.role}</p>
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 ml-4"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M7 1v12M1 7h12" />
              </svg>
            </motion.div>
          </div>

          <p className="text-muted text-sm leading-relaxed">
            {project.challenge}
          </p>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-6 mt-6 border-t border-border">
                  <h4 className="text-sm font-semibold text-accent mb-3">
                    What I did
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {project.actions.map((action) => (
                      <li
                        key={action}
                        className="text-sm text-muted flex items-start gap-2"
                      >
                        <span className="text-accent mt-1.5 flex-shrink-0">
                          <svg
                            width="6"
                            height="6"
                            viewBox="0 0 6 6"
                            fill="currentColor"
                          >
                            <circle cx="3" cy="3" r="3" />
                          </svg>
                        </span>
                        {action}
                      </li>
                    ))}
                  </ul>

                  {project.result && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-accent mb-2">
                        Result
                      </h4>
                      <p className="text-sm text-foreground font-medium">
                        {project.result}
                      </p>
                    </div>
                  )}

                  {project.status && (
                    <div className="mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        {project.status}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-full bg-border/50 text-muted text-xs font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">
            Selected Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16">
            Built, shipped, measured
          </h2>
        </AnimatedSection>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
