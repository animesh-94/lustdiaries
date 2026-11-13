"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { TopicFaq } from "@/data/topics";

export function TopicFaqAccordion({ faqs }: { faqs: TopicFaq[] }) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      defaultValue="faq-0"
      className="space-y-3"
    >
      {faqs.map((faq, idx) => (
        <Accordion.Item
          key={faq.question}
          value={`faq-${idx}`}
          className="overflow-hidden rounded-2xl border border-[#E4D7EE] bg-white transition-colors data-[state=open]:border-[#C6A7DF] data-[state=open]:shadow-[0_8px_24px_-12px_rgba(93,23,126,0.18)]"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-[1rem] font-bold text-[#341146] transition-colors hover:text-[#5D177E]">
              <span>{faq.question}</span>
              <ChevronDown className="h-4 w-4 shrink-0 text-[#5D177E] transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content overflow-hidden">
            <div className="border-t border-[#F1E8F8] px-5 pb-4 pt-3 text-[0.95rem] leading-relaxed text-[#4F4758]">
              {faq.answer}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

