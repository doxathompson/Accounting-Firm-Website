import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/site";

export function ServicesPreview() {
  return (
    <section className="bg-[#F6F4EE] py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Accounting support built around small businesses."
            description="Focused support for the work small business owners actually need: accounts, tax, bookkeeping, payroll, VAT, and practical advice."
          />

          <div className="lg:pb-1">
            <ButtonLink href="/services" variant="secondary">
              View all services
            </ButtonLink>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}