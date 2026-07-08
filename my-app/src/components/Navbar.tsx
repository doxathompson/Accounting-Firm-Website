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
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm transition ${
                    isActive
                      ? "text-[#111827]"
                      : "text-[#4B5563] hover:text-[#111827]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="#"
            className="hidden shrink-0 bg-[#16a34a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#15803d] md:block"
          >
            Book a free consultation
          </Link>

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
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-2 py-3 text-sm text-[#4B5563]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-[#16a34a] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Book a free consultation
              </Link>
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}