import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { FAQSection } from "@/components/FAQSection";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/site";

export const metadata = {
  title: "Services | London Accounting Firm",
  description:
    "Accounting services for sole traders, freelancers, consultants, and small limited companies in London.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Accounting services for sole traders and small limited companies."
        description="Practical support for accounts, tax returns, corporation tax, VAT, payroll, bookkeeping, and business advice, delivered by a small team that values clear communication."
      />

      <section className="bg-[#F6F4EE] py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm font-medium text-[#4B5563]">
                For small businesses under £500k turnover
              </p>

              <h2 className="max-w-md text-4xl font-normal leading-tight tracking-[-0.04em] text-[#111827] sm:text-5xl">
                Practical accounting support without the corporate maze.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-[#4B5563]">
                From accounts and tax returns to VAT, payroll, and bookkeeping,
                the firm focuses on the services small business owners need most,
                explained clearly and handled reliably.
              </p>
            </div>

            <div className="relative h-[420px] overflow-hidden bg-[#DED8CC] shadow-sm">
              <Image
                src="/accounting-services-desk.jpg"
                alt="Accounting paperwork, laptop, and business records on a desk"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F6F4EE] pb-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} detailed />
            ))}
          </div>
        </Container>
      </section>

      <FAQSection />

      <CTASection
        title="Not sure which service you need?"
        description="Book a free consultation and we’ll help you understand what support makes sense for your business."
      />
    </>
  );
}