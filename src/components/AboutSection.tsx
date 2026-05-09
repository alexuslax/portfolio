import Section from "@/components/Section";

export default function AboutSection() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="A motivated IT student focused on building modern web experiences and practical software solutions."
    >
      <article className="relative overflow-hidden rounded-3xl border border-zinc-200/60 bg-white/75 p-6 shadow-2xl shadow-cyan-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-7 lg:p-8">
        <div className="pointer-events-none absolute -left-20 -top-16 h-44 w-44 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-400/20" />
        <div className="pointer-events-none absolute -bottom-20 right-0 h-52 w-52 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-400/20" />

        <div className="relative flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-cyan-700/25 bg-cyan-700/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-900 dark:border-cyan-300/35 dark:bg-cyan-300/10 dark:text-cyan-100">
            Full-Stack Path
          </span>
          <span className="rounded-full border border-zinc-300/70 bg-white/80 px-3 py-1 text-xs font-medium tracking-wide text-zinc-700 dark:border-white/15 dark:bg-white/10 dark:text-zinc-200">
            Continuous Learner
          </span>
        </div>

        <div className="relative mt-5 grid gap-5 lg:grid-cols-[1.25fr_0.95fr]">
          <div className="rounded-2xl border border-zinc-200/70 bg-white/80 p-5 dark:border-white/10 dark:bg-white/10 sm:p-6">
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-300">
              I am an Information Technology graduate specializing in full-stack web development. I build responsive, scalable, and user-friendly applications using modern technologies such as Next.js, TypeScript, and Tailwind CSS.
            </p>

            <p className="mt-4 text-justify leading-relaxed text-zinc-700 dark:text-zinc-300">
              I focus on creating clean, efficient solutions that improve user experience and solve real-world problems. I am continuously learning and aiming to grow as a developer in a professional environment.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-zinc-200/70 bg-white/85 p-5 dark:border-white/10 dark:bg-white/10">
              <p className="text-xs tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">Focus</p>
              <p className="mt-2 font-display text-lg font-semibold text-zinc-900 dark:text-zinc-100">Full-Stack Web Development</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Building maintainable interfaces and practical systems from idea to deployment.</p>
            </div>

            <div className="rounded-2xl border border-zinc-200/70 bg-white/85 p-5 dark:border-white/10 dark:bg-white/10">
              <p className="text-xs tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">Goal</p>
              <p className="mt-2 font-display text-lg font-semibold text-zinc-900 dark:text-zinc-100">Build Production-Ready Applications</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Delivering reliable, polished products that solve real business and user needs.</p>
            </div>
          </div>
        </div>
      </article>
    </Section>
  );
}
