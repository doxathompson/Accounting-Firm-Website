import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamCard } from "@/components/TeamCard";
import { teamMembers } from "@/data/site";

export function TeamPreview() {
  return (
    <section className="bg-[#F6F4EE] py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="Meet the team"
            title="A real accounting practice with real people."
            description="Clients work with a small team that values clear advice, steady communication, and long-term relationships."
          />

          <div className="lg:pb-1">
            <ButtonLink href="#" variant="secondary">
              Meet the team
            </ButtonLink>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </Container>
    </section>
  );
}