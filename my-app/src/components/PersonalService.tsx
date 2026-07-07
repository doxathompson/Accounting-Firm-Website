import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export function PersonalService() {
  return (
    <section className="bg-[#F6F4EE] py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="max-w-md text-5xl font-normal leading-[1.02] tracking-[-0.05em] text-[#111827]">
              More than just managing your accounts.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-[#4B5563]">
              We help small business owners understand what needs doing, what deadlines matter,
              and what their numbers are telling them, without making accounting feel like a
              punishment invented by paperwork goblins.
            </p>

            <div className="mt-8">
              <ButtonLink href="/about">Meet the team</ButtonLink>
            </div>
          </div>

          <div className="relative min-h-[460px]">
            <div className="absolute left-10 top-0 h-80 w-80 bg-[#DED8CC]" />

            <div className="absolute left-0 top-12 h-80 w-[72%] overflow-hidden shadow-sm">
              <Image
                src="/responsive-accounting-support.jpg"
                alt="Accountant providing responsive support to a small business client"
                fill
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