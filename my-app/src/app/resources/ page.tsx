import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ResourceCard } from "@/components/ResourceCard";
import { resources } from "@/data/site";

export const metadata = {
  title: "Resources | QPA Accountants",
  description:
    "Simple accounting resources for sole traders and limited companies.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="For Sole Traders & Limited Companies"
        description="Simple, practical guidance for small business owners who want to understand accounting basics without being buried under jargon."
      />

      <section className="bg-slate-50 py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Need advice for your own business?"
        description="Resources are useful, but your business has its own details. Book a free consultation and speak with the team."
      />
    </>
  );
}