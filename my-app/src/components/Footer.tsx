import Link from "next/link";
import { Container } from "@/components/Container";
import { firm } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#0F2742] text-white">
      <Container size="wide" className="py-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl font-semibold tracking-tight">{firm.name}</p>
            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              Contact us to see how responsive accounting support can save you time,
              confusion, and deadline panic.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Services</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <p>Accounts</p>
              <p>Tax returns</p>
              <p>Bookkeeping</p>
              <p>Payroll</p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Explore</h2>
            <div className="mt-5 flex flex-col gap-3">
              <Link href="/services" className="text-sm text-slate-400 hover:text-white">Services</Link>
              <Link href="/about" className="text-sm text-slate-400 hover:text-white">About</Link>
              <Link href="/resources" className="text-sm text-slate-400 hover:text-white">Resources</Link>
              <Link href="/contact" className="text-sm text-slate-400 hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Contact</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <p>{firm.email}</p>
              <p>{firm.phone}</p>
              <p>{firm.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-sm text-slate-500">
          Copyright © {new Date().getFullYear()} {firm.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}