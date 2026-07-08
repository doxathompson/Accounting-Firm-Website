import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#F6F4EE] py-16 sm:py-20 lg:py-32">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="mb-5 max-w-sm text-sm font-medium text-[#4B5563]">
              For sole traders and limited companies under £500k turnover
            </p>

            <h1 className="max-w-xl text-5xl font-normal leading-[0.98] tracking-[-0.055em] text-[#111827] sm:text-6xl lg:text-7xl">
              Taking care of your accounts, tax, and paperwork.
            </h1>

            <p className="mt-7 max-w-md text-base leading-7 text-[#4B5563]">
              Reliable accounting support for London sole traders and small companies,
              with responsive communication from a small team that knows your business.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink href="/contact">Book a free consultation</ButtonLink>
              <ButtonLink href="/services" variant="ghost">
                View services
              </ButtonLink>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="relative h-[360px] overflow-hidden bg-[#DED8CC] shadow-sm sm:h-[460px]">
              <Image
                src="/hero-accounting-meeting.jpg"
                alt="Accountants reviewing paperwork with a small business client"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="bg-[#101923] p-5 text-white shadow-sm">
                <p className="text-xs text-slate-400">Client focus</p>
                <p className="mt-3 text-2xl font-semibold">Under £500k</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">
                  Sole traders and small limited companies
                </p>
              </div>

              <div className="border border-[#E5E1D8] bg-[#FAF9F4] p-5 shadow-sm">
                <p className="text-sm font-semibold text-[#111827]">
                  An accountant who actually picks up the phone.
                </p>
                <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                  Personal support without being passed around a large firm.
                </p>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[520px] lg:block">
            <div className="absolute right-0 top-0 h-80 w-[78%] bg-[#DED8CC]" />

            <div className="absolute right-16 top-10 h-80 w-[62%] overflow-hidden shadow-sm">
              <Image
                src="/hero-accounting-meeting.jpg"
                alt="Accountants reviewing paperwork with a small business client"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="absolute left-6 top-56 w-56 bg-[#101923] p-5 text-white shadow-xl">
              <p className="text-xs text-slate-400">Support areas</p>

              <div className="mt-5 space-y-3">
                {[
                  ["Accounts", "82%"],
                  ["Tax returns", "68%"],
                  ["Bookkeeping", "74%"],
                  ["Payroll", "56%"],
                ].map(([label, width]) => (
                  <div key={label}>
                    <div className="mb-1 flex justify-between text-xs">
                      <span>{label}</span>
                      <span>{width}</span>
                    </div>
                    <div className="h-2 bg-white/10">
                      <div className="h-2 bg-white" style={{ width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute right-0 top-32 w-48 bg-[#101923] p-5 text-white shadow-xl">
              <p className="text-xs text-slate-400">Client focus</p>
              <p className="mt-3 text-2xl font-semibold">Under £500k</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                Sole traders and small limited companies
              </p>
            </div>

            <div className="absolute bottom-0 right-24 w-72 border border-[#E5E1D8] bg-[#FAF9F4] p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#111827]">
                An accountant who actually picks up the phone.
              </p>
              <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                Personal accounting support without being passed around a large firm.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}