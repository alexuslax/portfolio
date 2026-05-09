"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";

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
    setFormData((prev) => ({ ...prev, [id]: value }));
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
        message: "Message sent! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again or email me directly.",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const contacts = [
    {
      icon: <Mail className="h-4 w-4" />,
      label: "Email",
      value: "stephdestu@gmail.com",
      href: "mailto:stephdestu@gmail.com",
    },
    {
      icon: <Github className="h-4 w-4" />,
      label: "GitHub",
      value: "github.com/alexuslax",
      href: "https://github.com/alexuslax",
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      label: "LinkedIn",
      value: "stephanie-destura",
      href: "https://www.linkedin.com/in/stephanie-destura-ba18a23ba/",
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      label: "Location",
      value: "Philippines",
      href: null,
    },
  ];

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Let's collaborate on projects and opportunities."
    >
      <div className="grid gap-6 lg:grid-cols-5">

        {/* Left — Info */}
        <div className="lg:col-span-2 flex flex-col gap-4">

          {/* Availability badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 dark:border-emerald-800/40 dark:bg-emerald-900/20">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              Available for opportunities
            </span>
          </div>

          {/* Heading */}
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Let&apos;s work together
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              Open to internships, freelance projects, and collaborations. Drop me a message and I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact links */}
          <div className="mt-2 flex flex-col gap-2">
            {contacts.map((c) =>
              c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-zinc-100 bg-white/80 px-4 py-3 text-sm transition hover:border-cyan-200 hover:bg-cyan-50/50 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-800/40 dark:hover:bg-cyan-900/10"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 transition group-hover:bg-cyan-100 group-hover:text-cyan-700 dark:bg-white/10 dark:text-zinc-400 dark:group-hover:bg-cyan-900/30 dark:group-hover:text-cyan-400">
                    {c.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">{c.label}</p>
                    <p className="truncate font-medium text-zinc-800 dark:text-zinc-200">{c.value}</p>
                  </div>
                </a>
              ) : (
                <div
                  key={c.label}
                  className="flex items-center gap-3 rounded-2xl border border-zinc-100 bg-white/80 px-4 py-3 text-sm dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 dark:bg-white/10 dark:text-zinc-400">
                    {c.icon}
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">{c.label}</p>
                    <p className="font-medium text-zinc-800 dark:text-zinc-200">{c.value}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Right — Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-3 flex flex-col gap-4 rounded-3xl border border-zinc-200/70 bg-white/80 p-6 shadow-xl shadow-zinc-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-none sm:p-8"
        >
          <h3 className="font-display text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Send a message
          </h3>

          {/* Name + Email row */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
                required
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-cyan-400 disabled:opacity-50"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                required
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-cyan-400 disabled:opacity-50"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              value={formData.message}
              onChange={handleChange}
              disabled={isLoading}
              required
              className="resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-cyan-400 disabled:opacity-50"
            />
          </div>

          {/* Status message */}
          {status.type && (
            <div
              className={`rounded-xl border px-4 py-3 text-sm font-medium ${
                status.type === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/30 dark:bg-emerald-900/20 dark:text-emerald-400"
                  : "border-red-200 bg-red-50 text-red-700 dark:border-red-800/30 dark:bg-red-900/20 dark:text-red-400"
              }`}
            >
              {status.message}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-zinc-700 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-cyan-400 dark:text-zinc-900 dark:hover:bg-cyan-300"
          >
            {isLoading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white dark:border-zinc-900/30 dark:border-t-zinc-900" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
}