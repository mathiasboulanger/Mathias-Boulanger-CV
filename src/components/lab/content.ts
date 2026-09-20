/**
 * Everything the narrative says, in one place.
 *
 * The stages read from here so the copy can be revised without touching
 * layout, and so the /lab surface cannot drift from the CV the way the
 * incumbent page did.
 */

export type Mode = "led" | "built";

export interface Work {
  id: string;
  name: string;
  context: string;
  /** Which of the two modes this piece sat in. The table filters on it. */
  mode: Mode;
  year: string;
  /** The single fact that earns the row. */
  proof: string;
  stack: string[];
  media?: { src: string; alt: string; fit: "cover" | "contain" };
  link?: { href: string; label: string };
}

export const OPENING = {
  name: ["Mathias", "Boulanger"],
  role: "Product Manager, AI Product Builder",
  line: "I'm drawn to products that change how people work. On some I lead the team that builds them; on others I build them myself, directing AI.",
  location: "Paris, relocating to Buenos Aires. Available remote.",
};

export const SHIFT = {
  heading: "The work changed shape",
  body: [
    "A product manager used to hand a spec to a team and wait. That wait is where most ideas die: by the time the thing exists, the question it answered has moved.",
    "Now I scope the problem, direct the AI that builds the solution, review what comes out, and ship it. The loop that took a quarter takes an afternoon, and the hypothesis gets tested while it still matters.",
    "It does not replace the team. It changes which questions need one.",
  ],
  aside: {
    label: "What stays mine",
    items: [
      "Deciding what is worth building",
      "Reading whether the output is right",
      "Owning the result once it ships",
    ],
  },
};

export const SCALE = {
  heading: "Inside a company of a hundred people",
  body: "Product ownership on one side, adoption on the other. The numbers below are the ones that were measured and reported, not the ones that sounded best.",
  figures: [
    { value: "20", unit: "%", label: "of company revenue, the platform I own" },
    { value: "100", unit: "+", label: "people in the AI adoption program I run" },
    { value: "3h", unit: "→ 5min", label: "a manual triage, after one automation" },
    { value: "94", unit: "%", label: "customer verbatim coverage, turned into actionable items" },
    { value: "5–10", unit: "h/wk", label: "returned to a business development team" },
    { value: "9", unit: "markets", label: "and 7 languages the store ships to" },
  ],
};

export const WORK: Work[] = [
  {
    id: "download-store",
    name: "Download Store rebuild",
    context: "Qobuz",
    mode: "led",
    year: "2023–Today",
    proof:
      "Three programmes at once: a Symfony 1 to Symfony 7 migration, a headless CMS internal teams operate themselves, and the rollout of a new design system. Two squads across Design, Tech, CRM and Marketing.",
    stack: ["Directus", "Symfony", "Jira", "Figma"],
  },
  {
    id: "ai-champions",
    name: "AI Champions program",
    context: "Qobuz",
    mode: "led",
    year: "2025–Today",
    proof:
      "Two company-wide training sessions, a champion per department, executive sponsors, and results presented to the executive committee. One attendee became the first measured case.",
    stack: ["Enablement", "Training", "Governance"],
  },
  {
    id: "internal-agent",
    name: "Internal agent on company data",
    context: "Qobuz",
    mode: "built",
    year: "2026",
    proof:
      "Ask a question in plain language, get an answer built on real product indicators and live satisfaction feedback, with sources cited. Runs on a local model so nothing leaves the company.",
    stack: ["Local LLM", "RAG", "SQL", "FastAPI"],
    media: {
      src: "/projects/internal-ai-agent.webp",
      alt: "The agent's question screen",
      fit: "cover",
    },
  },
  {
    id: "mcp-context",
    name: "Shared MCP context",
    context: "Qobuz, in build",
    mode: "built",
    year: "2026",
    proof:
      "One persistent context that Product, Engineering and QA read from, instead of each briefing their own tools from scratch. Built on the Model Context Protocol so any client can consume it.",
    stack: ["MCP", "TypeScript"],
  },
  {
    id: "lead-scoring",
    name: "AI lead scoring",
    context: "LeadUp, client project",
    mode: "built",
    year: "2025",
    proof:
      "Every inbound lead classified across three profiles, returned with a summary and the next action to take. Presented as a live session published by No-code France.",
    stack: ["n8n", "Airtable", "Tally", "LLM APIs"],
    media: {
      src: "/projects/ai-lead-scoring.webp",
      alt: "The scoring workflow in n8n during the live session",
      fit: "cover",
    },
    link: { href: "https://youtu.be/nkGQkhxtBQ8", label: "Watch the session" },
  },
  {
    id: "content-pipeline",
    name: "AI content pipeline",
    context: "NoCode for Good",
    mode: "built",
    year: "2025",
    proof:
      "Output went from 2 to 11 pieces a month: automated posting, article drafting and newsletter workflows. Published as a case session by No-code France.",
    stack: ["Make", "n8n", "Claude"],
    media: {
      src: "/projects/nocode-make.webp",
      alt: "The No-code France session on the Make automation",
      fit: "cover",
    },
    link: { href: "https://youtu.be/mV4yLqhmT4I", label: "Watch the session" },
  },
  {
    id: "podium-fantasy",
    name: "Podium Fantasy",
    context: "Personal, live",
    mode: "built",
    year: "2025–Today",
    proof:
      "An F1 prediction game with real players. Cron jobs pull results from the public OpenF1 API and settle scores with no manual input.",
    stack: ["Next.js", "Prisma", "Postgres", "Railway"],
    media: {
      src: "/projects/podium-fantasy.webp",
      alt: "The Podium Fantasy race calendar on mobile",
      fit: "contain",
    },
    link: { href: "https://www.podiumfantasy.com/", label: "Play it" },
  },
  {
    id: "podsearch",
    name: "PodSearch",
    context: "Personal",
    mode: "built",
    year: "2026",
    proof:
      "A conversational search agent over a podcast archive. Answers cite their episode and link to the exact second, and a labelled retrieval evaluation sets the relevance threshold.",
    stack: ["pgvector", "Voyage", "Claude", "Next.js"],
    media: {
      src: "/projects/podsearch.webp",
      alt: "The PodSearch entry screen",
      fit: "cover",
    },
  },
  {
    id: "reel-coach",
    name: "Reel Coach",
    context: "Personal, in production",
    mode: "built",
    year: "2026",
    proof:
      "Reads a post's metrics against the account's own median and explains what to change. Every claim names the metric behind it.",
    stack: ["Instagram API", "Claude", "Prisma"],
    media: {
      src: "/projects/reel-coach.webp",
      alt: "Reel Coach analysing a post",
      fit: "contain",
    },
  },
];

export const CRAFT = {
  heading: "The part that separates a demo from a product",
  body: "Anyone can get a model to answer once. The work is knowing whether it answered well, and noticing when it stops.",
  items: [
    {
      title: "Evaluation on creative output",
      detail:
        "Text generated at temperature 1 defeats exact-string tests, so the golden set asserts on properties instead: valid shape, claims grounded in the source, a banned vocabulary, hypotheses phrased as hypotheses.",
      where: "eval-prompts.ts, from the Reel Coach project",
    },
    {
      title: "A retrieval threshold placed from data",
      detail:
        "Two labelled question sets, on-topic and off-topic. The gap between them is what tells you where the relevance floor goes. It caught a timestamp bug that had looked like a ranking problem.",
      where: "audit-retrieval.ts, from the PodSearch project",
    },
    {
      title: "Guardrails that refuse before the mistake",
      detail:
        "Fifty agent skills and a set of hooks that block a bad commit, a stray log or an edit to a secrets file, rather than catching it in review.",
      where: "A personal OS, wired into mail, calendar, Slack, Jira and the knowledge base",
    },
    {
      title: "Continuous integration, not a demo branch",
      detail:
        "Seven repositories run their tests on every push. A prototype that cannot survive its own pipeline is a screenshot.",
      where: "GitHub Actions, across 7 repositories",
    },
  ],
};

export const NEXT = {
  heading: "What I'm looking for",
  body: "A company building AI products, or one that needs someone to make AI land inside it. Remote, across European and American time zones.",
  email: "boulangermathias1@gmail.com",
  linkedin: "https://linkedin.com/in/mathiasboulanger",
};

export const STAGES = [
  { id: "opening", tone: "var(--ink-900)", label: "Opening" },
  { id: "shift", tone: "var(--ink-800)", label: "The shift" },
  { id: "scale", tone: "var(--ink-800)", label: "At scale" },
  { id: "work", tone: "var(--ink-700)", label: "The work" },
  { id: "craft", tone: "var(--ink-700)", label: "The craft" },
  { id: "next", tone: "var(--ink-600)", label: "What's next" },
] as const;
