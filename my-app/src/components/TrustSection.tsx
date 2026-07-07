import { Container } from "@/components/Container";
import { trustSignals } from "@/data/site";

export function TrustSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-14">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal) => (
            <article key={signal.title} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="text-base font-bold text-slate-950">{signal.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{signal.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}