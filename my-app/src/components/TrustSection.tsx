import { Container } from "@/components/Container";
import { trustSignals } from "@/data/site";

export function TrustSection() {
  return (
    <section className="bg-[#F6F4EE] py-16">
      <Container>
        <div className="bg-[#ECE8DD] px-8 py-12 sm:px-12 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="max-w-sm text-3xl font-normal leading-tight tracking-[-0.04em] text-[#111827] sm:text-4xl">
                Accounting support built for small London businesses.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-base leading-7 text-[#4B5563]">
                A small practice for sole traders and limited companies who want reliable advice,
                clear explanations, and responsive communication from people who know their business.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-[#CFC7B8] pt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trustSignals.map((signal) => (
                <article key={signal.title}>
                  <h3 className="text-base font-semibold text-[#111827]">{signal.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                    {signal.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}