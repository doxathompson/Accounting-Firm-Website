import Image from "next/image";
import Link from "next/link";
import { ConsultationStrip, PageIntro, SiteShell } from "@/components/BriefSite";
import { resources } from "@/data/site";

export const metadata = {
  title: "Resources",
  description:
    "Simple accounting resources for sole traders and limited companies.",
};

export default function ResourcesPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Resources"
        title="For Sole Traders & Limited Companies"
        description="Simple, practical guidance for small business owners who want to understand the basics without being buried under jargon."
      />

      <section className="bg-[#FAF6EC] px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <article key={resource.title} className="overflow-hidden rounded-2xl bg-white shadow-[0_14px_30px_rgba(17,17,17,0.08)]">
              <div className="relative h-56">
                <Image
                  src={resource.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#F05221]">{resource.tag}</p>
                <h2 className="mt-3 text-xl font-black leading-tight">{resource.title}</h2>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#5A534C]">{resource.excerpt}</p>
                <Link href="/contact" className="mt-5 inline-flex text-sm font-black">Ask us about this /</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ConsultationStrip
        title="Resources are useful. Your business still has its own details."
        description="Book a free consultation and speak with the team about your situation."
      />
    </SiteShell>
  );
}
