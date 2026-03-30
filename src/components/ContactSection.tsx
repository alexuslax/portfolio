import Section from "@/components/Section";
import { BriefcaseBusiness, Code2, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Let&apos;s collaborate on projects and opportunities."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="space-y-4 rounded-3xl border border-zinc-200/60 bg-white/70 p-6 shadow-xl shadow-cyan-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Get in touch</h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            Feel free to reach out through email or GitHub. I&apos;m open to collaborations,
            internships, and freelance opportunities.
          </p>
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <p>
              Email: <a className="text-cyan-700 hover:underline dark:text-cyan-300" href="mailto:stephanie.destura@email.com">stephanie.destura@email.com</a>
            </p>
            <p>
              GitHub: <a className="text-cyan-700 hover:underline dark:text-cyan-300" href="https://github.com/" target="_blank" rel="noopener noreferrer">github.com/your-username</a>
            </p>
            <p>
              LinkedIn: <a className="text-cyan-700 hover:underline dark:text-cyan-300" href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-profile</a>
            </p>
          </div>

          <div className="pt-2">
            <p className="mb-3 text-xs tracking-[0.16em] text-zinc-500 uppercase dark:text-zinc-400">Connect</p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:stephanie.destura@email.com"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300/70 bg-white/80 text-zinc-800 shadow-md shadow-zinc-900/10 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-zinc-100"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300/70 bg-white/80 text-zinc-800 shadow-md shadow-zinc-900/10 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-zinc-100"
                aria-label="GitHub"
              >
                <Code2 className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300/70 bg-white/80 text-zinc-800 shadow-md shadow-zinc-900/10 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-zinc-100"
                aria-label="LinkedIn"
              >
                <BriefcaseBusiness className="h-4 w-4" />
              </a>
            </div>
          </div>
        </article>

        <form className="space-y-4 rounded-3xl border border-zinc-200/60 bg-white/70 p-6 shadow-xl shadow-cyan-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-zinc-700 dark:text-zinc-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-zinc-300/80 bg-white/70 px-4 py-2.5 text-zinc-900 outline-none transition focus:border-cyan-700 dark:border-white/20 dark:bg-zinc-900/40 dark:text-zinc-100 dark:focus:border-cyan-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-zinc-700 dark:text-zinc-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-zinc-300/80 bg-white/70 px-4 py-2.5 text-zinc-900 outline-none transition focus:border-cyan-700 dark:border-white/20 dark:bg-zinc-900/40 dark:text-zinc-100 dark:focus:border-cyan-300"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-zinc-700 dark:text-zinc-300">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Write your message..."
              className="w-full rounded-xl border border-zinc-300/80 bg-white/70 px-4 py-2.5 text-zinc-900 outline-none transition focus:border-cyan-700 dark:border-white/20 dark:bg-zinc-900/40 dark:text-zinc-100 dark:focus:border-cyan-300"
            />
          </div>

          <button
            type="button"
            className="rounded-full bg-cyan-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 active:translate-y-0 active:scale-[0.99] dark:bg-cyan-300 dark:text-zinc-900 dark:hover:bg-cyan-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}
