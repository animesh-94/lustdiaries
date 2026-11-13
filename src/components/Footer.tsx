import Link from "next/link";
import { BrandMark } from "./BrandMark";

const FOOTER_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/medical-disclaimer", label: "Medical Disclaimer" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#2D0A40] text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Left brand + divider */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-lg"
            >
              <BrandMark variant="white" className="w-8 h-7" />
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                LustDiaries
              </span>
            </Link>
            <span
              className="hidden lg:inline-block h-6 w-px bg-white/25"
              aria-hidden="true"
            />
          </div>

          {/* Center compliance & navigation links */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[0.875rem] text-white/90"
          >
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#DFB9F5]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right circular social buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#2D0A40] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#F3ECF9]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M13.5 21v-8.2h2.7l.4-3.2h-3.1V7.6c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.5H7.7v3.2h2.7V21h3.1z" />
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Twitter / X"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#2D0A40] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#F3ECF9]"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="YouTube"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#2D0A40] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#F3ECF9]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.1V8.9l5.2 3.1L10 15.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

