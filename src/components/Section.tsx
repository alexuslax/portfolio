"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="scroll-mt-28"
    >
      <div className="mb-9 space-y-3">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          {title}
        </h2>
        {subtitle ? <p className="max-w-2xl text-zinc-700 dark:text-zinc-400">{subtitle}</p> : null}
      </div>
      {children}
    </motion.section>
  );
}
