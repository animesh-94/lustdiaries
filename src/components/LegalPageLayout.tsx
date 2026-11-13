import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FadeInUp } from "./MotionPrimitives";

interface LegalPageLayoutProps {
  badge: string;
  title: string;
  updated: string;
  children: ReactNode;
}

export function LegalPageLayout({
  badge,
  title,
  updated,
  children,
}: LegalPageLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-16">
      <FadeInUp immediate>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[#E4D7EE] bg-white px-4 py-1.5 text-sm font-medium text-[#5D177E] shadow-2xs transition hover:bg-[#F3ECF9]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </Link>

        <div className="mt-6">
          <span className="inline-block rounded-full bg-[#F3ECF9] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#5D177E]">
            {badge}
          </span>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#431059]">
            {title}
          </h1>
          <p className="mt-2 text-sm text-[#6C6178]">Last updated: {updated}</p>
        </div>
      </FadeInUp>

      <FadeInUp immediate delay={0.1}>
        <div className="mt-8 space-y-6 rounded-2xl border border-[#E4D7EE] bg-white p-6 sm:p-8 text-[0.98rem] leading-[1.75] text-[#2F2738] shadow-[0_10px_28px_-16px_rgba(67,16,89,0.14)]">
          {children}
        </div>
      </FadeInUp>
    </article>
  );
}

