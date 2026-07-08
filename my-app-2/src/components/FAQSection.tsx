import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/data/site";

export function FAQSection() {
  return (
    <section className="bg-[#ECE8DD] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Questions"
            title="A few things small business owners often ask."
            description="Clear answers before anyone gets buried under tax vocabulary, because paperwork remains one of humanity’s strangest hobbies."
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="border border-[#D8D3C8] bg-[#FAF9F4] p-6"
              >
                <h3 className="text-lg font-semibold text-[#111827]">
                  {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}