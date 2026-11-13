"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getTopicHref } from "@/data/topics";

interface SidebarResource {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  hasPainGlow?: boolean;
}

const SIDEBAR_RESOURCES: SidebarResource[] = [
  {
    slug: "relationship-issues",
    title: "Relationship Issues",
    subtitle: "Build connection",
    image: "/images/topic-relationship.jpg",
    alt: "Couple watching a golden sunset together by the ocean",
  },
  {
    slug: "sleep-issues",
    title: "Sleep Issues",
    subtitle: "Sleep better",
    image: "/images/topic-sleep.jpg",
    alt: "Couple sleeping peacefully in soft morning light",
  },
  {
    slug: "stress-and-tension",
    title: "Stress & Tension",
    subtitle: "Feel calm",
    image: "/images/topic-stress.jpg",
    alt: "Thoughtful man seated at desk resting head on hand",
  },
  {
    slug: "pain-management",
    title: "Pain Management",
    subtitle: "Live pain-free",
    image: "/images/topic-pain.jpg",
    alt: "Person holding lower back in calm neutral light",
    hasPainGlow: true,
  },
];

export function WellnessResourcesSidebar({
  activeSlug,
}: {
  activeSlug?: string;
}) {
  return (
    <aside aria-label="Wellness Resources">
      <div className="relative overflow-hidden rounded-[26px] border border-[#E4D3F2] bg-gradient-to-b from-[#F2E5FA] via-[#FAF6FE] to-[#F4E9FC] p-5 sm:p-6 shadow-[0_18px_42px_-18px_rgba(67,16,89,0.2)]">
        {/* Decorative hand-drawn lavender heart accent top-right */}
        <svg
          viewBox="0 0 90 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute right-3 top-2.5 h-16 w-20 text-[#BA86DA]/80"
          aria-hidden="true"
        >
          <motion.path
            d="M8 58C24 54 38 43 44 27C48 16 44 8 36 8C28 8 24 16 28 25C33 35 45 41 55 41C65 41 73 33 74 23C75 13 67 7 59 10C51 13 50 24 53 33C57 45 70 49 84 48"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.9 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>

        <div className="relative z-10 pr-8">
          <h2 className="font-display text-[1.45rem] font-extrabold leading-[1.18] tracking-tight text-[#360C4D]">
            Explore Our
            <br />
            Wellness Resources
          </h2>
          <p className="mt-2.5 text-[0.9rem] leading-snug text-[#4E4458]">
            Get helpful guidance on relationships, sleep, stress and pain relief.
          </p>
          {/* Curved lilac brush stroke below subtitle */}
          <svg
            viewBox="0 0 210 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1.5 h-3 w-44 text-[#C291E0]"
            aria-hidden="true"
          >
            <path
              d="M2 10C56 3.5 140 2.5 206 7.5"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* 4 Horizontal Resource Cards */}
        <div className="relative z-10 mt-5 space-y-3">
          {SIDEBAR_RESOURCES.map((item) => {
            const isActive = activeSlug === item.slug;
            return (
              <a
                key={item.slug}
                href={getTopicHref(item.slug)}
                className={cn(
                  "group flex items-center gap-3.5 rounded-2xl border bg-white p-2 pr-3.5 shadow-[0_6px_18px_-10px_rgba(67,16,89,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A6E4] hover:shadow-[0_14px_28px_-12px_rgba(67,16,89,0.24)]",
                  isActive
                    ? "border-[#7A249E] ring-1 ring-[#7A249E]/20"
                    : "border-[#EAE0F4]"
                )}
              >
                <div className="relative h-[64px] w-[88px] shrink-0 overflow-hidden rounded-xl bg-[#F3ECF9]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="96px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.hasPainGlow && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-[56%] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(239,68,68,0.65)_0%,rgba(239,68,68,0.2)_50%,transparent_75%)]"
                    />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[0.94rem] font-extrabold leading-tight text-[#251731] transition-colors group-hover:text-[#5D177E]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[0.8rem] text-[#645A70]">
                    {item.subtitle}
                  </p>
                </div>

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6B1D8C] text-white shadow-xs transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-[#4A1166]">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            );
          })}
        </div>

        {/* Full-width bottom CTA */}
        <div className="relative z-10 mt-5">
          <Link
            href="/#topics"
            className="cta-shimmer group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6F1E93] to-[#4A1166] px-5 py-3.5 text-[0.94rem] font-semibold text-white shadow-[0_12px_26px_-10px_rgba(93,23,126,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_32px_-10px_rgba(93,23,126,0.65)]"
          >
            <span>Visit Our Resources</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </aside>
  );
}

