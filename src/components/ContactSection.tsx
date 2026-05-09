"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { BriefcaseBusiness, Code2, Mail } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "An error occurred. Please try again or contact me directly at stephdestu@gmail.com",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Let&apos;s collaborate on projects and opportunities."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="space-y-4 rounded-3xl border border-zinc-200/70 bg-white/75 p-6 shadow-2xl shadow-cyan-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Get in touch</h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            Feel free to reach out through email or GitHub. I&apos;m open to collaborations,
            internships, and freelance opportunities.
          </p>
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <p>
              Email: <a className="text-cyan-700 hover:underline dark:text-cyan-300" href="mailto:stephdestu@email.com">stephdestu@email.com</a>
            </p>
            <p>
              GitHub: <a className="text-cyan-700 hover:underline dark:text-cyan-300" href="https://github.com/alexuslax" target="_blank" rel="noopener noreferrer">github.com/alexuslax</a>
              </p>
              <p>
                LinkedIn: <a className="text-cyan-700 hover:underline dark:text-cyan-300" href="https://www.linkedin.com/in/stephanie-destura-ba18a23ba/" target="_blank" rel="noopener noreferrer">linkedin.com/in/stephanie-destura-ba18a23ba/</a>
            </p>
          </div>

          <div className="pt-2">
            <p className="mb-3 text-xs tracking-[0.16em] text-zinc-500 uppercase dark:text-zinc-400">Connect</p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:stephanie.destura@email.com"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300/70 bg-white/85 text-zinc-800 shadow-md shadow-zinc-900/10 transition hover:-translate-y-0.5 hover:border-cyan-700/30 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-zinc-100 dark:hover:border-cyan-300/30 dark:hover:bg-white/15"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300/70 bg-white/85 text-zinc-800 shadow-md shadow-zinc-900/10 transition hover:-translate-y-0.5 hover:border-cyan-700/30 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-zinc-100 dark:hover:border-cyan-300/30 dark:hover:bg-white/15"
                aria-label="GitHub"
              >
                <Code2 className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300/70 bg-white/85 text-zinc-800 shadow-md shadow-zinc-900/10 transition hover:-translate-y-0.5 hover:border-cyan-700/30 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-zinc-100 dark:hover:border-cyan-300/30 dark:hover:bg-white/15"
                aria-label="LinkedIn"
              >
                <BriefcaseBusiness className="h-4 w-4" />
              </a>
            </div>
          </div>
        </article>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-zinc-200/70 bg-white/75 p-6 shadow-2xl shadow-cyan-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-zinc-700 dark:text-zinc-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full rounded-xl border border-zinc-300/80 bg-white/85 px-4 py-2.5 text-zinc-900 outline-none transition focus:border-cyan-700 focus:ring-4 focus:ring-cyan-700/10 dark:border-white/20 dark:bg-zinc-900/40 dark:text-zinc-100 dark:focus:border-cyan-300 dark:focus:ring-cyan-300/10 disabled:opacity-50"
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
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full rounded-xl border border-zinc-300/80 bg-white/85 px-4 py-2.5 text-zinc-900 outline-none transition focus:border-cyan-700 focus:ring-4 focus:ring-cyan-700/10 dark:border-white/20 dark:bg-zinc-900/40 dark:text-zinc-100 dark:focus:border-cyan-300 dark:focus:ring-cyan-300/10 disabled:opacity-50"
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
              value={formData.message}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full rounded-xl border border-zinc-300/80 bg-white/85 px-4 py-2.5 text-zinc-900 outline-none transition focus:border-cyan-700 focus:ring-4 focus:ring-cyan-700/10 dark:border-white/20 dark:bg-zinc-900/40 dark:text-zinc-100 dark:focus:border-cyan-300 dark:focus:ring-cyan-300/10 disabled:opacity-50"
            />
          </div>

          {status.type && (
            <div
              className={`rounded-lg border px-4 py-3 text-sm ${
                status.type === "success"
                  ? "border-green-200 bg-green-50 text-green-800 dark:border-green-900/30 dark:bg-green-900/20 dark:text-green-300"
                  : "border-red-200 bg-red-50 text-red-800 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-300"
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center rounded-full border border-cyan-700/20 bg-cyan-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-900/25 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-xl hover:shadow-cyan-900/30 active:translate-y-0 active:scale-[0.99] dark:border-cyan-300/25 dark:bg-cyan-300 dark:text-zinc-900 dark:hover:bg-cyan-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-cyan-700 dark:disabled:hover:bg-cyan-300"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </Section>
  );
}
