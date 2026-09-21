# Mathias Boulanger

Personal site and CV, live at
**[mathiasboulanger.github.io/portfolio](https://mathiasboulanger.github.io/portfolio/)**.

Next.js 16 with the App Router, Tailwind v4, Framer Motion, exported as a
static site and served from GitHub Pages.

## What is here

Two surfaces share one deployment.

| Route | What it is |
|---|---|
| `/` | A scroll-led narrative in six stages. The current design. |
| `/classic` | The first version, kept as a fallback and left out of the search index. |

They exist side by side on purpose: the redesign replaced the original rather
than being merged into it, and keeping the old one costs nothing while the
new one proves itself.

## Running it

```bash
npm install
npm run dev
```

Then open **http://localhost:3000/portfolio**, not the bare root.
The `basePath` applies in development too, so `localhost:3000` returns a 404.

```bash
npm run lint     # eslint
npm run build    # type check, build, and write the static export to out/
```

## Things that will bite you

**`basePath` does not cover `next/image` here.** `images.unoptimized` is on
for the static export, so the `src` is emitted verbatim and an absolute path
resolves to the domain root. Asset paths go through `asset()` in
`src/lib/base-path.ts`. This only breaks after deploy, never locally.

**`trailingSlash` is required.** GitHub Pages resolves an extension-less URL
to `<path>/index.html`. Without it the export writes `out/classic.html` and
`/classic` 404s in production.

**The two designs must not bleed into each other.** The first design's tokens
are scoped to `.classic-root` in `globals.css`, and the current one lives
under `.lab-root` in `lab.css`. The token block stays at `:root` because
Tailwind's `@theme inline` resolves `bg-card` and friends from there, but it
declares values without painting anything.

**Turbopack infers the wrong workspace root.** A stray `package.json` higher
up the tree made `next dev` resolve modules from the wrong place while
`next build` stayed green. `turbopack.root` is pinned in `next.config.ts`.

## Design

`DESIGN.md` carries the system for the current surface: the palette and why
it travels across the descent, the type pairing, the structure rules, and the
motion budget. It was written before the build rather than as documentation
of it.

Exit gates for any visual change: the aesthetic law check, an accessibility
and contrast pass with every token pair at 4.5:1 or better, then lint and
build green.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes `out/` to GitHub Pages.
