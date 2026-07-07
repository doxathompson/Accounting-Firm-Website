import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamCard } from "@/components/TeamCard";
import { teamMembers } from "@/data/site";

export function TeamPreview() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Meet the team"
            title="A real accounting practice with real people."
            description="Clients work with a small team that values clear advice, steady communication, and long-term relationships."
          />
          <ButtonLink href="/about" variant="secondary">
            Meet the team
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </Container>
    </section>
  );
}