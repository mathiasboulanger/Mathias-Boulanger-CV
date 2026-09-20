"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/base-path";
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
  link?: { href: string; label: string };
  /** Qobuz work carries none on purpose: internal screens do not go public. */
  media?: { src: string; alt: string; fit: "cover" | "contain" };
}

const projects: Project[] = [
  {
    id: "download-store",
    title: "Download Store Redesign",
    role: "Product Manager, Squad Lead @ Qobuz",
    challenge:
      "Modernize a 15+ year old legacy e-commerce platform responsible for 20% of company revenue.",
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
    title: "AI Content Pipeline for a Non-Profit",
    role: "AI & Automation Consultant @ NoCode for Good",
    challenge:
      "Non-profit association producing only 2 content pieces/month, bottlenecked by manual processes.",
    actions: [
      "Designed and deployed an automated content pipeline on Make.com, later migrated to n8n",
      "Built AI-powered workflows: LinkedIn post generation, web article drafting, newsletter automation",
      "Presented the full case as a public session published by No-code France",
    ],
    result:
      "+450% content production (2 to 11 pieces/month: 6 LinkedIn posts + 3 web articles + 1 newsletter)",
    stack: ["Make.com", "n8n", "Claude", "AI integrations"],
    link: {
      href: "https://youtu.be/mV4yLqhmT4I",
      label: "Watch the session on No-code France",
    },
    media: {
      src: "/projects/nocode-make.webp",
      alt: "No-code France session on the Make automation, February 2025",
      fit: "cover",
    },
  },
  {
    id: "ai-lead-scoring",
    title: "AI Lead Scoring System",
    role: "Product Builder @ LeadUp (client project)",
    challenge:
      "A client needed inbound leads qualified across three profiles with very different value: investors, project owners and partners.",
    actions: [
      "Built an AI scoring system that classifies every inbound lead by profile and intent",
      "Delivered a notification carrying a profile summary and the next action to take: book a meeting, send a message",
      "Designed the system to transfer to other selection problems: volunteer screening, beneficiary applications, partnership requests",
    ],
    result:
      "Presented as a live session published by No-code France, the French-speaking no-code association",
    stack: ["n8n", "Airtable", "Tally", "LLM APIs"],
    link: {
      href: "https://youtu.be/nkGQkhxtBQ8",
      label: "Watch the session on No-code France",
    },
    media: {
      src: "/projects/ai-lead-scoring.webp",
      alt: "The scoring workflow in n8n during the live session",
      fit: "cover",
    },
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
      "Designed and shipped the MVP: prediction system, leaderboard, user accounts",
      "Cron jobs sync race results from the public OpenF1 API and settle scores with no manual input",
      "Full-stack development from idea to deployed product, independently",
    ],
    result: "Live in production with real players, season after season",
    stack: [
      "Next.js 14",
      "React",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "Railway",
    ],
    link: { href: "https://www.podiumfantasy.com/", label: "Play it at podiumfantasy.com" },
    media: {
      src: "/projects/podium-fantasy.webp",
      alt: "The Podium Fantasy race calendar on mobile",
      fit: "contain",
    },
  },
  {
    id: "podsearch",
    title: "PodSearch",
    role: "Solo Builder (Personal Project)",
    challenge:
      "A podcast piles up hundreds of hours of audio and nobody can find the bit they remember.",
    actions: [
      "Built a conversational search agent over a channel's transcripts: RAG on pgvector with Voyage embeddings",
      "Answers cite the episodes they came from and link to the exact second in the video",
      "Wrote a retrieval evaluation with two labelled question sets, on-topic and off-topic, to place the relevance threshold from data instead of guesswork",
    ],
    result:
      "Running on a real podcast archive. The evaluation caught a timestamp bug that looked like a ranking problem.",
    stack: ["Next.js", "pgvector", "Voyage", "Claude", "Postgres"],
    media: {
      src: "/projects/podsearch.webp",
      alt: "The PodSearch entry screen with suggested questions",
      fit: "cover",
    },
  },
  {
    id: "reel-coach",
    title: "Reel Coach",
    role: "Solo Builder (Personal Project)",
    challenge:
      "Instagram's raw numbers tell a creator what happened, never what to change next.",
    actions: [
      "Built an app that reads each post's metrics and compares them against the account's own median rather than a generic benchmark",
      "Every claim it makes names the metric behind it, so the advice can be checked",
      "Wrote a golden-set eval over the AI output: creative text at temperature 1 defeats exact-string tests, so it asserts on properties instead, including grounded claims and a banned marketing vocabulary",
    ],
    result: "In production, used by a creator and their editor",
    stack: ["Instagram API", "Claude", "Prisma", "Next.js"],
    media: {
      src: "/projects/reel-coach.webp",
      alt: "Reel Coach analysing a post on mobile",
      fit: "contain",
    },
  },
  {
    id: "internal-ai-agent",
    title: "Internal AI Agent on Company Data",
    role: "Product Manager & Builder @ Qobuz",
    challenge:
      "Cross-checking a drop in satisfaction against what customers actually write meant opening several tools, so nobody did it.",
    actions: [
      "Built an agent you question in plain language, which looks up the answer across product indicators and live satisfaction feedback and replies citing its sources",
      "Runs on a local model, so no company data leaves the machine",
      "Turned a cross-check nobody was performing into a question anyone can ask out loud",
    ],
    result:
      "Produced a useful business finding the day it was connected",
    stack: ["Local LLM", "RAG", "SQL", "Next.js", "FastAPI"],
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

          <motion.div
            initial={false}
            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
            inert={!isOpen}
          >
            <div className="pt-6 mt-6 border-t border-border">
              {project.media && (
                <div className="mb-6 rounded-xl overflow-hidden border border-border bg-background">
                  <Image
                    src={asset(project.media.src)}
                    alt={project.media.alt}
                    width={1120}
                    height={630}
                    loading="lazy"
                    className={`w-full ${
                      project.media.fit === "contain"
                        ? "h-64 object-contain py-3"
                        : "aspect-video object-cover"
                    }`}
                  />
                </div>
              )}

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

              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-accent hover:underline"
                >
                  {project.link.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 9L9 3M9 3H4M9 3v5" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
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
