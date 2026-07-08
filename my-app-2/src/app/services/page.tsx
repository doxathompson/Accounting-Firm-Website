import Image from "next/image";
import { ConsultationStrip, PageIntro, SiteShell } from "@/components/BriefSite";
import { faqs, services } from "@/data/site";

export const metadata = {
  title: "Services",
  description:
    "Accounting services for sole traders and limited companies under £500k turnover.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Services"
        title="Practical accounting support without the corporate maze."
        description="Services are shaped around sole traders and small limited companies that need accounts, returns, bookkeeping, VAT, payroll, and plain-English advice handled reliably."
      />

      <section className="bg-[#FAF6EC] px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1fr]">
          <div className="relative min-h-80 overflow-hidden rounded-2xl">
            <Image
              src="/accounting-services-desk.jpg"
              alt="Accounting paperwork and laptop on a desk"
              fill
              sizes="(min-width: 1024px) 470px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl bg-white p-6 shadow-[0_14px_30px_rgba(17,17,17,0.07)]">
                <h2 className="text-xl font-black leading-tight">{service.title}</h2>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#5A534C]">{service.short}</p>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.14em] text-[#F05221]">Who it is for</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#5A534C]">{service.who}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tax-paper px-6 py-16 sm:px-10 lg:px-16">
        <h2 className="text-3xl font-black sm:text-4xl">Common questions</h2>
        <div className="mt-8 divide-y divide-[#D8CEC0] rounded-2xl bg-white p-6">
          {faqs.map((item) => (
            <article key={item.question} className="py-6 first:pt-0 last:pb-0">
              <h3 className="text-lg font-black">{item.question}</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-[#5A534C]">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <ConsultationStrip
        title="Not sure which service you need?"
        description="Book a free consultation and we will help you understand the right next step for your business."
      />
    </SiteShell>
  );
}
