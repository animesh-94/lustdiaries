"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Lock,
  Smile,
  Star,
  Users,
} from "lucide-react";
import { WELLNESS_TOPICS, getTopicHref, isExternalHref } from "@/data/topics";
import { CursiveHeartLoop, HealthUnderline } from "./BrandMark";
import { FadeInUp, StaggerContainer, StaggerItem } from "./MotionPrimitives";

function ShieldLockIcon() {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 text-[#4E1668]"
      aria-hidden="true"
    >
      <path
        d="M14 3.2L5.5 6.8V13.2C5.5 18.7 9.1 23.6 14 25C18.9 23.6 22.5 18.7 22.5 13.2V6.8L14 3.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="10.7"
        y="12.5"
        width="6.6"
        height="5.2"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12.2 12.5V10.8C12.2 9.8 13 9 14 9C15 9 15.8 9.8 15.8 10.8V12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const TOP_PILLARS = [
  {
    icon: ShieldLockIcon,
    label: "Private &",
    sublabel: "Confidential",
  },
  {
    icon: BookOpen,
    label: "Easy-to-Understand",
    sublabel: "Information",
  },
  {
    icon: Heart,
    label: "Helpful Wellness",
    sublabel: "Resources",
  },
  {
    icon: Smile,
    label: "Judgment-Free",
    sublabel: "Guidance",
  },
];

const WHY_CHOOSE_ITEMS = [
  { icon: Star, label: "Trusted Advice" },
  { icon: Lock, label: "100% Private" },
  { icon: Heart, label: "Simple & Clear" },
  { icon: Users, label: "Supportive Community" },
];

export function HomeLanding() {
  return (
    <div className="w-full overflow-x-clip">
      {/* 1. Full-Bleed Hero Section (extends seamlessly behind transparent navbar) */}
      <section className="relative w-full min-h-[540px] sm:min-h-[590px] lg:min-h-[640px] overflow-hidden bg-[#FDFBFE]">
        {/* Full-bleed background couple image covering the entire hero & CTA area */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero-couple.jpg"
            alt="Affectionate couple smiling warmly together on a sunlit sofa"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[74%_24%] sm:object-[70%_26%] lg:object-[66%_26%]"
          />
          {/* Subtle readability wash on the left behind headline & CTA without hiding the room */}
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(253,251,254,0.35)_0%,rgba(253,251,254,0.62)_52%,rgba(253,251,254,0.88)_100%)] lg:bg-[linear-gradient(90deg,rgba(253,251,254,0.72)_0%,rgba(253,251,254,0.48)_32%,rgba(253,251,254,0.12)_54%,transparent_72%)]"
            aria-hidden="true"
          />
          {/* Soft bottom edge blend into the trust bar & canvas */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FDFBFE] via-[#FDFBFE]/65 to-transparent"
            aria-hidden="true"
          />
        </motion.div>

        {/* Ambient soft lavender glow behind copy */}
        <div
          className="pointer-events-none absolute -left-24 top-14 h-72 w-72 rounded-full bg-[#E9D7F7]/35 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20">
          <div className="max-w-xl lg:max-w-[560px]">
            <FadeInUp immediate delay={0.05}>
              <h1 className="font-display text-[2.25rem] sm:text-[2.95rem] lg:text-[3.35rem] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#431059]">
                Take Control of Your{" "}
                <span className="relative inline-block">
                  Health
                  <HealthUnderline className="absolute -bottom-1.5 left-0 w-full" />
                </span>{" "}
                &amp; Relationships.
              </h1>
            </FadeInUp>

            <FadeInUp immediate delay={0.16}>
              <p className="mt-5 text-[1.05rem] sm:text-[1.15rem] font-medium text-[#241E2B]">
                Better Intimacy. Better Sleep. Better Relationships.
              </p>
            </FadeInUp>

            <FadeInUp immediate delay={0.26}>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="#topics"
                  className="cta-shimmer group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#6B1D8C] to-[#4A1166] px-7 py-3.5 text-[0.98rem] font-semibold text-white shadow-[0_12px_28px_-8px_rgba(93,23,126,0.52)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-8px_rgba(93,23,126,0.62)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D177E] focus-visible:ring-offset-2"
                >
                  <span>Explore Now</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 2. Four-Pillar Trust Bar */}
      <section className="relative z-20 mx-auto max-w-6xl px-5 sm:px-8 -mt-2 sm:-mt-5">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#DFD0EB] rounded-2xl border border-[#EAE0F3] bg-[#F3ECF9]/95 shadow-[0_12px_34px_-16px_rgba(67,16,89,0.18)] backdrop-blur-xs">
          {TOP_PILLARS.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <StaggerItem
                key={pillar.label}
                className="group flex flex-col items-center justify-center px-4 py-5 sm:py-6 text-center transition-colors hover:bg-white/45"
              >
                <div className="mb-2.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                  <IconComponent className="h-7 w-7 text-[#4E1668]" strokeWidth={1.6} />
                </div>
                <p className="font-display text-[0.9rem] sm:text-[0.95rem] font-semibold leading-snug text-[#271E30]">
                  {pillar.label}
                  <br />
                  {pillar.sublabel}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* 3. "What Can We Help You With?" 4-Card Single-Row Grid */}
      <section id="topics" className="mx-auto max-w-6xl px-5 sm:px-8 pt-14 sm:pt-16 pb-12">
        <FadeInUp>
          <div className="flex items-center gap-4 sm:gap-6 mb-9">
            <span className="h-px flex-1 bg-[#DAC8EA]" aria-hidden="true" />
            <h2 className="font-display text-center text-[1.6rem] sm:text-[2rem] font-extrabold tracking-tight text-[#431059]">
              What Can We Help You With?
            </h2>
            <span className="h-px flex-1 bg-[#DAC8EA]" aria-hidden="true" />
          </div>
        </FadeInUp>

        <StaggerContainer
          staggerDelay={0.07}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {WELLNESS_TOPICS.map((topic) => {
            const href = getTopicHref(topic.slug);
            const external = isExternalHref(href);
            const cardClassName =
              "group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E9DFF2] bg-white shadow-[0_8px_24px_-12px_rgba(67,16,89,0.14)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#CFB6E6] hover:shadow-[0_22px_42px_-14px_rgba(67,16,89,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D177E]";
            const cardInner = (
              <>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3ECF9]">
                  <Image
                    src={topic.image}
                    alt={topic.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Organic pulsing coral focal glow for Pain Management */}
                  {topic.hasPainGlow && (
                    <motion.div
                      aria-hidden="true"
                      animate={{ opacity: [0.55, 0.9, 0.55], scale: [0.96, 1.06, 0.96] }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute left-1/2 top-[56%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(239,68,68,0.58)_0%,rgba(239,68,68,0.2)_45%,transparent_72%)] blur-[2px]"
                    />
                  )}
                  {/* Subtle bottom gradient for pill separation */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#2D0A40]/20 to-transparent"
                    aria-hidden="true"
                  />
                </div>

                {/* Floating overlapping white pill label */}
                <div className="relative z-10 mx-3 -mt-5 mb-3 flex items-center justify-center gap-1.5 rounded-xl border border-[#ECE4F4] bg-white/95 px-3 py-2.5 shadow-[0_6px_16px_-4px_rgba(45,10,64,0.12)] backdrop-blur-xs transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#D4BEE8] group-hover:shadow-md">
                  <span className="font-display whitespace-nowrap text-[0.92rem] font-bold text-[#1F1A24] transition-colors group-hover:text-[#5D177E]">
                    {topic.title}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#5D177E] opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </div>
              </>
            );

            return (
              <StaggerItem key={topic.slug}>
                {external ? (
                  <a href={href} className={cardClassName}>
                    {cardInner}
                  </a>
                ) : (
                  <Link href={href} className={cardClassName}>
                    {cardInner}
                  </Link>
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* 4. Relationship Wellness Feature Banner (full-bleed edge-to-edge) */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#F5EEFA] via-[#FAF6FD] to-[#F4ECFA] border-y border-[#ECE0F5]/70">
        {/* Full-bleed sunset ocean couple photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/wellness-banner.jpg"
            alt="Couple embracing softly while looking out at a serene pastel ocean horizon"
            fill
            sizes="100vw"
            className="object-cover object-[74%_35%] lg:object-[72%_35%]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(246,239,251,0.82)_0%,rgba(246,239,251,0.55)_60%,rgba(246,239,251,0.85)_100%)] lg:bg-[linear-gradient(90deg,rgba(246,239,251,0.92)_0%,rgba(246,239,251,0.72)_34%,rgba(246,239,251,0.18)_58%,transparent_78%)]"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16 lg:py-20">
          {/* Animated pastel cursive heart bridging copy and couple */}
          <CursiveHeartLoop className="hidden lg:block absolute left-[42%] top-6 z-20 h-32 w-40" />

          <div className="max-w-md lg:max-w-lg">
            <FadeInUp>
              <h2 className="font-display text-[1.85rem] sm:text-[2.25rem] font-extrabold tracking-tight text-[#4A1264]">
                Relationship Wellness
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <ul className="mt-4 space-y-1.5 text-[1rem] sm:text-[1.06rem] font-medium text-[#251E2D]">
                <li>Improve communication.</li>
                <li>Build emotional connections.</li>
                <li>Understand intimacy challenges.</li>
              </ul>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="mt-6">
                <Link
                  href="/topics/relationship-issues"
                  className="cta-shimmer group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6B1D8C] to-[#4A1166] px-6 py-3 text-[0.94rem] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(93,23,126,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-8px_rgba(93,23,126,0.62)]"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 5. "Why Choose Lust Diaries?" Authority Strip */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-10 pb-8">
        <FadeInUp>
          <div className="rounded-2xl border border-[#E6D9F1] bg-[#F3ECF9] px-5 sm:px-8 pt-6 pb-7 shadow-[0_10px_30px_-18px_rgba(67,16,89,0.16)]">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px flex-1 bg-[#D6C2E8]" aria-hidden="true" />
              <h2 className="font-display text-center text-[1.4rem] sm:text-[1.75rem] font-extrabold tracking-tight text-[#431059]">
                Why Choose Lust Diaries?
              </h2>
              <span className="h-px flex-1 bg-[#D6C2E8]" aria-hidden="true" />
            </div>

            <StaggerContainer
              staggerDelay={0.07}
              className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#DFD0EB]"
            >
              {WHY_CHOOSE_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem
                    key={item.label}
                    className="group flex flex-col items-center justify-center px-3 py-4 text-center"
                  >
                    <Icon
                      className="mb-2.5 h-7 w-7 text-[#4E1668] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"
                      strokeWidth={1.6}
                    />
                    <span className="font-display text-[0.94rem] font-semibold text-[#271E30]">
                      {item.label}
                    </span>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </FadeInUp>
      </section>

      {/* 6. Bottom Gradient Conversion CTA Banner */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-12 sm:pb-14">
        <FadeInUp>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#6F1E93] via-[#4C126E] to-[#681D8B] px-6 py-10 sm:py-12 text-center text-white shadow-[0_22px_48px_-16px_rgba(67,16,89,0.5)]">
            {/* Subtle geometric facet overlays matching screenshot */}
            <div
              className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rotate-12 bg-white/[0.04]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-12 -bottom-20 h-72 w-72 -rotate-12 bg-white/[0.05]"
              aria-hidden="true"
            />

            {/* Floating ambient translucent hearts */}
            <motion.div
              aria-hidden="true"
              animate={{ y: [-5, 5, -5], opacity: [0.16, 0.25, 0.16] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none hidden sm:block absolute left-10 top-1/2 -translate-y-1/2"
            >
              <Heart className="h-14 w-14 fill-white/40 text-transparent" />
            </motion.div>
            <motion.div
              aria-hidden="true"
              animate={{ y: [5, -5, 5], opacity: [0.18, 0.26, 0.18] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none hidden sm:block absolute right-10 top-1/2 -translate-y-1/2"
            >
              <Heart className="h-14 w-14 fill-white/40 text-transparent" />
            </motion.div>

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-display text-[1.6rem] sm:text-[2.1rem] font-extrabold tracking-tight text-white">
                Start Your Journey Towards Better Wellness.
              </h2>
              <div className="mt-6">
                <a
                  href="#topics"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[0.96rem] font-bold text-[#3C0D52] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FAF5FE] hover:shadow-xl"
                >
                  <span>Explore Lust Diaries</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>
    </div>
  );
}

