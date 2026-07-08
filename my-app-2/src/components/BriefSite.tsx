import Image from "next/image";
import Link from "next/link";
import { firm, navItems } from "@/data/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${firm.name} homepage`}>
      <div className="relative grid h-11 w-11 place-items-center border-2 border-[#111111] text-sm font-extrabold">
        <span className="text-[#F05221]">L</span>
        <span className="absolute bottom-1 right-1">A</span>
      </div>
      <div className="leading-none">
        <p className="text-base font-black tracking-[0.14em] sm:text-lg">LONDON</p>
        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-[#F05221]">
          Accounting Firm
        </p>
      </div>
    </Link>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen px-4 py-8 text-[#111111] sm:px-6 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[18px] bg-[#FFFDF8] shadow-[0_28px_80px_rgba(80,28,12,0.32)]">
        <header className="flex items-center justify-between gap-6 px-6 py-5 sm:px-10 lg:px-16">
          <Logo />
          <nav className="hidden items-center gap-7 text-xs font-bold lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#111111] transition hover:text-[#F05221]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="hidden rounded-full bg-[#F05221] px-6 py-3 text-xs font-black text-white shadow-[0_12px_22px_rgba(240,82,33,0.2)] sm:inline-flex"
          >
            Book a free consultation
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-[#111111] px-5 py-3 text-xs font-black text-white sm:hidden"
          >
            Talk to us
          </Link>
        </header>
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="px-6 pb-12 pt-10 sm:px-10 lg:px-16 lg:pb-16">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-[#F05221]">{eyebrow}</p>
      <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.05] tracking-normal sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-7 max-w-2xl text-base font-semibold leading-8 text-[#4F4943]">
        {description}
      </p>
    </section>
  );
}

export function ConsultationStrip({
  title = "Ready to speak with an accountant who picks up the phone?",
  description = "Book a free consultation and tell us what kind of support your business needs.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-[#F05221] px-6 py-12 text-white sm:px-10 lg:px-16">
      <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
        <div>
          <h2 className="max-w-2xl text-3xl font-black leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-white/85">{description}</p>
        </div>
        <Link
          href="/contact"
          className="inline-flex self-start rounded-full bg-white px-7 py-4 text-xs font-black text-[#111111]"
        >
          Book a free consultation
        </Link>
      </div>
    </section>
  );
}

export function ContactPanel() {
  return (
    <section className="grid overflow-hidden bg-white lg:grid-cols-[0.9fr_1.1fr]">
      <div className="relative min-h-[360px]">
        <Image
          src="/accounting-services-desk.jpg"
          alt="Accounting consultation at a meeting table"
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="px-6 py-12 sm:px-10 lg:px-16">
        <h2 className="text-4xl font-black tracking-normal">Book a free consultation</h2>
        <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-[#4F4943]">
          Tell us a little about your business. We will get back to you to arrange a conversation,
          not a transactional exchange.
        </p>
        <form className="mt-10 space-y-7">
          {["Full name", "Phone number", "Email address"].map((field) => (
            <label key={field} className="block">
              <span className="text-xs font-black">{field}</span>
              <input className="mt-3 w-full border-0 border-b border-[#CFC7BE] bg-transparent pb-3 text-sm outline-none focus:border-[#F05221]" />
            </label>
          ))}
          <label className="block">
            <span className="text-xs font-black">What would you like help with?</span>
            <textarea className="mt-3 min-h-24 w-full resize-none border-0 border-b border-[#CFC7BE] bg-transparent pb-3 text-sm outline-none focus:border-[#F05221]" />
          </label>
          <button type="submit" className="inline-flex rounded-full bg-[#111111] px-7 py-4 text-xs font-black text-white">
            Talk to us
          </button>
        </form>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="mx-auto mt-10 max-w-7xl overflow-hidden rounded-[18px] bg-[#E8F1FF] px-6 py-12 text-[#111111] shadow-[0_28px_80px_rgba(80,28,12,0.18)] sm:px-10 lg:px-16">
      <div className="grid gap-10 md:grid-cols-[1.1fr_1fr_1fr_1.1fr]">
        <Logo />
        <div>
          <h3 className="text-sm font-black">Who we help</h3>
          <p className="mt-5 text-sm font-semibold leading-7 text-[#4F4943]">
            Sole traders<br />
            Freelancers<br />
            Limited companies under £500k
          </p>
        </div>
        <div>
          <h3 className="text-sm font-black">Pages</h3>
          <div className="mt-5 flex flex-col gap-2 text-sm font-semibold text-[#4F4943]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[#F05221]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-black">Contact</h3>
          <p className="mt-5 text-sm font-semibold leading-7 text-[#4F4943]">
            {firm.phone}<br />
            {firm.email}<br />
            {firm.location}
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#C8D4E6] pt-5 text-xs font-semibold text-[#4F4943] sm:flex-row">
        <p>Start with a conversation and a clear next step.</p>
        <p>Copyright © {new Date().getFullYear()} {firm.name}</p>
      </div>
    </footer>
  );
}
