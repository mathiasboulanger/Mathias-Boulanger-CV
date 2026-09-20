"use client";

import { useEffect, useRef, useState } from "react";
import { STAGES } from "./content";

/**
 * The timeline made visible.
 *
 * A hairline down the left edge that fills as the reader descends, with a
 * marker per stage. It is the page's only persistent chrome: there is no nav
 * bar, because the narrative has one direction and a menu would invite the
 * reader to skip it.
 *
 * The active stage drives the page ground colour, which is the authored
 * motion moment. That side effect lives here because the observer that knows
 * which stage is on screen is the same one that knows the fill height.
 */
export default function Spine() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".lab-root");
    if (!root) return;

    const sections = STAGES.map((s) => document.getElementById(s.id));

    const read = () => {
      ticking.current = false;
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, scrolled / height) : 0);

      // The stage that owns the upper third of the viewport owns the tone.
      const line = window.innerHeight / 3;
      let current = 0;
      sections.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= line) current = i;
      });
      setActive(current);
      root.style.setProperty("--stage-ground", STAGES[current].tone);
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="lab-spine" aria-hidden="true">
      <div
        className="lab-spine-progress"
        style={{ height: `${progress * 100}%` }}
      />
      {STAGES.map((stage, i) => (
        <div
          key={stage.id}
          className="absolute -left-[3px] h-[7px] w-[7px] rounded-full transition-colors duration-300"
          style={{
            top: `${(i / (STAGES.length - 1)) * 100}%`,
            background: i <= active ? "var(--signal)" : "var(--line)",
          }}
        />
      ))}
    </div>
  );
}
