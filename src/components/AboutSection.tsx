import Section from "@/components/Section";
import { GraduationCap, Code2, Layers, Star } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { label: "Projects Built", value: "2+", icon: <Layers className="h-4 w-4" /> },
    { label: "Technologies", value: "10+", icon: <Code2 className="h-4 w-4" /> },
    { label: "Graduate", value: "2026", icon: <GraduationCap className="h-4 w-4" /> },
    { label: "Latin Honor", value: "Cum Laude", icon: <Star className="h-4 w-4" /> },
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="A motivated IT graduate focused on building modern web experiences and practical software solutions."
    >
      <div className="grid gap-4 lg:grid-cols-3">

        {/* Left — Bio */}
        <div className="lg:col-span-2 flex flex-col gap-4">

          {/* Bio card */}
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200/60 bg-white/75 p-6 shadow-lg shadow-cyan-900/8 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-7">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-400/15" />
            <div className="pointer-events-none absolute -bottom-10 right-0 h-40 w-40 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-400/15" />

            <div className="relative flex flex-wrap gap-2 mb-5">
              <span className="rounded-full border border-cyan-700/25 bg-cyan-700/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-900 dark:border-cyan-300/35 dark:bg-cyan-300/10 dark:text-cyan-100">
                Full-Stack Path
              </span>
              <span className="rounded-full border border-zinc-300/70 bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700 dark:border-white/15 dark:bg-white/10 dark:text-zinc-200">
                Continuous Learner
              </span>
            </div>

            <p className="relative leading-relaxed text-zinc-700 dark:text-zinc-300">
              I am an Information Technology graduate specializing in full-stack web development. I build responsive, scalable, and user-friendly applications using modern technologies such as Next.js, TypeScript, and Tailwind CSS.
            </p>
            <p className="relative mt-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
              I focus on creating clean, efficient solutions that improve user experience and solve real-world problems. I am continuously learning and aiming to grow as a developer in a professional environment.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-zinc-200/60 bg-white/75 p-4 text-center shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-700/10 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-300">
                  {stat.icon}
                </span>
                <p className="font-display text-base font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                  {stat.value}
                </p>
                <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Education + Focus + Goal */}
        <div className="flex flex-col gap-4">

          {/* Education */}
          <div className="rounded-3xl border border-zinc-200/60 bg-white/75 p-5 shadow-lg shadow-cyan-900/8 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-700/10 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-300">
                <GraduationCap className="h-4 w-4" />
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Education</p>
            </div>
            <p className="font-display text-base font-bold text-zinc-900 dark:text-zinc-100">
              BS Information Technology
            </p>
            <p className="mt-1 text-sm font-medium text-cyan-700 dark:text-cyan-300">
              University of Eastern Philippines
            </p>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              June 2026 · Cum Laude
            </p>
          </div>

          {/* Focus */}
          <div className="rounded-3xl border border-zinc-200/60 bg-white/75 p-5 shadow-lg shadow-cyan-900/8 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">Focus</p>
            <p className="font-display text-base font-bold text-zinc-900 dark:text-zinc-100">
              Full-Stack Web Development
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Building maintainable interfaces and practical systems from idea to deployment.
            </p>
          </div>

          {/* Goal */}
          <div className="rounded-3xl border border-zinc-200/60 bg-white/75 p-5 shadow-lg shadow-cyan-900/8 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">Goal</p>
            <p className="font-display text-base font-bold text-zinc-900 dark:text-zinc-100">
              Build Production-Ready Apps
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Delivering reliable, polished products that solve real business and user needs.
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
}