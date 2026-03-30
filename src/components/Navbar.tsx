"use client";

import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/60 bg-white/65 backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/60">
      <nav className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-display text-lg font-semibold tracking-wide text-zinc-900 dark:text-zinc-100">
            Stephanie Destura
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-zinc-200/70 bg-white/70 px-2 py-1 dark:border-white/10 dark:bg-white/5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-zinc-700 transition duration-300 hover:bg-cyan-700/10 hover:text-cyan-700 dark:text-zinc-300 dark:hover:bg-cyan-300/15 dark:hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="rounded-full border border-cyan-700/30 bg-cyan-700/10 px-4 py-2 text-sm font-medium text-cyan-900 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-700/20 dark:border-cyan-300/50 dark:bg-cyan-300/15 dark:text-cyan-100 dark:hover:bg-cyan-300/25"
            >
              Let&apos;s Talk
            </a>
          </div>

        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden">
          {navItems.map((item) => (
            <a
              key={`${item.href}-mobile`}
              href={item.href}
              className="shrink-0 rounded-full border border-zinc-300/70 bg-white/75 px-3 py-1.5 text-xs font-medium text-zinc-700 transition hover:bg-cyan-700/10 hover:text-cyan-800 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200 dark:hover:bg-cyan-300/10 dark:hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
