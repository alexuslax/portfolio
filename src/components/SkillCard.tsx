"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type SkillCardProps = {
  title: string;
  level: number;
  colorClass: string;
  icon: LucideIcon;
  delay?: number;
};

export default function SkillCard({
  title,
  level,
  colorClass,
  icon: Icon,
  delay = 0,
}: SkillCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-white/55 p-4 shadow-xl shadow-cyan-950/5 backdrop-blur-xl dark:bg-white/5"
    >
      <div className="mb-3 flex items-center gap-3">
        <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${colorClass}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">{title}</p>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">Proficiency {level}%</p>
        </div>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200/80 dark:bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: delay + 0.15 }}
          className={`h-full rounded-full ${colorClass}`}
        />
      </div>
    </motion.article>
  );
}
