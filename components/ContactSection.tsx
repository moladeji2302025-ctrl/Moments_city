"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INITIAL_FRAMES_RENDERED } from "@/lib/constants";

const EMAIL = "HELLO@STUDIOPLACEHOLDER.COM";

function FrameCounter() {
  const [frame, setFrame] = useState(INITIAL_FRAMES_RENDERED);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-space-grotesk text-[#6B0F1A] text-sm tracking-wider">
      FRAME {frame.toLocaleString()}
    </span>
  );
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "3D/CGI",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — nothing to do silently; inform the user via the tooltip state
      setCopied(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="bg-[#050505] px-10 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
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
            CONTACT
          </h2>
          <div className="bg-[#6B0F1A] mt-3" style={{ width: 40, height: 2 }} />
        </motion.div>

        <motion.div
          className="space-y-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Email + copy */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span
              className="font-space-grotesk text-[#F5F5F5]"
              style={{ fontSize: "1.25rem", letterSpacing: "0.05em" }}
            >
              {EMAIL}
            </span>
            <div className="relative">
              <button
                onClick={handleCopy}
                className="font-inter text-xs uppercase border border-[#6B0F1A] px-3 py-1 text-[#6B0F1A] tracking-wider transition-all duration-200 hover:bg-[#6B0F1A] hover:text-[#050505]"
                style={{ borderRadius: 0 }}
              >
                COPY
              </button>
              <AnimatePresence>
                {copied && (
                  <motion.div
                    className="absolute -top-8 left-1/2 -translate-x-1/2 font-inter text-xs bg-[#6B0F1A] text-[#F5F0F0] px-2 py-1 uppercase tracking-wider whitespace-nowrap"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    COPIED
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-inter text-xs text-[#A0A0A0] uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="font-inter text-[#F5F5F5] px-3 py-3 bg-[#111111] border border-[#2a2a2a] outline-none focus:border-[#6B0F1A] transition-colors duration-200"
                  style={{ borderRadius: 0 }}
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-inter text-xs text-[#A0A0A0] uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="font-inter text-[#F5F5F5] px-3 py-3 bg-[#111111] border border-[#2a2a2a] outline-none focus:border-[#6B0F1A] transition-colors duration-200"
                  style={{ borderRadius: 0 }}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-inter text-xs text-[#A0A0A0] uppercase tracking-wider">
                Project Type
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="font-inter text-[#F5F5F5] px-3 py-3 bg-[#111111] border border-[#2a2a2a] outline-none focus:border-[#6B0F1A] transition-colors duration-200 appearance-none"
                style={{ borderRadius: 0 }}
              >
                <option value="3D/CGI">3D/CGI</option>
                <option value="2D/Frame">2D/Frame</option>
                <option value="Motion/VFX">Motion/VFX</option>
                <option value="Mixed">Mixed</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-inter text-xs text-[#A0A0A0] uppercase tracking-wider">
                Message
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="font-inter text-[#F5F5F5] px-3 py-3 bg-[#111111] border border-[#2a2a2a] outline-none focus:border-[#6B0F1A] transition-colors duration-200 resize-none"
                style={{ borderRadius: 0 }}
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="flex items-center gap-6">
              <button
                type="submit"
                className="font-inter text-sm uppercase tracking-wider border border-[#6B0F1A] px-8 py-3 text-[#6B0F1A] transition-all duration-200 hover:bg-[#6B0F1A] hover:text-[#050505]"
                style={{ borderRadius: 0 }}
              >
                SEND MESSAGE
              </button>
              <AnimatePresence>
                {submitted && (
                  <motion.span
                    className="font-space-grotesk text-sm text-[#6B0F1A] uppercase tracking-wider"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    MESSAGE SENT ✓
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-24 pt-8 border-t border-[#2a2a2a]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Social icons placeholder */}
            <div className="flex items-center gap-6">
              {["IG", "TW", "VIM", "LI"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-space-grotesk text-xs text-[#A0A0A0] hover:text-[#6B0F1A] uppercase tracking-wider transition-colors duration-200"
                >
                  {social}
                </a>
              ))}
            </div>

            {/* Frame counter */}
            <FrameCounter />

            {/* Copyright */}
            <p className="font-inter text-xs text-[#A0A0A0] tracking-wider">
              © {new Date().getFullYear()} Moments city Studios. ALL RIGHTS RESERVED.
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
