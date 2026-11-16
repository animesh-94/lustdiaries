import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Important medical information notice explaining the educational nature of LustDiaries content.",
  alternates: { canonical: "/medical-disclaimer" },
  robots: { index: true, follow: true },
};

export default function MedicalDisclaimerPage() {
  return (
    <LegalPageLayout
      badge="Health Notice"
      title="Medical Disclaimer"
      updated="November 2026"
    >
      <section>
        <h2 className="font-display text-xl font-bold text-[#431059]">
          Not Professional Medical Advice
        </h2>
        <p className="mt-2">
          The information published on LustDiaries—including text, graphics, and
          wellness guides covering intimacy, sleep, stress, pain, and
          relationships—is provided strictly for general educational and
          informational purposes.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-[#431059]">
          Consult a Qualified Healthcare Provider
        </h2>
        <p className="mt-2">
          Nothing on this site is intended to diagnose, treat, cure, or prevent
          any medical or psychological condition. Always seek the guidance of a
          licensed physician, urologist, gynecologist, physical therapist, or
          mental health professional with any questions regarding your health.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-bold text-[#431059]">
          Urgent or Emergency Symptoms
        </h2>
        <p className="mt-2">
          Never disregard professional medical advice or delay seeking care
          because of something you have read on LustDiaries. If you experience a
          medical emergency, call your local emergency services immediately.
        </p>
      </section>
    </LegalPageLayout>
  );
}

