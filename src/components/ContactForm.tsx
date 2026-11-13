"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("General Inquiry");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#DFD0EB] bg-[#F3ECF9] p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#5D177E] shadow-xs">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h2 className="mt-4 font-display text-xl font-extrabold text-[#431059]">
          Message Received
        </h2>
        <p className="mt-2 text-sm text-[#4E4657]">
          Thank you, {name}. Our editorial &amp; compliance team will review your{" "}
          {topic.toLowerCase()} note and reply to {email} within 1–2 business days.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
            setMessage("");
          }}
          className="mt-5 rounded-full bg-[#5D177E] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#431059]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-[#E4D7EE] bg-white p-6 sm:p-8 shadow-[0_12px_32px_-16px_rgba(67,16,89,0.16)]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-semibold text-[#331045]"
          >
            Your Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Alex Morgan"
            className="mt-1.5 w-full rounded-xl border border-[#DFD0EB] bg-[#FDFBFE] px-4 py-2.5 text-sm text-[#1F1A24] outline-none transition focus:border-[#5D177E] focus:ring-2 focus:ring-[#5D177E]/15"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold text-[#331045]"
          >
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-1.5 w-full rounded-xl border border-[#DFD0EB] bg-[#FDFBFE] px-4 py-2.5 text-sm text-[#1F1A24] outline-none transition focus:border-[#5D177E] focus:ring-2 focus:ring-[#5D177E]/15"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-topic"
          className="block text-sm font-semibold text-[#331045]"
        >
          Inquiry Category
        </label>
        <select
          id="contact-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-[#DFD0EB] bg-[#FDFBFE] px-4 py-2.5 text-sm text-[#1F1A24] outline-none transition focus:border-[#5D177E] focus:ring-2 focus:ring-[#5D177E]/15"
        >
          <option>General Inquiry</option>
          <option>Editorial Feedback</option>
          <option>Advertising &amp; Partnerships</option>
          <option>Privacy &amp; Compliance Request</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-semibold text-[#331045]"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help?"
          className="mt-1.5 w-full rounded-xl border border-[#DFD0EB] bg-[#FDFBFE] px-4 py-2.5 text-sm text-[#1F1A24] outline-none transition focus:border-[#5D177E] focus:ring-2 focus:ring-[#5D177E]/15"
        />
      </div>

      <button
        type="submit"
        className="cta-shimmer inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6B1D8C] to-[#4A1166] px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(93,23,126,0.45)] transition hover:-translate-y-0.5"
      >
        <Send className="h-4 w-4" />
        <span>Send Message</span>
      </button>
    </form>
  );
}

