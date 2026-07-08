import { Container } from "@/components/Container";

export function TrustSection() {
  return (
    <section className="bg-[#14532d] py-6 sm:py-8 lg:py-10">
      <Container size="wide">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center text-sm font-medium text-white sm:text-base">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>London-based practice</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Small business specialists</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Responsive support</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Personal service from a small team</span>
          </div>
        </div>
      </Container>
    </section>
  );
}