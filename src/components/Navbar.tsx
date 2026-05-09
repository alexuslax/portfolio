"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#operations" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const updateActiveHash = () => {
      const scrollPosition = window.scrollY + 140;
      let nextHash = "#home";

      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (!section) {
          continue;
        }

        const top = (section as HTMLElement).offsetTop;
        if (scrollPosition >= top) {
          nextHash = item.href;
        }
      }

      setActiveHash(nextHash);
    };

    updateActiveHash();
    window.addEventListener("scroll", updateActiveHash, { passive: true });
    window.addEventListener("hashchange", updateActiveHash);

    return () => {
      window.removeEventListener("scroll", updateActiveHash);
      window.removeEventListener("hashchange", updateActiveHash);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/70 shadow-lg shadow-zinc-950/5 backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/60 dark:shadow-cyan-950/15">
      <nav className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-display text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Stephanie Destura
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-zinc-200/75 bg-white/75 px-2 py-1 shadow-lg shadow-zinc-900/5 dark:border-white/10 dark:bg-white/5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveHash(item.href)}
                aria-current={activeHash === item.href ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition duration-300 ${
                  activeHash === item.href
                    ? "bg-cyan-700/12 text-cyan-900 dark:bg-cyan-300/15 dark:text-cyan-100"
                    : "text-zinc-700 hover:bg-cyan-700/10 hover:text-cyan-700 dark:text-zinc-300 dark:hover:bg-cyan-300/15 dark:hover:text-cyan-200"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="rounded-full border border-cyan-700/25 bg-cyan-700/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-900/25 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 dark:border-cyan-300/30 dark:bg-cyan-300 dark:text-zinc-900 dark:hover:bg-cyan-200"
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
              onClick={() => setActiveHash(item.href)}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                activeHash === item.href
                  ? "border-cyan-700/30 bg-cyan-700/10 text-cyan-900 dark:border-cyan-300/35 dark:bg-cyan-300/10 dark:text-cyan-100"
                  : "border-zinc-300/70 bg-white/75 text-zinc-700 hover:bg-cyan-700/10 hover:text-cyan-800 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200 dark:hover:bg-cyan-300/10 dark:hover:text-cyan-200"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
