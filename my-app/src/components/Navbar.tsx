"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { firm, navItems } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="London Accounting Firm home">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">
              QPA
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-slate-950">{firm.name}</span>
              <span className="block text-xs text-slate-500">Small business accountants</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-100 text-slate-950"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <ButtonLink href="/contact">Book a free consultation</ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            Menu
          </button>
        </div>

        {isOpen ? (
          <div id="mobile-menu" className="border-t border-slate-200 py-4 md:hidden">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink href="/contact" className="mt-2 w-full">
                Book a free consultation
              </ButtonLink>
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}