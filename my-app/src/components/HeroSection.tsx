import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-50 to-white" />
      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
              For sole traders and limited companies under £500k turnover
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Reliable accounting support for sole traders and small companies in London.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              We help sole traders and limited companies with accounts, tax returns,
              bookkeeping, payroll, and practical advice, with responsive support from
              a small team that knows your business.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Book a free consultation</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                View our services
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Small firm advantage
              </p>
              <h2 className="mt-4 text-2xl font-bold text-slate-950">
                Speak to people who actually know your business.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                No confusing handoffs. No generic call-centre feel. Just practical accounting
                support from a small team focused on small businesses.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Accounts and tax explained clearly",
                  "Support for sole traders and company directors",
                  "Friendly, responsive communication",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">
                      ✓
                    </span>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}