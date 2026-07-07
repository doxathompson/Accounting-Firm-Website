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
    <header className="sticky top-0 z-50 bg-[#F6F4EE]/90 backdrop-blur">
      <Container>
        <div className="flex h-24 items-center justify-between border-b border-[#E5E1D8]">
          <Link href="/" className="text-xl font-semibold tracking-tight text-[#111827]">
            {firm.name}
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
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
            href="/contact"
            className="hidden text-sm font-medium text-[#111827] hover:opacity-70 md:block"
          >
            Book a free consultation
          </Link>

          <button
            type="button"
            className="rounded-full border border-[#D8D3C8] px-4 py-2 text-sm md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </div>

        {isOpen ? (
          <div id="mobile-menu" className="border-b border-[#E5E1D8] py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-2 py-2 text-sm text-[#4B5563]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-full bg-[#101923] px-5 py-3 text-center text-sm font-semibold text-white"
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