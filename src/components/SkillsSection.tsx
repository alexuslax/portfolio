"use client";

import Section from "@/components/Section";
import SkillCard from "@/components/SkillCard";
import { Database, FileCode2, FileType, Palette, Server, Wind } from "lucide-react";

const skills = [
  {
    title: "HTML",
    level: 90,
    colorClass: "bg-orange-400/90 text-orange-950",
    icon: FileType,
  },
  {
    title: "CSS",
    level: 88,
    colorClass: "bg-blue-400/90 text-blue-950",
    icon: Palette,
  },
  {
    title: "Tailwind CSS",
    level: 91,
    colorClass: "bg-cyan-400/90 text-cyan-950",
    icon: Wind,
  },
  {
    title: "JavaScript",
    level: 86,
    colorClass: "bg-amber-300/95 text-amber-950",
    icon: FileCode2,
  },
  {
    title: "Python",
    level: 82,
    colorClass: "bg-sky-400/90 text-sky-950",
    icon: Server,
  },
  {
    title: "MySQL",
    level: 80,
    colorClass: "bg-indigo-400/90 text-indigo-950",
    icon: Database,
  },
];

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Tools and technologies I use to design, build, and deliver web projects."
    >
      <div className="rounded-3xl border border-zinc-200/60 bg-white/65 p-6 shadow-xl shadow-cyan-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-7">
        <div className="mb-5 flex flex-wrap items-center gap-2 text-xs tracking-[0.16em] text-zinc-500 uppercase dark:text-zinc-400">
          <span>Frontend</span>
          <span className="h-1 w-1 rounded-full bg-zinc-400" />
          <span>Backend</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              level={skill.level}
              colorClass={skill.colorClass}
              icon={skill.icon}
              delay={index * 0.06}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
