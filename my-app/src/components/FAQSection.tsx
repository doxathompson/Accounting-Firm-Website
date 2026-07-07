import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/data/site";

export function FAQSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeading
          eyebrow="Questions"
          title="A few things small business owners often ask."
          description="Clear answers before anyone gets buried under tax vocabulary, because apparently civilisation chose paperwork."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-950">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}