import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How LustDiaries protects visitor privacy, handles analytics, and operates advertising disclosures.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      badge="Privacy & Transparency"
      title="Privacy Policy"
      updated="November 2026"
    >
      <section>
        <h2 className="font-display text-xl font-bold text-[#431059]">
          1. Our Privacy-First Commitment
        </h2>
        <p className="mt-2">
          LustDiaries respects your privacy when browsing sensitive health and
          relationship topics. We do not sell personal reading histories or
          require account registration to access our wellness guides.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-[#431059]">
          2. Information You Voluntarily Share
        </h2>
        <p className="mt-2">
          If you submit a message through our Contact Us form, we collect only
          the name, email address, inquiry category, and message text you
          provide solely to respond to your inquiry.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-[#431059]">
          3. Advertising &amp; Cookies
        </h2>
        <p className="mt-2">
          We may display clearly labeled advertisements to keep our educational
          resources free. Third-party advertising partners may use standard
          cookies or non-personal measurement signals subject to your browser
          privacy controls and applicable regional consent frameworks.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-[#431059]">
          4. Non-Indexed Environment
        </h2>
        <p className="mt-2">
          All pages on LustDiaries enforce strict <code>noindex</code> and{" "}
          <code>nofollow</code> directives to minimize search-engine caching of
          your browsing sessions.
        </p>
      </section>
    </LegalPageLayout>
  );
}

