"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "HOME", href: "#hero" },
  { label: "STUDIO", href: "#studio" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "studio", "projects", "services", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-10 py-5 flex items-center justify-between transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(5,5,5,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/Moments city.svg"
            alt="Moments City Studios"
            width={110}
            height={42}
            priority
            className="h-10 w-auto"
            style={{ filter: "drop-shadow(0 0 6px rgba(107,15,26,0.3))" }}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="relative font-inter text-sm font-medium tracking-wider uppercase transition-colors duration-200 flex flex-col items-center gap-1"
                style={{ color: isActive ? "#F5F5F5" : "#A0A0A0" }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-dot"
                    className="w-1 h-1 rounded-full bg-[#6B0F1A]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#F5F5F5] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="font-playfair text-3xl font-semibold uppercase tracking-tight text-[#F5F5F5] hover:text-[#6B0F1A] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
