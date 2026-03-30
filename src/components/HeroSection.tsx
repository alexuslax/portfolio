"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroAnimation from "@/components/HeroAnimation";
import TypingText from "@/components/TypingText";

export default function HeroSection() {
  return (
    <section id="home" className="scroll-mt-24 pt-28 sm:pt-36">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[2rem] border border-zinc-200/70 bg-white/70 p-6 shadow-2xl shadow-cyan-900/10 backdrop-blur-xl sm:p-10 dark:border-white/15 dark:bg-[#0c1220]/70 dark:shadow-cyan-900/15"
      >
        <HeroAnimation />

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-700/20 bg-cyan-700/10 px-4 py-1.5 text-xs tracking-[0.2em] text-cyan-800 uppercase dark:border-cyan-300/40 dark:bg-cyan-300/10 dark:text-cyan-200">
              Portfolio 2026
            </p>

            <h1 className="font-display text-4xl leading-tight font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-100">
              Stephanie Drew Flores Destura
            </h1>

            <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
              <TypingText
                words={["Web Developer", "IT Student", "Frontend Enthusiast"]}
                className="font-semibold text-cyan-800 dark:text-cyan-200"
              />
            </p>

            <p className="mt-5 max-w-2xl text-zinc-700 sm:text-lg dark:text-zinc-300">
              I craft polished interfaces and practical systems with a focus on user experience, speed, and clean architecture. I build products that feel clear, modern, and dependable.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group rounded-full bg-cyan-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-900/25 transition duration-300 hover:-translate-y-1 hover:bg-cyan-600 active:translate-y-0 dark:bg-cyan-300 dark:text-zinc-900 dark:hover:bg-cyan-200"
              >
                View Projects
                <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="rounded-full border border-zinc-300/70 bg-white/75 px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-zinc-900/5 transition duration-300 hover:-translate-y-1 hover:bg-white active:translate-y-0 dark:border-white/25 dark:bg-white/10 dark:text-zinc-100 dark:hover:bg-white/15"
              >
                Contact Me
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto w-full max-w-xs"
          >
            <div className="relative rounded-[2rem] border border-white/20 bg-white/60 p-3 shadow-2xl shadow-cyan-950/15 backdrop-blur-xl dark:bg-white/10">
              <div className="absolute -inset-0.5 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-300/60 via-cyan-300/40 to-blue-300/60 blur-md" />
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/profile_destura.jpg"
                  alt="Stephanie Destura profile"
                  width={420}
                  height={420}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
