import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { WELLNESS_TOPICS, getTopicBySlug } from "@/data/topics";
import { AdSlot } from "@/components/AdSlot";
import { TopicFaqAccordion } from "@/components/TopicFaqAccordion";
import { FadeInUp } from "@/components/MotionPrimitives";

export async function generateStaticParams() {
  return WELLNESS_TOPICS.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) {
    return { title: "Topic Not Found" };
  }

  return {
    title: topic.title,
    description: topic.shortTagline,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
  };
}

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  const relatedTopics = WELLNESS_TOPICS.filter((t) => t.slug !== topic.slug).slice(
    0,
    3
  );

  return (
    <article className="mx-auto max-w-4xl px-5 sm:px-8 py-10 sm:py-14">
      <FadeInUp immediate>
        <Link
          href="/#topics"
          className="inline-flex items-center gap-2 rounded-full border border-[#E4D7EE] bg-white px-4 py-1.5 text-sm font-medium text-[#5D177E] shadow-2xs transition hover:bg-[#F3ECF9]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to All Topics
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#6A5A78]">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F3ECF9] px-3 py-1 text-[#4E1668]">
            <ShieldCheck className="h-3.5 w-3.5" />
            Private Wellness Guide
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-[#5D177E]" />
            {topic.readTime}
          </span>
        </div>

        <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-[#431059]">
          {topic.title}
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[#4E4657]">
          {topic.shortTagline}
        </p>
      </FadeInUp>

      {/* Hero Editorial Image */}
      <FadeInUp immediate delay={0.1}>
        <div className="relative mt-7 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#E6D9F1] bg-[#F3ECF9] shadow-[0_14px_36px_-14px_rgba(67,16,89,0.2)]">
          <Image
            src={topic.image}
            alt={topic.imageAlt}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>
      </FadeInUp>

      {/* Top CLS-Safe Ad Slot */}
      <div className="mt-8">
        <AdSlot slotId={`topic-top-${topic.slug}`} format="horizontal" />
      </div>

      {/* Overview & Key Takeaways */}
      <FadeInUp className="mt-8">
        <p className="text-[1.06rem] leading-[1.75] text-[#26202D]">
          {topic.summary}
        </p>

        <div className="mt-7 rounded-2xl border border-[#E4D7EE] bg-[#F3ECF9]/80 p-6">
          <h2 className="font-display text-lg font-extrabold text-[#431059]">
            Key Takeaways
          </h2>
          <ul className="mt-3.5 space-y-2.5">
            {topic.keyTakeaways.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-[0.97rem] leading-relaxed text-[#2F2738]"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#5D177E]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeInUp>

      {/* Structured Sections */}
      <div className="mt-9 space-y-9">
        {topic.sections.map((section, idx) => (
          <FadeInUp key={section.heading}>
            <section>
              <h2 className="font-display text-2xl font-extrabold text-[#431059]">
                {section.heading}
              </h2>
              <p className="mt-3 text-[1.02rem] leading-[1.75] text-[#2F2738]">
                {section.body}
              </p>
              {section.bullets && (
                <ul className="mt-4 space-y-2.5 rounded-2xl border border-[#ECE2F4] bg-white p-5">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-[0.96rem] leading-relaxed text-[#3B3345]"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6B1D8C]"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* Mid-article native ad slot after first section */}
            {idx === 0 && (
              <div className="mt-8">
                <AdSlot
                  slotId={`topic-mid-${topic.slug}`}
                  format="rectangle"
                />
              </div>
            )}
          </FadeInUp>
        ))}
      </div>

      {/* FAQs with Radix Accordion */}
      <FadeInUp className="mt-12">
        <h2 className="font-display text-2xl font-extrabold text-[#431059] mb-4">
          Frequently Asked Questions
        </h2>
        <TopicFaqAccordion faqs={topic.faqs} />
      </FadeInUp>

      {/* Educational Disclaimer */}
      <div className="mt-10 rounded-2xl border border-[#E4D7EE] bg-[#FAF6FD] px-5 py-4 text-xs leading-relaxed text-[#5C5366]">
        <strong className="text-[#431059]">Medical Information Notice:</strong>{" "}
        Content on LustDiaries is provided for general educational purposes and
        does not substitute for individualized medical advice, diagnosis, or
        treatment. Please read our{" "}
        <Link
          href="/medical-disclaimer"
          className="font-semibold text-[#5D177E] underline underline-offset-2"
        >
          Medical Disclaimer
        </Link>
        .
      </div>

      {/* Related Topics */}
      <section className="mt-14 border-t border-[#E6D9F1] pt-10">
        <h2 className="font-display text-xl font-extrabold text-[#431059] mb-5">
          Explore More Wellness Topics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {relatedTopics.map((rel) => (
            <Link
              key={rel.slug}
              href={`/topics/${rel.slug}`}
              className="group overflow-hidden rounded-2xl border border-[#E8DDF2] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F3ECF9]">
                <Image
                  src={rel.image}
                  alt={rel.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span className="font-display text-sm font-bold text-[#241E2B] group-hover:text-[#5D177E]">
                  {rel.title}
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-[#5D177E] transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}

