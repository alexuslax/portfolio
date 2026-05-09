"use client";

import Section from "@/components/Section";
import SkillCard from "@/components/SkillCard";
import { Brush, Code2, FileType, FolderCog } from "lucide-react";

const skills = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS"],
    colorClass: "bg-orange-400/90 text-orange-950",
    icon: FileType,
  },
  {
    title: "Frameworks & Libraries",
    items: ["Next.js", "React"],
    colorClass: "bg-blue-400/90 text-blue-950",
    icon: Code2,
  },
  {
    title: "Styling & UI",
    items: ["Tailwind CSS", "Framer Motion", "Lucide Icons"],
    colorClass: "bg-cyan-400/90 text-cyan-950",
    icon: Brush,
  },
  {
    title: "Tools",
    items: ["ESLint", "PostCSS", "npm"],
    colorClass: "bg-amber-300/95 text-amber-950",
    icon: FolderCog,
  },
];

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Tools and technologies I use to design, build, and deliver web projects."
    >
      <div className="rounded-3xl border border-zinc-200/70 bg-white/75 p-6 shadow-2xl shadow-cyan-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-7">
        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              items={skill.items}
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
