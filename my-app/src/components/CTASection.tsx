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
    <section className="bg-blue-50 py-20">
      <Container>
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                {description}
              </p>
            </div>
            <ButtonLink href="/contact" variant="secondary">
              Book a free consultation
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}