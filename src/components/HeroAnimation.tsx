"use client";

import { motion } from "framer-motion";

export default function HeroAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[2rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.24),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.2),transparent_38%),radial-gradient(circle_at_55%_75%,rgba(6,182,212,0.16),transparent_36%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />

      <motion.div
        className="absolute -left-12 top-12 h-36 w-36 rounded-full bg-sky-300/30 blur-2xl"
        animate={{ x: [0, 30, -10, 0], y: [0, -10, 16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-6 top-10 h-32 w-32 rounded-full bg-cyan-300/25 blur-2xl"
        animate={{ x: [0, -20, 8, 0], y: [0, 18, -6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-blue-300/20 blur-3xl"
        animate={{ scale: [1, 1.1, 0.95, 1], opacity: [0.75, 1, 0.8, 0.75] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
