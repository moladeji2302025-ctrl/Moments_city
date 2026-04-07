"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "3d-cgi",
    name: "3D / CGI",
    description: "Photorealistic renders and immersive 3D worlds built frame by frame.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 3L33 11.5V24.5L18 33L3 24.5V11.5L18 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 3V33" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 11.5L18 20L33 11.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "motion-vfx",
    name: "MOTION / VFX",
    description: "Kinetic energy and visual effects that bend reality and drive narrative.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 18 C6 18 10 10 18 10 C26 10 30 18 30 18 C30 18 26 26 18 26 C10 26 6 18 6 18Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 8 L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M33 8 L28 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 3 L18 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "2d-frame",
    name: "2D / FRAME",
    description: "Hand-crafted frame-by-frame animation with soul, texture, and precision.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="28" height="20" rx="0" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 28 L10 24 L16 28 L22 22 L28 26 L32 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="4" y1="32" x2="32" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "mixed",
    name: "MIXED",
    description: "Hybrid techniques that blur the line between dimensions and disciplines.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="18" r="9" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="23" cy="18" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#0a0a0a] px-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2
            className="font-playfair font-semibold uppercase"
            style={{ fontSize: "2.5rem", letterSpacing: "-0.02em", color: "#F5F5F5" }}
          >
            SERVICES
          </h2>
          <div className="bg-[#6B0F1A] mt-3" style={{ width: 40, height: 2 }} />
        </motion.div>

        {/* Services Grid — 2x2 desktop, 1x4 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="flex flex-col items-center text-center gap-6 p-8 group cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Circle icon container */}
              <motion.div
                className="flex items-center justify-center transition-all duration-200"
                style={{
                  width: 120,
                  height: 120,
                  border: "1px solid #2a2a2a",
                  borderRadius: "50%",
                  color: "#A0A0A0",
                }}
                whileHover={{
                  borderColor: "#6B0F1A",
                  color: "#6B0F1A",
                  scale: 1.05,
                }}
                transition={{ duration: 0.2 }}
              >
                {service.icon}
              </motion.div>

              {/* Service name */}
              <h3
                className="font-inter font-semibold uppercase tracking-wider"
                style={{ fontSize: "1rem", letterSpacing: "0.1em", color: "#F5F5F5" }}
              >
                {service.name}
              </h3>

              {/* Description */}
              <p
                className="font-inter text-[#A0A0A0]"
                style={{ fontSize: "0.875rem", lineHeight: 1.6 }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
