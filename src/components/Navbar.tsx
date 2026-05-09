"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateActiveHash = () => {
      const scrollPosition = window.scrollY + 140;
      let nextHash = "#home";

      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (!section) continue;
        const top = (section as HTMLElement).offsetTop;
        if (scrollPosition >= top) nextHash = item.href;
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

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => setMenuOpen(false);
    if (menuOpen) window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/70 shadow-lg shadow-zinc-950/5 backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/60 dark:shadow-cyan-950/15">
        <nav className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              className="font-display text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
            >
              Stephanie Destura
            </a>

            {/* Desktop nav */}
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

            {/* Right side */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              {/* Let's Talk — desktop only */}
              <a
                href="#contact"
                className="hidden rounded-full border border-cyan-700/25 bg-cyan-700/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-900/25 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 dark:border-cyan-300/30 dark:bg-cyan-300 dark:text-zinc-900 dark:hover:bg-cyan-200 md:inline-flex"
              >
                Let&apos;s Talk
              </a>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/80 bg-white/80 text-zinc-700 shadow-sm transition hover:bg-zinc-100 dark:border-white/10 dark:bg-white/10 dark:text-zinc-300 dark:hover:bg-white/15 md:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="h-4 w-4" suppressHydrationWarning />
              </button>
            </div>

          </div>
        </nav>
      </header>

      {/* Mobile dropdown menu */}

        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              />

              {/* Menu panel */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-x-4 top-[4.2rem] z-50 rounded-3xl border border-zinc-200/70 bg-white/90 p-4 shadow-2xl shadow-zinc-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/90 md:hidden"
              >
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <a
                      key={`${item.href}-mobile`}
                      href={item.href}
                      onClick={() => {
                        setActiveHash(item.href);
                        setMenuOpen(false);
                      }}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        activeHash === item.href
                          ? "bg-cyan-700/10 text-cyan-900 dark:bg-cyan-300/10 dark:text-cyan-100"
                          : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}

                  {/* Let's Talk inside mobile menu */}
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="mt-2 rounded-2xl border border-cyan-700/20 bg-cyan-700 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-cyan-600 dark:border-cyan-300/25 dark:bg-cyan-300 dark:text-zinc-900 dark:hover:bg-cyan-200"
                  >
                    Let&apos;s Talk
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      
    </>
  );
}