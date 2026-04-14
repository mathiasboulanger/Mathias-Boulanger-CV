"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Metric {
  value: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const metrics: Metric[] = [
  {
    value: "40",
    numericValue: 40,
    suffix: "%",
    label: "Share of company revenue managed",
  },
  {
    value: "450",
    numericValue: 450,
    prefix: "+",
    suffix: "%",
    label: "Content production increase",
  },
  {
    value: "6",
    numericValue: 6,
    prefix: "+",
    suffix: "%",
    label: "Wallet adoption driven by campaign",
  },
  {
    value: "60",
    numericValue: 60,
    prefix: "+",
    suffix: "%",
    label: "Average wallet size increase",
  },
  {
    value: "18.9",
    numericValue: 18.9,
    suffix: "K",
    prefix: "\u20AC",
    label: "Daily revenue peak (Qobuz Fest)",
  },
  {
    value: "20",
    numericValue: 20,
    suffix: "+",
    label: "Tracking events/KPIs monitored",
  },
  {
    value: "2",
    numericValue: 2,
    label: "Squads led simultaneously",
  },
];

function CountUp({
  target,
  prefix = "",
  suffix = "",
  isDecimal = false,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  isDecimal?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {isDecimal ? count.toFixed(1) : Math.round(count)}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="py-24 sm:py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">
            Impact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16">
            Numbers that speak
          </h2>
        </motion.div>

        {/* Brick/staggered layout: 8-col grid, top items span 2 cols, bottom offset by 1 */}
        <div className="grid grid-cols-2 lg:grid-cols-8 gap-x-8 gap-y-10 sm:gap-x-10 sm:gap-y-12">
          {/* Top row: 4 metrics, each spanning 2 cols */}
          {metrics.slice(0, 4).map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-center lg:col-span-2"
            >
              <div className="text-4xl sm:text-5xl font-bold text-accent font-serif italic mb-2">
                <CountUp
                  target={metric.numericValue}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  isDecimal={metric.value.includes(".")}
                />
              </div>
              <p className="text-muted text-sm leading-snug">{metric.label}</p>
            </motion.div>
          ))}

          {/* Bottom row: 3 metrics, offset by 1 col to stagger under the gaps */}
          {metrics.slice(4).map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (i + 4) * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`text-center lg:col-span-2 ${i === 0 ? "lg:col-start-2" : ""}`}
            >
              <div className="text-4xl sm:text-5xl font-bold text-accent font-serif italic mb-2">
                <CountUp
                  target={metric.numericValue}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  isDecimal={metric.value.includes(".")}
                />
              </div>
              <p className="text-muted text-sm leading-snug">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
