"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import HeroAnimation from "@/components/HeroAnimation";
import TypingText from "@/components/TypingText";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const headingWords = "Stephanie Drew Flores Destura".split(" ");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [20, -18]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0.6, -0.6]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [26, -24]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [0.985, 1.02]);

  return (
    <section ref={sectionRef} id="home" className="scroll-mt-24 pt-30 sm:pt-36">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={shouldReduceMotion ? undefined : { y: heroY, rotateX: heroRotate }}
        className="relative overflow-hidden rounded-4xl border border-zinc-200/75 bg-white/75 p-6 shadow-2xl shadow-cyan-900/10 backdrop-blur-xl sm:p-10 dark:border-white/15 dark:bg-[#0c1220]/72 dark:shadow-cyan-900/20"
      >
        <HeroAnimation />

        <div className="grid items-center gap-8 lg:grid-cols-[1.24fr_0.76fr]">

          {/* Portrait — shows FIRST on mobile, hidden on desktop (shown in right col) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto w-32 sm:w-40 lg:hidden"
          >
            <div className="relative rounded-3xl border border-white/20 bg-white/60 p-2 shadow-xl shadow-cyan-950/15 backdrop-blur-xl dark:bg-white/10">
              <div className="absolute -inset-0.5 -z-10 rounded-3xl bg-linear-to-br from-sky-300/60 via-cyan-300/40 to-blue-300/60 blur-md" />
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/profile_destura.jpg"
                  alt="Stephanie Destura profile"
                  width={160}
                  height={160}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="text-center lg:text-left">
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 inline-flex rounded-full border border-cyan-700/25 bg-cyan-700/10 px-4 py-1.5 text-xs font-medium tracking-[0.19em] text-cyan-800 uppercase dark:border-cyan-300/40 dark:bg-cyan-300/10 dark:text-cyan-200"
            >
              Portfolio 2026
            </motion.p>

            <h1 className="font-display text-4xl leading-[0.96] font-semibold tracking-[-0.03em] text-zinc-900 sm:text-5xl lg:text-7xl dark:text-zinc-100">
              {headingWords.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 1, y: 0, filter: "blur(0px)" }
                  }
                  transition={{
                    duration: 0.55,
                    delay: shouldReduceMotion ? 0 : 0.15 + index * 0.045,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block will-change-transform"
                >
                  {word}
                  {index < headingWords.length - 1 ? "\u00A0" : ""}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-lg text-zinc-700 dark:text-zinc-300"
            >
              <TypingText
                words={["Full-Stack Web Developer", "Software Developer", "Web Application Developer"]}
                className="font-semibold text-cyan-800 dark:text-cyan-200"
              />
            </motion.p>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-zinc-700 sm:text-lg dark:text-zinc-300"
            >
              I craft polished interfaces and practical systems with a focus on user experience, speed, and clean architecture. I build products that feel clear, modern, and dependable.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.52, delay: shouldReduceMotion ? 0 : 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap justify-center gap-3.5 lg:justify-start"
            >
              <a
                href="#projects"
                className="group inline-flex items-center rounded-full border border-cyan-700/20 bg-cyan-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-900/30 transition duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-xl hover:shadow-cyan-900/35 active:translate-y-0 dark:border-cyan-300/25 dark:bg-cyan-300 dark:text-zinc-900 dark:hover:bg-cyan-200"
              >
                View Projects
                <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-zinc-300/75 bg-white/85 px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-zinc-900/5 transition duration-300 hover:-translate-y-1 hover:border-zinc-400/70 hover:bg-white active:translate-y-0 dark:border-white/20 dark:bg-white/10 dark:text-zinc-100 dark:hover:border-white/30 dark:hover:bg-white/15"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Portrait — desktop only (right column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={shouldReduceMotion ? undefined : { y: portraitY, scale: portraitScale }}
            className="mx-auto hidden w-full max-w-sm lg:block"
          >
            <div className="relative rounded-4xl border border-white/20 bg-white/60 p-3 shadow-2xl shadow-cyan-950/15 backdrop-blur-xl dark:bg-white/10">
              <div className="absolute -inset-0.5 -z-10 rounded-4xl bg-linear-to-br from-sky-300/60 via-cyan-300/40 to-blue-300/60 blur-md" />
              <div className="relative overflow-hidden rounded-3xl">
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