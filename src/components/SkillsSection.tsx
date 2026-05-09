"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Brush, Code2, FileType, FolderCog, Database } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: FileType,
    color: "bg-orange-400/90 text-orange-950",
    glow: "from-orange-300/20 to-transparent",
    items: ["TypeScript", "JavaScript", "PHP", "HTML", "CSS"],
    span: "sm:col-span-3",
  },
  {
    title: "Frameworks & Libraries",
    icon: Code2,
    color: "bg-blue-400/90 text-blue-950",
    glow: "from-blue-300/20 to-transparent",
    items: ["Next.js", "React"],
    span: "sm:col-span-1",
  },
  {
    title: "Database",
    icon: Database,
    color: "bg-emerald-400/90 text-emerald-950",
    glow: "from-emerald-300/20 to-transparent",
    items: ["MySQL", "phpMyAdmin"],
    span: "sm:col-span-1",
  },
  {
    title: "Styling & UI",
    icon: Brush,
    color: "bg-cyan-400/90 text-cyan-950",
    glow: "from-cyan-300/20 to-transparent",
    items: ["Tailwind CSS", "Framer Motion", "Lucide Icons"],
    span: "sm:col-span-1",
  },
  {
    title: "Tools & Workflow",
    icon: FolderCog,
    color: "bg-amber-400/90 text-amber-950",
    glow: "from-amber-300/20 to-transparent",
    items: ["Git", "GitHub", "VS Code", "XAMPP", "npm"],
    span: "sm:col-span-3",
  },
];

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Tools and technologies I use to design, build, and deliver web projects."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className={`relative overflow-hidden rounded-3xl border border-zinc-200/60 bg-white/75 p-5 shadow-lg shadow-cyan-900/8 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 ${group.span}`}
            >
              {/* Glow */}
              <div className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${group.glow} blur-2xl`} />

              {/* Header */}
              <div className="relative flex items-center gap-3 mb-4">
                <div className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${group.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <p className="font-display text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {group.title}
                </p>
              </div>

              {/* Tags */}
              <div className="relative flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-200/80 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-white/10 dark:bg-white/8 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}