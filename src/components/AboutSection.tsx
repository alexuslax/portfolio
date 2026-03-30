import Section from "@/components/Section";

const techStack = ["Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "Python", "MySQL"];

export default function AboutSection() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="A motivated IT student focused on building modern web experiences and practical software solutions."
    >
      <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <article className="rounded-3xl border border-zinc-200/60 bg-white/70 p-7 shadow-xl shadow-cyan-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
            I am an IT student and aspiring web developer who enjoys creating clean interfaces and reliable systems. I combine thoughtful visual design with practical engineering to build products that solve real user needs. I am continuously learning through hands-on projects and collaboration.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200/70 bg-white/75 p-4 dark:border-white/10 dark:bg-white/10">
              <p className="text-xs tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">Focus</p>
              <p className="mt-2 font-medium text-zinc-900 dark:text-zinc-100">UI Engineering</p>
            </div>
            <div className="rounded-2xl border border-zinc-200/70 bg-white/75 p-4 dark:border-white/10 dark:bg-white/10">
              <p className="text-xs tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">Goal</p>
              <p className="mt-2 font-medium text-zinc-900 dark:text-zinc-100">Build Hireable Products</p>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-zinc-200/60 bg-white/70 p-6 shadow-xl shadow-cyan-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <h3 className="mb-4 font-display text-xl font-semibold text-zinc-900 dark:text-zinc-100">Tech Stack</h3>
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-700/30 bg-cyan-700/10 px-3 py-1.5 text-sm text-cyan-800 transition hover:-translate-y-0.5 dark:border-cyan-300/35 dark:bg-cyan-300/10 dark:text-cyan-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </article>
      </div>
    </Section>
  );
}
