"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  accent: string;
  delay?: number;
};

export default function ProjectCard({
  title,
  description,
  stack,
  githubUrl,
  demoUrl,
  accent,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/75 p-5 shadow-xl shadow-cyan-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
    >
      <div className={`mb-5 h-28 rounded-2xl bg-linear-to-br ${accent}`} />

      <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={`${title}-${tech}`}
            className="rounded-full border border-cyan-700/25 bg-cyan-700/10 px-2.5 py-1 text-xs font-medium text-cyan-800 dark:border-cyan-300/30 dark:bg-cyan-300/10 dark:text-cyan-100"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 md:hidden">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300/80 bg-white/85 px-3.5 py-2 text-xs font-semibold text-zinc-900 shadow-md shadow-zinc-900/5 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-zinc-100 dark:hover:bg-white/15"
        >
          <Code2 className="h-3.5 w-3.5" />
          GitHub
        </a>
        {demoUrl ? (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-700/20 bg-cyan-700 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-cyan-900/25 transition hover:-translate-y-0.5 hover:bg-cyan-600 dark:border-cyan-300/25 dark:bg-cyan-300 dark:text-zinc-900 dark:hover:bg-cyan-200"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            View Project
          </a>
        ) : (
          <span className="text-xs text-zinc-600 dark:text-zinc-400">Demo coming soon</span>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 hidden items-end justify-between rounded-3xl bg-linear-to-t from-zinc-950/75 via-zinc-950/5 to-transparent p-5 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:opacity-100 md:flex">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/30"
        >
          <Code2 className="h-3.5 w-3.5" />
          GitHub
        </a>

        {demoUrl ? (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-xs font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:bg-cyan-200"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            View Project
          </a>
        ) : (
          <span className="rounded-full bg-white/15 px-4 py-2 text-xs text-white backdrop-blur-md">
            Demo coming soon
          </span>
        )}
      </div>
    </motion.article>
  );
}
