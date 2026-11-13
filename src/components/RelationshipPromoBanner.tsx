"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, BedDouble, Heart, ShieldPlus } from "lucide-react";
import { getTopicHref } from "@/data/topics";

function LotusWellnessIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 4.5C13.9 7.2 14.6 10.1 14 13C13.6 14.8 12.8 16.2 12 17.2C11.2 16.2 10.4 14.8 10 13C9.4 10.1 10.1 7.2 12 4.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M12 17.2C8.9 16.8 6.4 14.6 5.5 11.4C5.1 10.1 5.2 8.9 5.6 8C7.7 8.8 9.6 10.8 10.5 13.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17.2C15.1 16.8 17.6 14.6 18.5 11.4C18.9 10.1 18.8 8.9 18.4 8C16.3 8.8 14.4 10.8 13.5 13.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 16.5C7 17.8 9.5 18.3 12 18.3C14.5 18.3 17 17.8 19.5 16.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

const MINI_TILES = [
  {
    slug: "relationship-issues",
    label: "Relationship Issues",
    icon: Heart,
  },
  {
    slug: "sleep-issues",
    label: "Sleep Issues",
    icon: BedDouble,
  },
  {
    slug: "stress-and-tension",
    label: "Stress & Tension",
    icon: LotusWellnessIcon,
  },
  {
    slug: "pain-management",
    label: "Pain Management",
    icon: ShieldPlus,
  },
];

export function RelationshipPromoBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Resolve Relationship Issues"
      className="relative overflow-hidden rounded-[22px] border border-[#E3D1F2] bg-gradient-to-br from-[#FBF7FE] via-[#F3E6FB] to-[#EAD6F7] shadow-[0_18px_42px_-16px_rgba(67,16,89,0.22)]"
    >
      <div className="relative grid grid-cols-1 md:grid-cols-12 items-center">
        {/* Left couple photograph feathered seamlessly into lavender card */}
        <div className="relative h-56 sm:h-64 md:h-full md:min-h-[320px] md:col-span-5 overflow-hidden">
          <Image
            src="/images/hero-couple.jpg"
            alt="Happy couple embracing warmly on a sofa"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-[76%_24%]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,#F3E6FB_100%)] md:bg-[linear-gradient(90deg,transparent_56%,#F4E8FC_100%)]"
            aria-hidden="true"
          />
        </div>

        {/* Floating pastel cursive heart bridging photo & copy */}
        <svg
          viewBox="0 0 90 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none hidden md:block absolute left-[35%] top-3 z-20 h-16 w-20 text-[#B47FD6]"
          aria-hidden="true"
        >
          <motion.path
            d="M8 58C24 54 38 43 44 27C48 16 44 8 36 8C28 8 24 16 28 25C33 35 45 41 55 41C65 41 73 33 74 23C75 13 67 7 59 10C51 13 50 24 53 33C57 45 70 49 84 48"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.9 }}
            transition={{ duration: 1.15, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>

        {/* Right Copy, 4 Mini Category Tiles, and Primary CTA */}
        <div className="relative z-10 md:col-span-7 px-5 sm:px-7 py-6 sm:py-8 text-center">
          <h2 className="font-display text-[1.5rem] sm:text-[1.85rem] font-extrabold leading-[1.18] tracking-tight text-[#340C4A]">
            Resolve Relationship
            <br />
            Issues &amp;{" "}
            <span className="relative inline-block text-[#751B9C]">
              Live Happier
              <svg
                viewBox="0 0 180 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-1.5 left-0 h-3 w-full text-[#A964D3]"
                aria-hidden="true"
              >
                <motion.path
                  d="M3 10C52 3.5 126 2.5 177 8.5"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </svg>
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-md text-[0.92rem] leading-snug text-[#463B51]">
            Explore expert tips for a healthier and more fulfilling
            relationship.
          </p>

          {/* 4 Mini White Glass Icon Tiles */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {MINI_TILES.map((tile) => {
              const Icon = tile.icon;
              return (
                <a
                  key={tile.slug}
                  href={getTopicHref(tile.slug)}
                  className="group flex flex-col items-center justify-center rounded-xl border border-[#E7D8F3] bg-white/90 px-2 py-3 text-center shadow-[0_6px_16px_-10px_rgba(67,16,89,0.16)] backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C9A6E4] hover:bg-white hover:shadow-md"
                >
                  <Icon
                    className="h-5 w-5 text-[#661B89] transition-transform duration-200 group-hover:scale-110"
                    strokeWidth={1.7}
                  />
                  <span className="mt-1.5 font-display text-[0.73rem] font-bold leading-tight text-[#2B1B38] group-hover:text-[#5D177E]">
                    {tile.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Explore Now Pill CTA */}
          <div className="mt-5 flex justify-center">
            <a
              href="#deep-dive"
              className="cta-shimmer group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6F1E93] to-[#4A1166] px-7 py-2.5 text-[0.92rem] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(93,23,126,0.52)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-8px_rgba(93,23,126,0.62)]"
            >
              <span>Explore Now</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

