"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { asset } from "@/lib/base-path";
import { WORK, type Mode } from "./content";

type Filter = "all" | Mode;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "led", label: "I led the build" },
  { id: "built", label: "I built it" },
];

/**
 * The work as an interrogable table rather than a card grid.
 *
 * Two reasons it is a table. It scales past eight rows where a grid of
 * identical cards stops being readable, and the filter is the argument the
 * page is making: the same person sits on both sides of the build.
 *
 * A row expands in place. Nothing navigates away, because the narrative has
 * one direction and a detail page would break it.
 */
export default function WorkTable() {
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<string | null>(WORK[0].id);

  const rows = useMemo(
    () => (filter === "all" ? WORK : WORK.filter((w) => w.mode === filter)),
    [filter],
  );

  const counts = useMemo(
    () => ({
      all: WORK.length,
      led: WORK.filter((w) => w.mode === "led").length,
      built: WORK.filter((w) => w.mode === "built").length,
    }),
    [],
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter the work"
        className="mb-10 flex flex-wrap gap-2"
      >
        {FILTERS.map((f) => {
          const on = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={on}
              className={`lab-data cursor-pointer rounded-full border px-4 py-1.5 text-xs transition-colors duration-200 ${
                on
                  ? "border-[var(--signal)] text-[var(--signal)]"
                  : "border-[var(--line)] text-[var(--paper-dim)] hover:border-[var(--paper-dim)] hover:text-[var(--paper)]"
              }`}
            >
              {f.label}
              <span className="ml-2 opacity-50">{counts[f.id]}</span>
            </button>
          );
        })}
      </div>

      <p className="lab-data mb-3 text-[0.7rem] text-[var(--paper-dim)]">
        Open a row for the evidence
      </p>

      <div className="border-t border-[var(--line)]">
        {rows.map((w) => {
          const isOpen = open === w.id;
          return (
            <div key={w.id} className="border-b border-[var(--line)]">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : w.id)}
                aria-expanded={isOpen}
                className="group grid w-full cursor-pointer grid-cols-[minmax(0,1fr)_6.5rem_2rem] items-center gap-x-5 gap-y-1 py-5 pr-1 text-left transition-colors duration-200 hover:bg-white/[0.03] sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_6.5rem_2rem] sm:gap-x-6 sm:pl-2"
              >
                <span className="lab-display text-2xl text-[var(--paper)] transition-colors duration-200 group-hover:text-[var(--signal)] sm:text-[1.75rem]">
                  {w.name}
                </span>
                <span className="lab-data col-start-1 text-xs text-[var(--paper-dim)] sm:col-start-2">
                  {w.context}
                </span>
                <span className="lab-data col-start-2 row-start-1 text-right text-xs text-[var(--paper-dim)] sm:col-start-3">
                  {w.year}
                </span>

                {/* The affordance. Without it the rows read as a list, and
                    nobody discovers that the evidence is one click down. */}
                <span
                  className={`col-start-3 row-start-1 justify-self-end rounded-full border p-1.5 transition-all duration-200 sm:col-start-4 ${
                    isOpen
                      ? "rotate-45 border-[var(--signal)] text-[var(--signal)]"
                      : "border-[var(--line)] text-[var(--paper-dim)] group-hover:border-[var(--signal)] group-hover:text-[var(--signal)]"
                  }`}
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M6 1v10M1 6h10" />
                  </svg>
                </span>
              </button>

              <div
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                {...(!isOpen && { inert: true })}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-8 pb-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                    <div>
                      <p className="max-w-prose text-[var(--paper-dim)]">
                        {w.proof}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                        {w.stack.map((s) => (
                          <span
                            key={s}
                            className="lab-data text-xs text-[var(--paper-dim)]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      {w.link && (
                        <a
                          href={w.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="lab-data mt-5 inline-block border-b border-[var(--signal-dim)] pb-0.5 text-sm text-[var(--signal)] transition-colors duration-200 hover:border-[var(--signal)]"
                        >
                          {w.link.label}
                        </a>
                      )}
                    </div>

                    {w.media && (
                      <div className="overflow-hidden rounded-sm border border-[var(--line)] bg-black/40">
                        <Image
                          src={asset(w.media.src)}
                          alt={w.media.alt}
                          width={1120}
                          height={630}
                          loading="lazy"
                          className={
                            w.media.fit === "contain"
                              ? "h-72 w-full object-contain py-4"
                              : "aspect-video w-full object-cover"
                          }
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
