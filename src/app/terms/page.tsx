import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms of use governing access to LustDiaries educational wellness guides and advertising-supported content.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      badge="Legal"
      title="Terms & Conditions"
      updated="November 2026"
    >
      <section>
        <h2 className="font-display text-xl font-bold text-[#431059]">
          1. Acceptance of Terms
        </h2>
        <p className="mt-2">
          By accessing or reading LustDiaries, you agree to use this website
          solely for lawful, personal, non-commercial educational purposes in
          accordance with these Terms &amp; Conditions.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-[#431059]">
          2. Educational Purpose Only
        </h2>
        <p className="mt-2">
          All articles, guides, and visual summaries on LustDiaries are
          informational resources and do not create a doctor-patient or
          therapist-client relationship.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-[#431059]">
          3. Advertising &amp; External Links
        </h2>
        <p className="mt-2">
          Pages may feature clearly marked advertisements or links to external
          resources. LustDiaries is not responsible for the content, privacy
          practices, or offerings of third-party websites.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-[#431059]">
          4. Intellectual Property
        </h2>
        <p className="mt-2">
          All brand marks, original copy, and editorial layouts on LustDiaries
          are protected by applicable copyright and trademark laws.
        </p>
      </section>
    </LegalPageLayout>
  );
}

