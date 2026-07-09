import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamCard } from "@/components/TeamCard";
import { teamMembers, values } from "@/data/site";

export const metadata = {
  title: "About | London Accounting Firm",
  description:
    "Learn about London Accounting Firm, a small London accounting firm supporting sole traders and limited companies.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A small London accounting team built around personal service."
        description="London Accounting Firm supports sole traders, freelancers, consultants, and small limited companies who want reliable advice and responsive communication from real people."
      />

      <section className="overflow-hidden bg-[#F6F4EE] py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <p className="mb-4 text-sm font-medium text-[#4B5563]">
                Our story
              </p>

              <h2 className="max-w-md text-4xl font-normal leading-[1.03] tracking-[-0.05em] text-[#111827] sm:text-5xl">
                Small by design, personal by nature.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-[#4B5563]">
                The firm is built for business owners who want a direct
                relationship with their accountant. Instead of creating layers
                of departments, the team focuses on knowing each client,
                explaining things clearly, and helping them stay organised
                throughout the year.
              </p>

              <p className="mt-5 max-w-md text-base leading-7 text-[#4B5563]">
                This approach suits sole traders and small limited companies
                who value reliability, responsiveness, and clear guidance over
                price-led, impersonal accounting.
              </p>
            </div>

            <div className="lg:hidden">
              <div className="relative h-[360px] overflow-hidden bg-[#DED8CC] shadow-sm sm:h-[460px]">
                <Image
                  src="/small-accounting-team.jpg"
                  alt="Small accounting team working together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-5 bg-[#101923] p-6 text-white shadow-sm">
                <p className="text-sm text-slate-400">Small by design</p>

                <h3 className="mt-4 text-3xl font-normal leading-tight">
                  Personal support from a focused team.
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Clients work with real people who understand their business,
                  deadlines, and questions.
                </p>
              </div>
            </div>

            <div className="relative hidden min-h-[520px] lg:block">
              <div className="absolute right-0 top-0 h-80 w-[82%] bg-[#DED8CC]" />

              <div className="absolute left-0 top-12 h-96 w-[82%] overflow-hidden shadow-sm">
                <Image
                  src="/small-accounting-team.jpg"
                  alt="Small accounting team working together"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 right-0 w-80 bg-[#101923] p-6 text-white shadow-xl">
                <p className="text-sm text-slate-400">Small by design</p>

                <h3 className="mt-4 text-3xl font-normal leading-tight">
                  Personal support from a focused team.
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Clients work with real people who understand their business,
                  deadlines, and questions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F6F4EE] py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Team"
            title="Meet the people behind the practice."
            description="A small, dedicated team of accounting professionals here to support your business."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F6F4EE] py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Values"
            title="What clients should expect."
            description="The firm’s values are simple: communicate properly, explain clearly, meet deadlines, and build long-term relationships."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="border border-[#E5E1D8] bg-[#FAF9F4] p-6"
              >
                <h3 className="text-lg font-semibold text-[#111827]">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#4B5563]">
                  {value.description}
                </p>
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