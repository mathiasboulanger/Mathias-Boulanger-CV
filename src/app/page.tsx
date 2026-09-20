import Image from "next/image";
import { asset } from "@/lib/base-path";
import Spine from "@/components/lab/Spine";
import WorkTable from "@/components/lab/WorkTable";
import { CRAFT, NEXT, OPENING, SCALE, SHIFT } from "@/components/lab/content";

/**
 * A scroll-led narrative in six stages.
 *
 * No two stages share a structure: the opening is asymmetric type, the shift
 * is prose against an aside, scale is a data strip, the work is a table, the
 * craft is a numbered ledger, and the close is a single line. The variance is
 * the point. A page where every section is a heading over a card grid is what
 * reads as assembled rather than composed.
 */
export default function Lab() {
  return (
    <div className="lab-root">
      <main className="relative">
        <Spine />

        {/* 1. Opening. Asymmetric: the name runs to the left edge of the
          measure, the line sits under its second half. */}
        <section
          id="opening"
          className="mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-center px-6 pt-24 pb-16 sm:px-12 lg:pl-20"
        >
          <h1 className="lab-display text-[clamp(3rem,13vw,10rem)]">
            <span className="block">{OPENING.name[0]}</span>
            <span className="block text-[var(--paper-dim)]">
              {OPENING.name[1]}
            </span>
          </h1>

          <div className="mt-10 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
            <p className="lab-data text-xs leading-relaxed text-[var(--signal)]">
              {OPENING.role}
              <span className="mt-2 block text-[var(--paper-dim)]">
                {OPENING.location}
              </span>
            </p>
            <p className="max-w-prose text-lg leading-relaxed text-[var(--paper)] sm:text-xl">
              {OPENING.line}
            </p>
          </div>
        </section>

        {/* 2. The shift. Prose carrying an aside, no cards. */}
        <section
          id="shift"
          className="mx-auto max-w-6xl px-6 py-28 sm:px-12 lg:pl-20"
        >
          <div className="grid gap-12 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
            <div>
              <h2 className="lab-display max-w-[14ch] text-[clamp(2rem,5vw,3.5rem)]">
                {SHIFT.heading}
              </h2>
              <div className="mt-8 space-y-5">
                {SHIFT.body.map((p) => (
                  <p key={p} className="max-w-prose text-[var(--paper-dim)]">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <aside className="self-end border-l border-[var(--line)] pl-6">
              <p className="lab-data mb-4 text-xs text-[var(--signal)]">
                {SHIFT.aside.label}
              </p>
              <ul className="space-y-3">
                {SHIFT.aside.items.map((item) => (
                  <li key={item} className="text-[var(--paper)]">
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* 3. Scale. A readout, not six centred numbers. */}
        <section
          id="scale"
          className="mx-auto max-w-6xl px-6 py-28 sm:px-12 lg:pl-20"
        >
          <h2 className="lab-display max-w-[16ch] text-[clamp(2rem,5vw,3.5rem)]">
            {SCALE.heading}
          </h2>
          <p className="mt-6 max-w-prose text-[var(--paper-dim)]">
            {SCALE.body}
          </p>

          <dl className="mt-14 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {SCALE.figures.map((f) => (
              <div
                key={f.label}
                className="bg-[var(--stage-ground)] p-6 transition-colors duration-700"
              >
                <dt className="lab-display flex items-baseline gap-1 text-[clamp(2.25rem,5vw,3.25rem)] text-[var(--signal)]">
                  {f.value}
                  <span className="lab-data text-base text-[var(--paper-dim)]">
                    {f.unit}
                  </span>
                </dt>
                <dd className="mt-3 max-w-[26ch] text-sm leading-snug text-[var(--paper-dim)]">
                  {f.label}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* 4. The work. */}
        <section
          id="work"
          className="mx-auto max-w-6xl px-6 py-28 sm:px-12 lg:pl-20"
        >
          <h2 className="lab-display mb-4 max-w-[14ch] text-[clamp(2rem,5vw,3.5rem)]">
            Nine things, two ways of working
          </h2>
          <p className="mb-14 max-w-prose text-[var(--paper-dim)]">
            Filter by which side of the build I was on. The same person is on
            both, which is the whole argument.
          </p>
          <WorkTable />
        </section>

        {/* 5. The craft. A ledger: each item earns its number. */}
        <section
          id="craft"
          className="mx-auto max-w-6xl px-6 py-28 sm:px-12 lg:pl-20"
        >
          <h2 className="lab-display max-w-[18ch] text-[clamp(2rem,5vw,3.5rem)]">
            {CRAFT.heading}
          </h2>
          <p className="mt-6 max-w-prose text-[var(--paper-dim)]">
            {CRAFT.body}
          </p>

          <ol className="mt-14 space-y-px border-y border-[var(--line)]">
            {CRAFT.items.map((item) => (
              <li
                key={item.title}
                className="grid gap-4 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]"
              >
                <h3 className="lab-display text-xl text-[var(--paper)]">
                  {item.title}
                </h3>
                <div>
                  <p className="max-w-prose text-[var(--paper-dim)]">
                    {item.detail}
                  </p>
                  <p className="lab-data mt-3 text-xs text-[var(--signal-dim)]">
                    {item.where}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 6. Close. One line and a way to answer it. */}
        <section
          id="next"
          className="mx-auto max-w-6xl px-6 pt-28 pb-32 sm:px-12 lg:pl-20"
        >
          <div className="grid items-end gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div>
              <h2 className="lab-display max-w-[12ch] text-[clamp(2.5rem,7vw,5rem)]">
                {NEXT.heading}
              </h2>
              <p className="mt-8 max-w-prose text-lg text-[var(--paper-dim)]">
                {NEXT.body}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href={`mailto:${NEXT.email}`}
                  className="lab-data border-b border-[var(--signal-dim)] pb-1 text-[var(--signal)] transition-colors duration-200 hover:border-[var(--signal)]"
                >
                  {NEXT.email}
                </a>
                <a
                  href={NEXT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lab-data border-b border-[var(--line)] pb-1 text-[var(--paper-dim)] transition-colors duration-200 hover:border-[var(--paper)] hover:text-[var(--paper)]"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <Image
              src={asset("/mathias.webp")}
              alt="Mathias Boulanger"
              width={256}
              height={256}
              className="h-40 w-40 rounded-full object-cover md:h-56 md:w-56 md:justify-self-end"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
