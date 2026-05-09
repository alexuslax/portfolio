"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type SkillCardProps = {
  title: string;
  items: string[];
  colorClass: string;
  icon: LucideIcon;
  delay?: number;
};

export default function SkillCard({
  title,
  items,
  colorClass,
  icon: Icon,
  delay = 0,
}: SkillCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-zinc-200/70 bg-white/80 p-5 shadow-xl shadow-cyan-950/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/8"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${colorClass}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{title}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-300/75 bg-white/90 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-white/15 dark:bg-white/10 dark:text-zinc-200"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
