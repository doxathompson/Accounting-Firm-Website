import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Ready to speak with an accountant who understands small businesses?",
  description = "Tell us a little about your business and we’ll get back to you to arrange a free consultation.",
}: CTASectionProps) {
  return (
    <section className="bg-[#FAF9F6] py-24">
      <Container size="wide">
        <div className="bg-[#0F2742] px-8 py-16 text-white sm:px-12 lg:px-20 rounded-2xl shadow-lg">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-[#D8E7F3]">
                Free consultation
              </p>

              <h2 className="max-w-4xl font-serif text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl">
                {title}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                {description}
              </p>
            </div>

            <ButtonLink href="#" variant="secondary">
              Book a free consultation
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}