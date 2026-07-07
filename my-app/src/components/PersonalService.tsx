import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export function PersonalService() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Personal service"
            title="A small team, not a maze of departments."
            description="The firm is intentionally small. That means clients can build a direct relationship with people who understand their business, their deadlines, and the questions they keep meaning to ask before tax season ambushes them like a villain in a spreadsheet."
          />

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Direct communication with the team",
                "Clear explanations without jargon",
                "Support for everyday business decisions",
                "Reliable help around deadlines",
              ].map((item) => (
                <div key={item} className="rounded-3xl bg-white p-5 text-slate-950">
                  <p className="text-sm font-bold">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <ButtonLink href="/contact" variant="secondary">
                Book a free consultation
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}