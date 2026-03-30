"use client";

import { useEffect, useState } from "react";

type TypingTextProps = {
  words: string[];
  className?: string;
};

export default function TypingText({ words, className }: TypingTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const isDoneTyping = typed === current;
    const isDoneDeleting = typed.length === 0;

    const timeout = setTimeout(
      () => {
        if (!deleting && !isDoneTyping) {
          setTyped(current.slice(0, typed.length + 1));
          return;
        }

        if (!deleting && isDoneTyping) {
          setDeleting(true);
          return;
        }

        if (deleting && !isDoneDeleting) {
          setTyped(current.slice(0, typed.length - 1));
          return;
        }

        if (deleting && isDoneDeleting) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      deleting ? 45 : isDoneTyping ? 1150 : 95,
    );

    return () => clearTimeout(timeout);
  }, [deleting, typed, wordIndex, words]);

  return (
    <span className={className}>
      {typed}
      <span className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-current align-middle" />
    </span>
  );
}
