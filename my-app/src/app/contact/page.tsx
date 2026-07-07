import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { firm } from "@/data/site";

export const metadata = {
  title: "Contact | London Accounting Firm",
  description:
    "Book a free consultation with London Accounting Firm, a small London accounting firm for sole traders and limited companies.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book a free consultation."
        description="Tell us a little about your business and we’ll get back to you to arrange a consultation."
      />

      <section className="bg-slate-50 py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Speak with a small team that understands small businesses.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Use the form to tell us what kind of business you run and what support you need.
                The goal is simple: understand your situation, explain the next step, and avoid
                turning accounting into a mysterious ritual performed in a locked spreadsheet.
              </p>

              <div className="mt-8 space-y-4 rounded-[2rem] border border-slate-200 bg-white p-6">
                <div>
                  <p className="text-sm font-bold text-slate-950">Phone</p>
                  <p className="mt-1 text-slate-600">{firm.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-950">Email</p>
                  <p className="mt-1 text-slate-600">{firm.email}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-950">Location</p>
                  <p className="mt-1 text-slate-600">{firm.location}</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}