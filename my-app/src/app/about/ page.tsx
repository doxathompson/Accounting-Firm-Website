import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamCard } from "@/components/TeamCard";
import { teamMembers, values } from "@/data/site";

export const metadata = {
  title: "About | QPA Accountants",
  description:
    "Learn about QPA Accountants, a small London accounting firm supporting sole traders and limited companies.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A small London accounting team built around personal service."
        description="QPA Accountants supports sole traders, freelancers, consultants, and small limited companies who want reliable advice and responsive communication from real people."
      />

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Our story"
              title="Small by design, personal by nature."
              description="The firm is built for business owners who want a direct relationship with their accountant. Instead of creating layers of departments, the team focuses on knowing each client, explaining things clearly, and helping them stay organised throughout the year."
            />

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-950">The small-team advantage</h2>
              <p className="mt-4 leading-7 text-slate-600">
                A three-person practice should not pretend to be a massive corporate firm. That
                would be ridiculous, and the internet already has enough ridiculous things wearing
                navy suits. The advantage here is personal support: clients can speak to people who
                understand their business and respond with practical advice.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                This approach suits sole traders and small limited companies who value reliability,
                responsiveness, and clear guidance over price-led, impersonal accounting.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Team"
            title="Meet the people behind the practice."
            description="Placeholder team details are included for now and can be replaced with real names, photos, and biographies later."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Values"
            title="What clients should expect."
            description="The firm’s values are simple: communicate properly, explain clearly, meet deadlines, and build long-term relationships."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Speak with the team."
        description="Tell us about your business and we’ll get back to you to arrange a free consultation."
      />
    </>
  );
}