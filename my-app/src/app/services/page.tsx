import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { FAQSection } from "@/components/FAQSection";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/site";

export const metadata = {
  title: "Services | QPA Accountants",
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

      <section className="bg-slate-50 py-20">
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