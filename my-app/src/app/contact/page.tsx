import Image from "next/image";
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

      <section className="overflow-hidden bg-[#F6F4EE] py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <p className="mb-4 text-sm font-medium text-[#4B5563]">
                Get in touch
              </p>

              <h2 className="max-w-md text-4xl font-normal leading-[1.03] tracking-[-0.05em] text-[#111827] sm:text-5xl">
                Speak with a small team that understands small businesses.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-[#4B5563]">
                Use the form to tell us what kind of business you run and what
                support you need. The goal is simple: understand your situation,
                explain the next step, and avoid turning accounting into a
                mysterious ritual performed in a locked spreadsheet.
              </p>

              <div className="relative mt-8 h-72 overflow-hidden bg-[#DED8CC] shadow-sm sm:h-80">
                <Image
                  src="/contact-accounting-consultation.jpg"
                  alt="Accounting consultation meeting"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-8 grid gap-5 border border-[#E5E1D8] bg-[#FAF9F4] p-6 sm:grid-cols-3 lg:grid-cols-1">
                <div>
                  <p className="text-sm font-semibold text-[#111827]">Phone</p>
                  <p className="mt-1 break-words text-sm text-[#4B5563]">
                    {firm.phone}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#111827]">Email</p>
                  <p className="mt-1 break-words text-sm text-[#4B5563]">
                    {firm.email}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#111827]">
                    Location
                  </p>
                  <p className="mt-1 break-words text-sm text-[#4B5563]">
                    {firm.location}
                  </p>
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