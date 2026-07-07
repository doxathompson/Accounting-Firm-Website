import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { resources } from "@/data/site";

export function ResourcesPreview() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Resources"
            title="Simple guidance for sole traders and limited companies."
            description="Helpful, plain-English resources for small business owners who want to understand the basics before speaking with an accountant."
          />
          <ButtonLink href="/resources" variant="secondary">
            View resources
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {resources.slice(0, 3).map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </Container>
    </section>
  );
}