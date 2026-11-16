import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle, ShieldCheck } from "lucide-react";
import type { TopicFaq } from "@/data/topics";
import { TopicFaqAccordion } from "@/components/TopicFaqAccordion";
import { WellnessResourcesSidebar } from "@/components/WellnessResourcesSidebar";
import { FadeInUp } from "@/components/MotionPrimitives";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Clear, judgment-free answers about LustDiaries privacy, wellness guides, intimacy, sleep, stress, pain relief, and relationship support.",
  alternates: { canonical: "/faq" },
  robots: { index: true, follow: true },
};

interface FaqCategory {
  title: string;
  description: string;
  items: TopicFaq[];
}

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    title: "Privacy, Confidentiality & Platform",
    description:
      "How LustDiaries protects your browsing privacy and presents educational wellness resources.",
    items: [
      {
        question: "Is LustDiaries private and confidential to browse?",
        answer:
          "Yes. You do not need to create an account, sign in, or share personal health details to explore any resource on LustDiaries. The entire site also runs in a strict noindex environment to avoid search-engine indexing of pages.",
      },
      {
        question: "Are LustDiaries guides a substitute for medical advice?",
        answer:
          "No. All content is strictly educational and written to help you understand wellness topics in plain language. Always consult a licensed physician or qualified healthcare specialist before starting or changing any treatment.",
      },
      {
        question: "Why does the site feature curated wellness resource links?",
        answer:
          "To keep our educational wellness guides free to read, LustDiaries partners with clearly labeled wellness resources and advertising slots covering sleep issues, stress relief, pain management, and relationships.",
      },
    ],
  },
  {
    title: "Relationships & Communication",
    description:
      "Practical ways to navigate conflict cycles, strengthen trust, and rebuild emotional connection.",
    items: [
      {
        question: "What can we do when small disagreements keep escalating?",
        answer:
          "Agree in advance to take a calm 20-minute reset break whenever conversations get heated, then return using 'I feel...' statements focused on understanding each other's needs rather than assigning blame.",
      },
      {
        question: "When should couples consider extra support?",
        answer:
          "You don't need to wait for a crisis. Exploring structured communication guides or speaking with a relationship counselor early helps keep small misunderstandings from growing into long-term distance.",
      },
    ],
  },
  {
    title: "Sleep Issues & Restorative Rest",
    description:
      "How consistent sleep rhythms support mood, patience, and everyday energy.",
    items: [
      {
        question: "How does poor sleep affect daily mood and relationships?",
        answer:
          "Sleep debt elevates evening cortisol and lowers emotional patience while draining physical energy. Consistent wake times, cool room temperatures, and screen-free wind-down cues rapidly improve rest.",
      },
      {
        question: "When should persistent sleep issues be evaluated?",
        answer:
          "If trouble falling or staying asleep lasts longer than a month or involves loud snoring and daytime exhaustion, consult a healthcare professional.",
      },
    ],
  },
  {
    title: "Stress, Tension & Pain Management",
    description:
      "Simple nervous-system resets and mobility habits for everyday relief.",
    items: [
      {
        question: "What is a quick way to release daily stress and tension?",
        answer:
          "A 60-second physiological sigh (two quick nasal inhales followed by a long slow exhale) paired with a short walk or screen-free break helps calm an overactive stress response.",
      },
      {
        question: "What helps ease everyday lower-back stiffness or discomfort?",
        answer:
          "Taking short movement breaks every 45 minutes of sitting, gentle daily mobility stretches, and supportive sleep posture reduce muscular guarding. Sudden radiating pain or numbness should always be evaluated by a doctor.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-9 items-start">
        <div className="lg:col-span-8 min-w-0">
          <FadeInUp immediate>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F3ECF9] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#5D177E]">
              <HelpCircle className="h-3.5 w-3.5" />
              Frequently Asked Questions
            </span>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-[#431059]">
              Clear, Judgment-Free Answers.
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-[#4E4657]">
              Find straightforward answers about privacy, intimacy, restorative
              sleep, stress relief, pain management, and building stronger
              relationships.
            </p>
          </FadeInUp>

          <div className="mt-10 space-y-10">
            {FAQ_CATEGORIES.map((category) => (
              <FadeInUp key={category.title}>
                <section>
                  <div className="mb-4">
                    <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#431059]">
                      {category.title}
                    </h2>
                    <p className="mt-1 text-sm text-[#5C5366]">
                      {category.description}
                    </p>
                  </div>
                  <TopicFaqAccordion faqs={category.items} />
                </section>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp className="mt-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-[#E4D7EE] bg-[#F3ECF9]/85 p-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5D177E]">
                  <ShieldCheck className="h-4 w-4" />
                  Still Have Questions?
                </div>
                <p className="mt-1 font-display text-lg font-bold text-[#360C4D]">
                  Reach out privately to our team anytime.
                </p>
              </div>
              <Link
                href="/contact"
                className="cta-shimmer inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6F1E93] to-[#4A1166] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(93,23,126,0.5)] transition hover:-translate-y-0.5"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeInUp>
        </div>

        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <WellnessResourcesSidebar />
        </div>
      </div>
    </div>
  );
}

