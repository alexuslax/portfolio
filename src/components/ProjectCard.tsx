"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";


type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  accent: string;
  image?: string; 
  delay?: number;
};

export default function ProjectCard({
  title,
  description,
  stack,
  githubUrl,
  demoUrl,
  accent,
  image,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200/60 bg-white shadow-lg shadow-zinc-200/60 transition-all duration-300 ease-[0.22,1,0.36,1] hover:-translate-y-2 hover:shadow-xl hover:shadow-zinc-300/50 dark:border-white/10 dark:bg-zinc-900 dark:shadow-zinc-950/60 dark:hover:shadow-zinc-950/80"
    >
      {/* Gradient banner */}
<div className={`relative h-36 w-full overflow-hidden ${!image ? `bg-gradient-to-br ${accent}` : ""}`}>
  {image ? (
    <Image
      src={image}
      alt={title}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover"
    />
  ) : (
    <>
      <div className="absolute inset-0 opacity-20 mix-blend-overlay" />
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/15 blur-xl" />
      <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-white/10 blur-lg" />
    </>
  )}
  <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
    <ArrowUpRight className="h-4 w-4 text-white" />
  </div>
</div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-bold leading-snug tracking-tight text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {description}
        </p>

        {/* Stack badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {stack.slice(0, 4).map((tech) => (
            <span
              key={`${title}-${tech}`}
              className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
          {stack.length > 4 && (
            <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500">
              +{stack.length - 4}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="my-4 h-px w-full bg-zinc-100 dark:bg-white/10" />

        {/* Links */}
        <div className="flex items-center gap-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-zinc-100"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-cyan-600/20 bg-cyan-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-cyan-500 dark:border-cyan-400/20 dark:bg-cyan-500 dark:hover:bg-cyan-400"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}