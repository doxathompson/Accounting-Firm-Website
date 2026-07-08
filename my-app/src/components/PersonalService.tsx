import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export function PersonalService() {
  return (
    <section className="overflow-hidden bg-[#F6F4EE] py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="max-w-md text-4xl font-normal leading-[1.03] tracking-[-0.05em] text-[#111827] sm:text-5xl">
              More than just managing your accounts.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-[#4B5563]">
              We help small business owners understand what needs doing, what deadlines matter,
              and what their numbers are telling them, without making accounting feel like a
              punishment invented by paperwork goblins.
            </p>

            <div className="mt-8">
              <ButtonLink href="#">Meet the team</ButtonLink>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="relative h-[340px] overflow-hidden bg-[#DED8CC] shadow-sm sm:h-[430px]">
              <Image
                src="/responsive-accounting-support.jpg"
                alt="Accountant providing responsive support to a small business client"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="mt-5 bg-[#101923] p-6 text-white shadow-sm">
              <p className="text-sm text-slate-400">What clients value</p>

              <div className="mt-5 space-y-4">
                {["Responsive communication", "Clear explanations", "Reliable deadlines"].map(
                  (item) => (
                    <div key={item} className="border-b border-white/10 pb-3 text-sm">
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[460px] lg:block">
            <div className="absolute left-10 top-0 h-80 w-80 bg-[#DED8CC]" />

            <div className="absolute left-0 top-12 h-80 w-[72%] overflow-hidden shadow-sm">
              <Image
                src="/responsive-accounting-support.jpg"
                alt="Accountant providing responsive support to a small business client"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-0 right-0 w-80 bg-[#101923] p-6 text-white shadow-xl">
              <p className="text-sm text-slate-400">What clients value</p>

              <div className="mt-5 space-y-4">
                {["Responsive communication", "Clear explanations", "Reliable deadlines"].map(
                  (item) => (
                    <div key={item} className="border-b border-white/10 pb-3 text-sm">
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}