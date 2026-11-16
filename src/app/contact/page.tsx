import type { Metadata } from "next";
import { Mail, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { FadeInUp } from "@/components/MotionPrimitives";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach the LustDiaries editorial, privacy, or advertising partnerships team privately.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 sm:px-8 py-12 sm:py-16">
      <FadeInUp immediate>
        <span className="inline-block rounded-full bg-[#F3ECF9] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#5D177E]">
          Contact Us
        </span>
        <h1 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#431059]">
          We&apos;d Love to Hear From You.
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#4E4657]">
          Have feedback on a wellness guide, a privacy question, or an
          advertising inquiry? Reach out using the confidential form below.
        </p>
      </FadeInUp>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-[#E4D7EE] bg-[#F3ECF9]/75 p-5">
            <Mail className="h-5 w-5 text-[#5D177E]" />
            <h2 className="mt-3 font-display text-base font-bold text-[#351048]">
              Direct Support
            </h2>
            <p className="mt-1 text-sm text-[#4E4657]">
              support@lustdiaries.com
            </p>
            <p className="mt-2 text-xs text-[#6A5D77]">
              Typical response within 1–2 business days.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E4D7EE] bg-white p-5">
            <ShieldCheck className="h-5 w-5 text-[#5D177E]" />
            <h2 className="mt-3 font-display text-base font-bold text-[#351048]">
              Confidentiality Note
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-[#5C5366]">
              Please avoid sharing sensitive personal medical records through
              general web forms. For personal clinical care, always speak
              directly with a licensed physician.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

