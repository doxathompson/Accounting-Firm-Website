import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { resources } from "@/data/site";

export function ResourcesPreview() {
  return (
    <section className="bg-[#FAF9F6] py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="Resources"
            title="For Sole Traders & Limited Companies"
            description="Helpful, plain-English resources for small business owners who want to understand the basics before speaking with an accountant."
          />

          <div className="lg:pb-1">
            <ButtonLink href="/resources" variant="secondary">
              View resources
            </ButtonLink>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {resources.slice(0, 3).map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </Container>
    </section>
  );
}