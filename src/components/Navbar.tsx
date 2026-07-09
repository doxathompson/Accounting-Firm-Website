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
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between gap-4 border-b border-[#E5E1D8] lg:h-24">
          <Link
            href="/"
            className="min-w-0 font-serif text-xl font-semibold tracking-tight text-[#111827] sm:text-2xl"
            aria-label={`${firm.name} homepage`}
          >
            <span className="block truncate">{firm.name}</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <span
                  key={item.label}
                  aria-disabled="true"
                  className={`cursor-default text-sm transition ${
                    isActive
                      ? "text-[#111827]"
                      : "text-[#4B5563]"
                  }`}
                >
                  {item.label}
                </span>
              );
            })}
          </nav>

          <span
            aria-disabled="true"
            className="hidden shrink-0 cursor-default bg-[#0F2742] px-5 py-2.5 text-sm font-semibold text-white opacity-70 md:block"
          >
            Book a free consultation
          </span>

          <button
            type="button"
            className="shrink-0 rounded-full border border-[#D8D3C8] px-4 py-2 text-sm md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </div>

        {isOpen ? (
          <div id="mobile-menu" className="border-b border-[#E5E1D8] py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <span
                  key={item.label}
                  aria-disabled="true"
                  className="cursor-default rounded-xl px-2 py-3 text-sm text-[#4B5563]"
                >
                  {item.label}
                </span>
              ))}

              <span
                aria-disabled="true"
                className="mt-2 cursor-default bg-[#0F2742] px-5 py-3 text-center text-sm font-semibold text-white opacity-70"
              >
                Book a free consultation
              </span>
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}