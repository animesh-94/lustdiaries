"use client";

import { useEffect, type ReactNode } from "react";
import { MotionConfig, motion, type HTMLMotionProps } from "motion/react";
import Lenis from "lenis";

const EASE_CURVE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Global Motion + Lenis smooth-scroll provider that respects OS reduced-motion preferences.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

interface FadeInUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  yOffset?: number;
  immediate?: boolean;
}

export function FadeInUp({
  children,
  delay = 0,
  yOffset = 20,
  immediate = false,
  className,
  ...props
}: FadeInUpProps) {
  if (immediate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: yOffset }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.62, delay, ease: EASE_CURVE }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: EASE_CURVE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: EASE_CURVE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

