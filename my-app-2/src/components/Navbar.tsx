"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { firm, navItems } from "@/data/site";
import { Container } from "@/components/Container";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur">
      <Container size="wide">
        <div className="flex h-20 items-center justify-between gap-4 border-b border-[#D8E0DF]">
          <Link
            href="/"
            className="min-w-0 text-sm font-bold tracking-tight text-[#103F43] sm:text-base"
            aria-label={`${firm.name} homepage`}
          >
            <span className="block truncate">Harriet Ross.</span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs font-medium transition ${
                    isActive
                      ? "text-[#103F43]"
                      : "text-[#526D70] hover:text-[#103F43]"
                  }`}
                >
                  {item.label === "Resources" ? "News" : item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden shrink-0 border-b border-[#103F43] pb-1 text-xs font-bold text-[#103F43] hover:opacity-70 md:block"
          >
            Get in touch
          </Link>

          <button
            type="button"
            className="shrink-0 border border-[#D8E0DF] px-4 py-2 text-sm text-[#103F43] md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </div>

        {isOpen ? (
          <div id="mobile-menu" className="border-b border-[#D8E0DF] py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-2 py-3 text-sm text-[#526D70]"
                >
                  {item.label === "Resources" ? "News" : item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-[#0F4C52] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Get in touch
              </Link>
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
