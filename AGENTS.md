# AGENTS.md

Personal portfolio site for Mathias Boulanger. Single page, statically exported, deployed to GitHub Pages.

Live at https://mathias-boulanger.com/

## Commands

```bash
npm run dev      # local dev server on :3000
npm run build    # static export into ./out
npm run lint     # eslint
```

There is no test suite and no typecheck script. `next build` type-checks as part of the build, so a broken type fails the build and therefore the deploy.

## Architecture

Next.js 16 App Router with `output: "export"`. Tailwind CSS v4, loaded through `@import "tailwindcss"` with tokens exposed in an `@theme inline` block. framer-motion for scroll animations. Geist via `next/font/google`.

```
src/app/layout.tsx      root layout, fonts, metadata
src/app/page.tsx        composes every section in order
src/app/globals.css     design tokens and base styles
src/components/         one file per section, plus AnimatedSection
```

`page.tsx` is the whole page. Sections render in this order: Nav, Hero, Pillars, Metrics, Projects, Tools, About, Contact. To reorder the page, reorder that file.

## Constraints that come from static export

`output: "export"` means the build produces plain HTML, CSS and JS. There is no Node server at runtime. The following do not work and will fail the build or silently break in production:

- API routes and route handlers
- Server Actions
- ISR, `revalidate`, and on-demand revalidation
- `middleware.ts`
- Dynamic routes without `generateStaticParams`
- `next/image` optimization, which is why `images.unoptimized` is `true` in `next.config.ts`

Anything that needs a server belongs somewhere else, not in this repo.

## basePath

The site is served from a subpath, `/portfolio`, because it is a GitHub Pages project site rather than a user site. `basePath` in `next.config.ts` handles this for `next/link`. It does NOT handle `next/image` here, because `images.unoptimized` is on and the src is then emitted verbatim. Asset paths go through `asset()` in `src/lib/base-path.ts`.

It does not handle hand written absolute paths. An `<a href="/cv.pdf">` or a `url(/bg.png)` in CSS resolves to the domain root and 404s in production while working fine in `npm run dev`. Use `next/link` for internal navigation and relative paths for assets, or prefix with the basePath explicitly.

This class of bug only shows up after deploy, so it is worth checking before pushing.

## Component conventions

Every component in `src/components/` carries `"use client"`. That is not incidental: framer-motion needs client components, and each section animates on scroll.

`AnimatedSection.tsx` owns the entrance animation: fade in, 32px rise, 600ms, triggered once at 80px before the element enters the viewport. Wrap new sections in it instead of writing a new `motion.div`. Keeping the animation in one place is what stops the page from feeling like eight different sites.

New sections go in `src/components/`, one file per section, and get added to `page.tsx`.

## Design tokens

Colors live as CSS custom properties in `globals.css` and are exposed to Tailwind v4 through `@theme inline`:

| Token | Value | Use |
|---|---|---|
| `--background` | `#09090b` | page background |
| `--foreground` | `#fafafa` | body text |
| `--muted` | `#a1a1aa` | secondary text |
| `--accent` | `#f59e0b` | links, highlights, section labels |
| `--accent-dim` | `#d97706` | hover states on accent |
| `--card` | `#18181b` | cards and panels |
| `--card-hover` | `#1f1f23` | card hover |
| `--border` | `#27272a` | dividers and outlines |

Use the tokens through Tailwind (`text-accent`, `bg-card`) rather than hardcoding hex values. The theme is dark only by design; there is no light mode and no theme switcher.

## Deploy

`.github/workflows/deploy.yml` builds and deploys on every push to `main`. Node 20, `npm ci`, `next build`, then the `./out` directory is uploaded to GitHub Pages.

There is no staging environment and no preview deploy. A push to `main` goes live in a few minutes. Verify locally with `npm run build` before pushing, since the build is also the only type check.

## Content

The copy on this site is a professional claim, so it follows two rules.

Every number must be traceable to something real. No rounded up metrics, no invented percentages.

The site never claims that Mathias writes production code. The accurate description is that he decides what gets built, directs the AI that builds it, reviews the output and ships it. Wording that implies hands on software engineering is wrong and gets caught in the first technical interview.

## Next.js version

This project runs Next.js 16, whose APIs and conventions differ from Next.js 15 and earlier, which is what most models have memorised. Before writing framework code, check the guides shipped in `node_modules/next/dist/docs/` and follow any deprecation notices there rather than relying on recalled patterns.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
