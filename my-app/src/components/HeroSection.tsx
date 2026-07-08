import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#FAF9F6] pt-8 lg:pt-12 pb-0">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="pb-12 lg:py-12">
            <p className="mb-4 text-sm font-semibold tracking-wider text-[#16a34a] uppercase">
              For sole traders and limited companies under £500k turnover
            </p>

            <h1 className="max-w-xl font-serif text-5xl font-normal leading-tight tracking-tight text-[#111827] sm:text-6xl">
              Reliable accounting support for sole traders and small companies in London.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#4B5563]">
              We help sole traders and limited companies with accounts, tax returns, bookkeeping, payroll, and practical advice, with responsive support from a small team that knows your business.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink href="#">Book a free consultation</ButtonLink>
              <ButtonLink href="#" variant="ghost">
                View services
              </ButtonLink>
            </div>
          </div>

          <div className="relative h-[400px] w-full lg:h-[650px] lg:-mr-12 lg:-mt-6 lg:self-end">
            <div className="absolute inset-0 overflow-hidden shadow-2xl lg:rounded-tl-3xl">
              <Image
                src="/hero-accounting-meeting.jpg"
                alt="Accountants reviewing paperwork with a small business client"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}