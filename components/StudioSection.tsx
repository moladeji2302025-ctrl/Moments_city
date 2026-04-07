"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function StudioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);
  const countTarget = 124567;

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();
      const tick = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * countTarget));
        if (progress < 1) requestAnimationFrame(tick);
        else setCount(countTarget);
      };
      requestAnimationFrame(tick);
    }
  }, [isInView]);

  return (
    <section
      id="studio"
      ref={ref}
      className="bg-[#0a0a0a] px-10 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left column — 60% */}
          <div className="lg:col-span-3 space-y-8">
            {/* Title */}
            <div>
              <h2
                className="font-playfair font-semibold uppercase"
                style={{ fontSize: "2.5rem", letterSpacing: "-0.02em", color: "#F5F5F5" }}
              >
                STUDIO
              </h2>
              <div className="bg-[#6B0F1A] mt-3" style={{ width: 40, height: 2 }} />
            </div>

            {/* Body text */}
            <div className="space-y-5">
              <p
                className="font-inter text-[#E0E0E0] leading-relaxed"
                style={{ fontSize: "1.125rem", lineHeight: 1.7 }}
              >
                We are a collective of obsessive storytellers, technical artists, and frame-by-frame
                dreamers. Every project begins with a single question: <em>what does this story feel like?</em>{" "}
                From that moment, we build worlds — pixel by pixel, frame by frame — until the answer
                breathes on screen.
              </p>
              <p
                className="font-inter text-[#E0E0E0] leading-relaxed"
                style={{ fontSize: "1.125rem", lineHeight: 1.7 }}
              >
                Our process is cinematic by design. We blend 3D/CGI precision with 2D expressiveness,
                layering motion graphics and VFX to create work that transcends medium. We don&apos;t chase
                trends — we set the tempo.
              </p>
              <p
                className="font-inter text-[#E0E0E0] leading-relaxed"
                style={{ fontSize: "1.125rem", lineHeight: 1.7 }}
              >
                Based at the intersection of art and engineering, STUDIO PLACEHOLDER has spent years
                refining a singular aesthetic: dark, deliberate, and undeniably alive. Every frame is
                a deliberate choice. Every sequence is a statement.
              </p>
            </div>

            {/* Frame counter */}
            <motion.div
              className="font-space-grotesk text-[#6B0F1A] uppercase tracking-wider"
              style={{ fontSize: "0.875rem", letterSpacing: "0.1em" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              FRAMES RENDERED: {count.toLocaleString()}
            </motion.div>
          </div>

          {/* Right column — 40% */}
          <div className="lg:col-span-2">
            <motion.div
              className="relative overflow-hidden cursor-pointer"
              style={{ borderRadius: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Placeholder image/video area */}
              <div
                className="w-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center"
                style={{ aspectRatio: "4/5", minHeight: 400 }}
              >
                {/* Silhouette placeholder */}
                <div className="flex flex-col items-center gap-4 opacity-30">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="20" r="12" stroke="#F5F5F5" strokeWidth="1.5" />
                    <path d="M16 72 C16 52 64 52 64 72" stroke="#F5F5F5" strokeWidth="1.5" />
                    <path d="M40 32 L40 56" stroke="#F5F5F5" strokeWidth="1.5" />
                    <path d="M24 44 L56 44" stroke="#F5F5F5" strokeWidth="1.5" />
                  </svg>
                  <span className="font-space-grotesk text-xs text-[#A0A0A0] tracking-widest uppercase">
                    Behind the Scenes
                  </span>
                </div>
              </div>
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
