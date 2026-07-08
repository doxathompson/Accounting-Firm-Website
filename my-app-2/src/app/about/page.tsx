import Image from "next/image";
import { ConsultationStrip, PageIntro, SiteShell } from "@/components/BriefSite";
import { teamMembers, values } from "@/data/site";

export const metadata = {
  title: "About / Team",
  description:
    "Meet London Accounting Firm, a small accounting team built around personal service.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="About / Team"
        title="Small by design, personal by nature."
        description="The firm is deliberately built around a direct client relationship. That means fewer layers, clearer communication, and a team that knows the businesses it supports."
      />

      <section className="tax-paper grid gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[0.95fr_1fr] lg:px-16">
        <div>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            A practice for owners who do not want to be treated as a number.
          </h2>
          <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-[#4F4943]">
            Small business owners often change accountants because they feel ignored. This site
            leads with the opposite promise: responsive communication, reliable deadlines, and a
            relationship that feels human.
          </p>
        </div>
        <div className="relative min-h-80 overflow-hidden rounded-2xl">
          <Image
            src="/small-accounting-team.jpg"
            alt="Small accounting team working together"
            fill
            sizes="(min-width: 1024px) 540px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-[#FAF6EC] px-6 py-16 sm:px-10 lg:px-16">
        <h2 className="text-3xl font-black sm:text-4xl">Meet the team</h2>
        <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-[#5A534C]">
          Placeholder names can be replaced with real team details when ready. The important point:
          the site shows people, not just services.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-2xl bg-white shadow-[0_14px_30px_rgba(17,17,17,0.08)]">
              <div className="relative h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black">{member.name}</h3>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-[#F05221]">{member.role}</p>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#5A534C]">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <h2 className="text-3xl font-black sm:text-4xl">What clients should expect</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article key={value.title} className="rounded-2xl border border-[#E2D8CB] p-6">
              <h3 className="text-lg font-black">{value.title}</h3>
              <p className="mt-4 text-sm font-semibold leading-6 text-[#5A534C]">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ConsultationStrip title="Speak with the team directly." />
    </SiteShell>
  );
}
