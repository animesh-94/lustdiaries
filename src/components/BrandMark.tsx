"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
  variant?: "purple" | "white";
}

/** Interlocking double-heart outline brand mark matching LustDiaries identity. */
export function BrandMark({ className, variant = "purple" }: BrandMarkProps) {
  const strokeColor = variant === "white" ? "#FFFFFF" : "#6A1B8E";
  const accentColor = variant === "white" ? "#EBD8F7" : "#9E4BC7";

  return (
    <svg
      viewBox="0 0 40 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-9 h-8 shrink-0", className)}
      aria-hidden="true"
    >
      <path
        d="M20 32.5C20 32.5 5.5 23.2 5.5 12.6C5.5 7.7 9.3 4 14 4C16.8 4 19.2 5.4 20.6 7.5C22 5.4 24.4 4 27.2 4C31.9 4 35.7 7.7 35.7 12.6C35.7 23.2 20 32.5 20 32.5Z"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 26.8C20 26.8 11.2 20.4 11.2 13.7C11.2 10.9 13.4 8.8 16.1 8.8C17.8 8.8 19.3 9.7 20 11C20.7 9.7 22.2 8.8 23.9 8.8C26.6 8.8 28.8 10.9 28.8 13.7C28.8 20.4 20 26.8 20 26.8Z"
        stroke={accentColor}
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Animated pastel-purple brush underline beneath "Health" in the hero headline. */
export function HealthUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 190 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-3.5 overflow-visible", className)}
      aria-hidden="true"
    >
      <motion.path
        d="M4 12.5C48 4.5 126 3.5 186 10.5"
        stroke="#B886D9"
        strokeWidth="4.2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

/** Hand-drawn pastel cursive heart loop that draws itself on scroll in Relationship Wellness. */
export function CursiveHeartLoop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <motion.path
        d="M14 136C45 128 74 106 87 74C96 52 92 31 76 26C61 21 48 35 53 53C59 73 83 84 101 86C116 88 134 74 138 56C142 38 128 24 113 28C99 32 95 49 95 62C95 82 117 95 166 95"
        stroke="#CFA9E6"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.9 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

