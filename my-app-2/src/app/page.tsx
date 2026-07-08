import Image from "next/image";
import Link from "next/link";
import { ConsultationStrip, SiteShell } from "@/components/BriefSite";
import { services, teamMembers, trustSignals } from "@/data/site";

export default function HomePage() {
  return (
    <SiteShell>
      <section className="grid items-center gap-10 px-6 pb-16 pt-10 sm:px-10 lg:grid-cols-[0.9fr_1fr] lg:px-16 lg:pb-20 lg:pt-14">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#F05221]">
            For sole traders and limited companies under £500k
          </p>
          <h1 className="mt-5 max-w-xl text-4xl font-black leading-[1.05] tracking-normal sm:text-5xl lg:text-6xl">
            Accounting support from people who{" "}
            <span className="text-[#F05221]">actually pick up the phone.</span>
          </h1>
          <p className="mt-7 max-w-md text-sm font-semibold leading-7 text-[#3F3B37]">
            A small London accounting firm for business owners who want clear answers,
            reliable deadlines, and a direct relationship with a responsive team.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#F05221] px-7 py-4 text-xs font-black text-white shadow-[0_12px_22px_rgba(240,82,33,0.22)]"
            >
              Book a free consultation
            </Link>
            <Link href="/services" className="text-sm font-black text-[#111111]">
              View services /
            </Link>
          </div>
        </div>
        <div className="relative min-h-[330px] lg:min-h-[470px]">
          <div className="absolute right-0 top-0 h-[83%] w-[82%] overflow-hidden rounded-[36px] rounded-bl-[96px] bg-[#EEE7DD] shadow-[0_20px_45px_rgba(17,17,17,0.16)]">
            <Image
              src="/hero-accounting-meeting.jpg"
              alt="Accountant meeting with a small business owner"
              fill
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-8 right-8 max-w-48 rounded-2xl bg-[#111111] p-5 text-white shadow-[0_18px_34px_rgba(17,17,17,0.22)]">
            <p className="text-3xl font-black">3</p>
            <p className="mt-1 text-xs font-bold leading-5 text-white/80">
              person team, intentionally small and easy to reach
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F05221] px-6 py-12 text-white sm:px-10 lg:px-16">
        <div className="grid gap-5 md:grid-cols-4">
          {trustSignals.map((item) => (
            <article key={item.title} className="rounded-2xl bg-white/10 p-5">
              <h2 className="text-lg font-black">{item.title}</h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-white/82">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#FAF6EC] px-6 py-16 sm:px-10 lg:px-16">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-black tracking-normal sm:text-4xl">How we help</h2>
            <p className="mt-4 max-w-md text-sm font-semibold leading-7 text-[#5A534C]">
              A short overview only. The full Services page explains what support makes sense for
              sole traders and limited companies.
            </p>
          </div>
          <Link href="/services" className="text-sm font-black text-[#111111]">See all services /</Link>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div className="relative min-h-72 overflow-hidden rounded-2xl">
            <Image
              src="/accounting-services-desk.jpg"
              alt="Accounting records and planning documents"
              fill
              sizes="(min-width: 1024px) 470px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {services.slice(0, 4).map((service, index) => (
              <article key={service.title} className="border-t border-[#D8CEC0] pt-5">
                <div className="mb-5 grid h-9 w-9 place-items-center rounded-lg border border-[#111111] text-xs font-black">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-black leading-snug">{service.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#5A534C]">{service.short}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tax-paper grid gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[0.9fr_1fr] lg:px-16">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#F05221]">Meet the team</p>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Personal service works better when you know who is behind it.
          </h2>
          <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-[#4F4943]">
            This is a small practice by design. Clients are not passed between departments or
            treated like a ticket number. They get a direct relationship with real people.
          </p>
          <Link href="/about" className="mt-8 inline-flex rounded-full bg-[#111111] px-7 py-3 text-xs font-black text-white">
            About / Team
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-2xl bg-white shadow-[0_16px_32px_rgba(17,17,17,0.08)]">
              <div className="relative h-48">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 240px, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-black">{member.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#F05221]">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ConsultationStrip />
    </SiteShell>
  );
}
