"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "top-0 inset-x-0 z-50 w-full transition-all duration-300",
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
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D177E] rounded-lg py-1"
        >
          <BrandMark className="transition-transform duration-300 group-hover:scale-105" />
          <span className="font-display text-[1.45rem] font-extrabold tracking-tight text-[#5B157A]">
            LustDiaries
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden sm:flex items-center gap-7"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[0.95rem] font-medium text-[#1F1A24] transition-colors hover:text-[#5D177E] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#5D177E] after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile drawer via Radix Dialog */}
        <div className="sm:hidden">
          <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E4D7EE] bg-white text-[#431059] shadow-xs transition hover:bg-[#F3ECF9]"
              >
                <Menu className="h-5 w-5" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-[#2D0A40]/35 backdrop-blur-xs" />
              <Dialog.Content className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-[#FDFBFE] p-6 shadow-2xl border-l border-[#E4D7EE]">
                <div className="flex items-center justify-between pb-6 border-b border-[#EDE3F5]">
                  <div className="flex items-center gap-2">
                    <BrandMark className="w-7 h-6" />
                    <Dialog.Title className="font-display text-lg font-extrabold text-[#5B157A]">
                      LustDiaries
                    </Dialog.Title>
                  </div>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close navigation menu"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[#431059] hover:bg-[#F3ECF9]"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </Dialog.Close>
                </div>
                <nav className="mt-6 flex flex-col gap-3">
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
                  <Link
                    href="/medical-disclaimer"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-[#5C5366] hover:bg-[#F3ECF9] hover:text-[#5D177E]"
                  >
                    Medical Disclaimer
                  </Link>
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}

