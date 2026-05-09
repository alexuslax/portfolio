"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ id, title, subtitle, children }: SectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const titleWords = title.split(" ");

  return (
    <motion.section
      id={id}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-28"
    >
      <div className="mb-9 space-y-3 overflow-hidden">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          {titleWords.map((word, index) => (
            <motion.span
              key={`${id}-${word}-${index}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20, filter: "blur(5px)" }}
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }
              }
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : 0.04 * index,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block will-change-transform"
            >
              {word}
              {index < titleWords.length - 1 ? "\u00A0" : ""}
            </motion.span>
          ))}
        </h2>
        {subtitle ? (
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.48, delay: shouldReduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-zinc-700 dark:text-zinc-400"
          >
            {subtitle}
          </motion.p>
        ) : null}
      </div>
      {children}
    </motion.section>
  );
}
