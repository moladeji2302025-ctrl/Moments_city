"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Category = "ALL" | "3D/CGI" | "2D/FRAME" | "MOTION/VFX";

const projects = [
  {
    id: 1,
    title: "NEON GENESIS",
    category: "3D/CGI",
    size: "large-horizontal",
    gradient: "from-[#1a0a0a] to-[#0a0505]",
  },
  {
    id: 2,
    title: "ECHO CHAMBER",
    category: "MOTION/VFX",
    size: "square",
    gradient: "from-[#111111] to-[#0a0a0a]",
  },
  {
    id: 3,
    title: "FRAME 47",
    category: "2D/FRAME",
    size: "vertical",
    gradient: "from-[#0d0a10] to-[#070507]",
  },
  {
    id: 4,
    title: "PARALLAX",
    category: "3D/CGI",
    size: "square",
    gradient: "from-[#0a0d10] to-[#050708]",
  },
  {
    id: 5,
    title: "PHANTOM WAVE",
    category: "MOTION/VFX",
    size: "horizontal",
    gradient: "from-[#100a0a] to-[#080505]",
  },
  {
    id: 6,
    title: "STILL LIFE",
    category: "2D/FRAME",
    size: "square",
    gradient: "from-[#111111] to-[#0a0a0a]",
  },
];

const filters: Category[] = ["ALL", "3D/CGI", "2D/FRAME", "MOTION/VFX"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Category>("ALL");

  const filtered =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="bg-[#050505] px-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2
            className="font-playfair font-semibold uppercase"
            style={{ fontSize: "2.5rem", letterSpacing: "-0.02em", color: "#F5F5F5" }}
          >
            PROJECTS
          </h2>
          <div className="bg-[#6B0F1A] mt-3" style={{ width: 40, height: 2 }} />
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="font-inter text-sm uppercase tracking-wider pb-1 transition-colors duration-200"
                style={{
                  color: isActive ? "#6B0F1A" : "#A0A0A0",
                  borderBottom: isActive ? "1px solid #6B0F1A" : "1px solid transparent",
                }}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        {/* Kinetic Mosaic Grid */}
        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "280px",
          }}
        >
          {filtered.map((project, i) => {
            const gridStyles: Record<string, React.CSSProperties> = {
              "large-horizontal": { gridColumn: "span 2", gridRow: "span 1" },
              square: { gridColumn: "span 1", gridRow: "span 1" },
              vertical: { gridColumn: "span 1", gridRow: "span 2" },
              horizontal: { gridColumn: "span 2", gridRow: "span 1" },
            };

            return (
              <motion.div
                key={project.id}
                className="relative overflow-hidden cursor-pointer group"
                style={{
                  backgroundColor: "#111111",
                  ...(gridStyles[project.size] || {}),
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Thumbnail gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                />

                {/* Crimson border on hover */}
                <motion.div
                  className="absolute inset-0 border border-[#6B0F1A] pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-[#050505] pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-[#6B0F1A] mb-2" style={{ width: 24, height: 2 }} />
                    <h3
                      className="font-inter font-bold text-[#F5F5F5]"
                      style={{ fontSize: "1.25rem" }}
                    >
                      {project.title}
                    </h3>
                  </motion.div>
                </div>

                {/* VIEW CASE */}
                <motion.div
                  className="absolute bottom-6 right-6 font-inter text-[#6B0F1A] uppercase"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  VIEW CASE →
                </motion.div>

                {/* Category badge */}
                <div
                  className="absolute top-4 left-4 font-space-grotesk text-[#A0A0A0] uppercase"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
                >
                  {project.category}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
