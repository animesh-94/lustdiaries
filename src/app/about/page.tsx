import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake, Lock, Sparkles } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/MotionPrimitives";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about LustDiaries—our mission to make intimacy, sleep, stress, and relationship wellness approachable and judgment-free.",
};

const VALUES = [
  {
    icon: Lock,
    title: "100% Private & No-Judgment",
    text: "Sensitive health and relationship questions deserve calm, confidential exploration without stigma or pressure.",
  },
  {
    icon: BookOpen,
    title: "Plain-Language Clarity",
    text: "We translate complex wellness concepts into clear, actionable guidance anyone can read in a few minutes.",
  },
  {
    icon: HeartHandshake,
    title: "Whole-Relationship Focus",
    text: "Physical vitality, restful sleep, stress resilience, and emotional communication all reinforce each other.",
  },
  {
    icon: Sparkles,
    title: "Transparent & Compliant",
    text: "Every guide clearly distinguishes general wellness education from individualized professional medical care.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8 py-12 sm:py-16">
      <FadeInUp immediate>
        <span className="inline-block rounded-full bg-[#F3ECF9] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#5D177E]">
          About LustDiaries
        </span>
        <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-[#431059]">
          Approachable Wellness for Mind, Body &amp; Relationships.
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4E4657]">
          LustDiaries is an educational digital wellness publication dedicated to
          helping adults navigate intimacy, sleep quality, everyday stress,
          physical comfort, and deeper partner communication with confidence.
        </p>
      </FadeInUp>

      <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {VALUES.map((item) => {
          const Icon = item.icon;
          return (
            <StaggerItem
              key={item.title}
              className="rounded-2xl border border-[#E4D7EE] bg-white p-6 shadow-[0_8px_24px_-14px_rgba(67,16,89,0.16)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F3ECF9] text-[#5D177E]">
                <Icon className="h-5 w-5" strokeWidth={1.7} />
              </div>
              <h2 className="mt-4 font-display text-lg font-bold text-[#351048]">
                {item.title}
              </h2>
              <p className="mt-2 text-[0.96rem] leading-relaxed text-[#52495C]">
                {item.text}
              </p>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      <FadeInUp className="mt-12 rounded-2xl bg-gradient-to-r from-[#6B1D8C] to-[#4C126E] p-8 text-white">
        <h2 className="font-display text-2xl font-extrabold">
          Ready to explore our guides?
        </h2>
        <p className="mt-2 max-w-2xl text-white/90">
          Browse clear, thoughtful resources across intimacy, restorative sleep,
          stress reduction, and healthy communication.
        </p>
        <Link
          href="/#topics"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#3C0D52] transition hover:-translate-y-0.5 hover:bg-[#FAF5FE]"
        >
          Explore Topics <ArrowRight className="h-4 w-4" />
        </Link>
      </FadeInUp>
    </div>
  );
}

