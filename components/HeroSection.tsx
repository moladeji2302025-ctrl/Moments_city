"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const titleText = "STUDIO PLACEHOLDER";

export default function HeroSection() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowScroll(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-60 pointer-events-none" />

      {/* Animated background dots/particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#6B0F1A]"
            style={{
              width: (i % 3) + 1,
              height: (i % 3) + 1,
              left: `${(i * 5.1) % 100}%`,
              top: `${(i * 4.7 + 10) % 100}%`,
              opacity: 0.1,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: (i % 4) + 6,
              repeat: Infinity,
              delay: (i % 5),
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-10">
        {/* H1 with staggered letters */}
        <motion.h1
          className="font-playfair font-bold uppercase tracking-tight leading-none"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            letterSpacing: "-0.02em",
            color: "#F5F5F5",
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {titleText.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Crimson line */}
        <motion.div
          className="bg-[#6B0F1A]"
          style={{ width: 80, height: 2, marginTop: 24, marginBottom: 24 }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
        />

        {/* Subheading */}
        <motion.p
          className="font-inter text-[#A0A0A0] uppercase tracking-wider"
          style={{ fontSize: "1.25rem", letterSpacing: "0.2em" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          3D · 2D · VFX · MOTION
        </motion.p>

        {/* Frame counter label */}
        <motion.p
          className="font-space-grotesk text-[#6B0F1A] uppercase tracking-wider mt-4"
          style={{ fontSize: "0.875rem", letterSpacing: "0.2em" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          FRAME 001
        </motion.p>
      </div>

      {/* Scroll indicator */}
      {showScroll && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-inter text-xs tracking-widest text-[#A0A0A0] uppercase">
            Scroll
          </span>
          <motion.div
            className="w-px h-8 bg-[#A0A0A0]"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </section>
  );
}
