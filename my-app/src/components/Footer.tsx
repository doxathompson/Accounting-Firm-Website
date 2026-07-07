import Link from "next/link";
import { Container } from "@/components/Container";
import { firm, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-xs font-bold text-white">
                QPA
              </span>
              <div>
                <p className="font-bold text-slate-950">{firm.name}</p>
                <p className="text-sm text-slate-500">Small business accountants in London</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
              Reliable accounting support for sole traders and limited companies who want clear advice,
              responsive communication, and a personal relationship with their accountant.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-slate-950">Pages</h2>
            <div className="mt-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-slate-950">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-slate-950">Contact</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>{firm.location}</p>
              <p>{firm.phone}</p>
              <p>{firm.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} {firm.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}