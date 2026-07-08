import { ContactPanel, PageIntro, SiteShell } from "@/components/BriefSite";
import { firm } from "@/data/site";

export const metadata = {
  title: "Contact",
  description:
    "Book a free consultation with London Accounting Firm.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Contact"
        title="Book a free consultation."
        description="The first step is a conversation. Tell us what is happening in your business and we will get back to you to arrange a time to talk."
      />
      <ContactPanel />
      <section className="bg-[#FAF6EC] px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl bg-white p-6">
            <h2 className="text-sm font-black">Phone</h2>
            <p className="mt-3 text-sm font-semibold text-[#5A534C]">{firm.phone}</p>
          </article>
          <article className="rounded-2xl bg-white p-6">
            <h2 className="text-sm font-black">Email</h2>
            <p className="mt-3 break-words text-sm font-semibold text-[#5A534C]">{firm.email}</p>
          </article>
          <article className="rounded-2xl bg-white p-6">
            <h2 className="text-sm font-black">Location</h2>
            <p className="mt-3 text-sm font-semibold text-[#5A534C]">{firm.location}</p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
