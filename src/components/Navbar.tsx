"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { cn } from "@/lib/utils";
import { WELLNESS_TOPICS, getTopicHref, isExternalHref } from "@/data/topics";

const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpenPath, setMobileOpenPath] = useState<string | null>(null);
  const [desktopMenuOpenPath, setDesktopMenuOpenPath] = useState<string | null>(
    null
  );

  const mobileOpen = mobileOpenPath === pathname;
  const desktopMenuOpen = desktopMenuOpenPath === pathname;

  const setMobileOpen = (next: boolean | ((prev: boolean) => boolean)) => {
    setMobileOpenPath((curr) => {
      const currBool = curr === pathname;
      const target = typeof next === "function" ? next(currBool) : next;
      return target ? pathname : null;
    });
  };

  const setDesktopMenuOpen = (
    next: boolean | ((prev: boolean) => boolean)
  ) => {
    setDesktopMenuOpenPath((curr) => {
      const currBool = curr === pathname;
      const target = typeof next === "function" ? next(currBool) : next;
      return target ? pathname : null;
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!mobileOpen && !desktopMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpenPath(null);
        setDesktopMenuOpenPath(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, desktopMenuOpen]);

  // Lock body vertical scroll cleanly when mobile drawer is open (without disabling pointer-events)
  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "top-0 inset-x-0 z-[80] w-full pointer-events-auto transition-all duration-300",
          isHome ? "fixed" : "sticky",
          scrolled
            ? "bg-[#FDFBFE]/92 backdrop-blur-md border-b border-[#E7DAF1]/80 shadow-[0_6px_24px_-12px_rgba(67,16,89,0.12)]"
            : isHome
              ? "bg-transparent border-b border-transparent"
              : "bg-[#FDFBFE]/95 backdrop-blur-sm border-b border-[#E7DAF1]/60"
        )}
      >
        <div className="mx-auto flex h-16 sm:h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="group relative z-10 flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D177E] rounded-lg py-1"
          >
            <BrandMark className="pointer-events-none transition-transform duration-300 group-hover:scale-105" />
            <span className="font-display text-[1.45rem] font-extrabold tracking-tight text-[#5B157A]">
              LustDiaries
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary Navigation"
            className="relative z-10 hidden md:flex items-center gap-7"
          >
            {/* Clickable Wellness Menu dropdown for desktop */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={desktopMenuOpen}
                aria-haspopup="menu"
                onClick={() => setDesktopMenuOpen((prev) => !prev)}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg py-1 text-[0.95rem] font-medium text-[#1F1A24] transition-colors hover:text-[#5D177E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D177E]"
              >
                <span>Menu</span>
                <ChevronDown
                  className={cn(
                    "pointer-events-none h-4 w-4 transition-transform duration-200",
                    desktopMenuOpen && "rotate-180 text-[#5D177E]"
                  )}
                />
              </button>

              {desktopMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-[85]"
                    aria-hidden="true"
                    onClick={() => setDesktopMenuOpen(false)}
                  />
                  <div
                    role="menu"
                    className="absolute right-0 top-full z-[90] mt-2.5 w-60 rounded-2xl border border-[#E4D7EE] bg-white p-2 shadow-[0_18px_40px_-14px_rgba(45,10,64,0.24)]"
                  >
                    <p className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#7A6A89]">
                      Wellness Topics
                    </p>
                    {WELLNESS_TOPICS.map((topic) => {
                      const href = getTopicHref(topic.slug);
                      const external = isExternalHref(href);
                      const itemClass =
                        "block rounded-xl px-3 py-2 text-sm font-medium text-[#1F1A24] transition-colors hover:bg-[#F3ECF9] hover:text-[#5D177E]";
                      return external ? (
                        <a
                          key={topic.slug}
                          role="menuitem"
                          href={href}
                          onClick={() => setDesktopMenuOpen(false)}
                          className={itemClass}
                        >
                          {topic.title}
                        </a>
                      ) : (
                        <Link
                          key={topic.slug}
                          role="menuitem"
                          href={href}
                          onClick={() => setDesktopMenuOpen(false)}
                          className={itemClass}
                        >
                          {topic.title}
                        </Link>
                      );
                    })}
                    <div className="my-1.5 h-px bg-[#EFE6F7]" />
                    <Link
                      role="menuitem"
                      href="/terms"
                      onClick={() => setDesktopMenuOpen(false)}
                      className="block rounded-xl px-3 py-2 text-xs font-medium text-[#5C5366] transition-colors hover:bg-[#F3ECF9] hover:text-[#5D177E]"
                    >
                      Terms &amp; Conditions
                    </Link>
                    <Link
                      role="menuitem"
                      href="/privacy-policy"
                      onClick={() => setDesktopMenuOpen(false)}
                      className="block rounded-xl px-3 py-2 text-xs font-medium text-[#5C5366] transition-colors hover:bg-[#F3ECF9] hover:text-[#5D177E]"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </>
              )}
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative cursor-pointer text-[0.95rem] font-medium text-[#1F1A24] transition-colors hover:text-[#5D177E] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#5D177E] after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile & Tablet menu button */}
          <div className="relative z-10 md:hidden">
            <button
              type="button"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 cursor-pointer touch-manipulation items-center justify-center rounded-xl border border-[#E4D7EE] bg-white text-[#431059] shadow-xs transition hover:bg-[#F3ECF9] active:scale-95"
            >
              {mobileOpen ? (
                <X className="pointer-events-none h-5 w-5" />
              ) : (
                <Menu className="pointer-events-none h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet slide-over drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[120] md:hidden" data-lenis-prevent>
          <div
            className="fixed inset-0 bg-[#2D0A40]/40 backdrop-blur-xs"
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
          />
          <aside
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed right-0 top-0 z-[130] flex h-full w-72 max-w-[85vw] flex-col overflow-y-auto border-l border-[#E4D7EE] bg-[#FDFBFE] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-5 border-b border-[#EDE3F5]">
              <div className="flex items-center gap-2">
                <BrandMark className="pointer-events-none w-7 h-6" />
                <span className="font-display text-lg font-extrabold text-[#5B157A]">
                  LustDiaries
                </span>
              </div>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-9 w-9 cursor-pointer touch-manipulation items-center justify-center rounded-lg text-[#431059] hover:bg-[#F3ECF9]"
              >
                <X className="pointer-events-none h-5 w-5" />
              </button>
            </div>

            <nav className="mt-5 flex flex-col gap-1.5">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-[#1F1A24] hover:bg-[#F3ECF9] hover:text-[#5D177E]"
              >
                Home
              </Link>
              <Link
                href="/#topics"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-[#1F1A24] hover:bg-[#F3ECF9] hover:text-[#5D177E]"
              >
                Wellness Topics
              </Link>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-[#1F1A24] hover:bg-[#F3ECF9] hover:text-[#5D177E]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="my-2 h-px bg-[#EDE3F5]" />
              <Link
                href="/terms"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#5C5366] hover:bg-[#F3ECF9] hover:text-[#5D177E]"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="/privacy-policy"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#5C5366] hover:bg-[#F3ECF9] hover:text-[#5D177E]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/medical-disclaimer"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#5C5366] hover:bg-[#F3ECF9] hover:text-[#5D177E]"
              >
                Medical Disclaimer
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
