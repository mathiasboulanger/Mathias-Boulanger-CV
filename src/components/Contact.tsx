"use client";

import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Let&apos;s talk
          </h2>
          <p className="text-muted text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            I&apos;m looking for my next PM role where I can combine product
            strategy with hands-on AI building. Open to conversations about how
            I can help your team ship faster.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:boulangermathias1@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background font-medium text-sm hover:bg-accent-dim transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              boulangermathias1@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/mathiasboulanger"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:border-accent/50 hover:text-accent transition-all"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-24 pt-8 border-t border-border">
        <p className="text-center text-xs text-muted/50">
          Built with Next.js, Tailwind CSS, and Framer Motion. Shipped fast, as a PM should.
        </p>
      </div>
    </section>
  );
}
